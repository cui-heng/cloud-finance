<template>
  <div class="about-container">
    <nav class="nav">
      <ul>
        <li>拨云财经</li>
        <li>></li>
        <li>关于我们</li>
      </ul>
    </nav>
    <section class="section">
      <h2>关于我们</h2>
      <p>李强签署国务院令 公布修订后的《国家自然科学基金条例》新华社北京11月14日电 国务院总理李强日前签署国务院令公布修订后的《国家自然科学基金条例》（以下简称《条例》）自2025年1月1日起施行

《条例》共7章45条修订的主要内容如下

一是坚持党中央集中统一领导明确工作原则

强调国家自然科学基金工作坚持党中央集中统一领导应当面向世界科技前沿、面向经济主战场、面向国家重大需求、面向人民生命健康

明确国家自然科学基金用
于资助基础研究支持人才培养和团队建设遵循公开、公平、公正的原则

确定基金资助项目时既要鼓励自由探索又要坚持目标导向

二是健全管理体制适应科技创新发展新趋势新要求

规定基金管理机构、有关部门以及依托单位的工作责任

明确基金主要来源于中央预算拨款同时鼓励多元化投入支持更多社会力量参与基础研究鼓励企业和其他组织投入资金开展联合资助建立科技创新合作机制

加强信息化建设完善科研诚信管理信息共享、基金资助项目成果共享等机制

三是完善资助制度发挥基金促进基础研究发展的作用

扩大依托单位范围除高等学校、科学研究机构、有关公益性机构以外其他符合国家规定的单位可以注册成为依托单位

明确设立专项资金用于培养青年科学技术人才支持在科学技术领域取得突出成绩且具有明显创新潜力的青年人才

优化重大原创性、交叉学科创新等基金资助项目的申请与评审程序完善基金绩效评价制度要求定期开展评价根据评价结果调整完善政策、改进管理、优化预算安排

四是加强科研诚信制度建设营造良好创新环境

在基金资助项目申请与评审阶段强化科研诚信审核力度落实科研诚信承诺要求规定申请人、参与者、依托单位以及基金管理机构工作人员、评审专家等均应当签署科研诚信承诺书并对有科研诚信严重失信行为的个人、组织按照国家有关规定实施联合惩戒</p>
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
    return {
      menus: [
        {
          menuCode: "home",
          menuName: "首页",
          sonMenus: []
        },
        {
          menuCode: "news",
          menuName: "行业新闻",
          sonMenus: []
        },
        {
          menuCode: "finance",
          menuName: "财经",
          sonMenus: []
        },
        {
          menuCode: "futures",
          menuName: "期货",
          sonMenus: []
        },
        {
          menuCode: "technology",
          menuName: "科技",
          sonMenus: []
        },
        {
          menuCode: "consumption",
          menuName: "消费",
          sonMenus: []
        },
        {
          menuCode: "aboutUs",
          menuName: "关于我们",
          sonMenus: []
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.nav {
  padding: 20px 26px 0;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 0 0 28px;
    line-height: 40px;
    li {
      font-size: 24px;
      color: #838383;
      margin-right: 12px;
    }
  }
}
.section {
  padding: 20px 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);
  margin: 0 26px 40px;
  h2 {
    font-size: 40px;
    font-weight: 800;
    color: #1841C3;
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid #F8F8F8;
  }

  p {
    font-size: 22px;
    line-height: 60px;
    text-indent: 2em;
  }
}

</style>