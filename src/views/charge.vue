<template>
  <div class="main ub ub-ver">
    <div class="toper ub ub-ac">
      <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac">
        <i class="icon_search mr05"></i>会员查询</div>
      <div class="openMember tx-c" @click="toPath('/addMember')">
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
        <li class="ub ub-ac ub-pc" @click="toPath('/dirCharge')">
          <span class="icon_sk"></span>
          直接收款
        </li>
      </ul>
    </div>
    <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
      <img src="../assets/user.png" class="udb bac" @click="toMemberInfo">
      <div class="ub-f1 ml10" @click="toMemberInfo">
        <p class="f12 bc1 ub ub-ac">王云鹏
          <i class="icon_male ml05"></i>
          <i class="icon_card ml10"></i>
        </p>
        <p class="f12 mt05 bc1">15011111111</p>
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

    <div class="good">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="menu-item border-1px" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodWrapper" style="background:#fff;">
        <ul>
          <li v-for="(item, index)  in goods" :key="index" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="(food, index2)  in item.foods" :key="index2" class="food-item" @click="selectFood(food, $event)">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartControl-wrapper">
                    <cartControl :food="food" @increment="incrementTotal"></cartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- <div>
                <shopCart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" ref="shopCart"></shopCart>
                <food :food="selectedFood" ref="food"></food>
            </div> -->
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
      isShowMember: true,
      bookNum: 0,
      scrolly: 0,
      box: null,
      isShowBus: false,
      bookNum: [0, 0, 0],
      productCount: 0,
      isShowMenu: false,
      curTabindex: 0,
      goods: [],
      productList: [
        {
          title: "项目1",
          if: "aaa1",
          arr: [
            {
              id: "1111",
              type: "0",
              name: "名字1",
              price: "100",
              desc: "编号1",
              count: 0
            },
            {
              id: "2222",
              type: "0",
              name: "名字2",
              price: "100",
              desc: "编号2",
              count: 0
            },
            {
              id: "3333",
              type: "0",
              name: "名字3",
              price: "100",
              desc: "编号3",
              count: 0
            }
          ]
        },
        {
          title: "项目2",
          if: "aaa2",
          arr: [
            {
              id: "1111",
              type: "0",
              name: "名字1",
              price: "100",
              desc: "编号1",
              count: 0
            },
            {
              id: "2222",
              type: "0",
              name: "名字2",
              price: "100",
              desc: "编号2",
              count: 0
            },
            {
              id: "3333",
              type: "0",
              name: "名字3",
              price: "100",
              desc: "编号3",
              count: 0
            }
          ]
        },
        {
          title: "项目3",
          if: "aaa3",
          arr: [
            {
              id: "1111",
              type: "0",
              name: "名字1",
              price: "100",
              desc: "编号1",
              count: 0
            },
            {
              id: "2222",
              type: "0",
              name: "名字2",
              price: "100",
              desc: "编号2",
              count: 0
            },
            {
              id: "3333",
              type: "0",
              name: "名字3",
              price: "100",
              desc: "编号3",
              count: 0
            }
          ]
        },
        {
          title: "项目4",
          if: "aaa4",
          arr: [
            {
              id: "1111",
              type: "0",
              name: "名字1",
              price: "100",
              desc: "编号1",
              count: 0
            },
            {
              id: "2222",
              type: "0",
              name: "名字2",
              price: "100",
              desc: "编号2",
              count: 0
            },
            {
              id: "3333",
              type: "0",
              name: "名字3",
              price: "100",
              desc: "编号3",
              count: 0
            }
          ]
        }
      ],
      listHeight: [],
      goodBusList: [],
      selectedFood: {}
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
      this.$refs.shopCart.drop(target);
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
    loadSroll: function() {
      var self = this;
      var $navs = this.$JQ(".nav1");
      var sections = document.getElementsByClassName("section");
      for (var i = sections.length - 1; i >= 0; i--) {
        if (self.scroll >= sections[i].offsetTop - 100) {
          $navs
            .eq(i)
            .addClass("current")
            .siblings()
            .removeClass("current");
          break;
        }
      }
    },
    updateCount() {
      var productList = this.productList;
      this.productCount = 0;
      for (var i = 0; i < productList.length; i++) {
        if (productList[i].count > 0) {
          this.productCount++;
        }
      }
      if (this.productCount == 0) {
        this.isShowBus = false;
      }
      this.isDisabled = !Boolean(this.productCount);
    },
    showMenu() {
      this.isShowMenu = !Boolean(this.isShowMenu);
    },
    toMemberInfo() {
      this.$router.push("/memberInfo");
    },
    toOrder() {
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
      incrementTotal(target) {
        this.$refs.shopCart.drop(target);
      }
  },
  created() {
    document.title = "收银";
    this.goods = data.goods;
    this.$nextTick(() => {
      this._initScroll();
      this._calculateHeight();
    });
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
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
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  }
};
</script>
<style>
@import url("./style/charge.css");
</style>
