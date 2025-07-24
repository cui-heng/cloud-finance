export default defineNuxtPlugin((nuxtApp) => {
  const request = $fetch.create({
    onResponse({ response }) {
      const result = response._data;

      if (result.code !== 1) {
        throw new Error(result?.message || '接口异常');
      }

      response._data = result.data;
    },
  });

  return {
    provide: {
      request
    }
  }
})
