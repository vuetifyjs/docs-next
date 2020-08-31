const { kebabCase } = require('lodash')
const glob = require('glob')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const DATA_PATH_API_FILES = resolve('../src/api/en/*.md')
const DATA_PATH_DOC_FILES = resolve('../src/pages/en/**/*.md')

require('dotenv').config({ path: resolve('../.env.local') })

const languages = process.env.EN_LOCALE_ONLY === 'true'
  ? ['en']
  : require('../src/i18n/locales')
      .map(lang => lang.locale)
      .filter(lang => lang !== 'eo-UY')

function genRoutes (data, prefix) {
  const files = glob.sync(data)
  const paths = []

  for (const file of files) {
    const route = file
      .split('/en/')
      .pop()
      .split('/')
      .map(i => kebabCase(i.replace(/md/, '')).toLowerCase())
      .join('/')

    if (route === 'home') continue
    paths.push(`/${prefix}${route}/`)
  }

  return paths
}

function genDemos () {
  const files = glob.sync(resolve('../src/examples/whiteframes/*.vue'))
  const paths = []

  for (const file of files) {
    const route = file
      .split('/whiteframes/')
      .pop()
      .replace(/\.vue$/, '')

    paths.push(`/examples/whiteframes/${route}/`)
  }

  return paths
}

const paths = [
  ...genRoutes(DATA_PATH_DOC_FILES, ''),
  ...genRoutes(DATA_PATH_API_FILES, 'api/'),
  ...genDemos(),
]
const routes = [{ locale: '', path: '', fullPath: '/' }]

for (const locale of languages) {
  for (const path of paths) {
    routes.push({ locale, path, fullPath: `/${locale}${path}` })
  }
}

module.exports = routes
