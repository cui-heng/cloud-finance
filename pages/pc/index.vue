<template>
  <div class="box_cont">
    <div class="tab_box" v-on:mouseleave="onMouseLeave()">
      <div class="cont_con">
        <div class="img_icon">
          <img src="@/assets/images/img/4@2x.png" alt="">
        </div>
        <div class="tab_co">
          <div v-on:mouseenter="onMouseEnter(index)" class="item_tab" :class="index === activeInd? 'active': ''" @click="chooseTab(index, item, 0)" v-for="(item, index) in tabArrs">{{ item }}</div>
          <div class="Industry_n" v-show="industryShow">
            <p v-for="item in secondListArr" @click="chooseTab(index, item, 1)">{{ item }}</p>
          </div>
          <div class="Industry_n about_sty" v-show="aboutMenu">
            <p v-for="item in aboutArr" @click="chooseTab(index, item, 2)">{{ item }}</p>
          </div>

          
        </div>
      </div>
    </div>
    <!-- swiper -->
    <div class="swip_box" v-if="!isShowDetail">
      <div class="swip_wrap">
        <el-carousel :interval="4000" height="430px">
          <el-carousel-item v-for="item in 6" :key="item">
            <img src="@/assets/images/img/3@2x (1).png" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- content -->
    <div class="news_box" :class="isShowDetail ? 'mt_30': ''">
      <div class="news_box_left" v-if="!isShowDetail">
        <div v-if="isShowAboutUs && lastInd == 0" class="about_us">
          <h3>关于我们</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金台智投，作为一家专业的财经新闻门户网站，不仅在北京地区拥有广泛的影响力，更在全国范围内为用户提供了丰富、及时的财经及相关领域的资讯。网站致力于打造一个多元化、权威性的信息交流平台，涵盖医药、能源、地产、汽车、农业、财经、证券、期货、基金、外汇、科技、消费等多个栏目，满足不同读者的信息需求。<br/>

        　　医药栏目<br/><br/>

        　　在医药领域，海洋财经网紧跟行业动态，实时报道国内外医药政策、新药研发、市场动态及医药企业的经营状况。通过对医药市场的深入分析，为投资者、医药行业从业者及消费者提供权威、全面的医药资讯。<br/><br/>

        　　能源栏目<br/><br/>

        　　能源栏目则聚焦于国内外能源市场的最新动态，包括石油、天然气、可再生能源等领域的新闻资讯。该栏目深入分析能源市场的供需状况、价格走势及政策导向，帮助读者把握能源行业的发展趋势和投资机会。<br/><br/>

        　　地产栏目<br/><br/>

        　　地产栏目为房地产从业者、投资者及购房者提供了全面的地产资讯。从政策解读、市场动态到项目推荐，地产栏目以专业的视角为读者剖析房地产市场的变化，助力读者做出明智的决策。<br/><br/>

        　　汽车栏目<br/><br/>

        　　汽车栏目涵盖了国内外汽车行业的最新动态，包括新车发布、汽车技术、市场分析、消费趋势等内容。该栏目不仅关注传统燃油车的市场动态，还紧跟新能源汽车的发展潮流，为读者提供全面、专业的汽车资讯。<br/><br/>

        　　农业栏目<br/><br/>

        　　农业栏目则专注于农业领域的新闻资讯，包括农业科技、农产品市场、农业政策等内容。通过对农业生产的深度报道，该栏目为农民、农业企业及消费者提供了有价值的农业信息，促进了农业产业的健康发展。<br/><br/>

        　　财经栏目<br/><br/>

        　　作为海洋财经网的核心栏目之一，财经栏目全面覆盖了宏观经济、货币政策、财政政策、产业经济等方面的新闻资讯。该栏目以专业的视角和深入的分析，为读者揭示了国内外财经市场的变化，提供了有价值的投资参考。<br/><br/>

        　　证券、期货、基金、外汇栏目<br/><br/>

        　　这些栏目分别针对证券、期货、基金和外汇市场进行深度报道和分析。从市场动态、投资策略到风险管理，这些栏目为投资者提供了全方位的金融市场信息，帮助投资者在复杂的市场环境中做出明智的投资决策。<br/><br/>

        　　科技与消费栏目<br/><br/>

        　　科技与消费栏目则聚焦于科技行业和消费市场的最新动态。从科技创新、人工智能、电子商务到消费者行为、新兴消费趋势，这些栏目为读者展示了科技与消费领域的最新发展，帮助读者把握科技潮流和消费趋势。<br/><br/>

        　　海洋财经网凭借其丰富的内容、专业的视角和及时的更新，已成为广大读者获取财经及相关领域资讯的重要平台。未来，海洋财经网将继续秉承“专业、权威、及时”的原则，为读者提供更多有价值的信息和深度的分析，助力读者在财经领域取得更大的成功。<br/><br/>
        </div>
        <div v-if="aboutStr == '联系我们'" class="about_us">
          <h3>联系我们</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;海洋财经网是一个专注于经济和金融领域的信息平台，致力于为用户提供全面、专业、及时的最新相关财经资讯与分析。网站的创建旨在促进海洋产业的发展，加强海洋经济与金融的结合，为企业、研究机构和个人用户提供可靠的信息支持。<br/><br/>

          联系我们：<br/><br/>

          邮箱：liuxg969@163.com<br/><br/>
        </div>
        <div v-if="aboutStr == '广告服务'" class="about_us">
          <h3>广告服务</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          投放须知

        　　1：只接受符合中国法律且内容健康向上的互联网方面的广告!<br/><br/>

        　　2：只接受以互联网、营销、站长类为用户群体的广告主，请你投放广告时候投放到最适合你的用户群体。<br/><br/>

        　　3：广告按月/季/半年支付，不欺骗，也不要高价，广告不做测试、也不承诺多少点击和效果、能给你带来多少利润。<br/><br/>

        　　4：广告商所做的广告如有虚假，或者有人举报为骗子或骗子公司，如广告商没办法做出有效答复或解释，本站有权利去除广告并不给予退款。<br/><br/>

        　　广告位细节<br/><br/>

        　　1：广告素材由广告主提供，海洋财经网工作人员进行审核。<br/><br/>

        　　2：广告可以是图片格式、flash，如JPG、PNG、GIF形式，GIF的帧数需在200帧以上。<br/><br/>

        　　3：广告的链接可以是网站URL链接、QQ客服链接、QQ群链接、微信链接等一切正规链接。(标红、违规链接禁止投放)。<br/><br/>

        　　4：每个广告位置，可投放1-3个广告，广告可设置轮换、设置轮换展示权重，由广告主自由选择。<br/><br/>

        　　海洋财经网不参与广告赞助商的经营行为，我们也无力判定和干预广告赞助商的经营行为，所以请广大用户谨慎对待广告赞助商的宣传，您应当自行判断宣传内容的真实性并为自己的判断行为负责。如果没有能力辨别宣传内容的真实性，请勿私下交易。投诉反馈发送到邮箱：liuxg969@163.com，我们会积极核实处理。<br/><br/>
        </div>
        <div v-if="aboutStr == '免责声明'" class="about_us">
          <h3>免责声明</h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          1、我方平台为信息发布平台，您的留言将在我方平台发布或提供给相应服务商。<br/><br/>

        　　2、如不需要发布信息，请勿在本平台留言。<br/><br/>

        　　3、若您的网站或机构从本站获取的一切资源进行商业使用，除来源为本站的资料需与本站协商外，其他资源请自行联系版权所有人。<br/><br/>

        　　会员必读<br/><br/>

        　　1.、本人对与任何包含、经由、或链接、下载或从任何与本网站有关服务所获得的资讯、内容或广告，不声明或保证其内容的正确性、真实性或可靠性;并且，对于您透过本网广告、资讯或要约而展示、购买或取得的任何产品、资讯或资料，本网站亦不负品质保证的责任。您与此接受并承认信赖任何信息所产生之风险应自行承担，本网对任何使用或提供本网站信息的商业活动及其风险不承担任何责任。<br/><br/>

        　　2、 本网站若因线路及非本本人控制范围外的硬件故障或其它不可抗力，以及黑客政击、计算机病毒侵入或发而造成的个人资料泄露、丢失、被盗用或被篡改等，本网站亦不负任何责任。<br/><br/>

        　　3.、当本网站以链接形式推荐其他网站内容时，本网站并不对这些网站或资源的真实性、可用性、合法性负责，且不保证从这些网站获取的任何内容、产品、服务或其他材料的真实性、合法性，对于任何因使用或信赖从此类网站上获取的内容、产品、资源、服务或其他材料而造成的任何直接或间接的损失均由您自行承担，本网站均不承担任何责任。<br/><br/>

        　　4、本网站在创业项目频道不提供项目加盟担保服务，只提供项目广告展示服务。<br/><br/>

        　　5、服务商公司必须是合法的工商登记的法人主体，提供的产品和服务必须符合法律规定，不得侵犯其他第三方的知识产权及权益，并履行自己发布信息所承诺的服务，否则, 我司有权根据司法机关、行政机关及相关权利主体的要求提供公司相关信息，给 我司造成负面影响及相关损失的， 我司保留追责权利。<br/><br/>

              二、补充条款<br/><br/>
        　　本网站所收集的部分公开资料来源于互联网，转载的目的在于传递更多信息及用于网络分享，并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议。如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时修改或删除。<br/><br/>

        　　本网站所提供的信息，只供参考之用。本网站不保证信息的准确性、有效性、及时性和完整性。本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误，对用户或任何其他人士负任何直接或间接责任。在法律允许的范围内，本网站在此声明，不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿。<br/><br/>
        </div>
        <div class="left_top" v-if="isShowTopHot">
          <div @click="chooseItemNews(item)" @mouseenter="enterTop(index)" :class="horizontal === index? 'horizSty': ''" @mouseleave="leaveTop()" class="top_hot_new" v-for="(item, index) in dataListObj.dataList.slice(0, 3)">
            <div class="month_day">{{ item.days }}</div>
            <div class="year_box">{{ item.year}}</div>
            <div class="tit_one">{{ item.title }}</div>
            <div class="img_new">
              <img :src="item.image" alt="">
            </div>
            <div class="top_cont">{{ item.content }}</div>
            <div class="check_out">查看详情
              >
            </div>
          </div>
        </div>
        <div class="normal_news">
          <div class="normal_box_item" @click="chooseItemNews(item)"  v-for="(item, index) in filterNews" @mouseenter="enterNormal(index)" :class="normalStyInd === index? 'norMalActive': ''" @mouseleave="normalieaveTop()">
            <div class="item_time">
              <div class="year">{{ item.year }}</div>
              <div class="month">{{ item.days }}</div>
            </div>
            <div class="cont_box">
              <div class="nor_tit">{{ item.title }}</div>
              <div class="nor_data">
                <dl>
                  <dt><img src="@/assets/images/img/icon-1@2x.png" alt=""></dt>
                  <dd>{{ item.tag }}</dd>
                </dl>
                <dl class="cen_dl">
                  <dt><img src="@/assets/images/img/icon-2@2x.png" alt=""></dt>
                  <dd> {{ Math.floor(Math.random() * (800 - 600 + 1)) + 600 }}</dd>
                </dl>
                <dl>
                  <dt><img src="@/assets/images/img/icon-13@2x.png" alt=""></dt>
                  <dd>{{ Math.floor(Math.random() * (200 - 20 + 1)) + 20 }}</dd>
                </dl>
              </div>
            </div>
            <div class="new_img">
              <img :src="item.image" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="news_box_left" :class="isShowDetail ? 'bg_fff': ''" v-if="isShowDetail">
        <div class="detail_tit">{{ nowNewsObj.title }}</div>
        <div class="detail_record">更新时间：{{ nowNewsObj.year }}-{{ nowNewsObj.days }} &nbsp;&nbsp;&nbsp;&nbsp;632人浏览</div>
        <div class="detail_img">
          <img :src="nowNewsObj.image" alt="">
        </div>
        <!-- <div class="content_deta">{{ nowNewsObj.content }}</div> -->
        
        <div class="content_deta" v-html=" '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + nowNewsObj.content.replace(/。/g, '<br/><br/>').replace(/，/g, '')"></div>
        <div class="disclaimer">声明：本站所有文章资源内容，如无特殊说明或标注，均为采集网络资源。如若本站内容侵犯了原著者的合法权益，可联系本站删除。</div>
        <div class="btn_good" @click="handleGood()">
          <img src="@/assets/images/img/good.png" alt="">
          <span>({{ goodsNums }})</span>
        </div>
      </div>
      <div class="news_box_right">
        <div class="right_hot">
          <div class="tit_rig">
            <span></span>热门
          </div>
          <div class="hot_con">
            <div class="hot_item" @click="chooseItemNews(item)" v-for="(item, index) in dataListObj.dataList.slice(0, 6)">
              <img v-if="index == 0" src="@/assets/images/img/1@2x.png" alt="">
              <img v-if="index == 1" src="@/assets/images/img/2@2x.png" alt="">
              <img v-if="index == 2" src="@/assets/images/img/3@2x.png" alt="">
              <span v-if="index > 2">{{index + 1 }}</span>
              {{ item.title }}</div>
          </div>
        </div>
        <div class="right_hot">
          <div class="tit_rig">
            <span></span>推荐
          </div>
          <div class="hot_con hot_many">
            <div class="" @click="chooseItemNews(item)"  v-for="(item, index) in dataListObj.dataList.slice(6, 12)">
              <div class="time_box">{{ item.year }}-{{ item.days }}</div>
              <div class="empty">
                {{ item.title }}
                <img src="@/assets/images/img/right.png" alt="">
              </div>
              </div>

          </div>
        </div>
        <div class=" right_hot right_hot_bott">
          <div class="tit_rig">
            <span></span>随机
          </div>
          <div class="hot_con">
            <div class="hot_item" @click="chooseItemNews(item)" v-for="(item, index) in dataListObj.dataList.slice(dataListObj.dataList.length - 6, dataListObj.dataList.length)">
              <span></span>
              {{ item.title }}</div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="footer">
      <div class="foo_sty">Copyright © 2024 北京金台智投科技有限公司 All Rights Reserved. 京ICP备2024075476号-1</div>
    </div>
  </div>
</template>
<script>
import dataListObj from './data.json'
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get('website/menus/getWebMenus')
      console.log(res, '111')
      return { menus: res.data || [] }
    } catch (e) {
      return { menus: [] }
    }
  },
  data() {
    return {
      menus: [],
      activeName: 'second',
      activeInd: 0,
      isShowDetail: false,
      horizontal: null,
      normalStyInd: null,
      industryShow: false,
      aboutMenu: false,
      isShowTopHot: true,
      tabArrs: [
      '首页', '行业新闻', '财经', '期货', '科技', '消费', '关于我们'
      ],
      secondListArr: [
        "医疗", '能源', '地产', '汽车'
      ],
      aboutArr: [
        "联系我们", '广告服务', '免责声明'
      ],
      nowNewsObj: {},
      isShowAboutUs: false,
      goodsNums: 632,
      filterTag: null,
      aboutStr: null,
      lastInd: 0,
      dataListObj,
      
    };
  },
  computed: {
    filterNews() {
      if (this.filterTag) {
        if (this.filterTag == '行业新闻') {
          return this.dataListObj.dataList.filter(item => item.tag == '医疗' || item.tag == '能源' || item.tag == '地产' || item.tag == '汽车')
        }
        return this.dataListObj.dataList.filter(item => item.tag == this.filterTag)
      }
      return this.dataListObj.dataList.slice(3, this.dataListObj.dataList.length)
    }
  },
  methods: {
    handleGood() {
      this.goodsNums = 633
    },
    chooseItemNews(item) {
      this.isShowDetail = true
      this.nowNewsObj = item
    },
    enterTop(ind) {
      this.horizontal = ind
    },
    enterNormal(ind) {
      this.normalStyInd = ind
    },
    normalieaveTop() {
      this.normalStyInd = null
    },
    leaveTop() {
      this.horizontal = null
    },
    chooseTab(ind, e, flag) {
      this.isShowDetail = false
      this.industryShow = false
      this.aboutMenu = false
      this.isShowAboutUs = false
      this.aboutStr = null
      if (flag == 0) {
        this.activeInd = ind
      }
      if (ind == 0) {
        this.isShowTopHot = true
        this.filterTag = null
        this.aboutStr = null
      } else {
        if (e === '关于我们') {
          this.isShowAboutUs = true
          this.lastInd = 0
        }
        if (flag == 2) {
          this.aboutStr = e
        }
        this.filterTag = e
        this.isShowTopHot = false
      }
    },
    onMouseEnter(ind) {
      this.industryShow = false
      this.aboutMenu = false
      
      if (ind == 1) {
        this.industryShow = true
      }
      if (ind == 6) {
        this.aboutMenu = true
      }
    },
    onMouseLeave(ind) {
      this.industryShow = false
      this.aboutMenu = false
    }
  },
  mounted(){
    
  }
};
</script>

<style lang="less" scoped>
  .box_cont {
    font-family: PingFangSC, PingFang SC;
    background: #F3F6FB;
    height: 100vh;
    overflow: scroll;
    .tab_box {
      height: 80px;
      background: #011023;
      .cont_con {
        width: 1220px;
        margin: 0 auto;
        height: 80px;
        font-size: 18px;
        color: #fff;
        display: flex;
        align-items: center;
        .img_icon {
          width: 162px;
          height: 39px;
          margin-right: 65px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .tab_co {
          display: flex;
          position: relative;
          .Industry_n {
            padding: 20px 0 10px 0;
            width: 100px;
            height: auto;
            position: absolute;
            background: #fff;
            color: #000;
            font-size: 16px;
            font-weight: 500;
            z-index: 99;
            top: 44px;
            left: 76px;
            text-align: center;
            p {
              margin-bottom: 10px;
              cursor: pointer;
            }
          }
          .about_sty {
            left: 571px !important;
          }
          .item_tab {
            margin-right: 55px;
            cursor: pointer;
            font-family: PingFangSC, PingFang SC;
            position: relative;
          }
          .active:after {
            content: '';
            width: 100%;
            height: 4px;
            background: #fff;
            position: absolute;
            bottom: -24px;
            left: 0px;
          }
        }
      }
    }
    .swip_box {
      height: 430px;
      background: #011023;
      margin-bottom: 40px;
      .swip_wrap {
        width: 1200px;
        height: 430px;
        margin: 0 auto;
      }
    }
    .news_box {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      
      .news_box_left {
        width: 860px;
        .about_us {
          background: #fff;
          padding: 0 30px;
          font-size: 16px;
          padding-top: 20px;
          h3 {
            color:#007bff !important;
            height: 50px;
            border-bottom: 2px solid #f0f4f7;
            margin-bottom: 30px;
          }
          }
        .left_top {
          width: 100%;
          height: 450px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          
          .top_hot_new {
            height: 450px;
            width: 280px;
            background: #fff;
            padding: 20px 20px;
            padding-bottom: 0;
            .month_day {
              font-family: PingFangSC, PingFang SC;
              font-weight: bold;
              font-size: 28px;
              color: #273746;
              margin-bottom: 3px;
            }
            .year_box {
              font-weight: 400;
              font-size: 16px;
              color: #999999;
              margin-bottom: 20px;
            }
            .tit_one {
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 18px;
              color: #273746;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 20px;
            }
            .img_new {
              width: 244px;
              height: 170px;
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .top_cont {
              font-weight: 400;
              font-size: 14px;
              color: #666666;
              line-height: 26px;
              font-family: PingFangSC, PingFang SC;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              font-weight: 500;
              margin-bottom: 20px
            }
          }
          .horizSty {
            border-bottom: 4px solid #034EFF;
            .check_out {
              color: #034EFF
            }
          }
        }
        .normal_news {
          height: auto;
          .normal_box_item {
            width: 100%;
            height: 149px;
            background: #FFFFFF;
            margin-bottom: 18px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            .item_time {
              margin-right: 15px;
              width: 98px;
              height: 92px;
              background: #FFFFFF;
              border: 1px solid #EEEEEE;
              margin-top: 26px;
              margin-left: 26px;
              padding-top: 22px;
              padding-left: 26px;
              .year {
                font-weight: 400;
                font-size: 20px;
                color: #273746;
                font-weight: 500;
              }
              .month {
                font-weight: 400;
                font-size: 14px;
                color: #BBBBBB;
              }
            }
            .cont_box {
              flex: 1;
              margin-top: 35px;
              font-weight: 500;
              font-size: 20px;
              color: #273746;
              font-family: PingFangSC, PingFang SC;
              .nor_tit {
                margin-bottom: 35px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 520px;
              }
              .nor_data {
                display: flex;
                font-weight: 400;
                font-size: 14px;
                color: #B4B7BF;
                .cen_dl {
                  margin: 0 30px;
                  margin-top: 10px;
                }
                dl {
                  display: flex;
                  dt {
                    margin-right: 5px;
                    width: 16px;
                    height: 14px;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
              }
            }
            .new_img {
              width: 170px;
              height: 110px;
              margin-top: 20px;
              margin-right: 16px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            box-sizing: border-box;
          }
          .norMalActive {
            border-left: 4px solid #034EFF;
            box-sizing: border-box;
            .item_time {
              margin-left: 22px !important;
            }
          }
        }
      }
      .bg_fff {
        background: #fff;
        padding: 40px;
        .detail_tit {
          font-weight: bold;
          font-size: 32px;
          color: #273746;
          margin-bottom: 20px;
        }
        .detail_record {
          font-weight: 400;
          font-size: 16px;
          color: #999999;
          border-bottom: 1px solid #eeecec;
          height: 50px;
          margin-bottom: 40px;
        }
        .detail_img {
          width: 778px;
          height: 473px;
          margin-bottom: 36px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content_deta {
          font-weight: 400;
          font-size: 18px;
          color: #273746;
          line-height: 32px;
          margin-bottom: 32px;
        }
        .disclaimer {
          width: 776px;
          height: 44px;
          background: #F3F7FF;
          border-radius: 4px;
          font-weight: 400;
          font-size: 12px;
          color: #999999;
          text-align: center;
          line-height: 44px;
          margin-bottom: 32px;
        }
        .btn_good {
          font-weight: 400;
          font-size: 20px;
          color: #FFFFFF;
          width: 227px;
          height: 58px;
          background: #034EFF;
          border-radius: 4px;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
          display: flex;
          cursor: pointer;
          img {
            width: 20px;
            height: 19px;
            margin-right: 15px;
          }
        }
      }
      .news_box_right {
        width: 320px;
        height: 100%;
        .right_hot {
          background: #fff;
          margin-bottom: 20px;
          padding-bottom: 5px;
          .hot_con {
            .hot_item {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 24px;
              cursor: pointer;
              span {
                font-weight: bold;
                font-size: 14px;
                color: #D0D0D0;
                margin-right: 16px;
                font-style: italic;
                margin-left: 5px;
              }
              img {
                width: 30px;
                height: 30px;
                transform: translateY(5px);
              }
            }
            padding: 0 20px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #273746;
            
          }
          .hot_many {
              .empty {
                width: 96%;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                line-height: 25px;
                border-bottom: 1px solid #eee;
                height: 57px;
                margin-bottom: 20px;
                padding-right: 17px;
                cursor: pointer;
                position: relative;
                img {
                  position: absolute;
                  right: 0;
                  bottom: 10px
                }

              }
              
            
            .time_box {
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #999999;
              margin-bottom: 10px;
            }
          }
        }
        .right_hot_bott {
          .hot_item {
            cursor: pointer;
            span {
              width: 6px;
              height: 6px;
              background: #BBCFFF;
              border-radius: 50%;
              display: inline-block;
            }
          }
        }
      }
    }
    .mt_30 {
      margin-top: 30px;
    }
    .footer {
      background: #06060B;
      height: 116px;
      overflow: hidden;
      .foo_sty {
        color: #ccc;
        text-align: center;
        margin-top: 48px;
      }
    }
  }
  .tit_rig {
    height: 68px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 20px;
    line-height: 68px;
    color: #273746;
    padding-left: 18px;
    border-bottom: 1px solid #E0E9F7;
    margin-bottom: 20px;
    position: relative;
    span {
      position: absolute;
      width: 4px;
      height: 22px;
      background: #034EFF;
      display: inline-block;
      left: 0;
      top: 23px;
    }
  }
  ::v-deep .el-carousel {
    height: 100%;
  }
</style>
