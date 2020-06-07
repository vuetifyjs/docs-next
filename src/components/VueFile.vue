<template>
  <component
    :is="component"
    v-if="component"
    v-intersect.once="onIntersect"
    v-bind="{
      ...$attrs,
      ...$props,
    }"
    v-on="$listeners"
  />
</template>

<script>
  // Components
  import ExampleMissing from './ExampleMissing'

  // Mixins
  import codepen from '@/mixins/codepen'

  export default {
    name: 'VueFile',

    mixins: [codepen],

    inheritAttrs: false,

    props: {
      file: {
        type: String,
        required: true,
      },
    },

    data: () => ({
      component: undefined,
    }),

    async mounted () {
      try {
        this.component = await this.importComponent()
        this.boot(await this.importTemplate())
        this.$emit('loaded', {
          component: this.component,
          pen: this.pen,
        })
      } catch (err) {
        this.component = ExampleMissing
        this.$emit('error', err)
      }
    },

    methods: {
      importComponent () {
        return import(
          /* webpackChunkName: "examples" */
          /* webpackMode: "lazy-once" */
          `../examples/${this.file}.vue`
        )
          .then(comp => comp.default)
      },
      importTemplate () {
        return import(
          /* webpackChunkName: "examples-source" */
          /* webpackMode: "lazy-once" */
          `!raw-loader!../examples/${this.file}.vue`
        )
          .then(template => template.default)
      },
      onIntersect (_, __, isIntersecting) {
        if (!isIntersecting) return

        this.importTemplate()
      },
    },
  }
</script>
