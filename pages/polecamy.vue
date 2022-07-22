<template>
  <section class="recommend background py-10 py-md-16">
    <v-container>
      <h1 class="text-h1 mb-10">Polecamy</h1>
      <mmp-recommend-item
        v-for="item in allRecommends"
        :key="item.id"
        :item="item"
      />
    </v-container>
  </section>
</template>

<script>
import MmpRecommendItem from '@/components/RecommendItem';
import { request } from '@/datocms';
import { RECOMMEND_QUERY } from '@/query/graphql';

export default {
  name: 'Polecamy',
  components: { MmpRecommendItem },
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: RECOMMEND_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  data() {
    return {
      allRecommends: [],
    };
  },
};
</script>

<style scoped></style>
