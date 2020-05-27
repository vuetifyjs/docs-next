/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

import { registerComponents } from './app'
import { loadFonts } from './webfontloader'
import { useMeta } from './vue-meta'
import { useVuetify } from './vuetify'

export function registerPlugins (app) {
  registerComponents(app)
  loadFonts(app)
  useMeta(app)
  useVuetify(app)
}
