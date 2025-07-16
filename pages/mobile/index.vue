<template>
  <div class="home-container">
    <el-carousel class="carousel" arrow="never">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <OSSImage :src="banner.coverImg" :alt="banner.title" />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <h2>置顶文章</h2>
    </div>
    <section class="pin-section">
      <div class="pin-item" v-for="article in pinArticles" :key="article.id">
        <OSSImage class="pin-item-image" :src="article.coverImg" :alt="article.title" />
        <p class="pin-item-text">{{ article.title }}</p>
      </div>
    </section>

    <div class="title">
      <h2>热点资讯</h2>
    </div>
    <section class="article-section">
      <ul class="article-list">
        <li class="article-item" v-for="article in hotArticles" :key="article.id">
          <OSSImage class="article-image" :src="article.coverImg" :alt="article.title" />
          <div class="article-content">
            <h3 class="article-title">{{article.title}}</h3>
            <p class="article-description">{{ htmlToText(article.content) }}</p>
            <div class="article-meta">
              <div class="article-tags">
                <span>{{ article.newsType }}</span>
              </div>
              <span class="article-date">{{ article.createTime }}</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { htmlToText } from "@/utils";
import OSSImage from "./components/oss-image.vue";
export default {
  async asyncData({ $axios }) {
    try {
      const result = await $axios.get("/website/news/selectNews", {
        params: {
          pageNum: 1,
          pageSize: 20,
        }
      });
      const allNews = result?.list || [];
      return {
        banners: allNews.slice(0, 3),
        pinArticles: allNews.slice(3, 6),
        hotArticles: allNews.slice(6),
      };
    } catch (e) {
      return {
        banners: [],
        pinArticles: [],
        hotArticles: [],
      };
    }
  },
  data() {
    return {
      banners: [],
      pinArticles: [],
      hotArticles: [],
    };
  },
  components: {
    OSSImage
  },
  methods: {
    htmlToText
  },
};
</script>

<style lang="less" scoped>
.carousel {
  width: rem(684);
  height: rem(312);
  margin: rem(14) auto;
  border-radius: rem(12);
  overflow: hidden;

  ::v-deep {
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

.title {
  display: flex;
  padding-inline: rem(32);
  h2 {
    color: #242021;
    font-size: rem(30);
    margin: rem(20) 0;
  }
}

.pin-section {
  display: flex;
  column-gap: rem(20);
  overflow-x: auto;
  margin: 0 rem(32);

  .pin-item {
    flex-shrink: 0;
    position: relative;
    width: rem(266);
    height: rem(186);
    border-radius: rem(8);
    overflow: hidden;

    .pin-item-image {
      width: 100%;
      height: 100%;
      display: 100%;
    }

    .pin-item-text {
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

  .article-list {
    list-style: none;
    padding: 0;
    margin: 0;

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
}
</style>