<template>
  <section class="about background py-10 py-md-16">
    <v-container class="about__container">
      <h2 class="text-h2 text-center">{{ title }}</h2>
      <img
        class="about__image"
        :src="headerImage.src"
        :alt="headerImage.alt"
        :srcset="headerImage.webpSrcSet"
      />
      <div v-html="sanitizeText(description)" />
    </v-container>
  </section>
</template>

<script>
import sanitizeText from '@/mixins/sanitizeText';

export default {
  name: 'MmpAboutUs',
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
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    headerImage() {
      return this.image?.responsiveImage;
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  &__container {
    display: grid;
    gap: 2.5rem;
  }
  &__image {
    width: 100%;
    aspect-ratio: 1.91/1;
    object-fit: contain;
    @media #{$md-and-up} {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
