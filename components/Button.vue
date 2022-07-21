<template>
  <v-btn
    class="btn text-button"
    :class="`btn--${variant}`"
    :color="variant"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <svg-icon
      v-if="icon"
      class="btn__icon"
      name="arrow"
    ></svg-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'MmpButton',
  props: {
    variant: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  box-shadow: inset 0 -4px $button-inner-shadow !important;
  padding-bottom: 4px !important;
  min-height: 3rem;
  height: auto !important;
  transition: 0.2s $cubic-bezier;
  width: 100%;
  color: var(--v-white-base) !important;
  @include generateButtonVariant('primary', 'white', 'heading');
  @include generateButtonVariant('secondary', 'primary', 'white');
  @include generateButtonVariant('white', 'secondary', 'white');
  @media #{$sm-and-up} {
    width: fit-content;
    min-width: 15rem !important;
  }
  &--desktop-full {
    @media #{$md-and-up} {
      width: 100%;
    }
  }
  &--full-width {
    @media #{$sm-and-up} {
      width: 100%;
    }
  }
  &--large-text ::v-deep .v-btn__content {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    flex: unset !important;
    white-space: normal;
  }
  &--no-upper-borders {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
