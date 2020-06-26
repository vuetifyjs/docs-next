<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-color-picker
        v-bind="$attrs"
      ></v-color-picker>
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
        'hide-canvas': false,
        'hide-inputs': false,
        'hide-mode-switch': false,
        'show-swatches': false,
        flat: false,
        mode: 'rgba',
        'dot-size': 25,
        'swatches-max-height': 200,
      },
      options: {
        booleans: [
          'disabled',
          'hide-canvas',
          'hide-inputs',
          'hide-mode-switch',
          'show-swatches',
          'flat',
        ],
        selects: {
          mode: [
            'rgba',
            'hsla',
            'hexa',
          ],
        },
        sliders: {
          'dot-size': [0, 50],
          'swatches-max-height': [100, 250],
        },
      },
      tabs: [],
    }),
  }
</script>
