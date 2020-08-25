/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// import { loadFonts } from './webfontloader'
import { registerComponents } from './app'
// import { useMeta } from './vue-meta'
import { useVuetify } from '@/vuetify'
// import { IN_BROWSER } from '@/util/globals'

export function registerPlugins (app) {
  registerComponents(app)
  // FIXME: re-enable and fix SSG
  // IN_BROWSER && loadFonts(app)
  // useMeta(app)
  useVuetify(app)
}
