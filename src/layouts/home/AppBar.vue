<template>
  <v-app-bar
    id="home-app-bar"
    app
    flat
    class="v-bar--underline"
    :color="`${$vuetify.theme.isDark ? 'grey darken-4' : 'white'}`"
  >
    <!-- color="white" -->
    <v-container class="pa-0 d-flex align-center">
      <base-vuetify-logo />

      <v-spacer />

      <v-theme-provider light>
        <default-search />
      </v-theme-provider>

      <v-spacer class="d-sm-none" />

      <base-store-link />

      <base-enterprise-link />

      <base-ecosystems-menu />

      <base-support-menu />

      <base-change-local />
    </v-container>
  </v-app-bar>
</template>

<script>

  export default {
    name: 'HomeBar',

    components: {
      DefaultSearch: () => import('@/layouts/default/Search'),
    },

  }
</script>
