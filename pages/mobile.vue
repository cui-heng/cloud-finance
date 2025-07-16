<template>
  <div class="mobile-container">
    <header class="header">
      <h1 class="header-logo">
        <img src="@/assets/images/mobile/logo.png" alt="拨云财经" />
      </h1>
      <div class="header-action" @click="showMenu = true">
        <svg-icon name="menu" />
      </div>
    </header>
    <main class="main">
      <aside class="aside" :class="{ 'aside--show': showMenu }">
        <div class="aside-mask" @click="showMenu = false"></div>
        <nav class="aside-nav">
          <ul class="aside-menu">
            <li v-for="menu of menus" :key="menu.menuCode">
              <div
                class="aside-menu-item"
                :class="{ 'aside-menu-item--active': activeKey === menu.menuCode }"
                @click="toggleMenu(menu)"
              >
                <template v-if="menuRouteMap.get(menu.menuCode)">
                  <nuxt-link :to="menuRouteMap.get(menu.menuCode)">{{ menu.menuName }}</nuxt-link>
                </template>
                <span v-else>{{ menu.menuName }}</span>
                <svg-icon name="arrow-down" v-if="menu.sonMenus?.length" />
              </div>
              <ul
                class="aside-menu-children"
                :hidden="menu.menuCode !== activeKey"
                v-if="menu.sonMenus?.length"
              >
                <li
                  v-for="subMenu of menu.sonMenus"
                  :key="subMenu.menuCode"
                  @click="showMenu = false"
                >
                  <template v-if="menuRouteMap.get(subMenu.menuCode)">
                    <nuxt-link :to="menuRouteMap.get(subMenu.menuCode)">{{ subMenu.menuName }}</nuxt-link>
                  </template>
                  <span v-else>{{ subMenu.menuName }}</span>
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
          <li v-for="menu of menus" :key="menu.menuCode">
            <template v-if="menuRouteMap.get(menu.menuCode)">
              <nuxt-link :to="menuRouteMap.get(menu.menuCode)">{{ menu.menuName }}</nuxt-link>
            </template>
            <span v-else>{{ menu.menuName }}</span>
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
  async asyncData({ $axios }) {
    try {
      const result = await $axios.get("/website/menus/getWebMenus");
      return {
        menus: [
          {
            menuCode: "home",
            menuName: "首页",
            sonMenus: []
          },
          ...result
        ]
      };
    } catch (e) {
      return {
        menus: []
      };
    }
  },
  data() {
    return {
      showMenu: false,
      activeKey: "home",
      menus: [],
      menuRouteMap: new Map([
        ["home", "/mobile"],
        ["lxwm", "/mobile/contact"],
        ["mzsm", "/mobile/disclaimer"],
        ["ggfw", "/mobile/advertising"]
      ])
    };
  },
  mounted() {
    import("amfe-flexible");
  },
  methods: {
    toggleMenu(menu) {
      this.activeKey = menu.menuCode;

      if (!menu.sonMenus?.length) {
        this.showMenu = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mobile-container {
  width: 100%;
  height: 100%;
  font-size: rem(32);
  background: #fff;
  overflow: auto;
}

.header {
  height: rem(100);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: rem(44);

  &-logo {
    width: rem(276);
    height: rem(76);
    margin: 0;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .icon {
    width: rem(44);
    height: rem(44);
    color: #333;
  }
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
    width: rem(526);
    height: 100%;
    background: #fff;
    padding-top: rem(80);
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
      position: relative;
      display: block;
      width: rem(392);
      height: rem(74);
      line-height: rem(74);
      background: #ededed;
      margin: 0 auto rem(32);
      text-align: center;
      color: #454545;
      font-size: rem(34);

      .icon {
        position: absolute;
        top: 50%;
        right: rem(42);
        width: rem(28);
        font-size: rem(28);
        transform: translateY(-50%);
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
      }

      &--active {
        background: #f8f8f8;
        color: #0242ac;
        border-left: rem(5) solid #0242ac;

        .icon {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &-children {
      li {
        text-align: center;
        margin-bottom: rem(36);
      }

      a {
        font-size: rem(28);
      }
    }
  }
}

.footer {
  height: rem(237);
  background: #3d3c44;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-nav {
    margin-top: rem(46);
    padding-inline: rem(20);
    padding-block: rem(22);
    border-bottom: rem(1) solid #fff;

    ul {
      display: flex;
      justify-content: center;
      column-gap: rem(20);
      list-style: none;
      padding: 0;
      margin: 0;

      a,
      span {
        color: #fff;
        font-size: rem(26);
        text-decoration: none;
      }
    }
  }

  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: rem(40);
    p {
      margin: 0;
      text-align: center;
      color: #fff;
      font-size: rem(26);
    }
  }
}
</style>