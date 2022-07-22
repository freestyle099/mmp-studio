<template>
  <div class="recommend-item">
    <img
      class="recommend-item__image"
      :src="image.src"
      :alt="image.alt"
      :srcset="image.webpSrcSet"
    />
    <div class="text-body-1 font-weight-bold">
      <span>{{ item.title }}</span>
      <a
        :href="item.url"
        target="_blank"
        >{{ item.urlTitle }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MmpRecommendItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      return this.item?.image?.responsiveImage;
    },
  },
};
</script>

<style scoped lang="scss">
.recommend-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    height: 250px;
    aspect-ratio: 16/9;
    object-fit: contain;
  }
}
</style>
