const fs = require('fs')
const path = require('path')
const glob = require('glob')
const VirtualModulesPlugin = require('webpack-virtual-modules')
const frontmatter = require('front-matter')
const { kebabCase } = require('lodash')

const getItems = (files) => {
  return files.reduce((items, filePath) => {
    const { attributes } = frontmatter(fs.readFileSync(filePath, 'utf-8'))

    if (!attributes.nav) return items

    const dir = path.dirname(filePath.replace('./src/pages/en', ''))
    const file = kebabCase(path.basename(filePath, path.extname(filePath)))

    items.push({
      title: attributes.title,
      nav: dir.slice(1),
      href: `${dir}/${file}`,
    })

    return items
  }, [])
}

class Plugin {
  apply (compiler) {
    let shouldWrite = false
    const files = glob.sync('./src/pages/en/**/*.md')
    const content = files => `module.exports = ${JSON.stringify(getItems(files))};`

    const virtualModules = new VirtualModulesPlugin({
      'node_modules/DrawerItems.js': content(files),
    })

    virtualModules.apply(compiler)

    compiler.hooks.compilation.tap('DrawerItemsPlugin', () => {
      if (!shouldWrite) return

      virtualModules.writeModule('node_modules/DrawerItems.js', content(files))

      shouldWrite = false
    })

    compiler.hooks.watchRun.tap('DrawerItemsPlugin', (comp) => {
      const changedTimes = comp.watchFileSystem.watcher.mtimes
      const changedFiles = Object.keys(changedTimes)
        .filter(file => files.find(f => f.indexOf(path.basename(file)) >= 0))

      if (changedFiles.length) {
        shouldWrite = true
      }
    })
  }
}

module.exports = Plugin
