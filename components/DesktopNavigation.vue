<template>
  <nav class="nav">
    <div class="nav__menu d-flex justify-space-between align-center px-10">
      <mmp-logo />
      <ul class="nav__list">
        <li
          v-for="item in navItems.filter((el) => el.active)"
          :key="item.id"
          class="nav__item text-body-1 font-weight-bold"
        >
          <nuxt-link
            class="nav__link"
            exact
            :to="item.url"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MmpLogo from '~/components/Logo';
import navigation from '~/middleware/navigation';

export default {
  name: 'MmpDesktopNavigation',
  components: { MmpLogo },
  mixins: [navigation],
};
</script>

<style scoped lang="scss">
.nav {
  &__submenu {
    height: 2rem;
  }
  &__menu {
    height: 4.7rem;
  }
  &__list {
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    list-style: none;
    gap: 2.5rem;
  }
  &__item {
  }
  &__link {
    text-decoration: none;
    transition: 0.2s $cubic-bezier;
    color: var(--v-header-color-base);
    &:hover {
      color: var(--v-primary-base);
    }
  }
}
.nuxt-link-active {
  color: var(--v-primary-base);
}
</style>
