<template>
  <div class="container">
    <section class="section">
      <ArticleList :items="data?.list" :pagination="pagination" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ArticleList from '../components/article-list.vue';

const route = useRoute();
const requestParams = computed(() => ({
  newsType: route.params.code,
  page: Number(route.query.page) || 1,
  size: Number(route.query.size) || 10,
}));

const { data } = useRequest<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
  params: requestParams
});

const pagination = computed(() => ({
  page: Number(route.query.page) || 1,
  size: Number(route.query.size) || 10,
  total: data?.value?.total || 0,
}));
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