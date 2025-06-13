<template>
  <div>
    <h2>移动端菜单</h2>
    <ul>
      <li v-for="menu in menus" :key="menu.menuCode">
        {{ menu.menuName }}
        <ul v-if="menu.sonMenus && menu.sonMenus.length">
          <li v-for="sub in menu.sonMenus" :key="sub.menuCode">
            - {{ sub.menuName }}
          </li>
        </ul>
      </li>
    </ul>
    <h1>移动端首页</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get('/website/menus/getWebMenus')
      if (res.code === 1) {
        return { menus: res.data }
      }
    } catch (e) {
      return { menus: [] }
    }
  },
  data() {
    return {
      menus: []
    }
  }
}
</script>