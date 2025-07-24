<template>
  <div class="container">
    <section class="section">
      <ArticleList :items="data?.list" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ArticleList from './components/article-list.vue';

const route = useRoute();
const { data } = useRequest<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
  params: {
    newsType: "qh",
    page: route.query.page,
    size: route.query.size,
  }
});
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 40px;

  .breadcrumb {
    margin-block: 6px;
  }

  .section {
    margin-block: 16px;
  }


}
</style>