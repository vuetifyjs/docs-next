<template>
  <v-menu
    bottom
    left
    max-height="calc(100% - 16px)"
    offset-y
    open-on-hover
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on: menu }">
      <v-btn
        :aria-label="$t('home.support')"
        class="hidden-md-and-down text--secondary"
        text
        style="min-width: 48px"
        v-on="menu"
      >
        <span class="hidden-sm-and-down">
          {{ $t("home.support") }}
        </span>

        <v-icon
          class="hidden-sm-and-down"
          right
        >
          mdi-menu-down
        </v-icon>

        <v-icon class="hidden-md-and-up">
          $mdiCommentQuestion
        </v-icon>
      </v-btn>
    </template>

    <v-list
      dense
      nav
    >
      <v-subheader v-text="$t('home.getHelp')" />

      <base-item
        v-for="support in supports"
        :key="support.text"
        v-bind="support"
        no-markdown
        @click="$ga.event('toolbar', 'click', 'support', support.text)"
      />
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'BaseSupportMenu',

    data: vm => ({
      supports: [
        {
          to: 'professional-support/consulting',
          icon: '$mdiVuetify',
          text: vm.$t('home.consulting'),
        },
        {
          href: 'https://community.vuetifyjs.com',
          icon: '$mdiDiscord',
          text: vm.$t('home.community'),
        },
        {
          href: 'https://issues.vuetifyjs.com',
          icon: 'mdi-Bug',
          text: vm.$t('home.bug'),
        },
        {
          href: 'https://github.com/vuetifyjs/vuetify/issues',
          icon: '$mdiGithub',
          text: vm.$t('home.issues'),
        },
        {
          href: 'https://stackoverflow.com/search?q=vuetify',
          icon: 'mdi-stack-overflow',
          text: vm.$t('home.stack'),
        },
      ],
    }),
  }
</script>
