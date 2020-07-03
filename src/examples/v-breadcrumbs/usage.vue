<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-breadcrumbs
        :items="items"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template
          v-if="!$attrs.customDivider"
          v-slot:divider
        >
          <v-icon>$mdiDotsVertical</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      defaults: {
        large: false,
        customDivider: false,
        divider: null,
      },
      options: {
        booleans: ['customDivider'],
        selects: {
          divider: ['/', '\\', '.', ';', '>', '-'],
        },
      },
      tabs: ['large'],
    }),

  }
</script>
