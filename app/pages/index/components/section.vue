<template>
  <section class="section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String
    }
  },
};
</script>

<style lang="less" scoped>
.section {
  padding: 10px 42px;
  background: #fff;

  .section-title {
    font-size: 32px;
    color: #273746;
    padding-block: 30px;
    border-bottom: 1px solid #EEE;
  }

  .section-content {
    font-size: 18px;
    line-height: 32px;
    padding-block: 24px;

    :deep p {
      margin: 0;
    }
  }
}

</style>