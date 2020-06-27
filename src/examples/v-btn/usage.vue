<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-btn
        class="white--text"
        v-bind="$attrs"
      >
        <v-icon v-if="$attrs.fab || $attrs.icon">
          $mdiVuetify
        </v-icon>

        <span v-else>Click Me</span>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        elevation: 2,
        disabled: false,
        loading: false,
        block: false,
        raised: false,
        depressed: false,
        outlined: false,
        rounded: false,
        text: false,
        fab: false,
        icon: false,
        tile: false,
        color: 'primary',
        'x-small': false,
        small: false,
        medium: true,
        large: false,
        'x-large': false,
      },
      options: {
        booleans: [
          'disabled',
          'loading',
          'block',
        ],
        sliders: {
          elevation: [0, 24],
        },
        selects: {
          color: [
            'deep-purple accent-4',
            'primary',
            'secondary',
            'accent',
          ],
        },
      },
      tabs: [
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'raised',
        'depressed',
        'outlined',
        'rounded',
        'text',
        'fab',
        'icon',
        'tile',
      ],
    }),
  }
</script>
