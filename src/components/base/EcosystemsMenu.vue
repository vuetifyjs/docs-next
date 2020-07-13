<template>
  <v-menu
    bottom
    left
    max-height="calc(100% - 16px)"
    offset-y
    open-on-hover
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        :aria-label="$t('home.ecosystem')"
        class="hidden-md-and-down text--secondary"
        text
        v-bind="attrs"
        v-on="on"
      >
        <span class="hidden-sm-and-down">
          {{ $t("home.ecosystem") }}
        </span>

        <v-icon
          class="hidden-sm-and-down"
          right
        >
          mdi-menu-down
        </v-icon>

        <v-icon class="hidden-md-and-up">
          mdi-earth
        </v-icon>
      </v-btn>
    </template>

    <v-list
      dense
      nav
    >
      <v-subheader v-text="$t('home.quickLinks')" />

      <base-item
        v-for="ecosystem in ecosystems"
        :key="ecosystem.text"
        v-bind="ecosystem"
        no-markdown
      />

      <v-divider />

      <v-subheader v-text="$t('home.social')" />

      <base-item
        v-for="social in socials"
        :key="social.text"
        v-bind="social"
        no-markdown
      />
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'BaseEcosystemsMenu',
    data: vm => ({
      ecosystems: [
        {
          text: vm.$t('home.themeGenerator'),
          icon: 'mdi-FormatPaint',
          href: 'https://theme-generator.vuetifyjs.com',
        },
        {
          text: 'vuetify-loader',
          icon: 'mdi-PackageVariantClosed',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: vm.$t('home.cognito'),
          icon: 'mdi-ServerNetwork',
          href: 'https://cognito.vuetifyjs.com',
        },
        {
          text: vm.$t('home.eslint'),
          icon: 'mdi-Eslint',
          href: 'https://github.com/vuetifyjs/eslint-config-vuetify',
        },
        {
          text: vm.$t('home.reddit'),
          href: 'https://www.reddit.com/r/vuetifyjs/',
          icon: 'mdi-Reddit',
        },
        {
          text: vm.$t('home.medium'),
          href: 'https://medium.com/vuetify',
          icon: 'mdi-Medium',
        },
        {
          text: vm.$t('home.awesome'),
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
          icon: 'mdi-Creation',
        },
        {
          text: vm.$t('home.codepen'),
          href: 'https://template.vuetifyjs.com',
          icon: 'mdi-Codepen',
        },
        {
          text: vm.$t('home.latest'),
          href: 'https://github.com/vuetifyjs/vuetify/releases',
          icon: 'mdi-FormatListChecks',
        },
      ],
      socials: [
        {
          text: vm.$t('home.github'),
          href: 'https://github.com/vuetifyjs/vuetify',
          icon: 'mdi-Github',
        },
        {
          text: vm.$t('home.twitter'),
          href: 'https://twitter.com/vuetifyjs',
          icon: 'mdi-Twitter',
        },
      ],
    }),
  }
</script>
