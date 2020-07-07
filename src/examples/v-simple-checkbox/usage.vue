<template>
  <v-container
    class="px-0"
    fluid
  >
    <v-simple-checkbox
      v-model="checkbox"
    ></v-simple-checkbox>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        checkbox: true,
      }
    },
  }
</script>
