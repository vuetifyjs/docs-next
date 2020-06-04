const { createWriteStream } = require('fs')
const VirtualModulesPlugin = require('webpack-virtual-modules')
const api = require('./fake-api')

const isProduction = process.env.NODE_ENV === 'production'

/* const camelizeRE = /-(\w)/g
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
} */

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/* const hyphenateRE = /\B([A-Z])/g
function hyphenate (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
} */

function genFrontMatter (component) {
  const fm = [
    `title: ${component} API`,
    `description: API for the ${component} component.`,
    `keywords: ${component}, api, vuetify`,
  ]
  return `---\n${fm.join('\n')}\n---\n\n`
}

function genTableHeader (headers) {
  const headerLine = []
  const dividerLine = []
  for (const header of headers) {
    headerLine.push(`${capitalize(header)}`)
    dividerLine.push('---')
  }
  return [
    genRowString(headerLine),
    genRowString(dividerLine),
  ]
}

function genTableRow (headers, row) {
  const headerRow = []
  for (const header of headers) {
    if (header === 'source' && isProduction) continue

    let value = row[header]

    if (['default', 'value', 'signature'].includes(header)) {
      value = `\`${row[header]}\``
    } else if (header === 'name') {
      value = `<div class="font-weight-bold text-mono">${row[header]}</div>`
    } else if (header === 'type') {
      value = `<div class="text-mono">${row[header]}</div>`
    }

    headerRow.push(value || '')
  }
  return genRowString(headerRow)
}

function genRowString (row) {
  return `| ${row.join(' | ')} |`
}

function genTable (tableData) {
  const headers = Object.keys(tableData[0])
  const table = genTableHeader(headers)

  for (const row of tableData) {
    table.push(genTableRow(headers, row))
  }

  return `${table.join('\n')}\n\n`
}

function genFooter () {
  const footer = [
    '<carbon-ad />',
    '<up-next />',
    '<vuetify-ad />',
    '<contribute />',
  ]
  return `${footer.join('\n\n')}\n\n`
}

function writeMdFile (file, data) {
  const root = './src/pages/en/api'
  const stream = createWriteStream(`${root}/${file}.md`)

  // gen front-matter
  const frontMatter = genFrontMatter()
  const title = '# V-Alert API\n\n'
  const footer = genFooter()

  stream.once('open', () => {
    stream.write(frontMatter)
    stream.write(title)
    for (const [header, value] of Object.entries(data)) {
      if (header !== 'mixins') {
        const headerLine = header === 'sass'
          ? '## SASS Variables\n'
          : `## ${capitalize(header)}\n`
        const table = genTable(value)
        stream.write(headerLine)
        stream.write(table)
      }
    }
    stream.write(footer)
    stream.end()
  })
}

function createMdFile (component, data) {
  let str = ''

  str += genFrontMatter(component)
  str += `# ${component} API\n\n`
  for (const [header, value] of Object.entries(data)) {
    if (header === 'mixins') continue

    const headerLine = header === 'sass'
      ? '## SASS Variables\n'
      : `## ${capitalize(header)}\n`
    const table = genTable(value)
    str += headerLine
    str += table
  }
  str += genFooter()

  return str
}

const toJs = data => `module.exports = ${JSON.stringify(data)};`

function generateFiles () {
  const files = {}

  for (const [locale, components] of Object.entries(api)) {
    const pages = {}
    for (const [component, data] of Object.entries(components)) {
      files[`node_modules/@docs/${locale}/api/${component}.md`] = createMdFile(component, data)
      pages[`/${locale}/api/${component}/`] = component
    }
    files[`node_modules/@docs/${locale}/api/pages.js`] = toJs(pages)
  }

  return files
}

class ApiPlugin {
  apply (compiler) {
    const files = generateFiles()

    const virtualModules = new VirtualModulesPlugin(files)

    virtualModules.apply(compiler)
  }
}

module.exports = ApiPlugin
