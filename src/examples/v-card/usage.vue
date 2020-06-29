<template>
  <v-container>
    <v-row>
      <div class="mx-3"></div>
      <v-card>
        <v-card-title>Card title</v-card-title>
        <v-card-subtitle>Secondary text</v-card-subtitle>

        <v-card-text>
          Greyhound divisively hello coldly wonderfully marginally far upon excluding.
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        disabled: false,
        image: false,
        loading: false,
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
