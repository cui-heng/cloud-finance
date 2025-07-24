<template>
  <div class="card">
    <div class="card-header">
      <h3>
        <slot name="title">{{ title }}</slot>
      </h3>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.card {
  background: #fff;

  &-header {
    padding-block: 22px;
    border-bottom: 1px solid #E0E9F7;
    h3 {
      font-weight: normal;
      font-size: 20px;
      padding-left: 18px;
      color: #273746;
      border-left: 4px solid #034EFF;
    }
  }
}
  
</style>
