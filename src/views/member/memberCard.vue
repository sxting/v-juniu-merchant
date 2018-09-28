<template>
  <div class="main">
    <div class="content bgb">
      <div class="plr15">
        <div class="tabList ub ub-pj">
          <div v-for="(item,index) in tabList" :key="index" :class="{'on':curTabIndex==index}" @click="swtichTab(index)">{{item}}</div>
        </div>
      </div>
      <div v-show="curTabIndex==0" class="voucher bgb">
        <div class="item type1" v-for="(item,index) in cardInfo.STOREDList" :key="index" @click="toRecharge(item)">
          <div class="remark " :class="item.yichiyou?'yi':'wei'">{{item.yichiyou?'已持有':'未持有'}}</div>
          <p>{{item.cardConfigName}}</p>
          <div class="ub ub-pj ub-ac amount" v-if="!item.yichiyou">
            <p class="f20">储值{{item.rules[0].balance/100}}元</p>
            <p class="f20">￥{{item.rules[0].price/100}}元</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="!item.yichiyou">
            <p class="f12">{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}
              <i class="ml10 f12">有效期：{{item.rules[0].validate==='99999999'?'永久有效':item.rules[0].validate}}天</i>
            </p>
            <button>购买</button>
          </div>

          <div class="ub ub-pj ub-ac amount" v-if="item.yichiyou">
            <p class="f20">余额{{item.cardInfo.card.balance/100}}元</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="item.yichiyou">
            <div class="f12">
              <p>{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}</p>
              <p>
                <i class=" f12">有效期截止：{{item.cardInfo.card.validity}}</i>
              </p>
            </div>
            <button>充值</button>
          </div>
        </div>
      </div>
      <div v-show="curTabIndex==1" class="voucher bgb">
        <div class="item type2" v-for="(item,index) in cardInfo.REBATEList" :key="index" @click="toRecharge(item)">
          <div class="remark " :class="item.yichiyou?'yi':'wei'">{{item.yichiyou?'已持有':'未持有'}}</div>
          <p>{{item.cardConfigName}}</p>
          <div class="ub ub-pj ub-ac amount" v-if="!item.yichiyou">
            <p class="f20">储值{{item.rules[0].balance/100}}元({{item.rules[0].rebate}}折卡)</p>
            <p class="f20">￥{{item.rules[0].price/100}}元</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="!item.yichiyou">
            <p class="f12">{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}
              <i class="ml10 f12">有效期：{{item.rules[0].validate==='99999999'?'永久有效':item.rules[0].validate}}天</i>
            </p>
            <button>购买</button>
          </div>

          <div class="ub ub-pj ub-ac amount" v-if="item.yichiyou">
            <p class="f20">余额{{item.cardInfo.card.balance/100}}元({{item.rules[0].rebate}}折卡)</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="item.yichiyou">
            <div class="f12">
              <p>{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}</p>
              <p>
                <i class=" f12">有效期截止：{{item.cardInfo.card.validity}}</i>
              </p>
            </div>
            <button>充值</button>
          </div>
        </div>
      </div>
      <div v-show="curTabIndex==2" class="voucher bgb">
        <div class="item type3" v-for="(item,index) in cardInfo.METERINGList" :key="index" @click="toRecharge(item)">
          <div class="remark " :class="item.yichiyou?'yi':'wei'">{{item.yichiyou?'已持有':'未持有'}}</div>
          <p>{{item.cardConfigName}}</p>
          <div class="ub ub-pj ub-ac amount" v-if="!item.yichiyou">
            <p class="f20">{{item.rules[0].balance}}次</p>
            <p class="f20">￥{{item.rules[0].price/100}}元</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="!item.yichiyou">
            <p class="f12">{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}
              <i class="ml10 f12">有效期：{{item.rules[0].validate==='99999999'?'永久有效':item.rules[0].validate}}天</i>
            </p>
            <button>购买</button>
          </div>

          <div class="ub ub-pj ub-ac amount" v-if="item.yichiyou">
            <p class="f20">{{item.cardInfo.card.balance}}次</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="item.yichiyou">
            <div class="f12">
              <p>{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}</p>
              <p>
                <i class=" f12">有效期截止：{{item.cardInfo.card.validity}}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="curTabIndex==3" class="voucher bgb">
        <div class="item type4" v-for="(item,index) in cardInfo.TIMESList" :key="index" @click="toRecharge(item)">
          <div class="remark " :class="item.yichiyou?'yi':'wei'">{{item.yichiyou?'已持有':'未持有'}}</div>
          <p>{{item.cardConfigName}}</p>
          <div class="ub ub-pj ub-ac amount" v-if="!item.yichiyou">
            <p class="f20" v-if="item.rules[0].validate!=='99999999'">有效期：{{item.rules[0].validate}}天</p>
            <p class="f20" v-if="item.rules[0].validate==='99999999'">永久有效</p>
            <p class="f20">￥{{item.rules[0].price/100}}元</p>
          </div>
          <div class="btc1 ub ub-pj date" v-if="!item.yichiyou">
            <p class="f12">{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}
            </p>
            <button>购买</button>
          </div>

          <div class="ub ub-pj ub-ac amount" v-if="item.yichiyou">
            <div class="f20" v-if="item.rules[0].validate!=='99999999'">
              <p>有效期截止：</p>
              <p>{{item.cardInfo.card.validity}}</p>
            </div>
          </div>
          <div class="btc1 ub ub-pj date" v-if="item.yichiyou">
            <p class="f12">{{item.rules[0].applyProductType==='ALL'?'全部商品可用':'部分商品可用'}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <alertBox ref="alertBox"></alertBox>
  </div>
</template>

<script>
export default {
  name: "memberCard",
  data() {
    return {
      tabList: ["储值卡", "折扣卡", "计次卡", "期限卡"],
      ishave: 1,
      curTabIndex: 0,
      storeId: sessionStorage.getItem("storeId"),
      cardInfo: {
        STOREDList: [],
        METERINGList: [],
        REBATEList: [],
        TIMESList: []
      },
      chargeInfo: {}
    };
  },
  methods: {
    swtichTab(num) {
      this.curTabIndex = num;
    },
    toRecharge(item) {
      this.chargeInfo.cardInfo = item;
      this.chargeInfo.changeType = false;
      if (item.yichiyou) this.chargeInfo.cardInfo.xyVip = true;
      else this.chargeInfo.cardInfo.xyVip = false;
      sessionStorage.setItem("chargeInfo", JSON.stringify(this.chargeInfo));
      if (item.yichiyou && item.type !== "METERING" && item.type !== "TIMES")
        this.$router.push("/recharge");
      else if (!item.yichiyou) this.$router.push("/order");
    },
    toBuyCard() {},
    toAddMember() {
      this.$router.push("/addMember");
    },
    cardFun(data) {
      let cardInfo = {
        STOREDList: [],
        METERINGList: [],
        REBATEList: [],
        TIMESList: []
      };
      data.forEach(i => {
        if (i.type === "TIMES" && i.yichiyou) cardInfo.TIMESList.push(i);
        if (i.type === "REBATE" && i.yichiyou) cardInfo.REBATEList.push(i);
        if (i.type === "METERING" && i.yichiyou) cardInfo.METERINGList.push(i);
        if (i.type === "STORED" && i.yichiyou) cardInfo.STOREDList.push(i);
      });
      data.forEach(i => {
        if (i.type === "TIMES" && !i.yichiyou) cardInfo.TIMESList.push(i);
        if (i.type === "REBATE" && !i.yichiyou) cardInfo.REBATEList.push(i);
        if (i.type === "METERING" && !i.yichiyou) cardInfo.METERINGList.push(i);
        if (i.type === "STORED" && !i.yichiyou) cardInfo.STOREDList.push(i);
      });
      return cardInfo;
    },
    memberListHttp(list) {
      let that = this;
      let data = {
        storeId: that.storeId,
        pageIndex: 1,
        pageSize: 1000
      };
      this.$ajax
        .get("merchant/member/config/lists.json", {
          params: data
        })
        .then(function(res) {
          if (res.success) {
            let cardConfigList = res.data.cardConfig;
            cardConfigList.forEach(function(i) {
              if (list && list.length > 0) {
                list.forEach(function(n) {
                  if (i.cardConfigId === n.card.cardConfigId) {
                    i.yichiyou = true;
                    i.cardInfo = n;
                  }
                });
              }
            });
            that.cardInfo = that.cardFun(cardConfigList);
            console.log(that.cardInfo);
            console.log(list);
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
          //   that.$refs.alertBox.alert(err);
        });
    }
  },
  computed: {},
  created() {
    document.title = "会员卡";
    this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"));
    this.memberListHttp(this.chargeInfo.memberInfo.cardApplies);
  }
};
</script>

<style scoped>
.main {
  background-color: #f9f9f9;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  position: relative;
  padding-top: 0.3rem;
}

.content {
  border-radius: 0.2rem;
  overflow: hidden;
}

.tabList {
  border-bottom: #eee 1px solid;
}

.tabList div {
  width: 1rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.28rem;
  color: #666;
}

.tabList div.on {
  color: #ff6000 !important;
  border-bottom: #ff6000 1px solid !important;
}

.voucher {
  padding: 0.01rem 0.24rem 0.3rem;
}

.voucher .item {
  width: 100%;
  padding: 0.3rem;
  margin-top: 0.3rem;
  color: #fff;
  border-radius: 0.1rem;
  position: relative;
  box-shadow: 0 8px 13px rgba(255, 96, 0, 0.2);
  overflow: hidden;
}

.voucher .type1 {
  background-image: linear-gradient(left, #fba13a, #fdb24d);
}

.voucher .type2 {
  background-image: linear-gradient(left, #ff6c6c, #ffb444);
}

.voucher .type3 {
  background-image: linear-gradient(left, #4d93ff, #62c0f2);
}

.voucher .type4 {
  background-image: linear-gradient(left, #726bff, #f9aeff);
}

.voucher .item .remark {
  width: 1.2rem;
  height: 0.6rem;
  padding-top: 0.23rem;
  font-size: 0.18rem;
  color: #fff;
  background-color: #ff8000;
  transform: rotate(45deg);
  position: absolute;
  top: -0.08rem;
  right: -0.37rem;
  text-align: center;
}

.voucher .item .remark.yi {
  color: #fff;
  background-color: #ff8000;
}

.voucher .item .remark.wei {
  color: #999;
  background-color: #dedede;
}

.voucher .item .amount {
  margin-top: 0.25rem;
  margin-bottom: 0.28rem;
}

.voucher .item .date {
  padding-top: 0.26rem;
  padding-bottom: 0.05rem;
}

.voucher button {
  width: 1.1rem;
  line-height: 0.42rem;
  height: 0.42rem;
  text-align: center;
  color: #ff6000;
  background-color: #fff;
  border-radius: 0.08rem;
  font-size: 0.28rem;
}
</style>
