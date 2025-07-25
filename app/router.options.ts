import type { RouterConfig } from '@nuxt/schema';

export default {
  scrollBehavior: (to, from, savedPosition) => {
    // if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return { el: document.getElementById('app'), top: 0, behavior: "smooth" };
    // }

    document.getElementById('app')?.scrollTo(0, 0);

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ el: document.getElementById('app'), left: 0, top: 0 })
    //   }, 500)
    // })
  },
} satisfies RouterConfig;
