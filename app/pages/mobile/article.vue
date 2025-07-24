<template>
  <div class="container">
    <section class="article-section">
      <div class="article-header">
        <h2>{{ data?.title }}</h2>
        <div class="article-meta">
          <span class="article-date">更新时间：{{ data?.updateTime || data?.createTime }}</span>
          <span class="article-views">
            <SvgoEyes />
            <span style="margin-left: 6px;">{{ data?.browseNumber }}次浏览</span>
          </span>
        </div>
      </div>
      <div class="article-content" v-html="data?.content"></div>
      <div class="article-extra">
        <!-- <div class="article-qrcode"><img src="" alt=""></div>
        <button class="article-button">在线客服</button> -->
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useRequest<Website.Article>('/website/news/getNewsDetail', {
  params: {
    id: route.query.id
  }
});
</script>

<style lang="less" scoped>
.article-section {
  padding: 0 rem(40);
  background: #fff;
  border-radius: rem(16);
  box-shadow: rem(0) rem(1) rem(17) rem(1) rgba(8, 1, 3, 0.07);
  margin: rem(26);
  
  .article-header {
    padding: rem(42) rem(24);
    border-bottom: 1px solid #F8F8F8;
    h2 {
      color: #000;
      font-size: rem(60);
      line-height: rem(72);
    }

    .article-meta {
      display: flex;
      margin-top: rem(44);
      font-size: rem(22);
      color: #838383;

      .article-date {
        margin-right: rem(20);
      }

      .article-views {
        margin-left: rem(30);
      }
    }
  }

  .article-content {
    padding-block: 32px;
    :deep(p) {
      font-size: rem(22);
      line-height: rem(30);
    }
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