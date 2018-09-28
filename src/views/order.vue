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
        <div class="addGood btn_vc" @click="addGood()" v-if="changeType">
          <i class="icon-add sc iconfont icon_add1"></i>添加产品</div>
      </div>
      <div class="orderInfo" v-for="(item,index) in products" :key="index" v-if="changeType&&item.count>0">
        <div class="item plr20 bbc ub ub-ac ub-pj">
          <p class="ub ub-ac">
            <i :class="{'icon_drop':!item.isShowMoreItem,'icon_down':item.isShowMoreItem}" @click="dropOrder(index)"></i>{{item.productName}}</p>
          <p class="ub ub-ac numBox">
            <span class="money f14">￥{{item.currentPrice/100}}</span>
            <span @click="delOne(item)" class="ctlbtn">
              <i class="icon-del sc iconfont"></i>
            </span>
            <i class="number btbc">{{item.count}}</i>
            <span @click="addOne(item)" class="ctlbtn">
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
          <div class="item ub ub-pj ub-ac" @click="openPicker(index,'pickerVisible4')" v-if="isShowMember">
            <p class="ub-f1 sc f13 pl48">会员卡</p>
            <span class="money f13"></span>
            <p class="f13">
              <span style="margin-right: 20px;display: inline-block;color: #ff6600;" v-if="item.name4">-¥{{item.totoleMoney.toFixed(2)}}</span> {{item.name4}}</p>
            <i class="arrow-down"></i>
          </div>
          <!-- 服务技师 -->
          <mt-popup v-model="item.pickerVisible1" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker(item,'pickerVisible1','qx1')">清除</span>
              <span class="picker-confirm" @click="closePicker(item,'pickerVisible1')">完成</span>
            </div>
            <mt-picker :slots="actions1" valueKey="staffName" @change="onPickerChange1($event,$event.values,index)"></mt-picker>
          </mt-popup>
          <!-- 服务小工 -->
          <mt-popup v-model="item.pickerVisible2" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker(item,'pickerVisible2','qx2')">清除</span>
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
            <p class="pl48">实价</p>
            <p class="finallNum">￥<input class="shifuInput" @change="orderProductValue($event.target.value,item)" :value="item.totoleMoney1" type="text"></p>
          </div>
        </div>

      </div>
      <div class="orderInfo" v-if="!changeType">
        <div class="item plr20 bbc ub ub-ac ub-pj">
          <p class="ub ub-ac">
            <i class="icon_drop"></i>{{xfCardList.cardConfigName}}</p>
        </div>
        <div class="bbc plr20">
          <div class="item ub ub-pj ub-ac" @click="openPicker('','staff1')">
            <p class="ub-f1 sc f13 pl48">服务技师</p>
            <p class="bc f13">{{cardName1}}</p>
            <i class="arrow-down"></i>
          </div>

          <div class="item ub ub-pj ub-ac" @click="openPicker('','staff2')">
            <p class="ub-f1 sc f13 pl48">服务小工</p>
            <p class="bc f13">{{cardName2}}</p>
            <i class="arrow-down"></i>
          </div>

          <!-- 服务技师 -->
          <mt-popup v-model="cardboolean1" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker2('qx1')">清除</span>
              <span class="picker-confirm" @click="closePicker2()">完成</span>
            </div>
            <mt-picker :slots="actions1" valueKey="staffName" @change="onPickerChange1($event,$event.values)"></mt-picker>
          </mt-popup>
          <!-- 服务小工 -->
          <mt-popup v-model="cardboolean2" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
              <span class="picker-cancel" @click="closePicker2('qx2')">清除</span>
              <span class="picker-confirm" @click="closePicker2()">完成</span>
            </div>
            <mt-picker :slots="actions2" valueKey="staffName" @change="onPickerChange2($event,$event.values)"></mt-picker>
          </mt-popup>
          <div class="item ub ub-pj ub-ac">
            <p class="pl48">售价</p>
            <p class="finallNum">￥{{cardInputValue}}</p>
          </div>
        </div>

      </div>
    </div>
    <div class="foot " :class="changeType?'':'foot2'">
      <div class="ub ub-ac ub-pj switchDiv plr15" v-if="changeType">
        <p>是否抹零</p>
        <div class="switch-btn">
          <div class="icon-on" v-if="isSwitch2" @click="switchBoolen2"></div>
          <div class="icon-off" v-else @click="switchBoolen2"></div>
        </div>
      </div>
      <div class="ub ub-ac ub-pj switchDiv plr15" v-if="changeType">
        <p>优惠券
          <span v-if="ticket" style="display:inline-block;color:#ff6600;">({{ticket.tickType+':'}}{{ticket.couponDefName}})</span>
        </p>
        <div class="switch-btn" v-if="ticket" style="display: flex;">
          <span style="display:inline-block;color:#ff6600;margin-right:10px;">-{{ticket.ticketMoney}}元</span>
          <div style="display:inline-block;" class="icon-on" v-if="ticketCheck" @click="switchBoolen3"></div>
          <div style="display:inline-block;" class="icon-off" v-else @click="switchBoolen3"></div>
        </div>
      </div>
      <div class="ub">
        <div class="ub-f1 total" v-if="changeType">￥<input class="shifuInput" style="color:#fff;" :value="inputValue" type="text"></div>
        <div class="ub-f1 total" v-else>￥{{cardInputValue}}</div>
        <button :disabled="isDisabled" type="button" @click="toerwmCharge">去结算</button>
      </div>
    </div>

    <payWay ref="payWay" v-show="isShowPayWay" :isShowPayWay.sync="isShowPayWay" :payWay="payWay" @increment="incrementTotal"></payWay>
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
      vipCardListIndex: 0,
      bookNum: 0,
      isShowMoreItem: true,
      isShowBus: false,
      isSwitch1: false,
      isSwitch2: false,
      isShowMember: false,
      memberInfo: {},
      xyVip: false,
      payWay: "",
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
      vipCardList: "", //全部可用会员卡
      isShowPayWay: false,
      products: [],
      xfCardList: {},
      settleCardDTOList: [],
      ticketList: [],
      changeType: true,
      yjcardList: false, //当前会员所有的会员卡
      storeId: sessionStorage.getItem("storeId"),
      inputValue: "",
      cardChangeBoolean: false,
      isVerbMoney: 0,
      ticketList: [],
      authCode: "",
      cardName1: "",
      cardName2: "",
      cardStaffId1: "",
      cardStaffId2: "",
      cardboolean1: false,
      cardboolean2: false,
      cardInputValue: 0,
      STOREDextraMoney: 0,
      ticketCheck: true,
      pickerBoolean: false,
      pickerBoolean2: true,
      vipBoolean :false,
      shopBoolean : false
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
    orderProductValue(event,item){
      this.$forceUpdate();
      this.$set(item, "currentPrice", event*100);
      this.totolMoneyFun();
    },
    switchBoolen2() {
      this.isSwitch2 = !this.isSwitch2;
      this.totolMoneyFun();
    },
    switchBoolen3() {
      this.ticketCheck = !this.ticketCheck;
      this.totolMoneyFun();
    },
    toerwmCharge() {
      // this.restProductJson();
      this.jiesuan();
      // this.$router.push('/erwmCharge');
    },
    toMemberInfo() {
      // this.$router.push({
      //     name: 'memberInfo',
      //     params: {
      //         customerId: this.chargeInfo.memberInfo.customer.customerId
      //     }
      //   });
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
    addOne(item) {
      this.$forceUpdate();
      this.cardChangeBoolean = false;
      let count = item.count;
      count++;
      this.$set(item, "count", count);
      this.restProductJson();
      this.totolMoneyFun(true);
    },
    delOne(item) {
      if (this.bookNum > 0) this.bookNum--;
      let count = item.count;
      this.cardChangeBoolean = false;
      if (count > 0) count--;
      this.$set(item, "count", count);
      this.$forceUpdate();
      this.restProductJson();
      this.totolMoneyFun(true);
    },
    openPicker(index, type) {
      if (type === "pickerVisible2" || type === "pickerVisible1" || type === "staff1" || type === "staff2")
        this.pickerBoolean = true;
      if (type === "pickerVisible4") this.pickerBoolean2 = false;

      if (this.changeType && this.pickerBoolean) {
      this.$set(this.products[index], type, true);
        
        // this.$forceUpdate();
        // this.$set(
        //   this.products[index],
        //   "name1",
        //   this.actions1[0].values[0].staffName
        // );
        // this.$set(
        //   this.products[index],
        //   "staffId",
        //   this.actions1[0].values[0].staffId
        // );
      } else {
        this.cardboolean1 = type === "staff1" ? true : false;
        this.cardboolean2 = type === "staff2" ? true : false;
        if (type === "staff1") {
          this.cardName1 = this.actions1[0].values[0].staffName;
          this.cardStaffId1 = this.actions1[0].values[0].staffId;
        }
        if (type === "staff2") {
          this.cardName2 = this.actions1[0].values[0].staffName;
          this.cardStaffId2 = this.actions1[0].values[0].staffId;
        }
      }
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
      if (qx === "qx4") {
        this.$set(item, 'vipCard1',false);
        this.$set(item, 'name4','');
        this.$set(item, "vipCard", false);
        console.log(item)
        this.totolMoneyFun(true);
      }
    },
    closePicker2(qx) {
      if (qx === "qx1") {
        this.cardName1 = "";
        this.cardStaffId1 = "";
      }
      if (qx === "qx2") {
        this.cardName2 = "";
        this.cardStaffId2 = "";
      }
      this.cardboolean1 = false;
      this.cardboolean2 = false;
    },
    onPickerChange1(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        if (this.changeType && this.pickerBoolean) {
          this.$set(this.products[index], "name1", values[0].staffName);
          this.$set(this.products[index], "staffId", values[0].staffId);
        } else if (this.pickerBoolean) {
          // this.$set(this.cardName1, values[0].staffName);
          // this.$set(this.cardStaffId1, values[0].staffId);
          this.cardName1 = values[0].staffName;
          this.cardStaffId1 = values[0].staffId;
        }
      }
    },
    onPickerChange2(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        if (this.changeType && this.pickerBoolean) {
          this.$set(this.products[index], "name2", values[0].staffName);
          this.$set(this.products[index], "staffId2", values[0].staffId);
        } else if (this.pickerBoolean) {
          this.cardName2 = values[0].staffName;
          this.cardStaffId2 = values[0].staffId;
        }
      }
    },
    onPickerChange3(picker, values, index) {
      if (values.length > 0) {
        this.$forceUpdate();
        this.$set(this.products[index], "name3", values[0]);
        this.totolMoneyFun();
      }
    },
    onPickerChange4(picker, values, index) {
      let that = this;
      if (values.length > 0&&values[0]!==undefined) {
        this.$forceUpdate();
        let cardName = values[0].card.cardName;
        let vipCard1 = values[0];
        this.$set(this.products[index], "name4", cardName);
        this.$set(this.products[index], "vipCard1", vipCard1);
        this.totolMoneyFun();
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
    swapArray(arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    },
    //匹配会员卡
    vipCardSearchFun() {
      let that = this;
      that.yjcardList = that.chargeInfo
        ? that.chargeInfo.memberInfo.cardApplies
        : false;
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
                }
              }
            });
            i.vipCardList = vipCardList;
            let arr = [{ name4: "不使用会员卡", cardId: "007" }];
            vipCardList.forEach(function(z) {
              let ye = "";
              if (z.card.type === "STORED")
                ye =
                  "(储)" +
                  z.card.cardName +
                  "-" +
                  ("余额:" + z.card.balance / 100) +
                  "元";
              if (z.card.type === "REBATE")
                ye =
                  "(折)" +
                  z.card.cardName +
                  "-" +
                  ("余额:" + z.card.balance / 100) +
                  "元";
              if (z.card.type === "METERING")
                ye =
                  "(计)" +
                  z.card.cardName +
                  "-" +
                  ("余额:" + z.card.balance) +
                  "次";
              if (z.card.type === "TIMES") ye = "(期)" + z.card.cardName + "";
              z.name4 =
                ye + "-" + ("有效期:" + z.card.validity.substring(0, 10));
              arr.push(z);
            });
            let data = [{ values: vipCardList }];
            i.actions = data;
          });

          //筛选会员卡 期限卡>计次卡>折扣卡>储值卡
          var itemList = [];
          that.xfList.forEach(function(i) {
            if (i.vipCardList) {
              for (let n = 0; n < i.vipCardList.length; n++) {
                if (i.vipCardList[n].card.type === "TIMES") {
                  that.vipCardListIndex = n;
                  i.vipCard = i.vipCardList[n];
                }
                if (
                  i.vipCardList[n].card.type === "METERING" &&
                  (i.vipCard ? i.vipCard.card.type !== "TIMES" : true) &&
                  i.vipCardList[n].card.balance > 0
                ) {
                  i.vipCard = i.vipCardList[n];
                  that.vipCardListIndex = n;
                }
                if (
                  i.vipCardList[n].card.type === "REBATE" &&
                  (i.vipCard
                    ? i.vipCard.card.type !== "TIMES" &&
                      i.vipCard.card.type !== "METERING"
                    : true)
                ) {
                  if (!i.vipCard) i.vipCard = i.vipCardList[n];
                  if (i.vipCard && i.vipCard.card.type === "REBATE") {
                    i.vipCard = i.vipCardList[n];
                    that.vipCardListIndex = n;
                  }
                  if (
                    i.vipCard &&
                    i.vipCardList[n].card.balance > i.vipCard.card.balance
                  ) {
                    i.vipCard = i.vipCardList[n];
                    that.vipCardListIndex = n;
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
                    that.vipCardListIndex = n;
                  }
                }
                if (i.vipCard1) {
                  i.vipCard = i.vipCard1;
                }
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
          if (this.pickerBoolean2) {
            that.xfList.forEach(function(i) {
              i.actions[0].values.forEach(function(n, m) {
                if (i.vipCard.card.cardId === n.card.cardId) {
                  that.swapArray(i.actions[0].values, 0, m);
                }
              });
            });
          }
          that.products = that.xfList;
        }
      }
    },
    tanchuang() {
      let settleCardDTOList = [];
      this.settleCardDTOList = [];
      let that = this;
      if (that.products && that.products.length > 0) {
        that.products.forEach(function(i) {
          if (i.vipCard) {
            let data = {
              productIdList: [i.productId],
              cardId: i.vipCard.card.cardId,
              amount: 0,
              type: i.vipCard.card.type
            };
            if (i.type === "TIMES") data.amount = 0;
            else if (i.type === "METERING") data.amount += i.count;
            else if (i.type === "REBATE")
              data.amount += that.NP.times(
                i.count,
                i.currentPrice / 100,
                100,
                that.NP.divide(i.vipCard.card.rebate, 10),
                that.NP.divide(i.name3, 10)
              );
            else
              data.amount += that.NP.times(
                i.count,
                i.currentPrice / 100,
                100,
                that.NP.divide(i.name3, 10)
              );
            settleCardDTOList.push(data);
          }
        });
      }
      this.settleCardDTOList = settleCardDTOList;
    },
    //检查优惠券状态，有些时间过期了，就不显示
    ticketListTime() {
      let that = this;
      let now = new Date().getTime();
      let ticketLists = [];
      that.ticketList.forEach(function(i, n) {
        let dateStart = new Date(i.validDateStart).getTime();
        let dateEnd = new Date(i.validDateEnd).getTime();
        //如果优惠卷不在使用期限内 则移除
        if (now > dateStart && now < dateEnd) {
          ticketLists.push(i);
        }
      });
      this.ticketList = ticketLists;
    },
    //标注每个卡对应的总计减免
    vipMoneyFun() {
      let that = this;
      if (!that.memberInfo) {
        that.products.forEach(function(i) {
          delete i.vipCard;
          delete i.vipCardList;
          delete i.vipMoney;
        });
      }
      if (that.products) {
        that.products.forEach(function(i) {
          if (i.vipCard) {
            if (i.vipCard.card.type === "TIMES") {
              i.vipMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                i.count
              );
            } else if (i.vipCard.card.type === "METERING") {
              i.vipMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                i.count
              );
            } else if (i.vipCard.card.type === "REBATE") {
              i.vipMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                that.NP.divide(i.vipCard.card.rebate, 10),
                i.count
              );
            } else if (i.vipCard.card.type === "STORED") {
              i.vipMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                i.count
              );
            }
          }
        });
      }
    },
    // 余额检查
    balanceFun() {
      let that = this,
        vipMoney = 0;
      this.vipMoney = 0;
      this.vipMoneyName = "";
      if (that.vipCardList && that.products) {
        if (that.vipCardList.length > 0 && that.products.length > 0) {
          that.vipCardList.forEach(function(i) {
            let vipMoney2 = 0;
            that.products.forEach(function(n) {
              if (
                n.vipCard &&
                i.card.cardId === n.vipCard.card.cardId &&
                (!i.applyProductIds ||
                  i.applyProductIds.indexOf(n.productId) > -1)
              ) {
                // i.card.balance2 -= n.vipMoney
                vipMoney2 += n.vipMoney;
                vipMoney += n.vipMoney;
              }
            });
          });
        }
      }
      this.vipShowMoney = vipMoney;
    },
    // 优惠卷筛选
    ticketListArrFun() {
      let GIFTArr = [],
        MONEYArr = [],
        DISCOUNTArr = [],
        giftMost,
        that = this,
        ticket1,
        ticket2,
        ticket3,
        money = this.isVerb ? this.isVerbMoney : this.totolMoney;
      this.ticket = false;

      this.ticketList.forEach(function(i) {
        let ids = "",
          ids2 = "",
          arr,
          arr2;
        //优惠卷限制商品处理
        if (
          (i.consumeLimitProductIds && !i.couponDefProductId) ||
          (!i.consumeLimitProductIds && i.couponDefProductId) ||
          (i.consumeLimitProductIds && i.couponDefProductId)
        ) {
          ids = i.consumeLimitProductIds + "," + that.productIds;
          ids2 = i.couponDefProductId + "," + that.productIds;
          arr = ids.split(",");
          arr2 = ids2.split(",");
        }
        //优惠卷满额可用限制
        if (
          ((!i.consumeLimitProductIds && !i.couponDefProductId) ||
            (i.couponDefType === "GIFT" && that.mm(arr2)) ||
            that.mm(arr)) &&
          (i.useLimitMoney === -1 || i.useLimitMoney < Number(money) * 100)
        ) {
          if (i.couponDefType === "GIFT") GIFTArr.push(i);
          if (i.couponDefType === "MONEY") MONEYArr.push(i);
          if (i.couponDefType === "DISCOUNT") DISCOUNTArr.push(i);
        }
      });
      if (GIFTArr.length > 0) ticket1 = that.youhuiFun("GIFT", GIFTArr);

      if (MONEYArr.length > 0) ticket2 = that.youhuizheFun("MONEY", MONEYArr);

      if (DISCOUNTArr.length > 0)
        ticket3 = that.youhuizheFun("DISCOUNT", DISCOUNTArr);

      if (ticket1) this.ticket = ticket1;
      else if (ticket2) this.ticket = ticket2;
      else if (ticket3) this.ticket = ticket3;
    },
    // 验证重复元素，有重复返回true；否则返回false
    mm(arr) {
      return /(\x0f[^\x0f]+)\x0f[\s\S]*\1/.test(
        "\x0f" + arr.join("\x0f\x0f") + "\x0f"
      );
    },
    //算账
    totolMoneyFun(checkCard) {
      let that = this;
      this.vipCardList = [];
      this.vipBoolean = false;
      this.shopBoolean = false;
      if (that.changeType) {
        that.ticketListTime();
        that.totolMoney = 0;
        let ticketM = 0;
        if (!this.cardChangeBoolean && !checkCard) that.vipCardSearchFun();
        //每个卡的余额
        // this.vipCardListfun();
        let totolMoney = 0;
        that.products.forEach(function(i) {
          i.totoleMoney1 = that.NP.round(
            that.NP.times(
              that.NP.divide(i.currentPrice, 100),
              i.count,
              that.NP.divide(i.name3, 10)
            ),
            2
          );
          totolMoney = that.NP.round(
            that.NP.plus(
              totolMoney,
              that.NP.times(
                that.NP.divide(i.currentPrice, 100),
                i.count,
                that.NP.divide(i.name3, 10)
              )
            ),
            2
          );
        });

        this.createMoney = totolMoney;
        //标注每个卡对应的总计减免
        this.vipMoneyFun();
        this.balanceFun();
        that.products.forEach(function(i) {
          if (i.vipCard) {
            // i.totoleMoney = NP.round(NP.times(NP.divide(i.vipMoney, 100), i.num, NP.divide(i.discount, 100)), 2);
            if (i.vipCard.card.type === "TIMES") {
              i.totoleMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                i.count
              );
            } else if (i.vipCard.card.type === "METERING") {
              i.totoleMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                i.count
              );
            } else if (i.vipCard.card.type === "REBATE") {
              i.totoleMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                that.NP.divide(i.vipCard.card.rebate, 10),
                i.count
              );
            } else if (i.vipCard.card.type === "STORED") {
              i.totoleMoney = that.NP.times(
                that.NP.divide(i.name3, 10),
                that.NP.times(that.NP.divide(i.currentPrice, 100), 100),
                i.count
              );
            }

            i.totoleMoney = that.NP.divide(i.totoleMoney, 100);
            that.totolMoney = that.NP.round(
              that.NP.plus(that.totolMoney, that.NP.divide(i.vipMoney, 100)),
              2
            );
            that.isVerbMoney = Math.floor(that.totolMoney);
            that.vipBoolean = true;
          } else {
            i.totoleMoney = that.NP.round(
              that.NP.times(
                that.NP.divide(i.currentPrice, 100),
                i.count,
                that.NP.divide(i.name3, 10)
              ),
              2
            );
            that.totolMoney = that.NP.round(
              that.NP.plus(
                that.totolMoney,
                that.NP.times(
                  that.NP.divide(i.currentPrice, 100),
                  i.count,
                  that.NP.divide(i.name3, 10)
                )
              ),
              2
            );
            that.isVerbMoney = Math.floor(that.totolMoney);
            that.shopBoolean = true;
          }
        });
        this.tanchuang();
        that.productIdsFun(that.products);
        ticketM = that.ticketCheck
          ? that.ticket && that.products.length > 0
            ? that.ticket.ticketMoney
            : 0
          : 0;
        if (this.settleCardDTOList && this.settleCardDTOList.length > 0) {
          let ticketBoolean = false;
          this.settleCardDTOList.forEach(function(i) {
            if (
              i.type === "TIMES" ||
              i.type === "METERING" ||
              i.type === "REBATE"
            ) {
              ticketBoolean = true;
            }
          });
          that.ticket = ticketBoolean ? false : that.ticket;
          if (that.ticket) {
            that.totolMoney = that.NP.minus(that.totolMoney, ticketM);
            that.isVerbMoney = that.NP.minus(that.isVerbMoney, ticketM);
          }
          if ((that.totolMoney >= 0 || that.isVerbMoney >= 0) && that.ticket) {
            that.vipShowMoney -= ticketM * 100;
          } else if (
            (that.totolMoney < 0 || that.isVerbMoney < 0) &&
            that.ticket
          ) {
            that.vipShowMoney = 0;
          }
          // else {
          //     that.totolMoney = NP.divide(that.vipShowMoney, 100)
          //     that.isVerbMoney = NP.divide(that.vipShowMoney, 100)
          // }

          //  else if (!ticketBoolean) {
          //     this.vipCardList = [];
          //     this.vipShowMoney = 0;
          // }
        } else {
          that.totolMoney = that.NP.minus(that.totolMoney, ticketM);
          that.isVerbMoney = that.NP.minus(that.isVerbMoney, ticketM);
        }

        that.totolMoney = that.totolMoney < 0 ? 0 : that.totolMoney;
        that.isVerbMoney =
          that.isVerbMoney < 0 ? 0 : Math.floor(that.isVerbMoney);
        that.inputValue = that.isSwitch2 ? that.isVerbMoney : that.totolMoney;
        that.inputValue = that.inputValue ? that.inputValue.toFixed(2) : 0;
        // this.ticketListArrFun();
      } else {
        // if (that.xfCardList) {
        //   if (that.xfCardList.type === "REBATE" && this.xyVip) {
        //     this.vipCardmoney = this.REBATEValue;
        //     this.isVerbVipCardmoney = Math.floor(this.REBATEValue);
        //   } else if (that.xfCardList.type === "STORED" && this.xyVip) {
        //     this.vipCardmoney = this.STOREDValue;
        //     this.isVerbVipCardmoney = Math.floor(this.STOREDValue);
        //   } else {
        //     this.vipCardmoney =that. NP.divide(
        //       that.xfCardList.rules[0].price,
        //       100
        //     );
        //     this.isVerbVipCardmoney = Math.floor(that.vipCardmoney);
        //   }
        // }
      }
    },
    //结算fun
    jiesuanFun(type) {
      let that = this;
      console.log(this.authCode);
      let create = {};
      if (this.memberInfo) {
        create.customerName = this.memberInfo.customerName;
        create.phone = this.memberInfo.phone;
        create.authCode = this.authCode;
        create.birthday = this.memberInfo.birthday;
        create.gender = this.memberInfo.gender;
        if (this.memberInfo.cardNum) {
          create.cardNum = this.memberInfo.cardNum;
        }
        create.birthday = this.memberInfo.birthday;
        create.customerId = this.memberInfo.customerId;
      }

      const codeTyeNum = this.authCode;
      if (!this.changeType) {
        if (this.xyVip) create.bizType = "RECHARGE";
        else if (that.memberInfo.phone && !this.xyVip)
          create.bizType = "OPENCARD";
      } else {
        if (create.settleCardDTOList && create.settleCardDTOList.length > 0)
          create.bizType = "MEMBER";
        else create.bizType = "FIT";
      }

      create.recordType = create.authCode ? "COLLECT_MONEY" : "RECORD";

      if (
        this.ticket &&
        this.changeType &&
        that.products &&
        that.products.length > 0 &&
        that.ticketCheck
      ) {
        create.couponId = this.ticket.couponId;
      }

      let selectProduct = [];
      selectProduct.forEach((item, index) => {
        if (item.productId === "") {
          selectProduct.splice(index, 1);
        }
      });
      create.orderItem = selectProduct;
      create.preferentialMonery = 0; //优惠金额
      if (!that.changeType) {
        let configArray = [];
        let orderItem;
        if (that.xyVip) {
          orderItem = {
            cardId: that.xfCardList.cardInfo.card.cardId,
            // staffId: that.cardStaffId1,
            // staff2Id: that.cardStaffId2,
            typeName: "cardOrderItem"
          };
        } else {
          orderItem = {
            typeName: "cardOrderItem",
            cardConfigId: that.xfCardList.cardConfigId,
            cardConfigName: that.xfCardList.cardConfigName,
            cardConfigType: that.xfCardList.type,
            ruleId: that.xfCardList.rules[0].ruleId,
            balance: that.xfCardList.rules[0].balance,
            type: that.xfCardList.type,
            price: that.xfCardList.rules[0].price,
            validate: that.xfCardList.rules[0].validate,
            staffId: that.cardStaffId1,
            staff2Id: that.cardStaffId2,
            rebate: that.xfCardList.rules[0].rebate,
            storeId: that.storeId
          };
        }

        configArray.push(orderItem);
        create.orderItem = configArray;
      } else {
        let configArray = [];
        that.products.forEach(function(i) {
          let orderItem = {
            productId: i.productId,
            typeName: "productOrderItem", //商品订单固定值
            originalPrice: i.currentPrice,
            price: i.currentPrice,
            productName: i.productName,
            rebate: that.NP.times(i.name3, 10), //折扣
            storeId: that.storeId,
            staffId: i.staffId || "",
            assign: i.isSwitch ? 1 : 0,
            num: i.count,
            // staffName: "肖光华",
            // staff2Name: '',
            staff2Id: i.staffId2 || ""
          };
          configArray.push(orderItem);
        });
        create.orderItem = configArray;
        create.settleCardDTOList = [];
        if (that.products && that.products.length > 0) {
          that.products.forEach(function(i) {
            if (i.vipCard) {
              let data = {
                productIdList: [i.productId],
                cardId: i.vipCard.card.cardId,
                amount: 0,
                type: i.vipCard.card.type
              };
              if (i.vipCard.card.type === "TIMES") data.amount = 0;
              else if (i.vipCard.card.type === "METERING")
                data.amount += i.count;
              else if (i.vipCard.card.type === "REBATE")
                data.amount += that.NP.times(
                  i.count,
                  i.currentPrice / 100,
                  100,
                  that.NP.divide(i.vipCard.card.rebate, 10),
                  that.NP.divide(i.name3, 10)
                );
              else
                data.amount += that.NP.times(
                  i.count,
                  i.currentPrice / 100,
                  100,
                  that.NP.divide(i.name3, 10)
                );
              create.settleCardDTOList.push(data);
            }
          });
        }
      }
      if (type) {
        create.payType = type;
      } else {
        if (
          Number(codeTyeNum) === 10 ||
          Number(codeTyeNum) === 11 ||
          Number(codeTyeNum) === 12 ||
          Number(codeTyeNum) === 13 ||
          Number(codeTyeNum) === 14 ||
          Number(codeTyeNum) === 15
        ) {
          create.payType = "WECHATPAY";
        }
      }
      if (
        create.settleCardDTOList &&
        create.settleCardDTOList.length > 0 &&
        create.couponId
      ) {
        let cardTicketList = [];
        create.settleCardDTOList.forEach(function(i) {
          if (!that.ticket.consumeLimitProductIds) cardTicketList.push(i);
          else {
            i.productIdList.forEach(function(n) {
              if (that.ticket.consumeLimitProductIds.indexOf(n) > -1)
                cardTicketList.push(i);
            });
          }
        });
        if (cardTicketList && cardTicketList.length > 0) {
          cardTicketList[0].amount -=
            (that.ticketCheck
              ? that.ticket && that.xfList.length > 0
                ? that.ticket.ticketMoney
                : 0
              : 0) * 100;
          if (cardTicketList[0].amount < 0) cardTicketList[0].amount = 0;
          create.settleCardDTOList.forEach(function(i) {
            if (i.cardId === cardTicketList[0].cardId) i = cardTicketList[0];
          });
        }
      }

      if (create.settleCardDTOList && create.settleCardDTOList.length > 0) {
        create.recordType = "BUCKLECARD";
        create.payType = "MEMBERCARD";
        create.bizType = "MEMBER";
      }
      if (!that.changeType) {
        create.money = that.cardInputValue * 100;
        // create.extraMoney = that.STOREDextraMoney * 100;
        create.originMoney = create.money;
      } else {
        if (this.products && this.products.length > 0) {
          create.money = that.NP.times(that.createMoney, 100);
          create.originMoney = create.money;
        } else {
          create.money = that.NP.times(this.inputValue, 100);
        }
      }

      create.storeId = this.storeId;
      create.wipeDecimal = that.isSwitch2;
      // create.faceId = this.selectFaceId;
      this.spinBoolean = true;
      if (this.xyVip) {
        that.rechargeAndOrderPayFun(create);
      } else {
        if (this.vipBoolean && this.shopBoolean) {
          that.$refs.alertBox.alert(
            "单笔收银不支持同时使用会员卡扣卡及现金结算，请分笔进行结算"
          );
        } else {
          that.createOrderFun(create);
        }
      }
    },
    /**充值且付款 */
    rechargeAndOrderPayFun(rechargeObj) {
      let self = this;
      this.$ajax
        .post("merchant/order/recharge.json", rechargeObj)
        .then(function(res) {
          if (res.success) {
            self.$router.push("/paySuccess");
            let data = {
              member: self.memberInfo,
              order: res.data
            };
            sessionStorage.setItem("succesInfo", JSON.stringify(data));
          } else {
            self.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    //结算
    jiesuan() {
      let money = this.changeType ? this.inputValue : this.cardInputValue;
      let that = this;
      this.cardChangeBoolean = false;
      if (this.settleCardDTOList && this.settleCardDTOList.length > 0) {
        this.jiesuanFun();
      } else {
        this.isShowPayWay = true;
      }
    },
    createOrderFun(create) {
      this.loading = true;
      let that = this;
      this.$ajax
        .post("merchant/order/openOrder.json", create)
        .then(function(res) {
          if (res.success) {
            if (res.data === "CLOSE") {
              that.$router.push("/payFail");
            } else {
              that.$router.push("/paySuccess");
              let data = {
                member: that.memberInfo,
                order: res.data
              };
              sessionStorage.setItem("succesInfo", JSON.stringify(data));
            }
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //计算折扣卷/代金卷最优；
    youhuizheFun(type, arr) {
      let that = this,
        maxMoney,
        arr2 = [],
        arr3 = [],
        money = that.isSwitch2 ? that.isVerbMoney : that.totolMoney;
      arr.forEach(function(i) {
        i.tickType = type === "MONEY" ? "代金券" : "折扣券";
        if (!i.consumeLimitProductIds) {
          arr2.push(i);
        } else {
          let consumeLimitProductIdsArr = i.consumeLimitProductIds.split(",");
          for (let nu = 0; nu < consumeLimitProductIdsArr.length; nu++) {
            if (that.productIds.indexOf(consumeLimitProductIdsArr[nu]) > -1)
              arr2.push(i);
          }
        }
      });
      //拿出优惠最大的商品
      if (arr2.length > 0) {
        maxMoney = arr2[0];
        if (type === "MONEY") {
          arr2.forEach(function(i) {
            if (
              i.couponDefAmount > maxMoney.couponDefAmount &&
              (i.useLimitMoney === -1 ||
                that.NP.divide(i.useLimitMoney, 100) >= money)
            )
              maxMoney = i;
          });
          maxMoney.ticketMoney = that.NP.divide(maxMoney.couponDefAmount, 100);
        } else if (that.products.length > 0) {
          let xfListMoney = that.products[0].currentPrice;
          //挑选最贵的商品
          that.products.forEach(function(m) {
            if (m.currentPrice > xfListMoney) xfListMoney = m.currentPrice;
          });
          arr2.forEach(function(i, n) {
            if (
              that.NP.times(i.couponDefDiscount, xfListMoney) >
                that.NP.times(maxMoney.couponDefDiscount, xfListMoney) &&
              (i.useLimitMoney === -1 ||
                that.NP.divide(i.useLimitMoney, 100) >= money)
            )
              maxMoney = i;
          });
          maxMoney.ticketMoney = that.NP.divide(
            that.NP.times(
              that.NP.divide(maxMoney.couponDefDiscount, 10),
              xfListMoney
            ),
            100
          );
        }
      }
      return maxMoney;
    },
    restProductJson() {
      let that = this;
      let products = that.chargeInfo.products;
      products.forEach(function(i, k) {
        i.productList.forEach(function(n, j) {
          products[k].productList[j].count = 0;
        });
      });
      products.forEach(function(i, k) {
        i.productList.forEach(function(n, j) {
          that.products.forEach(function(m) {
            if (n.productId === m.productId && m.count > 0) {
              products[k].productList[j] = m;
            }
          });
        });
      });
      that.chargeInfo.products = products;
      that.chargeInfo.orderInfo = that.products;
      sessionStorage.setItem("chargeInfo", JSON.stringify(that.chargeInfo));
    },
    //计算礼品卷最优礼品；
    youhuiFun(type, arr) {
      let that = this,
        maxMoney,
        arr2 = [],
        arr3 = [],
        money = this.isVerb ? this.isVerbMoney : this.totolMoney;
      if (type === "GIFT") {
        arr.forEach(function(i, n) {
          arr2.push(i);
          i.tickType = "礼品券";
          that.allproducks.forEach(function(m) {
            m.productList.forEach(function(z) {
              if (z.productId === i.couponDefProductId) {
                i.price = z.currentPrice;
              }
            });
          });
        });
        arr.forEach(function(i, n) {
          if (!i.price) {
            arr2.splice(n, 1);
          }
        });
      }
      //查看商品中是否有对应的礼品
      arr2.forEach(function(i) {
        if (that.productIds.indexOf(i.couponDefProductId) > -1) {
          arr3.push(i);
        }
      });
      //拿出优惠最大的商品
      if (arr3.length > 0) {
        maxMoney = arr3[0];
        arr3.forEach(function(i) {
          if (
            i.price > maxMoney.price &&
            (i.useLimitMoney === -1 ||
              that.NP.divide(i.useLimitMoney, 100) >= money)
          )
            maxMoney = i;
        });
        maxMoney.ticketMoney = NP.divide(maxMoney.price, 100);
      }
      return maxMoney;
    },
    // 获取会员优惠券
    getMemberTicket(customerId) {
      let data = {
        customerId: customerId,
        storeId: this.storeId
      };
      let that = this;

      this.$ajax
        .get("merchant/member/coupon/customer.json", {
          params: data
        })
        .then(function(res) {
          if (res.success) {
            that.ticketList = res.data;
            console.log(that.ticketList);
            that.ticketList.forEach(function(i) {
              if (i.couponDefType === "GIFT") {
                i.couponDefTypeName = "礼品券";
              }
              if (i.couponDefType === "MONEY") {
                i.couponDefTypeName = "代金券";
              }
              if (i.couponDefType === "DISCOUNT") {
                i.couponDefTypeName = "折扣券";
              }
            });
            that.totolMoneyFun();
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //所有的商品id
    productIdsFun(xfList) {
      let that = this;
      let productIds = "";
      xfList.forEach(function(produck) {
        productIds += produck.productId + ",";
      });
      this.productIds = productIds;
      this.ticketListArrFun();
      // that.checkTicketStatus();
    },
    incrementTotal(target) {
      this.payType = target;
      this.jiesuanFun(target);
    }
  },
  created() {
    document.title = "订单";
    let that = this;
    this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"));
    this.products = this.chargeInfo ? this.chargeInfo.orderInfo : [];
    this.xfCardList = this.chargeInfo ? this.chargeInfo.cardInfo : false;
    this.xyVip = this.xfCardList ? this.xfCardList.xyVip : false;
    if (this.xfCardList && this.xfCardList.yichiyou) {
      this.cardInputValue = this.xfCardList.cardInfo.rechargeAmount;
      this.STOREDextraMoney = this.xfCardList.cardInfo.giveAmount;
    } else {
      this.cardInputValue = this.xfCardList
        ? this.xfCardList.rules[0].price / 100
        : 0;
    }

    this.vipCardSearchFun();
    if (that.products && that.products.length > 0) {
      that.products.forEach(function(i, m) {
        i.name1 = "";
        i.name2 = "";
        if (!i.name3) i.name3 = 10;
        if (m === 0) i.isShowMoreItem = true;
        else i.isShowMoreItem = false;
      });
    }
    if (this.chargeInfo && this.chargeInfo.memberInfo) {
      this.isShowMember = true;
      this.memberInfo = that.chargeInfo.memberInfo.customer
        ? that.chargeInfo.memberInfo.customer
        : false;
      that.getMemberTicket(this.memberInfo.customerId);
    }
    if (this.chargeInfo) {
      this.changeType = this.chargeInfo.changeType;
    }
    console.log(this.changeType);
    this.getAllstaff();
    this.totolMoneyFun();
  },
  watch() {},
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
.foot2 {
  height: 1rem !important;
  bottom: 0 !important;
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
.shifuInput {
  width: 100px;
  border: 1px solid #e5e5e5;
  height: 30px;
  display: inline-block;
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
  text-align: right;
}
</style>
