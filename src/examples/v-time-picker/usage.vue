<template>
  <v-row align="center">
    <v-time-picker
      v-model="picker"
      class="mt-2"
      v-bind="$attrs"
    ></v-time-picker>
  </v-row>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      picker: null,
      defaults: {
        disabled: false,
        flat: false,
        readonly: false,
        landscape: false,
        ampmInTitle: false,
        useSeconds: false,
        format: 'ampm',
        fullWidth: false,
        noTitle: false,
        scrollable: false,
      },
      options: {
        booleans: [
          'disabled',
          'flat',
          'readonly',
          'landscape',
          'ampmInTitle',
          'useSeconds',
          'fullWidth',
          'noTitle',
          'scrollable',
        ],
        btnToggles: {
          format: ['ampm', '24hr'],
        },
      },
      tabs: [],
    }),
  }
</script>
