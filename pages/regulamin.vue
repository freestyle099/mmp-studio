<template>
  <section class="regulations background py-10 py-md-16">
    <v-container>
      <h1 class="text-h1 mb-10">Regulamin</h1>
      <div v-html="sanitizeText(regulation.description)"></div>
    </v-container>
  </section>
</template>

<script>
import { request } from '@/datocms';
import sanitizeText from '@/mixins/sanitizeText';
import { REGULATIONS_QUERY } from '@/query/graphql';

export default {
  name: 'regulamin',
  mixins: [sanitizeText],
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: REGULATIONS_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
};
</script>

<style scoped lang="scss"></style>
