<template>
  <div>
    <v-menu
      v-if="icons"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="searchIcons"
          placeholder="Search for icons (e.g. account, close etc)"
          label="Icons"
          clear-icon="mdi-close"
          outlined
          :hide-details="!copied"
          :persistent-hint="copied"
          :hint="copied ? 'Copied!' : ''"
          clearable
          v-bind="attrs"
          :loading="!icons"
          v-on="on"
        >
          <template v-slot:prepend-inner>
            <code class="mx-1 py-1">mdi-</code>
          </template>
        </v-text-field>
      </template>
      <v-list>
        <v-virtual-scroll
          :items="filteredIcons"
          :item-height="50"
          max-height="300"
        >
          <template v-slot="{ item }">
            <v-list-item :key="item">
              <v-list-item-content>
                <v-list-item-title>
                  <div>
                    <v-icon
                      color="primary"
                      class="mr-2"
                    >
                      {{ item }}
                    </v-icon>
                    <input
                      ref="copyTarget"
                      type="hidden"
                      name="copyTarget"
                      :value="item"
                      class="d-none"
                    >
                    <span>{{ item.substring(4) }}</span>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click="copy"
                >
                  <v-icon size="21">
                    mdi-content-copy
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  import * as allIcons from '@mdi/js'
  import {
    kebabCase,
  } from 'lodash'
  export default {
    name: 'IconList',
    data () {
      return {
        icons: [],
        searchIcons: null,
        copied: false,
      }
    },
    computed: {
      filteredIcons () {
        if (!this.searchIcons) return this.icons

        if (this.icons) {
          return this.icons.filter((item) => {
            return item.toLowerCase().match(this.searchIcons)
          })
        }

        return []
      },
    },
    mounted () {
      this.icons = Object.keys(allIcons).map((icon) => {
        return kebabCase(icon)
      })
    },
    methods: {
      copy () {
        navigator.clipboard
          .writeText(this.$refs.copyTarget.value)
          .then(() => {
            this.copied = true
            setTimeout(() => {
              this.copied = false
            }, 3000)
          })
      },
    },
  }

</script>

<style>
</style>
