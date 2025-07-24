<template>
  <nav class="breadcrumb">
    <span class="breadcrumb-location">当前位置：</span>
    <ul class="breadcrumb-list">
      <template v-for="(item, index) of items">
        <li class="breadcrumb-item breadcrumb-separator" v-if="index !== 0">
          <SvgoRight />
        </li>
        <li class="breadcrumb-item">{{ item.label }}</li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "breadcrumb",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="less" scoped>
.breadcrumb {
  display: flex;
  align-items: center;

  &-location {
    color: #999;
    font-size: 14px;
  }

  &-list {
    display: flex;
    list-style: none;
    line-height: 26px;
  }

  &-item {
    color: #999;
    font-size: 14px;
  }
}
</style>