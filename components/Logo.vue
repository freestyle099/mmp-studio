<template>
  <nuxt-link to="/">
    <img
      class="logo"
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
  width: 200px;
  object-fit: contain;
}
</style>
