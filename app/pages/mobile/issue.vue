<template>
  <div class="issue-container">
    <section class="section">
      <div class="issue-header">
        <h2>请问现货黄金开户金开户收费吗?</h2>
        <div class="issue-meta">
          <span class="issue-date">2024-01-01</span>
          <span class="issue-views">5467次浏览</span>
        </div>
      </div>
      <div class="issue-content">
        <p>现货黄金开户通常是免费的，但有些平台可能会收取一定的手续费或保证金。建议在开户前仔细阅读相关条款，了解所有可能的费用。</p>
      </div>
      <div class="issue-extra">
        <div class="issue-qrcode"><img src="" alt=""></div>
        <button class="issue-button">在线客服</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get("/website/menus/getWebMenus");
      if (res.code === 1) {
        return { menus: res.data };
      }
    } catch (e) {
      return { menus: [] };
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.section {
  padding: 0 rem(40);
  background: #fff;
  border-radius: rem(16);
  box-shadow: rem(0) rem(1) rem(17) rem(1) rgba(8, 1, 3, 0.07);
  margin: rem(26);
  .issue-header {
    padding: rem(44) rem(26);
    border-bottom: rem(1) solid #F8F8F8;
    h2 {
      font-size: rem(60);
      font-weight: 800;
      color: #000;
      margin: 0;
      line-height: rem(72);
    }
    .issue-meta {
      display: flex;
      justify-content: space-between;
      margin-top: rem(44);
      font-size: rem(24);
      color: #838383;

      .issue-date {
        margin-right: rem(20);
      }

      .issue-views {
        margin-left: rem(20);
      }
    }
  }
  h2 {
    font-size: rem(60);
    font-weight: 800;
    color: #000;
    margin: 0;
    line-height: rem(72);
  }

  p {
    font-size: rem(22);
    line-height: rem(60);
    text-indent: 2em;
  }

  .issue-qrcode {
    width: rem(236);
    height: rem(236);
    padding: rem(14);
    background: #fff;
    box-shadow: rem(0) rem(1) rem(17) rem(1) rgba(8,1,3,0.07);
    border-radius: rem(33);
    margin: rem(40) auto 0;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .issue-button {
    
  }
}
</style>