<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-hover
        v-slot:default="{ hover }"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <v-card
          :elevation="hover ? 12 : 2"
          height="200"
          max-width="350"
          class="mx-auto"
        >
          <v-card-text class="my-4 text-center title">
            Hover over me!
          </v-card-text>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',
    inheritAttrs: false,

    data: () => ({
      inheritAttrs: false,
      defaults: {
        'close-delay': 0,
        disabled: false,
        'open-delay': 0,
        value: false,
      },
      options: {
        sliders: {
          'open-delay': [0, 1000],
          'close-delay': [0, 1000],
        },
      },
      tabs: ['value', 'disabled'],
    }),
  }
</script>
