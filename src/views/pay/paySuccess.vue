<template>
    <div class="main ub ub-ver">
        <div class="toper">
            <img src="../../assets/icon_success.png" class="udb mato" width="60" height="60">
            <p class="bc f16 tx-c mt15">收银成功</p>
            <!-- <p class="sc f12 tx-c mt05">会员卡支付</p> -->
            <div class="ub ub-pj1 mt50 plr15">
                <div class="btn_common"  @click="toHome">返回首页</div>
            </div>
            <div class="ub ub-pj1 mt50 plr15">
                <div class="btn" @click="toPrint">打印小票</div>
            </div>
        </div>
        <div v-if="isShowMember" class="mt10 bgb">
            <div class="ub ub-ac userInfo plr10">
                <img src="../../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f12 ub ub-ac">{{succesInfo.member.customerName}}
                        <i class="icon_male ml05" v-if="succesInfo.member.gender==1"></i>
                        <i class="icon_women ml05" v-if="succesInfo.member.gender==0"></i>
                        <i class="icon_weizhi ml05" v-if="succesInfo.member.gender==2"></i>
                        <i class="icon_vip ml10"></i>
                    </p>
                    <p class="f12 mt05">{{succesInfo.member.phone}}</p>
                </div>
                <!-- <div class="userbtn" @click="toDetail">查看详情</div> -->
            </div>
            <div class="btc h50 ub ub-ac ub-pj plr15 " v-for="(item,index) in succesInfo.order" :key="index"  v-if="item&&item.cardType !== 'TIMES'">
                <p class="sc" >{{item.cardName}}</p>
                <p class="bc" v-if="item.cardType === 'STORED'||item.cardType === 'REBATE'">余额：¥{{item.balance/100}}</p>
                <p class="bc" v-if="item.cardType === 'METERING'">余额：¥{{item.balance}}</p>
            </div>

        </div>
        <!-- <div class="mt30 plr15">
            <div class="btn_common">继续收银</div>
        </div> -->
        <alertBox ref="alertBox"></alertBox>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: true,
      bookNum: 0,
      isShowBus: false,
      isShowMember: true,
      succesInfo: ""
    };
  },
  components: {},
  methods: {
    toDetail() {
      this.$router.push("/memberInfo");
    },
    toHome(){
      this.$router.push("/home");
    },
    toPrint(){
      let that = this;
      let create = {
        orderId: this.succesInfo.order.orderId,
        merchantId: JSON.parse(sessionStorage.getItem('User-Info')).merchantId
      }
      this.$ajax
        .get("merchant/order/order/print.json", {params:create})
        .then(function(res) {
            if (res.success) {
              that.$router.push("/home");
            } else {
              that.$refs.alertBox.alert(res.errorInfo);
            }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  computed: {},
  created() {
    document.title = "收银成功";
    this.succesInfo = JSON.parse(sessionStorage.getItem("succesInfo"))?JSON.parse(sessionStorage.getItem("succesInfo")):false;
    if(this.succesInfo&&this.succesInfo.order === 'SUCCESS') this.succesInfo.order =[];
    if(this.succesInfo&&JSON.stringify(this.succesInfo.member) === "{}") this.isShowMember = false;
  }
};
</script>

<style scoped>
.main {
  height: 100%;
}
.toper {
  padding: 0.8rem 0 0.5rem;
  background-color: #fff;
  height: 310px;
}
.mt50 {
  margin-top: 0.5rem;
}
.btn {
  height: 0.88rem;
  width: 100%;
  font-size: 0.28rem;
  line-height:  0.88rem;
  text-align: center;
  background-color: #fff;
  color: #999;
  border-radius: 0.1rem;
  border: 1px #eee solid;
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
  background-color: #fff;
  color: #ff6000;
  width: 1.8rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.56rem;
  border: 1px #ff6000 solid;
}
.h50 {
  height: 1rem;
}
</style>
