<template>
  <v-main>
    <mmp-carousel :items="homePage.carousel" />
    <mmp-about-us
      :title="homePage.aboutUsTitle"
      :image="homePage.aboutUsImage"
      :description="homePage.aboutUsDescription"
    />
    <mmp-why-us
      :title="homePage.whyUs"
      :items="allAboutItems"
    />
    <mmp-contact
      :title="homePage.contact"
      :description="homePage.contactDescription"
    />
    <mmp-form :title="homePage.form" />
  </v-main>
</template>

<script>
import MmpAboutUs from '@/components/AboutUs';
import MmpCarousel from '@/components/Carousel';
import MmpContact from '@/components/Contact';
import MmpForm from '@/components/Form';
import MmpWhyUs from '@/components/WhyUs';
import { request } from '~/datocms';
import sanitizeText from '~/mixins/sanitizeText';
import { HOME_QUERY } from '~/query/graphql';

export default {
  name: 'MmpHome',
  components: { MmpForm, MmpContact, MmpWhyUs, MmpAboutUs, MmpCarousel },
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
      homePage: {
        aboutUsTitle: '',
        aboutUsImage: {},
        aboutUsDescription: '',
        whyUs: '',
        contact: '',
        contactDescription: '',
        form: '',
      },
      allAboutItems: [],
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
