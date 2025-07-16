<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb-list">
      <template v-for="(item, index) of items">
        <li class="breadcrumb-item breadcrumb-separator" v-if="index !== 0">
          <svg-icon name="arrow-right" />
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
  &-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: rem(40);
  }

  &-item {
    font-size: rem(24);
    color: #838383;
    margin-right: rem(12);
  }
}
</style>