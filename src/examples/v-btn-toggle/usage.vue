<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>Exclusive</p>

          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn>
              <v-icon>$mdiAlphaA</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaB</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaC</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaD</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>Multiple</p>

          <v-btn-toggle
            v-model="toggle_multiple"
            dense
            background-color="primary"
            dark
            multiple
          >
            <v-btn>
              <v-icon>$mdiCellphoneIphone</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiLaptop</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiMonitor</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiTelevision</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>No Options Selected</p>

          <v-btn-toggle v-model="toggle_none">
            <v-btn>
              <v-icon>$mdiAlphaA</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaB</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>$mdiAlphaC</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaD</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>Mandatory</p>

          <v-btn-toggle
            v-model="toggle_one"
            shaped
            mandatory
          >
            <v-btn>
              <v-icon>$mdiAlphaA</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaB</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaC</v-icon>
            </v-btn>

            <v-btn>
              <v-icon>$mdiAlphaD</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>Text Options</p>

          <v-btn-toggle
            v-model="text"
            tile
            color="deep-purple accent-3"
            group
          >
            <v-btn value="left">
              Left
            </v-btn>

            <v-btn value="center">
              Center
            </v-btn>

            <v-btn value="right">
              Right
            </v-btn>

            <v-btn value="justify">
              Justify
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>Text &amp; Icon Options</p>

          <v-btn-toggle
            v-model="icon"
            borderless
          >
            <v-btn value="left">
              <span class="hidden-sm-and-down">Left</span>

              <v-icon right>
                $mdiAlphaA
              </v-icon>
            </v-btn>

            <v-btn value="center">
              <span class="hidden-sm-and-down">Center</span>

              <v-icon right>
                $mdiAlphaB
              </v-icon>
            </v-btn>

            <v-btn value="right">
              <span class="hidden-sm-and-down">Right</span>

              <v-icon right>
                $mdiAlphaC
              </v-icon>
            </v-btn>

            <v-btn value="justify">
              <span class="hidden-sm-and-down">Justify</span>

              <v-icon right>
                $mdiAlphaD
              </v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: 'center',
        icon: 'justify',
        toggle_none: null,
        toggle_one: 0,
        toggle_exclusive: 2,
        toggle_multiple: [0, 1, 2],
      }
    },
  }
</script>
