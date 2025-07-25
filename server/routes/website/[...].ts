export default defineEventHandler(async (event) => {
  return proxyRequest(event, event.path, {
    fetch: $fetch.raw,
    fetchOptions: {
      baseURL: useRuntimeConfig().apiUrl,
    } as any,
  });
});