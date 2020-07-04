<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-chip-group
        active-class="primary--text"
        v-bind="$attrs"
      >
        <v-chip
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],

      defaults: {
        column: false,
        mandatory: false,
        multiple: false,
        'center-active': false,
        'show-arrows': false,
      },
      options: {
        booleans: [
          'mandatory',
          'multiple',
          'center-active',
          'show-arrows',
        ],
      },
      tabs: ['column'],
    }),
  }
</script>
