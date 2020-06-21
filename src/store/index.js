// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'
import pwaEvents from '@/plugins/pwa-events'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    modules,
    plugins: [
      pathify.plugin,
      pwaEvents,
    ],
  })

  store.subscribe(mutation => {
    if (!mutation.type.startsWith('user/')) return

    store.dispatch('user/update', mutation)
  })

  store.dispatch('app/init')

  return store
}

export const ROOT_DISPATCH = Object.freeze({ root: true })
