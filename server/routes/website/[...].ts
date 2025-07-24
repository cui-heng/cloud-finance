export default defineEventHandler(async (event) => {
  return proxyRequest(event, event.path, {
    fetch: $fetch.raw,
    fetchOptions: {
      baseURL: 'http://47.105.51.87:8080',
    } as any,
  });
});