<template>
  <div>
    <div>
      <div
        v-for="project in vuetifyEcosystemList"
        :key="project.name"
      >
        <h2>
          <a
            :href="project.repo_url"
            target="_blank"
          >
            {{ project.name }}
          </a>
        </h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>

</style>

<script>
  import * as ecosystemData from '@/data/ecosystem'
  export default {
    name: 'VuetifyEcosystemList',
    data: () => ({ vuetifyEcosystemList: [] }),

    mounted () {
      this.vuetifyEcosystemList = ecosystemData.default
    },
  }
</script>
