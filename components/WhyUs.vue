<template>
  <section class="why-us py-10">
    <v-container class="why-us__container">
      <h2 class="text-h2 text-center">{{ title }}</h2>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="item in items"
          :key="item.id"
        >
          <v-expansion-panel-header>
            <span class="text-h3 header-color--text text-left pr-2">
              {{ item.title }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            v-show="item.description"
            eager
            v-html="sanitizeText(item.description)"
          ></v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>

<script>
import sanitizeText from '~/mixins/sanitizeText';

export default {
  name: 'MmpWhyUs',
  mixins: [sanitizeText],
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.why-us {
  &__container {
    display: grid;
    gap: 2.5rem;
  }
  :deep(.v-expansion-panel) {
    width: 100%;
    &::before,
    &::after {
      display: none;
    }
  }
  :deep(.v-expansion-panel-header) {
    padding: 0;
  }
  :deep(.v-expansion-panel-header__icon) {
    margin-top: 0;
  }
}
</style>
