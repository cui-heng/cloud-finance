<template>
  <div class="container">
    <breadcrumb class="breadcrumb" :items="breadcrumbs" />
    <Section class="section" title="联系我们">
      <div v-html="data?.content"></div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "./components/section.vue";
import Breadcrumb from "./components/breadcrumb.vue";

const breadcrumbs = [
  { label: "拨云财经", route: "/mobile" },
  { label: "联系我们", route: "/mobile/contact" }
];

const { data } = await useRequest<any>('/website/news/getNewsByType', {
  params: {
    newsType: "lxwm"
  }
});
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 40px;
  
  .breadcrumb {
    margin-block: 6px;
  }
}
</style>