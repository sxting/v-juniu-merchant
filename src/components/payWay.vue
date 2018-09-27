<template>
  <div v-show="isShowPayWay" class="modal ub ub-ac ub-pc" @click="modalListener">
    <div class="paybox plr10">
      <!-- <div class="content"> -->
        <!-- <div class="title">扫码收款</div>
        <div class="ub ub-ac ub-pj mt05"> -->
          <!-- <div class="item">
            <img src="../assets/ion_sys.png" class="udb">
            <p class="sc f12">扫一扫</p>
          </div> -->
          <!-- <div class="item" @click="toerwmCharge('alipay')">
            <img src="../assets/ion_alipay.png" class="udb">
            <p class="sc f12">支付宝</p>          
          </div>
          <div class="item" @click="toerwmCharge('wx')">
            <img src="../assets/ion_wx.png" class="udb">
            <p class="sc f12">微信</p>          
          </div> -->
          <!-- <div class="item">
          </div>
        </div> -->
      <!-- </div> -->
      <div class="content btc">
        <div class="title">记录收款</div>
        <div class="ub ub-ac ub-pj mt05">
          <div class="item">
            <img src="../assets/ion_alipay.png"  @click="toerwmCharge('ALIPAY')" class="udb">
            <p class="sc f12">支付宝</p>
          </div>
          <div class="item">
            <img src="../assets/ion_wx.png" @click="toerwmCharge('WECHATPAY')" class="udb">
            <p class="sc f12">微信</p>
          </div>
          <div class="item">
            <img src="../assets/ion_cash.png"  @click="toerwmCharge('CASH')" class="udb">
            <p class="sc f12">现金</p>
          </div>
          <div class="item">
            <img src="../assets/ion_bank.png"  @click="toerwmCharge('BANKCARD')" class="udb">
            <p class="sc f12">银行卡</p>
          </div>
        </div>
      </div>
      <div class="btn_concel tx-c" @click="close()">取消</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isShowPayWay",'payWay','increment'],
  data() {
    return {
      option: {
        modalClickHide: false, //模态背景层点击是否可以隐藏
        title: "提示",
        content: "请确认"
      }
    };
  },
  methods: {
    toerwmCharge(str) {
      // this.$emit("update:payWay", str);
      let st = str
      this.$emit("increment", st);
      // this.$store.commit("updatePayType", str);
      // this.$router.push("/erwmCharge");
    },
    modalListener() {
      if (this.option.modalClickHide) {
        this.$emit("update:isShowPayWay", false);
      }
    },
    close() {
      this.$emit("update:isShowPayWay", false);
    }
  }
};
</script>
<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.paybox {
  width: 100%;
  margin: auto;
  border-radius: 0.1rem 0.1rem 0 0;
  background: #fff;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
}
.content {
  font-size: 0.26rem;
  color: #333;
  line-height: 0.6rem;
  width: 100%;
  padding: 0.2rem 0.1rem;
}
.title {
  font-size: 0.28rem;
  color: #333;
  height: 0.6rem;
  text-align: left;
}
.item {
  text-align: left;
  width: 0.98rem;
}
.item img {
  width: 0.98rem;
  height: 0.98rem;
}
.item p {
  text-align: center;
  margin-top: 0.05rem;
}
.btn_concel {
  height: 0.88rem;
  line-height: 0.88rem;
  color: #666;
  border-top: 1px #eee solid;
}
</style>
