<template>
  <section class="contact background py-10">
    <v-container>
      <h2>{{ title }}</h2>
      <div v-html="sanitizeText(description)" />
    </v-container>
  </section>
</template>

<script>
import sanitizeText from '@/mixins/sanitizeText';

export default {
  name: 'MmpContact',
  mixins: [sanitizeText],
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
