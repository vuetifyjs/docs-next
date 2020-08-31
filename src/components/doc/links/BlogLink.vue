<template>
  <app-btn
    :to="{
      name: 'Blog',
      params: { locale }
    }"
    path="blog"
  />
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'BlogLink',

    computed: { locale: get('route/params@locale') },
  }
</script>
