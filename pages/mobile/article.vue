<template>
  <div class="container">
    <section class="article-section">
      <div class="article-header">
        <h2>{{ data.title }}</h2>
        <div class="article-meta">
          <span class="article-date">2024-01-01</span>
          <span class="article-views">5467次浏览</span>
        </div>
      </div>
      <div class="article-content" v-html="data.content"></div>
      <div class="article-extra">
        <div class="article-qrcode"><img src="" alt=""></div>
        <button class="article-button">在线客服</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const result = await $axios.get("/website/news/selectNews", {
        params: {
          id: 12,
        }
      });
      console.log("获取文章内容", result);
      return {
        data: result || {}
      };
    } catch (e) {
      return {
        data: {}
      };
    }
  },
  data() {
    return {
      data: {}
    };
  }
};
</script>

<style lang="less" scoped>
.article-section {
  padding: 0 rem(40);
  background: #fff;
  border-radius: rem(16);
  box-shadow: rem(0) rem(1) rem(17) rem(1) rgba(8, 1, 3, 0.07);
  margin: rem(26);
  .article-header {
    padding: rem(44) rem(26);
    border-bottom: rem(1) solid #F8F8F8;
    h2 {
      font-size: rem(60);
      font-weight: 800;
      color: #000;
      margin: 0;
      line-height: rem(72);
    }
    .article-meta {
      display: flex;
      justify-content: space-between;
      margin-top: rem(44);
      font-size: rem(24);
      color: #838383;

      .article-date {
        margin-right: rem(20);
      }

      .article-views {
        margin-left: rem(20);
      }
    }
  }
  h2 {
    font-size: rem(60);
    font-weight: 800;
    color: #000;
    margin: 0;
    line-height: rem(72);
  }

  p {
    font-size: rem(22);
    line-height: rem(60);
    text-indent: 2em;
  }

  .article-qrcode {
    width: rem(236);
    height: rem(236);
    padding: rem(14);
    background: #fff;
    box-shadow: rem(0) rem(1) rem(17) rem(1) rgba(8,1,3,0.07);
    border-radius: rem(33);
    margin: rem(40) auto 0;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .issue-button {
    
  }
}
</style>