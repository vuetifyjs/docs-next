<template>
  <div
    style="width: 100%"
    class="text-center"
  >
    <v-badge
      v-bind="$attrs"
      v-on="$listeners"
    >
      <v-icon large>
        $mdiVuetify
      </v-icon>
    </v-badge>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        dot: false,
        overlap: false,
        icon: false,
        left: false,
        bottom: false,
      },
      options: {
        booleans: ['dot', 'overlap', 'icon', 'left', 'bottom'],
      },
      tabs: ['default', 'hidden', 'text', 'inline', 'borderd'],
    }),
  }
</script>
