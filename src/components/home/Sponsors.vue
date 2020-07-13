<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="col-10 col-md-11">
        <v-sheet
          outlined
          class="justify-center text--secondary align-start mb-16 px-10 py-16"
        >
          <v-col class="col-12 text-center mb-5">
            <h2 class=" text-h4 font-weight-bold">
              {{ $t("home.proudlySponsoredBy") }}
            </h2>
            <div
              class="mt-2 text-h6 font-weight-regular"
            >
              {{ $t("home.proundlySponsoredByText") }}
            </div>
          </v-col>
          <v-divider />

          <v-container
            style="max-width:1000px "
          >
            <v-row
              align-content="center"
              class="justify-center align-center row-wrap"
            >
              <v-col
                v-for="(sponsr, n) in sponsors"
                :key="n"
                class="align-center my-1 col-6 col-sm-4 col-md-2"
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    contain
                    :src="`${cdn}${sponsr.lightlogo}`"
                  />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-row justify="center">
            <v-btn
              class="ma-2"
              color="primary"
              outlined
              x-large
            >
              <v-icon
                left
                size="24"
              >
                $mdiVuetify
              </v-icon>
              Become Sponsor
            </v-btn>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeSponsors',
    data: () => ({
      cdn: 'https://cdn.vuetifyjs.com/images/',
      // demo data
      sponsors: [
        {
          title: 'QOMPLX',
          lightlogo: 'backers/QOMPLX.png',
        },
        {
          title: 'LMAX Exchange',
          lightlogo: 'backers/lmax-exchange.png',
        }, {
          title: 'Intygrate',
          lightlogo: 'backers/intygrate.png',
        },
        {
          title: 'ResaleAI',
          lightlogo: 'backers/resaleai_logo_blue.svg',
        },
        {
          title: 'Vue Mastery',
          lightlogo: 'backers/vuemastery.svg',
        },
        {
          title: 'rateGenius',
          lightlogo: 'backers/rate-genius.png',
        },
        {
          title: 'Clearblue Technologies',
          lightlogo: 'backers/clear-blue.png',
        },
        {
          title: 'DigitalMaas',
          lightlogo: 'backers/digital-maas.svg',
        },
        {
          title: 'BrightTree',
          lightlogo: 'backers/brightree-logo-light.png',
        },
        {
          title: 'Quanted Square',
          lightlogo: 'backers/quanted-square.svg',
        },
        {
          title: 'ALV Digital',
          lightlogo: 'backers/alv-software-logo-light.png',
        },
        {
          title: 'HYPE',
          lightlogo: 'backers/hype-logo-light.svg',
        },
        {
          title: 'COSMIC',
          lightlogo: 'backers/cosmic-logo-light.svg',
        },
        {
          title: 'Getform',
          lightlogo: 'https://opencollective-production.s3-us-west-1.amazonaws.com/2d3b7590-f25a-11e8-95fe-d7ea40ac9667.png',

        },
        {
          title: 'Edusson',
          lightlogo: 'https://logo.clearbit.com/edusson.com',

        },
        {
          title: 'PapersOwl',
          lightlogo: 'https://logo.clearbit.com/papersowl.com',

        },
        {
          title: 'Deister Software',
          lightlogo: 'backers/deister-logo-light.png',

        },
        {
          title: 'Zweidenker',
          lightlogo: 'backers/zweidenker-logo-grey.svg',

        },
        {
          title: 'Identity Panel',
          lightlogo: 'backers/identity-panel.png',

        },
        {
          title: 'P2L Technologies',
          lightlogo: 'backers/p2l.png',

        },
        {
          title: 'madhead',
          lightlogo: 'backers/madhead.png',

        },
        {
          title: 'Elfo',
          lightlogo: 'backers/elfo-logo-light.png',

        },
        {
          title: 'CodeFirst',
          lightlogo: 'backers/code-first.png',

        },
        {
          title: 'Custom Essay Meister',
          lightlogo: 'backers/essay-meister.svg',

        },
        {
          title: 'NoteRiot',
          lightlogo: 'backers/note-riot.png',

        },
        {
          title: 'blokt',
          lightlogo: 'backers/blokt.png',

        },
        {
          title: 'Loomio',
          lightlogo: 'backers/loomio.svg',

        },
        {
          title: 'Toolio',
          lightlogo: 'backers/toolio.png',

        },
        {
          title: 'Skale Technologies',
          lightlogo: 'backers/skale.png',

        },
        {
          title: 'EduBirdie',
          lightlogo: 'backers/bird.png',

        },
        {
          title: 'ClothingRIC',
          lightlogo: 'backers/clothingric.png',

        },
        {
          title: 'jsDevJobs',
          lightlogo: 'backers/jsdevjobs-logo-light.png',

        },
        {
          title: 'VueJobs',
          lightlogo: 'affiliates/vuejobs-logo.svg',

        },
        {
          title: 'Made with Vue.js',
          lightlogo: 'affiliates/madewithvuejs.png',

        },
        {
          title: 'Cloudflare',
          lightlogo: 'sponsors/cloudflare.svg',

        },
        {
          title: 'Browserstack',
          lightlogo: 'sponsors/browser-stack.png',
        },
        {
          title: 'Crowdin',
          lightlogo: 'sponsors/crowdin.png',
        },
        {
          title: 'Vercel',
          lightlogo: 'affiliates/vercel-logo-light.svg',
        },
        {
          title: 'Oh Dear!',
          lightlogo: 'sponsors/ohdear-inverted.svg',
        },
        {
          title: 'Hohenstein',
          lightlogo: 'backers/hohenstein.svg',
        },
        {
          title: 'Ekorre',
          lightlogo: 'backers/ekorre-logo-light.png',
        },
        {
          title: 'Dealerdesk',
          lightlogo: 'backers/dealerdesk-logo-light.png',
        },
        {
          title: 'Volleyball Life',
          lightlogo: 'https://logo.clearbit.com/volleyballlife.com',
        }],
    }),

  }
</script>
