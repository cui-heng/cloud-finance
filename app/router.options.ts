import type { RouterConfig } from '@nuxt/schema';

export default {
  scrollBehavior: (to, from, savedPosition) => {
    return {
      top: 0,
    };
  },
} satisfies RouterConfig;
