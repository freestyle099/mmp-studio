<template>
  <v-main>
    <h1>MMP Studio</h1>
  </v-main>
</template>

<script>
import { request } from '~/datocms';
import { HOME_QUERY } from '~/query/graphql';

export default {
  name: 'MmpHome',
  components: {},
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: HOME_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  data() {
    return {
      title: '',
      description: '',
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

<style lang="scss" scoped></style>
