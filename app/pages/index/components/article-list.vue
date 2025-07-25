<template>
  <div class="article-wrapper">
    <div class="article-list">
      <NuxtLink class="article-item" :to="`/article?id=${article.id}`" v-for="article in items" :key="article.id">
        <div class="article-time" v-if="article.updateTime || article.createTime">
          <span class="article-time-year">{{(article.updateTime || article.createTime).slice(0, 4)}}</span>
          <span class="article-time-date">{{(article.updateTime || article.createTime).slice(5, 10)}}</span>
        </div>
        <div class="article-content">
          <h3 class="article-title">{{ article.title }}</h3>
          <div class="article-meta">
            <span class="article-tag">
              <SvgoLayers />
              {{ article.newsType }}
            </span>
            <span class="article-view">
              <SvgoEyes />
              {{ article.browseNumber }}
            </span>
            <span class="article-like">
              <SvgoLike />
              {{ article.likeNumber }}
            </span>
          </div>
        </div>
        <div class="article-cover">
          <OSSImage :src="article.coverImg" :alt="article.title" />
        </div>
      </NuxtLink>
    </div>
    <el-pagination
      class="article-pagination"
      background
      :default-current-page="pagination?.page"
      :page-size="pagination?.size"
      :pager-count="11"
      :total="pagination?.total"
      layout="prev, pager, next"
      @change="handlePaginationChange"
    />
  </div>
</template>

<script setup lang="ts">
interface ArticleListProps {
  items?: Website.Article[];
  pagination?: {
    page?: number;
    size?: number;
    total?: number;
  }
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
  .article {
    &-item {
      display: flex;
      align-items: center;
      column-gap: 14px;
      background: #FFFFFF;
      padding: 16px;
      margin-bottom: 18px;
      border-left: 4px solid transparent;
      transition: border-left-color 0.3s;


      &:hover {
        border-left-color: #034EFF;
      }
    }

    &-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 92px;
      border: 1px solid #EEEE;
      padding-inline: 24px;

      &-year {
        color: #273746;
        font-size: 20px;
      }

      &-date {
        color: #bbb;
        font-size: 14px;
        line-height: 26px;
      }
    }

    &-content {
      flex: 1;
    }

    &-cover {
      width: 170px;
      height: 110px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    &-title {
      height: 56px;
      color: #273746;
      font-size: 20px;
      line-height: 28px;
      margin: 4px 0 14px;
    }

    &-meta {
      color: #B4B7BF;
      font-size: 14px;
    }

    &-view {
      margin-left: 30px;
    }

    &-like {
      margin-left: 20px;
    }
  }
}

.article-pagination {
  justify-content: center;
}
</style>