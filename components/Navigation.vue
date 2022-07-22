<template>
  <div class="nav__wrapper pt-15">
    <nav
      class="nav d-flex justify-space-between align-center white px-6"
      :class="{
        'nav--active': isScrollHigher,
        'nav--show': isScrollUp && isScrollHigher,
      }"
    >
      <mmp-logo />
      <svg-icon
        class="nav__button"
        name="menu"
        width="22"
        height="22"
        @click="drawer = !drawer"
      ></svg-icon>
    </nav>
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
    >
      <div class="nav__container d-flex flex-column justify-space-between">
        <v-list>
          <v-list-item>
            <v-btn
              fab
              small
              outlined
              elevation="0"
              type="button"
              class="nav__close my-4"
              @click="drawer = false"
            >
              <svg-icon
                class="nav__close-icon"
                name="close"
                size="24"
              ></svg-icon>
            </v-btn>
          </v-list-item>
          <v-list-item
            v-for="item in navItems.filter((el) => el.active)"
            :key="item.id"
            class="nav__item mx-4 font-weight-bold"
            active-class="nav__item--active"
            :to="item.url"
            :ripple="false"
          >
            <span>{{ item.name }}</span>
          </v-list-item>
        </v-list>
        <v-list class="nav__social mx-4 pb-8">
          <v-list-item
            v-for="item in socialItems"
            :key="item.id"
            class="nav__social-item pa-0"
            :href="item.url"
            target="_blank"
          >
            <mmp-social-button :name="item.name"></mmp-social-button>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import MmpLogo from '~/components/Logo';
import MmpSocialButton from '~/components/SocialButton';
import navigation from '~/middleware/navigation';

export default {
  name: 'MmpNavigation',
  components: { MmpLogo, MmpSocialButton },
  mixins: [navigation],
  data() {
    return {
      drawer: false,
      scrollLastPosition: 0,
      isScrollUp: true,
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
      this.isScrollUp = this.scrollLastPosition > window.scrollY;
      this.isScrollHigher = window.scrollY > 60;
      this.scrollLastPosition = window.scrollY;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  height: 3.75rem;
  width: 100%;
  z-index: 2;
  transition: 0.2s $cubic-bezier;
  &__wrapper :deep(.v-navigation-drawer) {
    height: calc(100 * var(--vh)) !important;
  }
  &--active {
    transform: translateY(-100%);
  }
  &--show {
    transform: translateY(0);
    box-shadow: 0 3px 6px $button-inner-shadow;
  }
  &__container {
    height: 100%;
  }
  &__close {
    border: 1px solid var(--v-border-base);
  }
  &__button,
  &__close-icon {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }
  &__item {
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--v-border-base);
    }
    &--active {
      color: var(--v-primary-base) !important;
      background-color: transparent !important;
      outline-color: transparent !important;
      &::before,
      &::after {
        display: none;
      }
    }
  }
  &__social {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(0, max-content);
    gap: 0.5rem;
  }
  &__social-item {
    min-height: 2.375rem !important;
  }
}
</style>
