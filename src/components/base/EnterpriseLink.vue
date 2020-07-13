<template>
  <v-btn
    :aria-label="$t('home.enterprise')"
    class="hidden-md-and-down text--secondary"
    min-width="48"
    text
    :to="path"
  >
    {{ $t("home.enterprise") }}
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseEnterpriseLink',

    computed: {
      path () {
        const lang = this.$route.params.lang || this.$i18n.fallbackLocale
        return {
          path: `/${lang}/professional-support/enterprise/`,
        }
      },
    },
  }
</script>
