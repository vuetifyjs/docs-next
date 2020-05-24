<template>
  <v-app-bar app>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            <v-icon>$mdiTranslate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in locales"
            :key="index"
            @click="switchLocale(item.locale)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
  import locales from '@/i18n/locales'

  export default {
    name: 'DefaultBar',

    data: () => ({
      locales,
    }),

    methods: {
      switchLocale (locale) {
        if (this.$i18n.locale === locale) return

        // If we're moving to or from crowdin language, we should
        // refresh so that jipt script can be loaded or unloaded
        if (this.$i18n.locale === 'eo-UY' || locale === 'eo-UY') {
          setTimeout(() => {
            this.$router.go()
          }, 250)
          this.$router.replace({ params: { locale } })
        } else {
          const to = this.$router.resolve({ params: { locale } })
          this.$router.push(to.location)
        }
      },
    },
  }
</script>
