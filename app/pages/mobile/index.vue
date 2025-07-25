<template>
  <div class="container">
    <el-carousel class="carousel" arrow="never">
      <el-carousel-item v-for="banner in data?.banners" :key="banner.id">
        <OSSImage :src="banner.img" :alt="banner.title" />
      </el-carousel-item>
    </el-carousel>
    <section class="pin-section">
      <h2>热点资讯</h2>
      <ul class="pin-article">
        <li class="pin-article-item" v-for="article in data?.hotArticles" :key="article.id">
          <NuxtLink :to="`/mobile/article?id=${article.id}`">
            <OSSImage class="pin-article-image" :src="article.coverImg" :alt="article.title" />
            <p class="pin-article-text">{{ article.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="article-section">
      <h2>热点资讯</h2>
      <ArticleList :items="article?.list" />
    </section>
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
  const [banners, hotArticle] = await Promise.all([
    $request('/website/news/getBannerList'),
    $request<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
      params: {
        hotFlag: true,
      }
    }),
  ]);

  return {
    banners,
    hotArticles: hotArticle.list,
  };
});

const { data: article } = useRequest<Website.FetchListResponse<Website.Article>>('/website/news/selectNews', {
  params: pagination
});
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
}

.carousel {
  width: rem(684);
  height: rem(312);
  margin: rem(14) auto;
  border-radius: rem(12);
  overflow: hidden;

  :deep(.el-carousel__container) {
    height: 100%;
  }

  :deep(.el-carousel__indicator) {
    padding: rem(22) rem(4);

    &.is-active button {
      width: rem(34);
      background: #7D64FF;
    }
  }

  :deep(.el-carousel__button) {
    width: rem(10);
    height: rem(8);
    border-radius: rem(4);
  }
}

.pin-section {
  margin: 0 rem(32);

  & > h2 {
    color: #242021;
    font-size: rem(30);
    margin: rem(20) 0;
  }

  .pin-article {
    display: flex;
    column-gap: rem(20);
    overflow-x: auto;

    &-item {
      flex-shrink: 0;
      position: relative;
      width: rem(266);
      height: rem(186);
      border-radius: rem(8);
      overflow: hidden;
    }

    &-image {
      width: 100%;
      height: 100%;
      display: 100%;
    }

    &-text {
      position: absolute;
      left: rem(20);
      right: rem(20);
      bottom: rem(10);
      font-size: rem(20);
      line-height: rem(20);
      color: #fff;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

.article-section {
  margin: 0 rem(32);

  & > h2 {
    color: #242021;
    font-size: rem(30);
    margin: rem(20) 0;
  }
}
</style>