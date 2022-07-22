<template>
  <v-btn
    class="social white pb-1"
    width="38"
    height="38"
    min-width="auto"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <svg-icon
      :name="name"
      class="social__icon"
    ></svg-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'MmpSocialButton',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.social {
  box-shadow: inset 0 -4px $button-inner-shadow;
  border: 1px solid var(--v-border-base) !important;
  &__icon {
    width: 1.4rem;
    height: 1.4rem;
  }
}
</style>
