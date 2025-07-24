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
  padding: rem(20) rem(40);
  margin-bottom: rem(40);
  background: #fff;
  border-radius: rem(16);
  box-shadow: rem(0) rem(1) rem(17) rem(1) rgba(8,1,3,0.07);
  .section-title {
    font-size: rem(40);
    font-weight: 800;
    color: #1841C3;
    padding: rem(20);
    margin: 0;
    border-bottom: rem(1) solid #F8F8F8;
  }

  .section-content {
    font-size: rem(22);
    line-height: rem(32);
    padding-block: rem(36);

    :deep p {
      margin: 0;
    }
  }
}

</style>