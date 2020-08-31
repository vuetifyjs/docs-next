<template>
  <div class="py-16">
    <v-card
      v-for="(blog, i) in blogs"
      :key="i"
      class="mb-4 d-flex"
      rounded="l-xl r-0"
      height="164"
      outlined
    >
      <v-img
        class="rounded-l-xl rounded-r-0 flex-1-0-auto"
        max-width="256"
        width="256"
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
      />

      <v-card-text class="flex-1-1-auto">
        <div class="d-flex mb-3">
          <div>
            <div class="mb-1 text-body-1 grey--text">
              Austin Akers
            </div>

            <div class="text-h4 text--primary">
              What is treeshaking?
            </div>
          </div>

          <v-avatar
            class="ml-auto"
            size="64"
            color="grey"
          />
        </div>

        <div class="text-body-1 pr-16">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eos quam reprehenderit, itaque optio labore iure blanditiis voluptatem sunt quasi.
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'BlogList',

    data: () => ({
      blogs: [
        {},
      ],
    }),
  }
</script>
