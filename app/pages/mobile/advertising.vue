<template>
  <div class="container">
    <breadcrumb class="breadcrumb" :items="breadcrumbs" />
    <Section class="section" title="广告服务">
      <div v-html="data?.content"></div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "./components/section.vue";
import Breadcrumb from "./components/breadcrumb.vue";

const breadcrumbs = [
  { label: "拨云财经", route: "/mobile" },
  { label: "广告服务", route: "/mobile/advertising" }
];

const { data } = await useRequest<any>('/website/news/getNewsByType', {
  params: {
    newsType: "ggfw"
  }
});
</script>

<style lang="less" scoped>
.container {
  padding: rem(20) rem(26) 0;

  .breadcrumb {
    margin-left: rem(16);
    margin-bottom: rem(10);
  }
}
</style>