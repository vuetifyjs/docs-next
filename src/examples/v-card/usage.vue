<template>
  <v-card>
    <v-card-title>
      Card title
    </v-card-title>
    <v-card-subtitle>
      Secondary text
    </v-card-subtitle>
    <v-card-text>
      Greyhound divisively hello coldly wonderfully marginally far upon excluding.
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        disabled: false,
        loading: false,
        image: false,
        subtitle: true,
        supportingText: true,
      },
      options: {
        booleans: ['disabled', 'loading', 'image', 'subtitle', 'supportingText'],
      },
      tabs: ['default', 'outlined', 'raised', 'shaped', 'tile'],
    }),
  }
</script>
