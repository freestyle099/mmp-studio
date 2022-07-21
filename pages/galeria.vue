<template>
  <section class="gallery">
    <v-container>
      <h1>{{ gallery.title }}</h1>
      <div class="gallery__images">
        <img
          class="gallery__image"
          v-for="image in images"
          :key="image.id"
          :src="image.responsiveImage.src"
          :alt="image.responsiveImage.alt"
          :srcset="image.responsiveImage.webpSrcSet"
        />
      </div>
    </v-container>
  </section>
</template>

<script>
import { request } from '~/datocms';
import { GALLERY_QUERY } from '~/query/graphql';

export default {
  name: 'MmpGallery',
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: GALLERY_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  computed: {
    images() {
      return this.gallery.images;
    },
  },
};
</script>

<style scoped lang="scss">
.gallery {
  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
