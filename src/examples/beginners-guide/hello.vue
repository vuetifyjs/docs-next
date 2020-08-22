<template>
  <div>
    <v-text-field
      v-model="name"
      label="Your name"
    ></v-text-field>
    <div>{{ message }}</div>
    <v-btn
      color="success"
      @click="greet"
    >
      Greet
    </v-btn>
  </div>
</template>
<script>
  export default {
    data: () => ({
      name: '',
      message: '',
    }),
    methods: {
      greet () {
        this.message = 'Hello, ' + this.name
      },
    },
  }
</script>
