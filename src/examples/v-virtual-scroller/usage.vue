<template>
  <div class="py-6 grow">
    <v-slider
      v-model="count"
      min="7000"
      max="15000"
    ></v-slider>
    <div class="text-center font-weight-bold">
      {{ items.length }} Total Items
    </div>

    <v-card outlined>
      <v-virtual-scroll
        v-bind="$attrs"
        :items="items"
        item-height="25"
      >
        <template v-slot="{ item }">
          <div class="pa-4">
            I'm item number {{ item }}
          </div>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      count: 10000,
      defaults: {
        height: 200,
      },
      options: {
        sliders: {
          height: [175, 275],
        },
      },
      tabs: [],
    }),

    computed: {
      items () {
        return Array.from({ length: this.count }, (k, v) => v + 1)
      },
    },
  }
</script>
