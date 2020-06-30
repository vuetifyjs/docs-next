<template>
  <div style="width: 100%;">
    <v-autocomplete
      v-bind="$attrs"
      v-on="$listeners"
    >
    </v-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
      },
      options: {
        selects: {
          filter: ['Exact Match', 'Search Length > 2 & Loose Match'],
        },
      },
      tabs: [],
    }),
  }
</script>
