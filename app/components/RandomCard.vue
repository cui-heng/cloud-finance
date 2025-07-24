<template>
  <Card title="随机">
    <ul class="random-article">
      <li class="random-article-item">
         <NuxtLink :to="`/article?id=${22}`">文章标题一</NuxtLink>
      </li>
      <li class="random-article-item">
         <NuxtLink :to="`/article?id=${22}`">文章标题一</NuxtLink>
      </li>
      <li class="random-article-item">
         <NuxtLink :to="`/article?id=${22}`">文章标题一</NuxtLink>
      </li>
      <li class="random-article-item">
         <NuxtLink :to="`/article?id=${22}`">文章标题一</NuxtLink>
      </li>
    </ul>
  </Card>
</template>

<script>
export default {
  name: 'RandomCard',
  props: {
    title: {
      type: String
    }
  }
};
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
