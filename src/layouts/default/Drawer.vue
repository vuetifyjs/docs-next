<template>
  <v-navigation-drawer app>
    <v-list
      dense
      nav
    >
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :group="item.group"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <template v-if="!!item.items">
          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',

    computed: {
      items: get('app/nav'),
    },
  }
</script>
