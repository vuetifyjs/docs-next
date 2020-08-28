
// Utilities
const path = require('path')
const Mode = require('frontmatter-markdown-loader/mode')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { IS_PROD, IS_SERVER } = require('./src/util/globals')
const { md } = require('./build/markdown-it')
const nodeExternals = require('webpack-node-externals')

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

process.env.VUE_ENV = IS_SERVER ? 'server' : 'client'

module.exports = {
  css: {
    extract: !IS_SERVER,
    sourceMap: !IS_SERVER,
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        // { from: /eo-UY\/.*/, to: '/_crowdin.html' },
        { from: /.*/, to: '/index.html' },
      ],
    },
  },
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add(IS_SERVER ? './src/entry-server.js' : './src/entry-client.js')
      .end()

    config
      .plugin('html')
      .tap(args => {
        return [
          {
            ...args[0],
            title: 'Welcome to Vuetify | Vuetify.js',
            description: 'Vuetify is a Material Design component framework for Vue.js. It aims to provide all the tools necessary to create beautiful content rich applications.',
            keywords: 'vue, material design components, vue components, material design components, vuetify, vuetify.js, component framework',
          },
        ]
      })

    config
      .plugin('api-plugin')
      .use(path.resolve('./build/api-plugin.js'))

    config
      .plugin('pages-plugin')
      .use(path.resolve('./build/pages-plugin.js'))

    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('toc-loader')
        .loader(path.resolve('./build/toc-loader.js'))
        .end()
      .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .tap(() => ({
          markdown: body => md.render(body),
          mode: [Mode.VUE_COMPONENT, Mode.BODY],
          vue: { root: 'markdown-body' },
        }))

    if (IS_SERVER) {
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
          options.optimizeSSR = false

          return options
        })
      config.plugin('VueSSRServerPlugin')
        .use(VueSSRServerPlugin)

      const isExtracting = config.plugins.has('extract-css')
      if (isExtracting) {
        const langs = ['css', 'postcss', 'scss', 'sass', 'less', 'stylus']
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        for (const lang of langs) {
          for (const type of types) {
            const rule = config.module.rule(lang).oneOf(type)
            rule.uses.delete('extract-css-loader')
          }
        }
        config.plugins.delete('extract-css')
      }
    } else {
      config.plugin('VueSSRClientPlugin')
        .use(VueSSRClientPlugin)
    }

    if (IS_PROD) {
      config.plugin('sitemap')
        .use(path.resolve('./build/sitemap.js'))
    }

    if (process.env.ANALYZE === 'true') {
      config.plugin('BundleAnalyzerPlugin')
        .use(BundleAnalyzerPlugin)
    }
  },
  configureWebpack: {
    devtool: IS_SERVER ? false : 'source-map',
    externals: IS_SERVER ? nodeExternals({
      // do not externalize CSS files in case we need to import it from a dep
      allowlist: [/^vuetify/, /\.css*/],
    }) : undefined,
    optimization: {
      minimize: IS_SERVER ? false : IS_PROD,
      splitChunks: IS_SERVER ? false : {
        chunks: 'all',
        minSize: 30000,
        maxSize: 100000,
        maxAsyncRequests: 20,
        maxInitialRequests: 5,
      },
      removeAvailableModules: IS_PROD,
      removeEmptyChunks: IS_PROD,
    },
    module: {
      rules: [
        {
          resourceQuery: /blockType=codepen-resources/,
          loader: 'json-loader',
        },
      ],
    },
    resolve: {
      alias: { vue$: 'vue/dist/vue.runtime.common.js' },
    },
    target: IS_SERVER ? 'node' : 'web',
    node: IS_SERVER ? undefined : false,
    output: IS_SERVER ? {
      libraryTarget: 'commonjs2',
      filename: 'server-bundle.js',
    } : undefined,
  },
  pwa: {
    name: 'Vuetify-Docs',
    themeColor: '#094A7F',
    msTileColor: '#5CBBF6',
    manifestOptions: {
      background_color: '#5CBBF6',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      exclude: [
        /index\.html$/,
      ],
      // ...other Workbox options...
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
}
