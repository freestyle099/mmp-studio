<template>
  <section class="gallery background py-10 py-md-16">
    <v-container>
      <h1 class="text-h1 mb-10">{{ gallery.title }}</h1>
      <div class="gallery__images">
        <div
          class="gallery__image-wrapper"
          v-for="(image, index) in images"
          :key="image.id"
        >
          <img
            class="gallery__image"
            :src="image.responsiveImage.src"
            :alt="image.responsiveImage.alt"
            :srcset="image.responsiveImage.webpSrcSet"
            @click="currentImage = index"
          />
        </div>
      </div>
      <CoolLightBox
        :items="images.map((image) => image.responsiveImage.src)"
        :index="currentImage"
        @close="currentImage = null"
      />
    </v-container>
  </section>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

import CoolLightBox from 'vue-cool-lightbox';

import { request } from '~/datocms';
import { GALLERY_QUERY } from '~/query/graphql';

export default {
  name: 'MmpGallery',
  components: {
    CoolLightBox,
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: GALLERY_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  data() {
    return {
      currentImage: null,
      title: 'Profesjonalny fotograf w Zakopanem - Portfolio',
      description:
        'Przedstawiam Państwu własne portfolio ze zdjęć zrobionych na różnych plenerach, weselach, komuniach, chrzcinach i różnego typu imprezach. Szukasz fotografa z pasją i zaangażowaniem? Wejdź na naszą stronę i mmpstudio.pl/galeria i zobacz naszą ofertę!',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          title: this.title,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: this.title,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    };
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
    gap: 0.5rem;
    grid-auto-rows: 300px;
  }
  &__image-wrapper {
    overflow: hidden;
    cursor: pointer;
  }
  &__image-wrapper:hover &__image {
    transform: scale(1.1);
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s $cubic-bezier;
  }
}
</style>
