<template>
  <div class="text-center">
    <v-rating
      v-bind="$attrs"
    ></v-rating>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      show: true,
      defaults: {
        'empty-icon': '$mdiHeartOutline',
        'full-icon': '$mdiHeart',
        'half-icon': '$mdiHeartHalfFull',
        'half-increments': true,
        hover: true,
        readonly: false,
        dense: false,
        length: 5,
        value: 4.5,
        size: 64,
        color: 'red lighten-3',
        'background-color': 'grey',
      },
      options: {
        booleans: [
          'half-increments',
          'hover',
          'readonly',
          'dense',
        ],
        selects: {
          color: [
            'primary',
            'warning',
            'green',
            'red',
            'blue',
            'error',
            'teal',
            'red lighten-3',
          ],
          'background-color': [
            'grey lighten-2',
            'warning lighten-1',
            'green lighten-2',
            'red lighten-2',
            'grey',
            '#eee',
            'cyan lighten-2',
            'grey lighten-1',
          ],
          'empty-icon': [
            '$mdiHeartOutline',
            '$mdiStarOutline',
          ],
          'full-icon': [
            '$mdiHeart',
            '$mdiStar',
          ],
          'half-icon': [
            '$mdiHeartHalfFull',
            '$mdiStarHalfFull',
          ],
        },
        sliders: {
          length: [1, 15],
          value: [0, 15, 0.5],
          size: [0, 100],
        },
      },
      tabs: [],
    }),
  }
</script>
