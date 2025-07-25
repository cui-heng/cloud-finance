
export default defineNuxtRouteMiddleware((to, from) => {
  let userAgent = '';

  if (import.meta.server) {
    userAgent = useRequestHeaders(['user-agent'])['user-agent'] || '';
  }

  if (import.meta.client) {
    userAgent = navigator.userAgent || '';
  }

  if (/iPhone|iPad|iPod|Android/i.test(userAgent) && !to.path.startsWith('/mobile')) {
    return navigateTo({
      path: `/mobile${to.path}`,
      query: to.query,
    });
  }
});