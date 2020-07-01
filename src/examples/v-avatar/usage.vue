<template>
  <div
    style="width: 100%"
    class="text-center"
  >
    <v-avatar
      v-bind="$attrs"
      v-on="$listeners"
    >
      VJ
    </v-avatar>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        color: 'primary',
        image: false,
        tile: false,
      },
      options: {
        selects: {
          color: ['primary', 'accent', 'warning lighten-2', 'teal', 'grey lighten-2'],
        },
        booleans: ['image', 'tile'],
        sliders: {
          size: [56, 128],
        },
      },
      tabs: [],
    }),
  }
</script>
