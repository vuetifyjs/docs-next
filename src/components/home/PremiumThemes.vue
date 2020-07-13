<template>
  <v-container class="grid-list-lg">
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="col-10 col-md-11">
        <v-sheet
          outlined
          class="row mb-8"
        >
          <v-col class="col-12 text-center text--secondary pt-16">
            <h2 class=" text-h4 font-weight-bold">
              {{ $t("home.premiumThemes") }}
            </h2>
            <div
              class="mt-2 text-h6 font-weight-regular"
            >
              {{ $t("home.premiumThemesText") }}
            </div>
          </v-col>

          <v-sheet class="col themes-wrapper hide-scrollbar">
            <v-col
              v-for="(theme, i) in themes"
              :key="i"
              class="my-12 col-12 col-md-4"
            >
              <v-card
                tile
                outlined
                class="mx-auto fill-height pb-10"
              >
                <v-img
                  max-height="400px"
                  :src="theme.src"
                />

                <v-card-title class="mt-3 text-h4 px-10">
                  {{ theme.name }}
                </v-card-title>

                <v-card-text class="px-10 subtitle-1">
                  <div>{{ theme.details }} </div>
                </v-card-text>
                <app-link
                  :href="theme.href"
                  class="heading mx-10"
                >
                  Read More
                </app-link>
              </v-card>
            </v-col>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePremiumThemes',
    data: () => ({
      // demo data
      themes: [
        {
          href: 'https://store.vuetifyjs.com/product/zero-theme-pro?ref=vuetifyjs.com',
          src: 'https://cdn.vuetifyjs.com/store/themes/zero/main.png',
          name: 'Zero Theme Pro',
          details: 'Zero is a carefully crafted multi-purpose, responsive, and gorgeous theme that delivers a clean user experience.',
        },
        {
          href: 'https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vuetifyjs.com&amp;partner=116160',
          src: 'https://cdn.vuetifyjs.com/images/starter/vuetify-admin-dashboard-pro.jpg',
          name: 'Material Dashboard Pro',
          details: 'Vuetify Material Dashboard PRO is a beautiful theme built over Vuetify, Vuex and Vuejs.',
        },
        {
          href: 'https://store.vuetifyjs.com/product/material-kit-theme?ref=vuetifyjs.com',
          src: 'https://cdn.vuetifyjs.com/images/starter/vuetify-material-kit.png',
          name: 'Material Kit',
          details: 'A complete set of Material Inspired themes built with Vuetify on top of Vue CLI.',
        },
        {
          href: 'https://store.vuetifyjs.com/product/alpha-theme?ref=vuetifyjs.com',
          src: 'https://cdn.vuetifyjs.com/images/starter/vuetify-alpha-theme.png',
          name: 'Alpha Theme',
          details: 'Complete theme experience including enhanced Vue CLI, full documentation, 5 custom components and much more!',
        },
      ],
    }),

  }
</script>
<style lang="sass">
.themes-wrapper
  display: flex
  flex-wrap: nowrap
  overflow-x: auto

.hide-scrollbar
  scrollbar-width: none
  -ms-overflow-style: none
  &::-webkit-scrollbar
    display: none

</style>
