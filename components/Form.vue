<template>
  <section class="form py-10">
    <v-container>
      <h2>{{ title }}</h2>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'MmpForm',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
