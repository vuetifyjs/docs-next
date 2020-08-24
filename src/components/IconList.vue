<template>
  <div>
    <v-autocomplete
      v-model="search"
      :items="icons"
      label="Search for icons..."
      outlined
      flat
      dense
      clearable
      clear-icon="mdi-close"
      :loading="loading"
    >
      <template v-slot:item="data">
        <div class="align-center d-flex justify-space-between w-100">
          <div>
            <v-icon
              color="primary"
              class="mr-2"
            >
              {{ data.item }}
            </v-icon>
            {{ data.item.substring(4) }}
          </div>
          <v-btn
            icon
            @click.stop="copyIcon"
          >
            <v-icon size="22">
              mdi-content-copy
            </v-icon>
          </v-btn>
        </div>
      </template>
      <template #prepend>
        <v-btn
          icon
          @click.stop="copyIcon"
        >
          <v-icon color="primary">
            mdi-content-copy
          </v-icon>
        </v-btn>
      </template>
      <template
        v-if="!search"
        #prepend-inner
      >
        <code class="mx-1 py-1">mdi-</code>
      </template>
      <template #selection="data">
        <div class="font-weight-medium text-none">
          {{ data.item }}
        </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
  import * as allIcons from '@mdi/js'
  import { kebabCase } from 'lodash'
  export default {
    name: 'IconList',
    data () {
      return {
        icons: [],
        search: null,
        loading: false,
      }
    },
    computed: {
      filter () {
        return true
      },
    },
    mounted () {
      this.icons = Object.keys(allIcons).map((icon) => {
        return kebabCase(icon)
      })
    },
    methods: {
      copyIcon () {
        console.log('"copy" :>> ', 'copy')
      },
    },
  }
</script>

<style scoped>
.w-100 {
  width: 100%;
}

.v-input__prepend-outer {
    margin: 0 5px !important;
}
</style>
