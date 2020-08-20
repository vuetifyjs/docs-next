
// Utilities
const { chunk } = require('lodash')
const path = require('path')
const Mode = require('frontmatter-markdown-loader/mode')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { IS_PROD } = require('./src/util/globals')
const { md } = require('./build/markdown-it')

// Prerender
const routes = require('./build/generate-routes')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

module.exports = {
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
      .add('./src/entry-client.js')
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

    if (IS_PROD) {
      config.plugin('sitemap')
      .use(path.resolve('./build/sitemap.js'))

      const splitQty = 300
      const chunkRoutes = chunk(routes.map(route => route.fullPath, []), splitQty)
      let currChunk = 1

      for (const routeChunk of chunkRoutes) {
        config.plugin(`PrerenderSpaPlugin${currChunk}`)
        .use(
          new PrerenderSpaPlugin({
            staticDir: path.resolve(__dirname, 'dist'),
            routes: routeChunk,
            renderer: new Renderer({
              maxConcurrentRoutes: 6,
              headless: true,
            }),
          }),
        )
        currChunk++
      }
    }

    if (process.env.ANALYZE === 'true') {
      config.plugin('BundleAnalyzerPlugin')
        .use(BundleAnalyzerPlugin)
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 100000,
        maxAsyncRequests: 20,
        maxInitialRequests: 5,
      },
    },
    module: {
      rules: [
        {
          resourceQuery: /blockType=codepen-resources/,
          loader: 'json-loader',
        },
      ],
    },
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
