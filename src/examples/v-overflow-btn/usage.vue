<template>
  <v-container id="dropdown-playground">
    <v-overflow-btn
      class="my-2"
      v-bind="$attrs"
      :items="dropdownFont"
      hint="I'm a hint"
      label="Overflow Btn"
      target="#dropdown-playground"
    ></v-overflow-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      dropdownFont: [
        { text: 'Arial', callback: () => {} },
        { text: 'Calibri', callback: () => {} },
        { text: 'Courier', callback: () => {} },
        { text: 'Verdana', callback: () => {} },
      ],
      defaults: {
        loading: false,
        disabled: false,
        readonly: false,
        filled: false,
        reverse: false,
        dense: false,
        persistentHint: false,
        editable: false,
        segmented: false,
        overflow: true,
      },
      options: {
        booleans: [
          'loading',
          'disabled',
          'readonly',
          'filled',
          'reverse',
          'dense',
          'persistentHint',
        ],
      },
      tabs: ['editable', 'segmented', 'overflow'],
    }),
  }
</script>
