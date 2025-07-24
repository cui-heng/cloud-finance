<template>
  <div class="home-container">
    <el-carousel class="carousel" arrow="never">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <OSSImage :src="banner.coverImg" :alt="banner.title" />
      </el-carousel-item>
    </el-carousel>
    <section class="pin-section">
      <h2>热点资讯</h2>
      <ul class="pin-article">
        <li class="pin-article-item" v-for="article in pinArticles" :key="article.id">
          <NuxtLink :to="`/mobile/article?id=${article.id}`">
            <OSSImage class="pin-article-image" :src="article.coverImg" :alt="article.title" />
            <p class="pin-article-text">{{ article.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="article-section">
      <h2>热点资讯</h2>
      <ArticleList :items="hotArticles" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ArticleList from './components/article-list.vue';

const { data } = await useRequest<Website.FetchListResponse<Website.Article>>("/website/news/selectNews", {
  params: {
    pageNum: 1,
    pageSize: 20,
  }
});

const banners = data?.value?.list?.slice(0, 3) || [];
const pinArticles = data?.value?.list?.slice(3, 6) || [];
const hotArticles = data?.value?.list?.slice(6) || [];
</script>

<style lang="less" scoped>
.home-container {
  background: #fff;
  overflow: hidden;
}

.carousel {
  width: rem(684);
  height: rem(312);
  margin: rem(14) auto;
  
  border-radius: rem(12);
  overflow: hidden;

  :deep {
    .el-carousel__container {
      height: 100%;
    }

    .el-carousel__indicator {
      padding: rem(22) rem(4);

      &.is-active button {
        width: rem(34);
        background: #7D64FF;
      }
    }

    .el-carousel__button {
      width: rem(10);
      height: rem(8);
      border-radius: rem(4);
    }
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