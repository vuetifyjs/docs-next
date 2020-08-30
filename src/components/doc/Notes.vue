<template>
  <div>
    <v-autocomplete
      v-model="search"
      :background-color="`grey lighten-${isFocused ? '5' : '3'}`"
      :class="isFocused ? 'rounded-b-0 rounded-t-lg' : 'rounded-lg'"
      :items="releases"
      :menu-props="{
        contentClass: 'notes-autocomplete rounded-b-lg elevation-0 grey lighten-5'
      }"
      class="mt-8 mb-12"
      dense
      flat
      hide-details
      item-text="name"
      label="Select Release Version"
      prepend-inner-icon="$mdiTextBoxSearchOutline"
      solo
      return-object
      @blur="onBlur"
      @focus="onFocus"
    >
      <template #prepend-inner>
        <div
          class="ml-1 mr-2"
          style="width: 40px;"
        >
          <v-progress-circular
            v-if="isLoading"
            size="20"
            width="1"
            color="primary"
            indeterminate
          />

          <v-icon
            v-else
            :color="!isFocused ? 'grey' : undefined"
          >
            $mdiTextBoxSearchOutline
          </v-icon>
        </div>
      </template>

      <template #item="props">
        <v-list-item-action>
          <v-icon>$mdiTagOutline</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :id="props.attrs['aria-labelledby']"
            v-text="props.item.name"
          />

          <v-list-item-subtitle>
            Published on <strong v-text="search.published_at" />
          </v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-autocomplete>

    <v-skeleton-loader
      v-if="isLoading"
      type="image"
      height="180"
    />

    <v-card
      v-else
      min-height="180"
      outlined
    >
      <v-list-item v-if="!!search">
        <v-list-item-avatar>
          <v-img :src="search.author.avatar_url" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            Released by:

            <app-link :href="search.author.html_url">
              {{ search.author.login }}
            </app-link>
          </v-list-item-title>

          <v-list-item-subtitle>
            Published on <strong v-text="search.published_at" />
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <app-tooltip-btn
            :href="search.html_url"
            icon="mdi-package-up"
            path="release"
            rel="noopener"
            target="_blank"
          />
        </v-list-item-action>
      </v-list-item>

      <v-divider />

      <div class="pa-4">
        <app-md>
          {{ search ? search.body : ' ' }}
        </app-md>
      </div>
    </v-card>
  </div>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import { sortBy } from 'lodash'
  import { wait } from '@/util/helpers'

  export default {
    name: 'Notes',

    inject: ['theme'],

    data: () => ({
      branch: undefined,
      releases: [],
      isLoading: true,
      isFocused: false,
      isSearching: false,
      search: undefined,
    }),

    computed: {
      ...get('app', ['modified']),
      ...get('route', [
        'params@category',
        'params@page',
      ]),
      version: get('app/version'),
      at () {
        const stat = this.modified[`/${this.category}/${this.page}/`] || {}

        return stat.modified
      },
    },

    created () {
      fetch('https://api.github.com/repos/vuetifyjs/vuetify/releases?per_page=50', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(async res => {
          this.isLoading = false

          await wait(100)

          const releases = []

          for (const release of res) {
            if (!release.name.startsWith('v2')) continue

            releases.push({
              ...release,
              published_at: new Date(release.published_at).toDateString(),
            })
          }

          this.releases = releases

          this.search = releases[0]
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoading = false))
    },

    methods: {
      onBlur () {
        this.resetSearch()
      },
      onFocus () {
        clearTimeout(this.timeout)

        this.isFocused = true
      },
      resetSearch (timeout = 0) {
        clearTimeout(this.timeout)

        this.$nextTick(() => {
          this.isSearching = false

          this.timeout = setTimeout(() => (this.isFocused = false), timeout)
        })
      },
    },
  }
</script>

<style lang="sass">
  .notes-autocomplete
    > .v-list.v-select-list
      background: transparent !important
</style>
