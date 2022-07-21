<template>
  <v-main>
    <v-container>
      <h1>MMP Studio</h1>
      <img
        class="temp"
        v-for="image in homePage.carousel"
        :key="image.id"
        :src="image.responsiveImage.src"
        :alt="image.responsiveImage.alt"
        :srcset="image.responsiveImage.webpSrcSet"
      />
      <h2>{{ homePage.aboutUsTitle }}</h2>
      <div v-html="sanitizeText(homePage.aboutUsDescription)" />
      <h2>{{ homePage.whyUs }}</h2>
      <ul>
        <li
          v-for="item in allAboutItems"
          :key="item.id"
        >
          <h3>{{ item.title }}</h3>
          <div v-html="sanitizeText(item.description)" />
        </li>
      </ul>
      <h2>{{ homePage.contact }}</h2>
      <div v-html="sanitizeText(homePage.contactDescription)" />
      <h2>{{ homePage.form }}</h2>
    </v-container>
  </v-main>
</template>

<script>
import { request } from '~/datocms';
import sanitizeText from '~/mixins/sanitizeText';
import { HOME_QUERY } from '~/query/graphql';

export default {
  name: 'MmpHome',
  components: {},
  mixins: [sanitizeText],
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

<style lang="scss" scoped>
.temp {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
