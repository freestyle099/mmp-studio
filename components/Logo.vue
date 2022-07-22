<template>
  <nuxt-link
    class="logo d-flex"
    to="/"
  >
    <img
      class="logo__image"
      src="/logo.png"
      alt=""
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'MmpLogo',
};
</script>

<style scoped lang="scss">
.logo {
  &__image {
    width: 200px;
    height: 50px;
    object-fit: contain;
  }
}
</style>
