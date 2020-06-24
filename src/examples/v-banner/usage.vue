<template>
  <div style="width: 100%;">
    <v-banner
      v-bind="$attrs"
      v-on="$listeners"
    >
      One line message text string with two actions on tablet / Desktop
      <template
        v-if="$attrs.action"
        v-slot:actions
      >
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Action
        </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        action: false,
        icon: null,
        'single-line': null,
        sticky: null,
      },
      options: {
        booleans: ['action'],
        selects: {
          icon: ['$mdiAccount', '$mdiVuetify'],
        },
        sliders: {
          elevation: [0, 24],
        },
      },
      tabs: ['single-line', 'sticky'],
    }),
  }
</script>
