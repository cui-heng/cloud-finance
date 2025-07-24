<template>
  <div class="article-wrapper">
    <ul class="article-list">
      <li v-for="article in items" :key="article.id">
        <NuxtLink class="article-item" :to="`/mobile/article?id=${article.id}`">
          <OSSImage class="article-image" :src="article.coverImg" :alt="article.title" />
          <div class="article-content">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-description">{{ htmlToText(article.content) }}</p>
            <div class="article-meta">
              <div class="article-tags">
                <span>{{ article.newsType }}</span>
              </div>
              <span class="article-date">{{ article.createTime }}</span>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface ArticleListProps {
  items?: Website.Article[];
}
defineProps<ArticleListProps>();

const route = useRoute();
const router = useRouter();

function handlePaginationChange(currentPage: number, pageSize: number) {
  router.replace({
    path: route.path,
    query: {
      ...route.query,
      page: currentPage,
      size: pageSize,
    }
  });
}
</script>

<style lang="less" scoped>
.article-list {
  .article-item {
    display: flex;
    margin-bottom: rem(20);
    padding: rem(16);
    background: #fff;
    border-radius: rem(28);
    box-shadow: rem(0) rem(10) rem(30) rem(0) rgba(176, 180, 193, 0.3);

    .article-image {
      width: rem(212);
      height: rem(185);
      border-radius: rem(28);
      margin-right: rem(20);
    }

    .article-content {
      flex: 1;
      overflow: hidden;

      .article-title {
        font-size: rem(30);
        color: #242021;
        margin: rem(24) 0 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .article-description {
        min-height: rem(40);
        font-size: rem(20);
        line-height: rem(30);
        color: #8a8a8a;
        margin: rem(10) 0 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .article-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: rem(18);

        .article-tags {
          display: flex;
          gap: rem(10);

          span {
            padding: rem(8) rem(10);
            border-radius: rem(30);
            font-size: rem(18);
            color: #fff;
            min-width: rem(100);
            text-align: center;
            background: #0242AC;
          }
        }

        .article-date {
          font-size: rem(20);
          color: #999;
        }
      }
    }
  }
}
</style>