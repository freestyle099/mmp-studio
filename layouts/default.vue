<template>
  <v-app>
    <mmp-desktop-navigation v-show="$vuetify.breakpoint.mdAndUp" />
    <mmp-navigation v-show="!$vuetify.breakpoint.mdAndUp" />
    <nuxt-child></nuxt-child>
    <mmp-footer />
    <mmp-go-to-top />
  </v-app>
</template>

<script>
import MmpDesktopNavigation from '~/components/DesktopNavigation';
import MmpFooter from '~/components/Footer';
import MmpGoToTop from '~/components/GoToTop';
import MmpNavigation from '~/components/Navigation';

export default {
  name: 'MmpDefault',
  components: {
    MmpFooter,
    MmpDesktopNavigation,
    MmpNavigation,
    MmpGoToTop,
  },
  mounted() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
};
</script>

<style scoped lang="scss">
:deep(.v-list-item__title) {
  font-size: 1rem !important;
  line-height: 1.5 !important;
}
</style>
