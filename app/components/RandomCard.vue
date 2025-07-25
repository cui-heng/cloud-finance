<template>
  <Card title="随机">
    <ul class="random-article">
      <li class="random-article-item" v-for="(article, index) in items" :key="article.id">
        <NuxtLink :to="`/article?id=${article.id}`">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  items?: Website.Article[];
}>();
</script>

<style lang="less" scoped>
.random-article {
  padding: 26px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  &-item {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 5px;
      left: -12px;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #BBCFFF;
    }

    a {
      display: block;
      color: #273746;
      text-decoration: none;
      text-overflow: ellipsis;
      overflow: hidden;
      text-wrap: nowrap;
    }
  }
}
</style>
