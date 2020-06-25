<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-img
        src="https://picsum.photos/id/11/500/300"
        lazy-src="https://picsum.photos/id/11/10/6"
        aspect-ratio="1"
        class="grey lighten-2"
        v-bind="$attrs"
      ></v-img>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      show: true,
      defaults: {
        contain: false,
        'max-width': 250,
        'max-height': 150,
      },
      options: {
        booleans: [
          'contain',
        ],
        sliders: {
          'max-width': [0, 500],
          'max-height': [0, 300],
        },
      },
      tabs: [],
    }),
  }
</script>
