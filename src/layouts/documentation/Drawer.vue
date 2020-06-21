<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    width="300"
  >
    <v-list
      dense
      expand
      nav
    >
      <template v-for="(item, i) in items">
        <v-list-group
          v-if="item.items"
          :key="`${item.title}-${i}`"
          :group="item.to"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                v-if="item.title"
                v-text="item.title"
              />
            </v-list-item-content>
          </template>

          <template v-if="item.items">
            <v-list-item
              v-for="(subItem, j) in item.items"
              :key="`${subItem.title}-${j}`"
              :to="subItem.to"
            >
              <v-list-item-icon v-if="subItem.icon">
                <v-icon v-text="subItem.icon" />
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="subItem.title" />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>

        <v-list-item
          v-else
          :key="i"
          :href="item.href"
          :rel="item.href ? 'nofollow' : undefined"
          :target="item.href ? '_blank' : undefined"
          :to="item.to"
          color="primary"
        >
          <v-list-item-icon v-if="item.icon">
            <v-icon v-text="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DocumentationDrawer',

    computed: {
      advanced: sync('user/drawer@advanced'),
      drawer: sync('app/drawer'),
      anav: get('app/advanced'),
      nav: get('app/nav'),
      items () {
        return this.advanced ? this.anav : this.nav
      },
    },
  }
</script>
