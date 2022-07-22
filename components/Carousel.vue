<template>
  <v-carousel
    class="carousel"
    v-model="model"
    height="auto"
    cycle
    show-arrows-on-hover
    hide-delimiter-background
    :hide-delimiters="$vuetify.breakpoint.smAndDown"
  >
    <v-carousel-item
      v-for="item in items"
      :key="item.id"
      eager
    >
      <img
        class="carousel__image"
        :src="item.responsiveImage.src"
        :alt="item.responsiveImage.alt"
        :srcset="item.responsiveImage.webpSrcSet"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'MmpCarousel',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      model: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.carousel {
  :deep(.v-image) {
    height: clamp(300px, 50vw, calc(90 * var(--vh))) !important;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
