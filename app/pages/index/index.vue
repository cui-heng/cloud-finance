<template>
  <div class="container">
    <div class="banner-wrapper">
      <el-carousel class="banner" arrow="never" height="430px">
        <el-carousel-item v-for="banner in data?.banners" :key="banner.id">
          <OSSImage class="banner-item" :src="banner.img" :alt="banner.title" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <section class="article-section">
        <div class="article-list-horizontal">
          <NuxtLink class="article-item" :to="`/article?id=${article.id}`" v-for="article in article?.list?.slice(0, 3)"
            :key="article.id">
            <div class="article-time" v-if="article.updateTime || article.createTime">
              <span class="article-time-date">{{ (article.updateTime || article.createTime).slice(5, 10) }}</span>
              <span class="article-time-year">{{ (article.updateTime || article.createTime).slice(0, 4) }}</span>
            </div>
            <div class="article-content">
              <h3 class="article-title">{{ article.title }}</h3>
              <OSSImage class="article-cover" :src="article.coverImg" :alt="article.title" />
              <p class="article-description">{{ htmlToText(article.content) }}</p>
              <div class="article-meta">
                <span class="article-link">
                  查看详情 >
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <ArticleList :items="article?.list?.slice(3)" :pagination="{ ...pagination, total: article?.total }" />
      </section>
      <aside class="aside">
        <HotCard :items="data?.hotArticles" />
        <SuggestCard :items="data?.recommendArticles" />
        <RandomCard :items="data?.randomArticles" />
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleList from './components/article-list.vue';

const route = useRoute();
const { $request } = useNuxtApp();

const pagination = computed(() => ({
  page: Number(route.query.page) || 1,
  size: Number(route.query.size) || 10,
}));

const { data } = useAsyncData('home', async () => {
  const [banners, hotArticle, recommendArticle, randomArticle] = await Promise.all([
    $request('/website/news/getBannerList'),
    $request<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
      params: {
        hotFlag: true,
      }
    }),
    $request<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
      params: {
        recommendFlag: true,
      }
    }),
    $request<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
      params: {
        randomFlag: true,
      }
    }),
  ]);

  return {
    banners,
    hotArticles: hotArticle.list,
    recommendArticles: recommendArticle.list,
    randomArticles: randomArticle.list,
  };
});

const { data: article } = await useRequest<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
  params: pagination
});
</script>

<style lang="less" scoped>
.container {
  .banner-wrapper {
    margin-bottom: 40px;
    background: #010E1F;
    overflow: hidden;

    .banner {
      width: 1200px;
      height: 430px;
      margin: 0 auto;
      overflow: hidden;

      &-item {
        width: 100%;
        height: 430px;
      }
    }
  }


  .main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    column-gap: 22px;
  }

  .article-section {
    flex: 1;
    overflow: hidden;
  }

  .aside {
    width: 318px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}

.article-list-horizontal {
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;

  .article-item {
    flex: 1;
    background: #fff;
    padding: 16px;
    border-bottom: 4px solid transparent;
    transition: border-bottom-color 0.3s;
    overflow: hidden;

    &:hover {
      border-bottom-color: #034EFF;

      .article-meta {
        color: #034EFF;
      }
    }

    .article-time {
      display: flex;
      flex-direction: column;
      color: #666;

      &-date {
        color: #273746;
        font-weight: bold;
        font-size: 26px;
      }

      &-year {
        color: #999;
        font-size: 16px;
        line-height: 26px;
      }
    }

    .article-title {
      font-size: 18px;
      color: #273746;
      margin-bottom: 18px;
      text-overflow: ellipsis;
      overflow: hidden;
      text-wrap: nowrap;
    }

    .article-cover {
      width: 100%;
      height: 170px;
      margin-bottom: 18px;
    }

    .article-description {
      font-size: 14px;
      color: #6C757D;
      margin: 0 0 40px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .article-meta {
      color: #666;
      font-size: 14px;
    }
  }
}

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

.aside-section {
  background: #fff;

  &-header {
    padding-block: 22px;
    border-bottom: 1px solid #E0E9F7;

    h3 {
      margin: 0;
      font-size: 20px;
      padding-left: 18px;
      color: #273746;
      border-left: 4px solid #034EFF;
    }
  }
}

.recommend-section {
  margin-top: 20px;
}
</style>