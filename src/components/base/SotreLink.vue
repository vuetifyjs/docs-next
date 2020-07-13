<template>
  <v-btn
    :aria-label="$t('home.store')"
    class="hidden-xs-only text--secondary"
    href="https://store.vuetifyjs.com"
    rel="noopener"
    style="min-width: 48px"
    target="_blank"
    text
    @click="$ga.event('toolbar', 'click', 'store')"
  >
    <v-badge
      v-model="badge"
      color="red"
      left
    >
      <template v-slot:badge>
        <v-icon>$mdiTagText</v-icon>
      </template>

      <span>{{ $t("home.store") }}</span>
    </v-badge>

    <v-icon right>
      $mdiOpenInNew
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseStoreLink',

    data () {
      const start = (new Date('November 28, 2019 18:00:00')).getTime()
      const stop = (new Date('December 2, 2019 23:59:59')).getTime()
      const now = Date.now()

      return {
        badge: (
          now >= start &&
          now <= stop
        ),
      }
    },
  }
</script>
