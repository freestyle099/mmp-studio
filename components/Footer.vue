<template>
  <footer class="footer secondary py-10">
    <v-container class="footer__container footer-font--text">
      <div class="footer__info">
        <span>Znajdź nas na facebooku:</span>
        <a
          class="footer__link"
          href="https://www.facebook.com/mmpzakopane"
          target="_blank"
          >MMPZakopane</a
        >
        <span class="px-1">|</span>
        <nuxt-link
          class="footer__link"
          to="/regulamin"
          >Regulamin</nuxt-link
        >
        <span class="px-1">|</span>
        <nuxt-link
          class="footer__link"
          to="/polecamy"
          >Polecamy</nuxt-link
        >
      </div>
      <div class="footer__copyright">
        Copyright &copy; {{ new Date().getFullYear() }} by MMPStudio | All
        rights reserved.
      </div>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'MmpFooter',
};
</script>

<style scoped lang="scss">
.footer {
  &__container {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: 1rem;
    text-align: center;
    @media #{$md-and-up} {
      grid-template-columns: repeat(2, minmax(0, max-content));
      justify-content: space-between;
      text-align: unset;
    }
  }
  &__link {
    color: var(--v-link-base);
    text-decoration: none;
    transition: 0.2s $cubic-bezier;
    font-weight: bold;
    &:hover {
      color: var(--v-primary-base);
    }
  }
}
</style>
