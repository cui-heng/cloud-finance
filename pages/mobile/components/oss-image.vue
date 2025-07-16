<template>
  <img :src="fullSrc" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'OSSImage',
  props: {
    src: {
      type: String
    }
  },
  computed: {
    fullSrc() {
      if (this.src.includes('http')) {
        return this.src;
      }
      return process.env.OSS_API_URL + this.src;
    }
  },
};
</script>