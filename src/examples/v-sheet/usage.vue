<template>
  <v-container>
    <v-row justify="space-around">
      <v-sheet
        v-bind="$attrs"
      ></v-sheet>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        width: 100,
        height: 100,
        elevation: 4,
        color: 'white',
        tile: false,
      },
      options: {
        booleans: ['tile'],
        selects: {
          color: ['white', 'gray darken-2', 'warning', 'error', 'success', 'teal'],
        },
        sliders: {
          width: [0, 500],
          height: [0, 500],
          elevation: [0, 24],
        },
      },
      tabs: [],
    }),
  }
</script>
