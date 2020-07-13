<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <home-feature-card
        v-for="(feature,i) in computedFeatures"
        :key="i"
        class="col-10 col-md-11"
        :feature="feature"
      />
    </v-row>

    <!-- <v-sheet
      outlined
      class="row justify-center align-start mb-16 px-10 py-16"
    >
      <div class="text-center font-weight-bold text-h4">
        Vue Mastery Video
      </div>
    </v-sheet> -->
  </v-container>
</template>

<script>
  export default {
    name: 'HomeFeature',

    provide: { id: 'home-feature' },

    computed: {
      features () {
        return [
          {
            key: 'components',
            icon: '$mdiGithub',
            src: require('@/assets/componentslaunch.gif'),
            href: 'components/api-explorer',
          },
          {
            href: 'https://github.com/vuetifyjs/vue-cli-plugins/',
            key: 'scaffolding',
            icon: '$mdiGithub',
            reverseLayout: true,
            src: require('@/assets/terminal.svg'),
          },
          {
            href: 'https://community.vuetifyjs.com',
            key: 'community',
            icon: '$mdiGithub',
            src: require('@/assets/discord_screen.png'),
          },
        ]
      },
      computedFeatures () {
        return this.features.map(feature => ({
          ...feature,
          text: this.$t(`home.features.${feature.key}.text`),
          title: this.$t(`home.features.${feature.key}.title`),
          src: feature.src,
        }))
      },
    },
  }
</script>
