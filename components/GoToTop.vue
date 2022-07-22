<template>
  <mmp-button
    class="go-to-top"
    :class="{ 'go-to-top--visible': isScrollHigher }"
    fab
    variant="primary"
    elevation="3"
    @click="goToTop"
  >
    <svg-icon
      name="go-to-top"
      width="18"
      height="16"
    ></svg-icon>
  </mmp-button>
</template>

<script>
import MmpButton from '~/components/Button';

export default {
  name: 'MmpGoToTop',
  components: { MmpButton },
  data() {
    return {
      isScrollHigher: false,
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrollHigher = window.scrollY > 100;
    },
    goToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="scss">
button.btn--primary.v-btn.go-to-top {
  position: fixed;
  bottom: 4rem;
  right: 1.5rem;
  padding: 0 !important;
  transform: translateY(-100%);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s $cubic-bezier;
  min-width: auto !important;
  aspect-ratio: 1/1 !important;
  z-index: 7;
  width: 3.5rem !important;
  &--visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
