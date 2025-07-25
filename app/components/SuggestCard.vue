<template>
  <Card title="推荐">
    <ul class="suggest-article">
      <li v-for="(article, index) in items" :key="article.id">
        <NuxtLink class="suggest-article-item" :to="`/article?id=${article.id}`">
          <span class="suggest-article-time">{{ (article.updateTime || article.createTime).slice(0, 10) }}</span>
          <span class="suggest-article-title">
            {{ article.title }}
          </span>
          <SvgoArrowRight />
        </NuxtLink>
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
.suggest-article {
  padding-inline: 20px;
  display: flex;
  flex-direction: column;

  li {
    &:last-child .suggest-article-item {
      border-bottom: none;
    }
  }

  &-item {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-block: 16px;
    color: #273746;
    text-decoration: none;
    border-bottom: 1px solid #eee;

    .nuxt-icon {
      position: absolute;
      right: 0;
      bottom: 20px;
    }
  }

  &-time {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
  }

  &-title {
    font-size: 16px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
  
</style>
