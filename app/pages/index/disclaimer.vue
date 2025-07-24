<template>
  <div class="container">
    <breadcrumb class="breadcrumb" :items="breadcrumbs" />
    <Section class="section" title="免责声明">
      <div v-html="data?.content"></div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "./components/section.vue";
import Breadcrumb from "./components/breadcrumb.vue";

const breadcrumbs = [
  { label: "拨云财经", route: "/mobile" },
  { label: "免责声明", route: "/mobile/disclaimer" }
];

const { data } = await useRequest<any>('/website/news/getNewsByType', {
  params: {
    newsType: "mzsm"
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