<template>
  <div class="container">
    <section class="section">
      <ArticleList :items="data?.list" :pagination="pagination" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ArticleList from './components/article-list.vue';

const route = useRoute();
const pagination = {
  page: route.query.page as any,
  size: route.query.size as any,
}

const { data } = useRequest<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
  params: {
    newsType: "cj",
    ...pagination,
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