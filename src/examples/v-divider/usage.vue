<template>
  <div
    style="width: 100%"
  >
    <v-toolbar
      v-if="$attrs.variant === 'vertical'"
      color="gray"
    >
      <v-toolbar-title>Title</v-toolbar-title>

      <v-divider
        class="mx-4"
        :inset="$attrs.inset"
        vertical
      ></v-divider>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          News
        </v-btn>

        <v-divider
          :inset="$attrs.inset"
          vertical
        ></v-divider>

        <v-btn text>
          Blog
        </v-btn>

        <v-divider
          :inset="$attrs.inset"
          vertical
        ></v-divider>

        <v-btn text>
          Music
        </v-btn>

        <v-divider
          :inset="$attrs.inset"
          vertical
        ></v-divider>
      </v-toolbar-items>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-row v-else>
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon>$mdiInboxArrowDown</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>$mdiInboxArrowDown</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="$attrs.inset"></v-divider>

            <v-subheader>Subheader</v-subheader>

            <v-list-item>
              <v-list-item-action>
                <v-icon>$mdiFolder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="$attrs.inset"></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon>$mdiFolder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Usage',

    inheritAttrs: false,

    data: () => ({
      defaults: {
        variant: 'default',
      },
      options: {
        booleans: ['inset'],
        selects: {
          variant: ['default', 'vertical'],
        },
      },
      tabs: [],
    }),
  }
</script>
