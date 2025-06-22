<template>
  <div class="home-container">
    <el-carousel class="carousel" arrow="never">
      <el-carousel-item v-for="(menu, index) in menus" :key="index">Hello Carousel</el-carousel-item>
    </el-carousel>
    <div class="title">
      <h2>置顶文章</h2>
    </div>
    <section class="pin-section">
      <div class="pin-item" v-for="(menu, index) in menus" :key="index">
        <img class="pin-item-image" src alt />
        <p class="pin-item-text">{{ menu.menuName }}</p>
      </div>
    </section>

    <div class="title">
      <h2>热点资讯</h2>
    </div>
    <section class="article-section">
      <ul class="article-list">
        <li class="article-item" v-for="(menu, index) in menus" :key="index">
          <img class="article-image" src alt />
          <div class="article-content">
            <h3 class="article-title">文章标题</h3>
            <p class="article-description">文章描述内容，简要介绍文章的主要内容。</p>
            <div class="article-meta">
              <div class="article-tags">
                <span>期待</span>
              </div>
              <span class="article-date">2024-01-01</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get("/website/menus/getWebMenus");
      if (res.code === 1) {
        return { menus: res.data };
      }
    } catch (e) {
      return { menus: [] };
    }
  },
  data() {
    return {
      menus: [
        {
          menuCode: "home",
          menuName: "首页",
          sonMenus: []
        },
        {
          menuCode: "news",
          menuName: "行业新闻",
          sonMenus: []
        },
        {
          menuCode: "finance",
          menuName: "财经",
          sonMenus: []
        },
        {
          menuCode: "futures",
          menuName: "期货",
          sonMenus: []
        },
        {
          menuCode: "technology",
          menuName: "科技",
          sonMenus: []
        },
        {
          menuCode: "consumption",
          menuName: "消费",
          sonMenus: []
        },
        {
          menuCode: "aboutUs",
          menuName: "关于我们",
          sonMenus: []
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.carousel {
  width: 684px;
  height: 312px;
  margin: 14px auto;
  border-radius: 12px;
  overflow: hidden;
}

.title {
  display: flex;
  padding-inline: 32px;
  h2 {
    color: #242021;
    font-size: 30px;
    margin: 20px 0;
  }
}

.pin-section {
  display: flex;
  column-gap: 20px;
  overflow-x: auto;
  margin: 0 32px;

  .pin-item {
    flex-shrink: 0;
    position: relative;
    width: 266px;
    height: 186px;
    border-radius: 8px;
    background-color: red;
    overflow: hidden;

    .pin-item-image {
      width: 100%;
      height: 100%;
      display: 100%;
    }

    .pin-item-text {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 10px;
      font-size: 20px;
      line-height: 20px;
      color: #fff;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

.article-section {
  margin: 0 32px;

  .article-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .article-item {
      display: flex;
      margin-bottom: 20px;
      padding: 16px;
      background: #fff;
      border-radius: 28px;
      box-shadow: 0px 10px 30px 0px rgba(176, 180, 193, 0.3);

      .article-image {
        width: 212px;
        height: 185px;
        border-radius: 28px;
        margin-right: 20px;
      }

      .article-content {
        flex: 1;

        .article-title {
          font-size: 30px;
          color: #242021;
          margin: 24px 0 0;
        }

        .article-description {
          font-size: 20px;
          color: #8a8a8a;
          margin: 14px 0 0;
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
          margin-top: 24px;

          .article-tags {
            display: flex;
            gap: 10px;

            span {
              padding: 8px 10px;
              border-radius: 30px;
              font-size: 18px;
              color: #fff;
              min-width: 100px;
              text-align: center;
              background: #0242AC;
            }
          }

          .article-date {
            font-size: 20px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>