<template>
  <section class="video">
    <v-container>
      <h1>{{ videoPage.title }}</h1>
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
