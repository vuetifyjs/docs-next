<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-chip
        v-bind="$attrs"
      >
        Chip Component
      </v-chip>
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
        'close-icon': 'mdi-close',
        color: 'blue',
        close: false,
        value: false,
        filter: false,
        label: false,
        link: false,
        outlined: false,
        pill: false,
      },
      options: {
        selects: {
          'close-icon': [
            'mdi-close-outline',
            'mdi-close',
            'mdi-delete',
          ],
          color: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
          ],
        },
        booleans: [
          'close',
          'value',
        ],
      },
      tabs: [
        'filter',
        'label',
        'link',
        'outlined',
        'pill',
      ],
    }),
  }
</script>
