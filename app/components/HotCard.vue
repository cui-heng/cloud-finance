<template>
  <Card title="热门">
    <ul class="hot-article">
      <li class="hot-article-item" v-for="(article, index) in 6" :key="index">
        <span class="hot-article-item-no">{{ index + 1 }}</span>
        <NuxtLink :to="`/article?id=${22}`">文章标题一</NuxtLink>
      </li>
    </ul>
  </Card>
</template>

<script>
export default {
  name: 'HotCard',
  props: {
    title: {
      type: String
    }
  }
};
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
      color: #273746;
      text-decoration: none;
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
