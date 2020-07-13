<template>
  <v-app
    id="home-app"
    app
  >
    <home-app-bar />
    <home-hero />
    <home-feature />
    <home-premium-themes />
    <home-sponsors />
    <home-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      HomeAppBar: () => import('./AppBar'),
    },
  }
</script>
