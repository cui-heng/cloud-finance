<template>
  <Card title="推荐">
    <ul class="suggest-article">
      <li>
        <NuxtLink class="suggest-article-item" :to="`/article?id=${22}`">
          <span class="suggest-article-time">2024-10-30</span>
          <span class="suggest-article-title">
            山东各地“精耕细作” 借力“5G+”体系促智能化升级
          </span>
          <SvgoArrowRight />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="suggest-article-item" :to="`/article?id=${22}`">
          <span class="suggest-article-time">2024-10-30</span>
          <span class="suggest-article-title">
            山东各地“精耕细作” 借力“5G+”体系促智能化升级
          </span>
          <SvgoArrowRight />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="suggest-article-item" :to="`/article?id=${22}`">
          <span class="suggest-article-time">2024-10-30</span>
          <span class="suggest-article-title">
            山东各地“精耕细作” 借力“5G+”体系促智能化升级
          </span>
          <SvgoArrowRight />
        </NuxtLink>
      </li>
    </ul>
  </Card>
</template>

<script>
export default {
  name: 'SuggestCard',
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.suggest-article {
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

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
