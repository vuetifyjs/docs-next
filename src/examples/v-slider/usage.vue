<template>
  <v-row
    justify="space-around"
  >
    <v-col cols="12">
      <v-slider
        v-model="volume"
        v-bind="$attrs"
        append-icon="volume_up"
        prepend-icon="volume_down"
        label="Volume"
      ></v-slider>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      volume: 10,
      defaults: {
        dense: false,
        disabled: false,
        'hide-details': false,
        'inverse-label': false,
        max: 100,
        min: 0,
        'persistent-hint': false,
        readonly: false,
        vertical: false,
      },
      options: {
        booleans: [
          'disabled',
          'hide-details',
          'inverse-label',
          'persistent-hint',
          'readonly',
        ],
        sliders: {
          min: [-100, 100],
          max: [-100, 100],
        },
      },
      tabs: ['dense', 'vertical'],
    }),
  }
</script>
