<template>
  <v-container
    id="app-hero"
    class="align-center justify-center"
  >
    <v-row
      class="align-center justify-center mb-5"
    >
      <v-img
        aspect-ratio="1"
        max-width="300px"
        alt="vuetify logo"
        src="@/assets/animated-logo-light.svg"
      />
    </v-row>

    <v-row
      class="justify-center align-center"
    >
      <h1 class="font-weight-bold col-12 text-center text-h4 primary--text">
        {{ $t('home.callout') }}
      </h1>
      <div class="text-h6 text-center col-10 col-md-6">
        {{ $t('home.text') }}
      </div>
    </v-row>

    <v-row
      justify="center"
      align="center"
      class="mt-8"
    >
      <v-btn
        x-large
        class="ma-2"
        color="primary"
        :to="`/${locale}/getting-started/quick-start/`"
      >
        <v-icon
          left
          size="24"
        >
          $mdiSpeedometer
        </v-icon>
        {{ $t('getting-started') }}
      </v-btn>

      <v-btn
        class="ma-2"
        color="primary"
        outlined
        :to="`/${locale}/introduction/why-vuetify/`"
        x-large
      >
        <v-icon
          left
          size="24"
        >
          $mdiVuetify
        </v-icon>
        {{ $t('home.whyVuetify') }}
      </v-btn>

      <v-btn
        class="ma-2"
        color="grey darken-4"
        href="https://github.com/vuetifyjs/vuetify"
        rel="nofollower noopener"
        target="_blank"
        min-width="187"
        x-large
        dark
        depressed
      >
        <v-icon
          left
          size="24"
        >
          $mdiGithub
        </v-icon>
        {{ $t('github') }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'HomeHero',

    components: {
      // DefaultSearch: () => import('@/layouts/default/Search'),
    },

    computed: {
      ...sync('user', [
        'dark',
        'rtl',
      ]),
      drawer: sync('app/drawer'),
      locale: get('route/params@locale'),
      translating: get('pages/translating'),

      current () {
        return this.locales.find(l => l.locale === this.locale) || {}
      },
    },
  }
</script>

<style lang="sass">
#app-hero
  padding: 120px 80px
  // height: 100vh
  // margin-bottom: 120px

</style>
