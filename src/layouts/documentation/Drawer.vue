<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    width="300"
  >
    <v-list
      dense
      nav
      expand
    >
      <template v-for="(item, i) in (drawerAdvanced ? navAdvanced : nav)">
        <v-list-group
          v-if="item.items"
          :key="item.title"
          :group="item.to"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>

          <template v-if="item.items">
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-item-icon v-if="subItem.icon">
                <v-icon v-text="subItem.icon" />
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="(drawerAdvanced && subItem.realName) || subItem.title" />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>

        <v-list-item
          v-else
          :key="i"
          :to="undefined"
          :href="item.href"
          :target="item.href ? '_blank' : undefined"
          :rel="item.href ? 'nofollow' : undefined"
        >
          <v-list-item-icon v-if="item.icon">
            <v-icon v-text="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="(drawerAdvanced && item.realName) || item.title" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'

  export default {
    name: 'DocumentationDrawer',

    computed: {
      drawer: sync('app/drawer'),
      drawerAdvanced: sync('app/drawerAdvanced'),
      nav: sync('app/nav'),
      navAdvanced () {
        const flattened = []
        this.nav
          .map(parent =>
            parent.items
              ? parent.items.map(child => ({
                ...child,
                icon: child.icon || parent.icon,
              }))
              : [parent],
          )
          .forEach(child => flattened.push(...child))

        return Object.values(flattened.reduce((acc, child) => {
          const name = child.realName || child.title
          const letter = name.replace(/^v-/, '').toUpperCase().replace(/[^A-Z]/, '*')[0]
          if (!acc[letter]) {
            acc[letter] = { letter, icon: letter === '*' ? '$mdiNumeric' : `$mdiAlpha${letter}`, items: [child] }
          } else {
            acc[letter].items.push(child)
          }
          return acc
        }, {})).sort((a, b) => a.letter > b.letter)
      },
    },
  }
</script>
