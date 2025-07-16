<template>
  <div class="container">
    <breadcrumb class="breadcrumb" :items="breadcrumbs" />
    <Section class="section" title="免责声明">
      <div v-html="content"></div>
    </Section>
  </div>
</template>

<script>
import Section from "./components/section.vue";
import Breadcrumb from "./components/breadcrumb.vue";
export default {
  async asyncData({ $axios }) {
    try {
      const result = await $axios.get("/website/news/getNewsByType", {
        params: {
          newsType: "mzsm"
        }
      });
      return {
        content: result?.content || ""
      };
    } catch (e) {
      return {
        content: ""
      };
    }
  },
  components: {
    Section,
    Breadcrumb
  },
  data() {
    return {
      content: "",
      breadcrumbs: [
        { label: "拨云财经", route: "/mobile" },
        { label: "免责声明", route: "/mobile/disclaimer" }
      ]
    };
  }
};
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