<template>
  <div>
    Could not load example <code>{{ file }}</code>
  </div>
</template>

<script>
  export default {
    name: 'ExampleMissing',
    props: {
      file: String,
    },
  }
</script>
