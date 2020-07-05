<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="space-around"
    >
      <v-select
        v-model="icon"
        :items="icons"
      ></v-select>
      <v-icon
        v-bind="$attrs"
      >
        {{ icon || 'mdi-plus' }}
      </v-icon>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      icon: 'mdi-access-point',
      icons: [
        'mdi-plus',
        'mdi-minus',
        'mdi-access-point',
        'mdi-antenna',
      ],
      defaults: {
        dense: false,
        color: 'green',
        'x-small': false,
        small: false,
        medium: true,
        large: false,
        'x-large': false,
      },
      options: {
        booleans: ['dense'],
        selects: {
          color: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
          ],
        },
      },
      tabs: [
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
      ],
    }),
  }
</script>
