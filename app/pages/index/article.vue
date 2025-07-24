<template>
  <div class="container">
    <Breadcrumb :items="breadcrumbs" />
    <div class="section-wrapper">
      <section class="section article">
        <div class="article-header">
          <h2>{{ data?.title }}</h2>
          <div class="article-meta">
            <span class="article-date">更新时间：{{ data?.createTime }}</span>
            <span class="article-views">{{ data?.browseNumber }}人浏览</span>
          </div>
        </div>
        <div class="article-content" v-html="data?.content"></div>
        <div class="article-extra">
          <div class="article-tips">
            声明：本站所有文章资源内容，如无特殊说明或标注，均为采集网络资源。如若本站内容侵犯了原著者的合法权益，可联系本站删除。
          </div>
          <button class="article-like" @click="handleArticleLike">
            <SvgoLikeFilled />
            <span style="margin-left: 4px;">赞</span>
          </button>
        </div>
      </section>
      <aside class="aside">
        <HotCard />
        <SuggestCard />
        <RandomCard />
      </aside>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './components/breadcrumb.vue';

const breadcrumbs = [
  { label: "拨云财经", route: "/mobile" },
  { label: "关于我们", route: "/mobile/contact" }
];

const route = useRoute();
const nuxtApp = useNuxtApp();

const { data } = await useRequest<Website.Article>('/website/news/getNewsDetail', {
  params: {
    id: route.query.id
  }
});

function handleArticleLike() {
  nuxtApp.$request('/website/news/thumbsUpNews', {
    method: 'POST',
    body: { id: route.query.id },
  }).then(() => {
    ElMessage.success('点赞成功');
  });
}
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 40px;

  .breadcrumb {
    margin-block: 6px;
  }

  .section-wrapper {
    display: flex;
  }

  .article {
    flex: 1;
    background: #fff;
    padding-block: 28px;
    padding-inline: 42px;


    &-header {
      border-bottom: 1px solid #eee;
      h2 {
        font-size: 32px;
        color: #273746;
        margin-bottom: 26px;
      }
    }

    &-meta {
      display: flex;
      color: #999;
      font-size: 16px;
      margin-bottom: 26px;
    }

    &-views {
      margin-left: 50px;
    }

    &-content {
      padding: 26px 0 16px;

      :deep(p) {
        font-size: 18px;
        line-height: 1.6;
        color: #273746;
        margin-block: 14px;
      }
    }

    &-tips {
      padding-block: 14px;
      font-size: 12px;
      color: #999;
      border-radius: 4px;
      background: #F3F7FF;
      text-align: center;
    }

    &-like {
      display: block;
      width: 227px;
      height: 58px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
      background: #034EFF;
      margin: 30px auto 0;
      outline: none;
      border: none;
    }
  }

  .aside {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 320px;
    margin-left: 24px;
  }
}
</style>