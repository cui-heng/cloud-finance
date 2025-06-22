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
  padding: 0 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 1px 17px 1px rgba(8, 1, 3, 0.07);
  margin: 26px;
  .issue-header {
    padding: 44px 26px;
    border-bottom: 1px solid #F8F8F8;
    h2 {
      font-size: 60px;
      font-weight: 800;
      color: #000;
      margin: 0;
      line-height: 72px;
    }
    .issue-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 44px;
      font-size: 24px;
      color: #838383;

      .issue-date {
        margin-right: 20px;
      }

      .issue-views {
        margin-left: 20px;
      }
    }
  }
  h2 {
    font-size: 60px;
    font-weight: 800;
    color: #000;
    margin: 0;
    line-height: 72px;
  }

  p {
    font-size: 22px;
    line-height: 60px;
    text-indent: 2em;
  }

  .issue-qrcode {
    width: 236px;
    height: 236px;
    padding: 14px;
    background: #fff;
    box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);
    border-radius: 33px;
    margin: 40px auto 0;
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