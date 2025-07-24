<template>
  <img :src="fullSrc" v-bind="$attrs" />
</template>

<script setup lang="ts">
interface OSSImageProps {
  src: string;
}

const props = defineProps<OSSImageProps>();

const runtimeConfig = useRuntimeConfig();

const fullSrc = computed(() => {
  if (props.src.includes('http')) {
    return props.src;
  }
  return runtimeConfig.public.ossApiUrl + props.src;
});
</script>