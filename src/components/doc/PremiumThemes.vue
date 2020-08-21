<template>
  <v-container
    id="premium-themes"
    class="pa-0"
    fluid
    tag="section"
  >
    <v-row v-if="digitalProducts">
      <v-col
        v-for="product in digitalProducts"
        :key="product.title"
        cols="12"
        xl="4"
        lg="6"
        md="6"
        sm="6"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            v-if="product"
            :class="{'elevation-cs' : hover}"
            class="d-flex flex-column"
            height="400px"
            flat
          >
            <v-carousel
              height="200px"
              hide-delimiter-background
              show-arrows-on-hover
              :show-arrows="product.images.length > 1"
              hide-delimiters
            >
              <v-carousel-item
                v-for="(slide, i) in product.images"
                :key="i"
              >
                <v-img
                  height="185px"
                  width="100%"
                  cover
                  :src="slide.src"
                />
              </v-carousel-item>
            </v-carousel>
            <v-card-title
              class="align-center pb-2 pt-1 text-body-1 font-weight-medium text-no-wrap"
              v-text="product.title"
            />
            <div class="custom-card-text px-4 mb-4">
              {{ product.description }}
            </div>
            <v-slide-y-reverse-transition>
              <v-card-actions
                v-show="hover"
                class="rounded mx-2"
              >
                <v-menu
                  v-if="product.variants.length > 1"
                  transition="scale-transition"
                  origin="bottom left"
                  top
                  right
                >
                  <template #activator="{ on }">
                    <v-btn
                      icon
                      target="_blank"
                      rel="noopener noreferrer"
                      v-on="on"
                    >
                      <v-icon color="primary">
                        $mdiDotsVertical
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list v-if="product.variants.length > 1">
                    <v-list-item
                      v-for="(variant, i) in product.variants"
                      :key="i"
                      target="_blank"
                      rel="noopener"
                      color="primary--text"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="variant.title" />
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon
                          left
                          color="primary"
                          small
                        >
                          $mdiOpenInNew
                        </v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-spacer />
                <v-btn
                  :disabled="!product.availableForSale"
                  :outlined="isFree(product)"
                  color="indigo"
                  dark
                  depressed
                  min-width="100"
                  target="_blank"
                  small
                  v-text="isFree(product) ? 'Free download' : 'Buy now'"
                />
              </v-card-actions>
            </v-slide-y-reverse-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row
      v-if="loading"
      justify="center"
    >
      <v-col cols="auto">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { call, get } from 'vuex-pathify'

  export default {
    name: 'PremiumThemes',
    data () {
      return {
        loading: false,
      }
    },
    computed: {
      allProducts: get('products/all'),
      digitalProducts () {
        return this.allProducts.filter(x => x.tags.some(y => y.value === 'digital'))
      },
    },
    mounted () {
      this.loading = true
      this.fetch().then(() => (this.loading = false))
    },
    methods: {
      fetch: call('products/fetch'),
      isFree (product) {
        if (product.variants[0].price === '0.00') return true
        return false
      },
    },
  }
</script>

<style>
.custom-card-text {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
}

.elevation-cs {
  /* box-shadow: rgba(156, 156, 156, 0.082) 0px 8px 8px 4px !important; */
  box-shadow: rgba(177, 207, 253, 0.116) 0px 8px 8px 4px !important;
}
</style>
