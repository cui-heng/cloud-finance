<template>
  <Card title="热门">
    <ul class="hot-article">
      <li class="hot-article-item" v-for="(article, index) in items" :key="index">
        <span class="hot-article-item-no">{{ index + 1 }}</span>
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
.hot-article {
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  &-item {
    position: relative;
    display: flex;
    align-items: center;

    &:nth-child(-n+3) {
      &::before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 1px;
        width: 20px;
        height: 22px;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }

      .hot-article-item-no {
        color: #FEFFFE;
      }
    }
    
    &:first-child::before {
      background: linear-gradient(33deg, #FA1052, #FF7B65);
    }

    &:nth-child(2)::before {
      background: linear-gradient(33deg, #FE744D, #FFB35F);
    }

    &:nth-child(3)::before {
      background: linear-gradient(33deg, #FFB748, #FFDB85);
    }

    a {
      flex: 1;
      color: #273746;
      overflow: hidden;
      text-overflow: ellipsis;
      text-wrap: nowrap;
    }

    &-no {
      width: 20px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      color: #D0D0D0;
      margin-right: 6px;
      font-style: italic;
      z-index: 5;
    }
  }
}
</style>
