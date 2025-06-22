<template>
  <div class="mobile-container">
    <header class="header">
      <h1 class="header-logo">
        <img src="@/assets/images/mobile/logo.png" alt="拨云财经" />
      </h1>
      <div class="header-action"  @click="showMenu = true">
        1243
      </div>
    </header>
    <main class="main">
      <aside class="aside" :class="{ 'aside--show': showMenu }">
        <div class="aside-mask" @click="showMenu = false"></div>
        <nav class="aside-nav">
          <ul class="aside-menu">
            <li v-for="menu of menus" :key="menu.key">
              <nuxt-link class="aside-menu-item" :to="menu.route">{{ menu.label }}</nuxt-link>
              <ul class="aside-menu-children" :hidden="menu.key !== activeKey" v-if="menu.children?.length">
                <li v-for="subMenu of menu.children" :key="subMenu.key">
                  <nuxt-link :to="subMenu.route">{{ subMenu.label }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <nuxt-child />
    </main>
    <footer class="footer">
      <nav class="footer-nav">
        <ul>
          <li v-for="menu of menus" :key="menu.route">
            <nuxt-link :to="menu.route">{{ menu.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="footer-info">
        <p>京ICP备 19048506号-2 Copyright</p>
        <p>@2024 中国拨云财经有限公司 All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // async asyncData({ $axios }) {
  //   try {
  //     const res = await $axios.get('/website/menus/getWebMenus')
  //     if (res.code === 1) {
  //       return { menus: res.data }
  //     }
  //   } catch (e) {
  //     return { menus: [] }
  //   }
  // },
  data() {
    return {
      showMenu: false,
      activeKey: "home",
      menus: [
        {
          key: "home",
          label: "首页",
          route: "/mobile"
        },
        {
          key: "news",
          label: "行业新闻",
          route: "/mobile/news"
        },
        {
          key: "finance",
          label: "财经",
          route: "/mobile/finance"
        },
        {
          key: "futures",
          label: "期货",
          route: "/mobile/futures"
        },
        {
          key: "technology",
          label: "科技",
          route: "/mobile/technology"
        },
        {
          key: "consumption",
          label: "消费",
          route: "/mobile/consumption"
        },
        {
          key: "about",
          label: "关于我们",
          route: "/mobile/about",
          children: [
            {
              key: "about",
              label: "联系我们",
              route: "/mobile/contact"
            },
            {
              key: "advertising",
              label: "广告服务",
              route: "/mobile/advertising"
            },
            {
              key: "disclaimer",
              label: "免责声明",
              route: "/mobile/disclaimer"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    import("amfe-flexible");
  }
};
</script>

<style lang="less" scoped>
.mobile-container {
  width: 100%;
  height: 100%;
  font-size: 28px;
  background: #f0f0f0;
  overflow: auto;
}

.header {
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;
  padding-inline: 44px;

  &-logo {
    width: 276px;
    height: 76px;
    margin: 0;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}

.main {
}

.aside {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  z-index: 10;

  &--show {
    right: 0;

    .aside-mask {
      opacity: 0.45;
    }

    .aside-nav {
      right: 0;
    }
  }

  &-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease-in-out;
  }

  &-nav {
    position: absolute;
    right: -100%;
    width: 526px;
    height: 100%;
    background: #fff;
    padding-top: 80px;
    z-index: 11;
    transition: all 0.3s ease-in-out;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    a {
      color: #454545;
      text-decoration: none;
    }
  }

  &-menu {
    &-item {
      display: block;
      width: 392px;
      height: 74px;
      line-height: 74px;
      background: #ededed;
      margin: 0 auto 32px;
      text-align: center;
      font-size: 34px;
    }

    &-children {
      li {
        text-align: center;
        margin-bottom: 36px;
      }

      a {
        font-size: 28px;
      }
    }
  }
}

.footer {
  height: 237px;
  background: #3d3c44;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-nav {
    margin-top: 46px;
    padding-inline: 20px;
    padding-block: 22px;
    border-bottom: 1px solid #fff;

    ul {
      display: flex;
      justify-content: center;
      column-gap: 20px;
      list-style: none;
      padding: 0;
      margin: 0;

      a {
        color: #fff;
        font-size: 26px;
        text-decoration: none;
      }
    }
  }

  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 40px;
    p {
      margin: 0;
      text-align: center;
      color: #fff;
      font-size: 26px;
    }
  }
}
</style>