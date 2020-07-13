<template>
  <v-sheet
    outlined
    class="row justify-center align-start mb-16"
    :class="isMobile ? 'pa-0' : 'py-16'"
  >
    <v-card
      flat
      class="col-12 col-md-5"
    >
      <v-avatar
        size="78"
        color="blue lighten-5 mx-5"
      >
        <v-icon
          size="48"
          color="primary"
        >
          {{ feature.icon }}
        </v-icon>
      </v-avatar>
      <v-card-title class="text-h4 text--secondary text-left mb-1">
        {{ feature.title }}
      </v-card-title>

      <v-card-text
        class="text-h5"
        style="max-width:500px"
      >
        {{ feature.text }}
      </v-card-text>
      <app-link
        :href="feature.href"
        class="ma-3 heading"
      >
        {{ $t('learn-more') }}
      </app-link>
    </v-card>
    <v-col
      class="col-12 col-md-6 justify-center align-center d-flex"
      :class="isMobile && 'pa-0'"
      :order="imgOrder"
    >
      <v-img
        contain
        width="100%"
        max-width="600"
        :src="feature.src"
        :class="$vuetify.breakpoint.mdAndUp && 'feature-img'"
      />
    </v-col>
  </v-sheet>
</template>

<script>
  export default {
    name: 'HomeFeatureCard',
    props: {
      feature: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      isMobile: vm => vm.$vuetify.breakpoint.mobile,
      imgOrder: vm => (vm.feature.reverseLayout || vm.$vuetify.breakpoint.smAndDown) ? 'first' : 'last',

    },
  }
</script>

<style lang="sass">
  .feature-img
    -webkit-box-shadow: 0px 10px 16px -5px rgba(0,0,0,0.5)
    -moz-box-shadow: 0px 10px 16px -5px rgba(0,0,0,0.5)
    box-shadow: 0px 10px 16px -5px rgba(0,0,0,0.5)

</style>
