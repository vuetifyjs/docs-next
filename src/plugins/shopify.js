import Vue from 'vue'
import Client from 'shopify-buy/index.unoptimized.umd'

const client = Client.buildClient({
  domain: process.env.VUE_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.VUE_APP_SHOPIFY_ACCESS_TOKEN,
})

Vue.prototype.$shopify = client

export default client
