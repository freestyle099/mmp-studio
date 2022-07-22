<template>
  <section class="contact background py-10 py-md-16">
    <v-container class="contact__container">
      <h2 class="text-h2 text-center">{{ title }}</h2>
      <div
        class="text-center"
        v-html="sanitizeText(description)"
      />
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

<style scoped lang="scss">
.contact {
  &__container {
    display: grid;
    gap: 2.5rem;
  }
}
</style>
