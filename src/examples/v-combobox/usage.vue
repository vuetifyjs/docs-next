<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-combobox
        v-model="model"
        v-bind="$attrs"
        label="Add some tags"
        hint="Comboboxes can receive custom values not present in items"
        v-on="$listeners"
      >
        <template
          v-if="$attrs.noData"
          v-slot:no-data
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-combobox>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      model: 'Vuetify',
      search: null,
      defaults: {
        'hide-selected': false,
        multiple: false,
        'persistent-hint': false,
        'small-chips': false,
        clearable: false,
        type: 'outlined',
      },
      options: {
        booleans: [
          'hide-selected',
          'multiple',
          'persistent-hint',
          'small-chips',
          'clearable',
        ],
        selects: {
          type: ['filled', 'outlined', 'solo'],
        },
        tabs: [],
      },
    }),
  }
</script>
