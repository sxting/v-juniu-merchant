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
            <div class="orderInfo">
                <div class="item plr20 bbc ub ub-ac ub-pj">
                    <p class="ub ub-ac">
                        <i :class="{'icon_drop':!isShowMoreItem,'icon_down':isShowMoreItem}" @click="dropOrder"></i>项目名称</p>
                    <p class="ub ub-ac numBox">
                        <span class="money f14">￥200</span>
                        <span @click="delOne" class="ctlbtn">
                            <i class="icon-del sc iconfont"></i>
                        </span>
                        <i class="number btbc">{{bookNum}}</i>
                        <span @click="addOne()" class="ctlbtn">
                            <i class="icon-add sc iconfont"></i>
                        </span>
                    </p>
                </div>
                <div class="bbc plr20" v-show="isShowMoreItem">
                    <div class="item ub ub-pj ub-ac" @click="openPicker1">
                        <p class="ub-f1 sc f13 pl48">服务技师</p>
                        <p class="bc f13">{{name1}}</p>
                        <i class="arrow-down"></i>
                    </div>
                    <div class="item ub ub-pj ub-ac">
                        <p class="ub-f1 sc f13 pl48">是否指定服务技师</p>
                        <div class="switch-btn">
                            <div class="icon-on" v-if="isSwitch1" @click="switchBoolen1"></div>
                            <div class="icon-off" v-else @click="switchBoolen1"></div>
                        </div>
                    </div>
                    <div class="item ub ub-pj ub-ac" @click="openPicker2">
                        <p class="ub-f1 sc f13 pl48">服务小工</p>
                        <p class="bc f13">{{name2}}</p>
                        <i class="arrow-down"></i>
                    </div>
                </div>
                <div class="item plr20 bbc ub ub-ac ub-pj" @click="openPicker3">
                    <p class="ub-f1 sc f13 pl48">折扣</p>
                    <span class="money f13">￥10</span>
                    <p class="f13">{{name3}}</p>
                    <i class="arrow-down"></i>
                </div>
                <div class="item plr20 ub ub-pj">
                    <p class="pl48">实付</p>
                    <p class="finallNum">￥190</p>
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
            <div class="ub">
                <div class="ub-f1 total">￥190</div>
                <button :disabled="isDisabled" type="button" @click="toerwmCharge">去结算</button>
            </div>
        </div>
        <!-- 服务技师 -->
        <mt-popup v-model="pickerVisible1" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker">取消</span>
                <span class="picker-confirm" @click="closePicker">完成</span>
            </div>
            <mt-picker :slots="actions1" @change="onPickerChange1"></mt-picker>
        </mt-popup>
        <!-- 服务小工 -->
        <mt-popup v-model="pickerVisible2" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker">取消</span>
                <span class="picker-confirm" @click="closePicker">完成</span>
            </div>
            <mt-picker :slots="actions2" @change="onPickerChange2"></mt-picker>
        </mt-popup>
        <!-- 折扣 -->
        <mt-popup v-model="pickerVisible3" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker">取消</span>
                <span class="picker-confirm" @click="closePicker">完成</span>
            </div>
            <mt-picker :slots="actions3" @change="onPickerChange3"></mt-picker>
        </mt-popup>
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
      isSwitch1: true,
      isSwitch2: true,
      isShowMember: false,
      //弹框选择
      pickerVisible1: false, //服务技师
      pickerVisible2: false, //服务小工
      pickerVisible3: false, //折扣
      actions1: [
        {
          values: ["技师1", "技师2", "技师3", "技师4", "技师5", "技师6"]
        }
      ],
      actions2: [
        {
          values: ["小工1", "小工2", "小工3", "小工4", "小工5", "小工6"]
        }
      ],
      actions3: [
        {
          values: ["折扣1", "折扣2", "折扣3", "折扣4", "折扣5", "折扣6"]
        }
      ],
      name1: "",
      name2: "",
      name3: "",
      isShowPayWay: false,
      storeId:sessionStorage.getItem("storeId")
    };
  },
  methods: {
    delOne() {
      if (this.bookNum > 0) {
        this.bookNum--;
      }
    },
    dropOrder() {
      this.isShowMoreItem = !this.isShowMoreItem;
    },
    switchBoolen1() {
      this.isSwitch1 = !this.isSwitch1;
    },
    switchBoolen2() {
      this.isSwitch2 = !this.isSwitch2;
    },
    toerwmCharge() {
      this.isShowPayWay = true;
      // this.$router.push('/erwmCharge');
    },
    toMemberInfo() {
      this.$router.push("/memberInfo");
    },
    addGood() {
      this.$router.push("/charge");
    },
    toMemberSearch() {
      this.$router.push("/memberSearch");
    },
    toMemberCard() {
      this.$router.push("/memberCard");
    },
    addOne() {
      this.bookNum++;
    },
    delOne() {
      if (this.bookNum > 0) this.bookNum--;
    },
    openPicker1() {
      this.pickerVisible1 = true;
    },
    openPicker2() {
      this.pickerVisible2 = true;
    },
    openPicker3() {
      this.pickerVisible3 = true;
    },
    closePicker() {
      this.pickerVisible1 = false;
      this.pickerVisible2 = false;
      this.pickerVisible3 = false;
    },
    onPickerChange1(picker, values) {
      this.name1 = values[0];
    },
    onPickerChange2(picker, values) {
      this.name2 = values[0];
    },
    onPickerChange3(picker, values) {
      this.name3 = values[0];
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
            console.log(res.data)
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
    document.title = "订单";
    this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"));
    if (this.chargeInfo.memberInfo) this.isShowMember = true;
    this.getAllstaff();
  }
};
</script>

<style scoped>
.main {
  background: #f2f2f2;
  padding-top: 1.12rem;
  height: 100%;
  padding-bottom: 1rem;
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
  bottom: 0;
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
