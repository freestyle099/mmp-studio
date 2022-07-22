<template>
  <section class="video background py-10 py-md-16">
    <v-container>
      <h1 class="text-h1 mb-10">{{ videoPage.title }}</h1>
      <div class="video__videos">
        <iframe
          class="video__video"
          v-for="video in allVideos"
          :key="video.id"
          :src="video.url"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </v-container>
  </section>
</template>

<script>
import { request } from '~/datocms';
import { VIDEO_QUERY } from '~/query/graphql';

export default {
  name: 'MmpVideo',
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: VIDEO_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  data() {
    return {
      title: 'MMPStudio - Galeria Wideo',
      description:
        'Zobacz filmy zrealizowane na weselach, studniówkach itp. Nasze filmy są profesjonalnie zmontowane i perfekcyjnie uchwyciły każdą chwilę, aby każdy mógł przeżyć je na nowo. ',
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
};
</script>

<style scoped lang="scss">
.video {
  &__videos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
  }
  &__video {
    width: 100%;
    height: 250px;
  }
}
</style>
