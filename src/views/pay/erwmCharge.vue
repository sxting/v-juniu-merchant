<template>
    <div class="main ub ub-ver">
        <div class="content ub-f1">
            <div class="erwm ub ub-ver ub-pc">
                <div class="erwmHead tx-c" v-if="isWx"><i class="icon_wx"></i><i class="f16 uds">微信</i></div>
                <div class="erwmHead tx-c" v-else><i class="icon_alipay"></i><i class="f16 uds">支付宝</i></div>
                <div class="erwmDiv">
                    <img src="../../assets/erwm.png" class="udb mato">
                    <p class="rc f20 tx-c mt20">￥20.00<i class="f14 rc">元</i></p>
                    <p class="sc f12 tx-c mt05">应收金额</p>
                </div>
                <div class="erwmFoot tx-c">让顾客扫描二维码向我付款</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "erwmCharge",
        data() {
            return {
                isWx:true,
                isDisabled:true,
                bookNum:0,
                isShowBus:false
            };
        },
        methods: {

        },
        created() {
            document.title="二维码收款";
        }
    };
</script>

<style scoped>
.main{height: 100%;}
.content{background: #ff6000;padding: 0.50rem 0.30rem;}
.erwm{width: 100%;background: #fff;border-radius: 0.10rem;overflow: hidden;}
.erwm img{width: 3.32rem;height: 3.32rem;}
.mt20{margin-top: 0.30rem}
.erwmHead{height: 0.94rem;padding-left: 0.40rem;font-size: 0.26rem;line-height: 0.94rem;background: #f6f6f6;}
.erwmDiv{padding: 1rem 0 0.6rem 0;}
.erwmFoot{height: 1.0rem;font-size: 0.28rem;line-height: 0.88rem;background: #fff;color: #666;line-height: 1.0rem;border-top: 1px #eee solid;width: 90%;margin: 0 auto;}
.icon_alipay{display: inline-block;width: 0.40rem;height: 0.40rem;background: url(../../assets/icon_alipay.png) no-repeat center center;background-size: 100% 100%;margin-right: 0.16rem;vertical-align: middle;}
.icon_wx{display: inline-block;width: 0.40rem;height: 0.40rem;background: url(../../assets/icon_wx.png) no-repeat center center;background-size: 100% 100%;margin-right: 0.16rem;vertical-align: middle;}
</style>
