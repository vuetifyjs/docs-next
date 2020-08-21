// Imports
import Cosmic from 'cosmicjs'

// Pathify
import { make } from 'vuex-pathify'

const api = Cosmic()

const bucket = api.bucket({
  slug: process.env.VUE_APP_COSMIC_BUCKET_SLUG_PRODUCTS,
  read_key: process.env.VUE_APP_COSMIC_BUCKET_READ_KEY_PRODUCTS,
})

const state = {
  all: [],
}

const mutations = make.mutations(state)

const actions = {
  fetch: async ({ commit }) => {
    const { objects: res } = await bucket.getObjects({
      type: 'products',
      props: 'metadata,slug,title',
    })

    const products = JSON.parse(res[0].metadata.products)
    products.filter((product) => product.availableForSale)
    commit('all', products || [])
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
