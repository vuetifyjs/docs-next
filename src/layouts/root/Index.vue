<template>
  <router-view />
</template>

<script>
  // TODO: Find a better home for these
  import 'markdown-it-prism'
  import 'prismjs/themes/prism.css'
  import 'prismjs/components/prism-bash'
  import 'prismjs/components/prism-css'
  import 'prismjs/components/prism-javascript'
  import 'prismjs/components/prism-json'
  import 'prismjs/components/prism-sass'
  import 'prismjs/components/prism-scss'
  import 'prismjs/components/prism-stylus'
  import 'prismjs/components/prism-typescript'
  import '@/styles/overrides.sass'
  import 'github-markdown-css/github-markdown.css'
  import { loadLocale } from '@/plugins/i18n'

  export default {
    created () {
      if (this.$i18n.locale === 'eo-UY') {
        const crowdin = document.createElement('script')
        crowdin.setAttribute('src', 'https://cdn.crowdin.com/jipt/jipt.js')
        document.head.appendChild(crowdin)
      }
    },
    beforeRouteUpdate: (to, _, next) => {
      const locale = to.params.locale
      loadLocale(locale).then(next)
    },
  }
</script>
