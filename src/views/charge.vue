<template>
  <div class="main ub ub-ver">
    <div class="toper ub ub-ac">
      <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac">
        <i class="icon_search mr05"></i>会员查询</div>
      <div class="openMember tx-c"  @click="toAddMember">
        <i class="icon_member"></i>
        <p class="tx-c f12">开通会员</p>
      </div>
      <div class="openMore tx-c mr05" @click="showMenu">
        <i class="icon_more"></i>
        <p class="tx-c f12">更多</p>
      </div>
    </div>
    <div class="modal1" v-show="isShowMenu">
      <div class="mask1" @click="closeModal1()"></div>
      <div class="arrow-up"></div>
      <ul class="menu">
        <li class="ub ub-ac ub-pc bbc" @click="toPath('/orderList')">
          <span class="icon_orderlist"></span>
          历史订单
        </li>
        <li class="ub ub-ac ub-pc" @click="toOrder">
          <span class="icon_sk"></span>
          直接收款
        </li>
      </ul>
    </div>
    <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
      <img src="../assets/user.png" class="udb bac" @click="toMemberInfo">
      <div class="ub-f1 ml10" @click="toMemberInfo">
        <p class="f12 bc1 ub ub-ac" v-if="isShowMember">{{chargeInfo.memberInfo.customer.customerName}}
          <i class="icon_male ml05" v-if="chargeInfo.memberInfo.customer.gender==1"></i>
          <i class="icon_women ml05" v-if="chargeInfo.memberInfo.customer.gender==0"></i>
          <i class="icon_weizhi ml05" v-if="chargeInfo.memberInfo.customer.gender==2"></i>
          <i class="icon_card ml10" v-if="chargeInfo.memberInfo.cardApplies.length>0"></i>
        </p>
        <p class="f12 mt05 bc1">{{chargeInfo.memberInfo.customer.phone}}</p>
      </div>
      <div class="userbtn btn_vc" @click="toMemberCard">售卡/充值</div>
    </div>
    <!-- <div class="content ub-f1 ub" ref="menuWrapper" style="padding-bottom: 50px;">
            <ul class="sidebar">
                <li v-for="(item,index) in productList" :key="index" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">{{item.title}}</li>
            </ul>
            <div class="ub-f1 h100 cate-list" id="app-root " ref="foodWrapper">
                <li v-for="(item,index) in productList" class="cate-item section food-list-hook" :id="item.if" :key="index" @updateCount="updateCount">
                    <p>{{item.title}}</p>
                    <productItem v-for="(it,i) in item.arr" :productInfo="it" :key="i"></productItem>
                </li>
            </div>
        </div> -->

    <div class="good ub-f1" :class="isShowMember?'good106':''">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="menu-item border-1px" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
            {{item.categoryName}}
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodWrapper" style="background:#fff;">
        <ul>
          <li v-for="(item, index)  in goods" :key="index" class="food-list food-list-hook">
            <h1 class="title">{{item.categoryName}}</h1>
            <ul>
              <li v-for="(food, index2)  in item.productList" :key="index2" class="food-item ub ub-ac">
                <div class="icon">
                  <img :src="food.picUrl || 'src/assets/default.png'" alt="" width="80" height="80">
                </div>
                <div class="content ub-f1">
                  <h2 class="name">{{food.productName}}</h2>
                  <div class="extra">
                    <p class="count">{{food.productNo}}</p>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.currentPrice/100}}</span>
                  </div>
                </div>
                <div class="cartControl-wrapper">
                  <cartControl :food="food" @increment="incrementTotal"></cartControl>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="modal2" v-show="isShowBus&&productCount>0">
      <div class="mask2" @click="closeModal2()"></div>
      <div class="goodBusList plr10">
        <productBusItem v-for="(item,index) in productList" :productInfo="item" :key="index" v-if="item.count>0" @increment="incrementTotal"></productBusItem>
      </div>
    </div>
    <div class="foot ub">
      <div class="icon_goodbus" :class="{'on':productCount>0}" @click="openBookList">
        <div class="icon_num" v-show="productCount>0">{{productCount}}</div>
      </div>
      <div class="ub-f1 selected ub ub-ac ub-pc" @click="openBookList">已选择{{productCount}}款产品
        <i :class="{'ion_down':isShowBus,'ion_up':!isShowBus}" v-show="productCount>0"></i>
      </div>
      <button :disabled="isDisabled" type="button" @click="toOrder">下一步</button>
    </div>
    <alertBox ref="alertBox"></alertBox>
  </div>
</template>

<script>
import productItem from "@/components/productItem.vue";
import productBusItem from "@/components/productBusItem.vue";
import BScroll from "better-scroll";
import data from "../json/data.json";
import cartControl from "./cartControl.vue";
export default {
  name: "charge",
  data() {
    return {
      isDisabled: true,
      isShowMember: false,
      bookNum: 0,
      scrolly: 0,
      box: null,
      isShowBus: false,
      bookNum: [0, 0, 0],
      productCount: 0,
      isShowMenu: false,
      curTabindex: 0,
      goods: [],
      listHeight: [],
      goodBusList: [],
      productList: [],
      selectedFood: {},
      chargeInfo: {},
      storeId: sessionStorage.getItem("storeId") || ""
    };
  },
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    productItem,
    productBusItem,
    cartControl
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        probeType: 3,
        click: true
      });
      this.foodScroll.on("scroll", pos => {
        this.scrolly = Math.abs(Math.round(pos.y));
      });
    },
    incrementTotal(target) {
      let that = this;
      that.productCount = 0;
      that.productList = [];
      for (let i = 0; i < that.goods.length; i++) {
        for (let n = 0; n < that.goods[i].productList.length; n++) {
          if (that.goods[i].productList[n].count) {
            that.productCount += that.goods[i].productList[n].count;
          }
        }
      }
      for (let i = 0; i < that.goods.length; i++) {
        for (let n = 0; n < that.goods[i].productList.length; n++) {
          if (that.goods[i].productList[n].count > 0) {
            that.productList.push(that.goods[i].productList[n]);
          }
        }
      }
      this.isDisabled = !Boolean(that.productCount);
    },
    _calculateHeight() {
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        // 去掉自带click事件的点击
        return;
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.foodScroll.scrollToElement(el, 300);
    },
    showMenu() {
      this.isShowMenu = !Boolean(this.isShowMenu);
    },
    toAddMember() {
      // this.$router.push("/addMember");
      this.$router.push({
        name: 'addMember',
        params:{
          customerId: false
        }
      })
    },
    toMemberInfo() {
      this.$router.push({
          name: 'memberInfo',
          params: {
              customerId: this.chargeInfo.memberInfo.customer.customerId
          }
        });
    },
    toOrder() {
      this.chargeInfo.products = this.goods;
      this.chargeInfo.orderInfo = this.productList;
      this.chargeInfo.changeType = true;
      sessionStorage.setItem("chargeInfo", JSON.stringify(this.chargeInfo));
      this.$router.push("/order");
    },
    toMemberCard() {
      this.$router.push("/memberCard");
    },
    toMemberSearch() {
      this.$router.push("/memberSearch");
    },
    openBookList() {
      if (this.productCount == 0) {
        return;
      }
      this.isShowBus = !this.isShowBus;
    },
    closeModal1() {
      this.isShowMenu = false;
    },
    closeModal2() {
      this.isShowBus = false;
    },
    toPath(str) {
      this.$router.push(str);
    },

    //全部商品
    getAllproduct(element) {
      let that = this;
      let data = {
        storeId: that.storeId
      };
      this.$ajax
        .get("merchant/product/product/buySearch.json", {
          params: data
        })
        .then(function(res) {
          if (res.success) {
            that.goods = element ? element : res.data;
            if (element) that.incrementTotal();
            that.$nextTick(() => {
              that._initScroll();
              that._calculateHeight();
            });
            that.classMap = [
              "decrease",
              "discount",
              "special",
              "invoice",
              "guarantee"
            ];
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    document.title = "收银";
    this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"))
      ? JSON.parse(sessionStorage.getItem("chargeInfo"))
      : "";
    if (this.chargeInfo.memberInfo) this.isShowMember = true;
    this.getAllproduct(this.chargeInfo.products);
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
          return i;
        }
      }
      return 0;
    }
  }
};
</script>
<style>
@import url("./style/charge.css");
</style>
