// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  toc: [],
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
