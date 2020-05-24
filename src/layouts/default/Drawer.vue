<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :href="subItem.href"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import DrawerItems from 'DrawerItems'

  export default {
    name: 'DefaultDrawer',
    computed: {
      items () {
        return [
          {
            title: 'Getting started',
            icon: 'mdi-home',
            items: DrawerItems.filter(item => item.nav === 'getting-started'),
          },
          {
            title: 'Components',
            icon: 'mdi-view-dashboard',
            items: DrawerItems.filter(item => item.nav.startsWith('components')),
          },
        ]
      },
    },
  }
</script>
