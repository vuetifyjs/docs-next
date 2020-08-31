<template>
  <v-container
    class="fill-height align-start py-12"
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <component :is="component" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Extensions
  import Documentation from './Documentation'

  export default {
    name: 'BlogView',

    extends: Documentation,

    methods: {
      async load () {
        return import(
          /* webpackChunkName: "blog-page" */
          `@/pages/${this.locale}/blog.md`
        )
      },
    },
  }
</script>
