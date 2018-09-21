<template>
  <div class="main">
    <div class="toper ub ub-ac">
      <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac">
        <i class="icon_search mr05"></i>查询会员</div>
      <div class="openMember tx-c" @click="toAddMember">
        <i class="icon_member"></i>
        <p class="tx-c f12">开通会员</p>
      </div>
    </div>
    <div class="content plr15 mt05">
      <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
        <img src="../assets/user.png" class="udb" @click="toMemberInfo">
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
      <div class="h50 plr10 mt10 ub ub-ac ub-pj">
        <span class="sc f13">服务信息</span>
        <div class="addGood btn_vc" @click="addGood()">
          <i class="icon-add sc iconfont icon_add1"></i>添加产品</div>
      </div>
      <div class="orderInfo" v-for="(item,index) in products" :key="index">
        <div class="item plr20 bbc ub ub-ac ub-pj">
          <p class="ub ub-ac">
            <i :class="{'icon_drop':!item.isShowMoreItem,'icon_down':item.isShowMoreItem}" @click="dropOrder(index)"></i>{{item.productName}}</p>
          <p class="ub ub-ac numBox">
            <span class="money f14">￥{{item.currentPrice/100}}</span>
            <span @click="delOne(index)" class="ctlbtn">
              <i class="icon-del sc iconfont"></i>
            </span>
            <i class="number btbc">{{item.count}}</i>
            <span @click="addOne(index)" class="ctlbtn">
              <i class="icon-add sc iconfont"></i>
            </span>
          </p>
        </div>
        <div class="bbc plr20" v-if="item.isShowMoreItem">
          <div class="item ub ub-pj ub-ac" @click="openPicker(index,'pickerVisible1')">
            <p class="ub-f1 sc f13 pl48">服务技师</p>
            <p class="bc f13">{{item.name1}}</p>
            <i class="arrow-down"></i>
          </div>
          <div class="item ub ub-pj ub-ac">
            <p class="ub-f1 sc f13 pl48">是否指定服务技师</p>
            <div class="switch-btn">
              <div class="icon-on" v-if="item.isSwitch" @click="switchBoolen1(item)"></div>
              <div class="icon-off" v-else @click="switchBoolen1(item)"></div>
            </div>
          </div>
          <div class="item ub ub-pj ub-ac" @click="openPicker(index,'pickerVisible2')">
            <p class="ub-f1 sc f13 pl48">服务小工</p>
            <p class="bc f13">{{item.name2}}</p>
            <i class="arrow-down"></i>
          </div>
          <div class="item ub ub-pj ub-ac" @click="openPicker(index,'pickerVisible3')">
            <p class="ub-f1 sc f13 pl48">折扣</p>
            <span class="money f13"></span>
            <p class="f13">{{item.name3}}折</p>
            <i class="arrow-down"></i>
          </div>
          <div class="item ub ub-pj ub-ac" @click="openPicker(index,'pickerVisible4')">
            <p class="ub-f1 sc f13 pl48">会员卡</p>
            <span class="money f13"></span>
            <p class="f13">{{item.name4}}</p>
            <i class="arrow-down"></i>
          </div>
          <!-- 服务技师 -->
          <mt-popup v-model="item.pickerVisible1" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker(item,'pickerVisible1','qx1')">取消</span>
              <span class="picker-confirm" @click="closePicker(item,'pickerVisible1')">完成</span>
            </div>
            <mt-picker :slots="actions1" valueKey="staffName" @change="onPickerChange1($event,$event.values,index)"></mt-picker>
          </mt-popup>
          <!-- 服务小工 -->
          <mt-popup v-model="item.pickerVisible2" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker(item,'pickerVisible2','qx2')">取消</span>
              <span class="picker-confirm" @click="closePicker(item,'pickerVisible2')">完成</span>
            </div>
            <mt-picker :slots="actions2" valueKey="staffName" @change="onPickerChange2($event,$event.values,index)"></mt-picker>
          </mt-popup>
          <!-- 折扣 -->
          <mt-popup v-model="item.pickerVisible3" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker(item,'pickerVisible3','qx3')">取消</span>
              <span class="picker-confirm" @click="closePicker(item,'pickerVisible3')">完成</span>
            </div>
            <mt-picker :slots="actions3" @change="onPickerChange3($event,$event.values,index)"></mt-picker>
          </mt-popup>
          <!-- 会员卡 -->
          <mt-popup v-model="item.pickerVisible4" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker(item,'pickerVisible4','qx4')">取消</span>
              <span class="picker-confirm" @click="closePicker(item,'pickerVisible4')">完成</span>
            </div>
            <mt-picker :slots="item.actions" valueKey="name4" @change="onPickerChange4($event,$event.values,index)"></mt-picker>
          </mt-popup>

          <div class="item ub ub-pj ub-ac">
            <p class="pl48">实付</p>
            <p class="finallNum">￥190</p>
          </div>
        </div>

      </div>
    </div>
    <div class="foot">
      <div class="ub ub-ac ub-pj switchDiv plr15">
        <p>是否抹零</p>
        <div class="switch-btn">
          <div class="icon-on" v-if="isSwitch2" @click="switchBoolen2"></div>
          <div class="icon-off" v-else @click="switchBoolen2"></div>
        </div>
      </div>
      <div class="ub ub-ac ub-pj switchDiv plr15">
        <p>优惠券</p>
        <div class="switch-btn">
          <div class="icon-on" v-if="isSwitch2" @click="switchBoolen2"></div>
          <div class="icon-off" v-else @click="switchBoolen2"></div>
        </div>
      </div>
      <div class="ub">
        <div class="ub-f1 total">￥190</div>
        <button :disabled="isDisabled" type="button" @click="toerwmCharge">去结算</button>
      </div>
    </div>

    <payWay ref="payWay" v-show="isShowPayWay" :isShowPayWay.sync="isShowPayWay"></payWay>
    <alertBox ref="alertBox"></alertBox>
  </div>
</template>

<script>
import { popup, picker } from "mint-ui";
import payWay from "@/components/payWay.vue";
export default {
  name: "order",
  components: { payWay },
  data() {
    return {
      isDisabled: false,
      bookNum: 0,
      isShowMoreItem: true,
      isShowBus: false,
      isSwitch1: false,
      isSwitch2: false,
      isShowMember: false,
      //弹框选择
      pickerVisible1: false, //服务技师
      pickerVisible2: false, //服务小工
      pickerVisible3: false, //折扣
      actions1: [],
      actions2: [],
      actions3: [],
      actions4: [],
      name1: "",
      name2: "",
      name3: "",
      staffId: "",
      staffId1: "",
      isShowPayWay: false,
      products: [],
      yjcardList: false, //当前会员所有的会员卡
      storeId: sessionStorage.getItem("storeId")
    };
  },
  methods: {
    dropOrder(index) {
      this.$forceUpdate();
      this.$set(
        this.products[index],
        "isShowMoreItem",
        !this.products[index].isShowMoreItem
      );
    },
    switchBoolen1(item) {
      this.$forceUpdate();
      let isSwitch = !item.isSwitch;
      this.$set(item, "isSwitch", isSwitch);
    },
    switchBoolen2() {
      this.isSwitch2 = !this.isSwitch2;
    },
    toerwmCharge() {
      this.isShowPayWay = true;
      this.restProductJson();
      // this.$router.push('/erwmCharge');
    },
    toMemberInfo() {
      this.$router.push("/memberInfo");
    },
    addGood() {
      this.restProductJson();
      this.$router.push("/charge");
    },
    toMemberSearch() {
      this.$router.push("/memberSearch");
    },
    toMemberCard() {
      this.$router.push("/memberCard");
    },
    addOne(index) {
      this.$forceUpdate();
      let count = this.products[index].count;
      count++;
      this.$set(this.products[index], "count", count);
      this.restProductJson();
    },
    delOne(index) {
      if (this.bookNum > 0) this.bookNum--;
      let count = this.products[index].count;
      if (count > 0) count--;
      this.$set(this.products[index], "count", count);
      if (count === 0) this.products.splice(index, 1);
      this.$forceUpdate();
      this.restProductJson();
    },
    openPicker(index, type) {
      this.$forceUpdate();
      this.$set(this.products[index], type, true);
    },
    closePicker(item, type, qx) {
      this.$forceUpdate();
      this.$set(item, type, false);
      if (qx === "qx1") {
        this.$set(item, "name1", "");
        this.$set(item, "staffId", "");
      }
      if (qx === "qx2") {
        this.$set(item, "name2", "");
        this.$set(item, "staffId2", "");
      }
    },
    onPickerChange1(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        this.$set(this.products[index], "name1", values[0].staffName);
        this.$set(this.products[index], "staffId", values[0].staffId);
      }
    },
    onPickerChange2(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        this.$set(this.products[index], "name2", values[0].staffName);
        this.$set(this.products[index], "staffId2", values[0].staffId);
      }
    },
    onPickerChange3(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        this.$set(this.products[index], "name3", values[0]);
      }
    },
    onPickerChange4(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        let cardName = values[0].card.cardName;
        let vipCard1 = values[0];
        this.$set(this.products[index], "name4",cardName);
        this.$set(this.products[index], "vipCard1",vipCard1);
      }
    },
    openBookList() {
      this.isShowBus = !this.isShowBus;
    },
    toAddMember() {
      this.$router.push("/addMember");
    },
    closeModal() {
      this.isShowBus = false;
    },
    getAllstaff() {
      let that = this;
      let data = {
        storeId: that.storeId,
        timestamp: new Date().getTime()
      };
      this.$ajax
        .get("/account/merchant/staff/select.json", {
          params: data
        })
        .then(function(res) {
          if (res.success) {
            let data = [
              {
                values: res.data.items
              }
            ];
            let arr = [];
            for (let i = 100; i >= 1; i--) {
              arr.push(i / 10);
            }
            let data2 = [
              {
                values: arr
              }
            ];
            that.actions1 = data;
            that.actions2 = data;
            that.actions3 = data2;
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //匹配会员卡
    vipCardSearchFun() {
      let that = this;
      that.yjcardList = that.chargeInfo.memberInfo.cardApplies;
      that.xfList = that.products;
      if (that.xfList && that.yjcardList && that.chargeInfo.memberInfo) {
        if (that.xfList.length > 0 && that.yjcardList.length > 0) {
          //每个商品对应的会员卡,都存在商品的卡列表里
          that.xfList.forEach(function(i) {
            let vipCardList = [];
            that.yjcardList.forEach(function(n) {
              if (n.applyProductIds) {
                if (n.applyProductIds.indexOf(i.productId) > -1) {
                  vipCardList.push(n);
                  i.vipCardList = vipCardList;
                  let arr = [{name4:'不使用会员卡',cardId:'007'}];
                  vipCardList.forEach(function(z) {
                    let ye = '';
                    if(z.card.type ==='STORED') ye = '(储)'+z.card.cardName+'-'+('余额:'+z.card.balance/100)+'元';
                    if(z.card.type ==='REBATE') ye ='(折)'+z.card.cardName+ '-'+('余额:'+z.card.balance/100)+'元';
                    if(z.card.type ==='METERING') ye ='(计)'+z.card.cardName+ '-'+('余额:'+z.card.balance)+'次';
                    if(z.card.type ==='TIMES') ye = '(期)'+z.card.cardName+'';
                    z.name4 = ye +'-'+('有效期:'+z.card.validity.substring(0,10));
                    arr.push(z);
                  });
                  let data = [{ values: vipCardList }];
                  i.actions = data;
                }
              }
            });
          });
          //筛选会员卡 期限卡>计次卡>折扣卡>储值卡
          var itemList = [];
          that.xfList.forEach(function(i) {
            if (i.vipCardList) {
              for (let n = 0; n < i.vipCardList.length; n++) {
                if (i.vipCardList[n].card.type === "TIMES") {
                  i.vipCard = i.vipCardList[n];
                }
                if (
                  i.vipCardList[n].card.type === "METERING" &&
                  (i.vipCard ? i.vipCard.card.type !== "TIMES" : true) &&
                  i.vipCardList[n].card.balance > 0
                ) {
                  i.vipCard = i.vipCardList[n];
                }
                if (
                  i.vipCardList[n].card.type === "REBATE" &&
                  (i.vipCard
                    ? i.vipCard.card.type !== "TIMES" &&
                      i.vipCard.card.type !== "METERING"
                    : true)
                ) {
                  if (!i.vipCard) i.vipCard = i.vipCardList[n];
                  if (i.vipCard && i.vipCard.card.type === "STORED") {
                    i.vipCard = i.vipCardList[n];
                  }
                  if (
                    i.vipCard &&
                    i.vipCardList[n].card.balance > i.vipCard.card.balance
                  ) {
                    i.vipCard = i.vipCardList[n];
                  }
                }
                if (
                  i.vipCardList[n].card.type === "STORED" &&
                  (i.vipCard
                    ? i.vipCard.card.type !== "TIMES" &&
                      i.vipCard.card.type !== "METERING" &&
                      i.vipCard.card.type !== "REBATE"
                    : true)
                ) {
                  if (!i.vipCard) i.vipCard = i.vipCardList[n];
                  if (
                    i.vipCard &&
                    i.vipCardList[n].card.balance > i.vipCard.card.balance
                  ) {
                    i.vipCard = i.vipCardList[n];
                  }
                }
                if (i.vipCard1){i.vipCard = i.vipCard1; console.log( i.vipCard1)} 
              }
            }
            //把每个商品筛选出来的最优会员卡汇集到一个数组里
            if (i.vipCard) {
              itemList.push(i.vipCard);
            }
          });
          //会员卡数组去重
          var unique = {};
          itemList.forEach(function(gpa) {
            unique[JSON.stringify(gpa)] = gpa;
          });
          itemList = Object.keys(unique).map(function(u) {
            return JSON.parse(u);
          });
          itemList.forEach(function(i) {
            i.checked = true;
          });
          //最终所有选取的商品所对应的会员卡
          that.vipCardList = itemList;
          that.products = that.xfList;
          console.log(that.products);
        }
      }
    },
    restProductJson() {
      let that = this;
      let products = that.chargeInfo.products;
      products.forEach(function(i, k) {
        i.productList.forEach(function(n, j) {
          that.products.forEach(function(m) {
            if (n.productId === m.productId) {
              products[k].productList[j] = m;
            } else {
              products[k].productList[j].count = 0;
            }
          });
        });
      });
      that.chargeInfo.products = products;
      that.chargeInfo.orderInfo = that.products;
      sessionStorage.setItem("chargeInfo", JSON.stringify(that.chargeInfo));
    }
  },
  created() {
    document.title = "订单";

    let that = this;
    this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"));
    this.products = this.chargeInfo.orderInfo;
    this.vipCardSearchFun();
    that.products.forEach(function(i, m) {
      if(!i.name3) i.name3=10;
      if (m === 0) i.isShowMoreItem = true;
      else i.isShowMoreItem = false;
    });
    if (this.chargeInfo.memberInfo) this.isShowMember = true;
    this.getAllstaff();
  },

  computed: {}
};
</script>

<style scoped>
.main {
  background: #f2f2f2;
  padding-top: 1.12rem;
  height: 100%;
  padding-bottom: 3rem;
}
.toper {
  height: 1.12rem;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.searchBox {
  margin-left: 0.25rem;
  position: relative;
  background: #e1e1e1;
  height: 0.64rem;
  border-radius: 0.32rem;
  padding-left: 0.2rem;
  color: #999;
  font-size: 0.28rem;
}
.content {
  position: relative;
  height: 100%;
  overflow: auto;
}
.orderInfo {
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  background-color: #ffffff;
}
.orderInfo .item {
  height: 1rem;
  line-height: 1rem;
}
.h50 {
  height: 0.5rem;
}
.foot {
  height: 2rem;
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  border-radius: 0.2rem 0.2rem 0 0;
  box-shadow: 0 -1px 7px 0 rgba(194, 194, 194, 0.5);
  -webkit-box-shadow: 0 -1px 7px 0 rgba(194, 194, 194, 0.5);
}
.foot .total {
  background-color: rgba(0, 0, 0, 0.9);
  line-height: 1rem;
  text-align: left;
  color: #fff;
  font-size: 0.4rem;
  padding-left: 0.3rem;
  font-weight: bold;
}
.foot button {
  background-image: linear-gradient(to right, #ff5000, #ff8000);
  font-size: 0.28rem;
  line-height: 1rem;
  width: 2rem;
  text-align: center;
  color: #fff;
}
.foot button:disabled {
  background-color: #808080;
}
.icon_goodbus {
  width: 1.05rem;
  height: 1.05rem;
  background: #666666 url(../assets/icon_goodbus.png) no-repeat center center;
  position: absolute;
  top: -0.5rem;
  left: 0.4rem;
  border-radius: 50%;
  background-size: 50% 50%;
}
.addGood {
  width: 1.64rem;
  height: 0.46rem;
  border-radius: 0.25rem;
  border: 1px #999 solid;
  font-size: 0.24rem;
  color: #999;
}
.arrow-right {
  display: inline-block;
  width: 0.14rem;
  height: 0.3rem;
  background: url(../assets/arrow-right.png) no-repeat center center;
  background-size: 100% 100%;
  margin-left: 0.2rem;
}
.switchDiv {
  height: 1rem;
}
.icon-on {
  width: 0.8rem;
  height: 0.42rem;
  background: url(../assets/icon_switch_open.png);
  background-size: 100% 100%;
}
.icon-off {
  width: 0.8rem;
  height: 0.42rem;
  background: url(../assets/icon_switch_close.png);
  background-size: 100% 100%;
}

.userInfo {
  background-color: #fff;
  padding: 0.16rem 0.24rem;
  border-radius: 0.2rem;
}
.userInfo img {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 0.3rem;
}
.userbtn {
  background-color: #ff6600;
  color: #fff;
  width: 1.6rem;
  height: 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.24rem;
}
.finallNum {
  font-weight: bold;
  color: #ff6000;
}
.numBox .ctlbtn {
  width: 0.56rem;
  height: 0.48rem;
  line-height: 0.48rem;
  background-color: #eee;
  text-align: center;
}
.numBox .number {
  width: 0.6rem;
  height: 0.48rem;
  line-height: 0.48rem;
  background-color: #fff;
  text-align: center;
}
.icon_drop {
  width: 0.32rem;
  height: 0.28rem;
  background: url(../assets/icon_drop.png);
  background-size: 100% 100%;
  margin-right: 0.2rem;
}
.icon_down {
  width: 0.32rem;
  height: 0.28rem;
  background: url(../assets/icon_down.png);
  background-size: 100% 100%;
  margin-right: 0.2rem;
}
.icon_add1 {
  font-size: 0.24rem !important;
  margin-right: 0.08rem;
}
.pl48 {
  padding-left: 0.48rem;
}
.money {
  margin-right: 0.24rem;
  color: #ff6000;
  font-weight: bold;
}
</style>
