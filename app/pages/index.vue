<template>
  <div class="container">
    <header class="header">
      <div class="header-inner">
        <NuxtLink class="header-logo" to="/">
          <img width="162" height="40" src="~/assets/images/logo.png" alt="拨云财经" />
        </NuxtLink>
        <nav class="header-nav">
          <ul class="nav-menu">
            <li class="nav-menu-item" :class="{ 'nav-menu-item--active': isHomePage }">
              <NuxtLink to="/">首页</NuxtLink>
            </li>
            <li class="nav-menu-item" :class="{ 'nav-menu-item--active': activeKey === menu.menuCode }" v-for="menu of menus" :key="menu.menuCode">
              <template v-if="menuRouteMap.get(menu.menuCode)">
                <NuxtLink :to="menuRouteMap.get(menu.menuCode)">{{ menu.menuName }}</NuxtLink>
              </template>
              <span v-else>{{ menu.menuName }}</span>
              <SvgoArrowDown v-if="menu.sonMenus?.length" />
              <ul
                class="nav-menu-children"
                :hidden="menu.menuCode !== activeKey"
                v-if="menu.sonMenus?.length"
              >
                <li
                  class="nav-menu-item"
                  v-for="subMenu of menu.sonMenus"
                  :key="subMenu.menuCode"
                >
                  <template v-if="menuRouteMap.get(subMenu.menuCode)">
                    <NuxtLink :to="menuRouteMap.get(subMenu.menuCode)">{{ subMenu.menuName }}</NuxtLink>
                  </template>
                  <span v-else>{{ subMenu.menuName }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main" :class="{ 'main--full': isHomePage }">
      <NuxtPage />
    </main>
    <footer class="footer">
      <nav class="footer-nav">
        <ul>
          <li v-for="menu of menus" :key="menu.menuCode">
            <template v-if="menuRouteMap.get(menu.menuCode)">
              <NuxtLink :to="menuRouteMap.get(menu.menuCode)">{{ menu.menuName }}</NuxtLink>
            </template>
            <span v-else>{{ menu.menuName }}</span>
          </li>
        </ul>
      </nav>
      <p class="footer-info">
        <span>Copyright @2024 中国拨云财经有限公司 All Rights Reserved</span>
        <span>京ICP备 19048506号-1</span>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['device-redirect']
});

const route = useRoute();
const { data: menus } = await useRequest<Website.Menu[]>("/website/menus/getWebMenus");

const isHomePage = computed(() => route.path === '/');

const menuRouteMap = new Map([
  ["lxwm", "/contact"],
  ["mzsm", "/disclaimer"],
  ["ggfw", "/advertising"],
  ["yl", "/news/yl"],
  ["ny", "/news/ny"],
  ["dc", "/news/dc"],
  ["qc", "/news/qc"],
  ["cj", "/finance"],
  ["qh", "/forward"],
  ["kj", "/technology"],
  ["xf", "/consume"]
]);

const activeKey = computed(() => {
  if (['/contact', '/disclaimer', '/advertising'].includes(route.path)) {
    return 'gywm';
  }
  
  if (/\/news\/.+/ig.test(route.path)) {
    return 'hyxw';
  }

  for (const [key, value] of menuRouteMap.entries()) {
    if (route.path.startsWith(value)) {
      return key;
    }
  }

  return 'home';
});
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #010E1F;

  &-inner {
    width: 1200px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  &-logo {
    width: 162px;
    height: 40px;
    margin: 0;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}

.header-nav {
  flex: 1;
  margin-left: 64px;

  .nav-menu {
    display: flex;
    column-gap: 54px;

    &-item {
      position: relative;
      padding-block: 28px;
      font-size: 18px;
      color: #fff;
      border-bottom: 2px solid transparent;

      &--active {
        border-bottom-color: #fff;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 10px;
      }

      &:hover {
        border-bottom-color: #fff;

        & > .nav-menu-children {
          display: block;
        }
      }

      a,
      span {
        cursor: pointer;
        text-decoration: none;
      }

      > .nav-menu-children {
        display: none;
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        background: #010E1F;

        .nav-menu-item {
          min-width: 100px;
          padding: 12px 8px;
        }
      }
    }
  }
}

.main {
  width: 1200px;
  margin: 0 auto;
  min-height: 300px;

  &--full {
    width: 100%;
  }
}

.footer {
  box-sizing: border-box;
  height: 118px;
  background: #06060B;
  padding-block: 30px;

  &-nav {
    width: 1200px;
    margin: 0 auto 20px;
    ul {
      display: flex;
      column-gap: 20px;
      list-style: none;
      padding: 0;
      margin: 0;

      a,
      span {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  &-info {
    width: 1200px;
    color: #fff;
    margin: 0 auto;
    line-height: 20px;
  }
}
</style>