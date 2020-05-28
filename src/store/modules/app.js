// Pathify
import { make } from 'vuex-pathify'

import { i18n } from '@/plugins/i18n'
import nav from '@/data/nav'

const state = {
  nav: [],
}

const mutations = make.mutations(state)

const actions = {
  init: ({ dispatch, rootState }) => {
    dispatch('ads/fetch', null, { root: true })
    dispatch('i18n/switch', { locale: rootState.route.params.locale }, { root: true })
  },
}

function findItems (group, rootState) {
  const foundItems = Object.keys(rootState.i18n.pages).filter(p => p.startsWith(group) && p !== group).map(p => {
    return {
      title: rootState.i18n.pages[p],
      to: `/${rootState.route.params.locale}${p}`,
    }
  })

  return foundItems.length ? foundItems : undefined
}

function genItem (item, parent, rootState) {
  const group = `${parent}/${item.title}`

  return {
    // Try finding title among imported pages, otherwise try translating it
    title: rootState.i18n.pages[group] || i18n.t(item.title),
    icon: item.icon || undefined,
    group,
    // If there are no defined components, try finding them among imported pages
    items: item.items
      ? item.items.map(i => genItem(i, group, rootState))
      : findItems(group, rootState),
    to: `/${rootState.route.params.locale}${group}`,
  }
}

const getters = {
  nav: (state, _, rootState) => {
    return nav.map(item => genItem(item, '', rootState))
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
