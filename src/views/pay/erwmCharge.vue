<template>
    <div class="main ub ub-ver">
        <div class="toper">
            <p class="rc f16 tx-c">20.00 <i class="f12 rc">元</i></p>
            <p class="bc f12 tx-c">应收金额</p>
        </div>
        <div class="content ub-f1">
            <div class="erwm ub ub-ver ub-pc">
                <div class="f13 erwmTit ub ub-ac"><i class="icon_alipy"></i>支付宝</div>
                <div class="erwmDiv">
                    <img src="../../assets/erwm.png" class="udb mato">
                    <p class="f12 tx-c mt20">让顾客扫描二维码</p>
                    <p class="f12 tx-c">向我付款</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "charge",
        data() {
            return {
                isDisabled:true,
                bookNum:0,
                isShowBus:false
            };
        },
        components: {},
        methods: {

        },
        computed: {

        },
        created() {
            document.title="二维码收款";
        }
    };
</script>

<style scoped>
.main{height: 100%;}
.toper{padding: 1rem 0;}
.content{background: #ffae4e;padding: 0.40rem}
.erwm{width: 100%;background: #fff;border-radius: 0.10rem;}
.erwm img{width: 4rem;height: 4rem;}
.mt20{margin-top: 0.30rem}
.erwmTit{height: 0.88rem;padding-left: 0.40rem;font-size: 0.26rem;line-height: 0.88rem;background: #f6f6f6;border-radius: 0.10rem 0.1rem 0 0}
.erwmDiv{padding: 1rem 0 0.6rem 0;}
.icon_alipy{display: block;width: 0.48rem;height: 0.48rem;background: url(../../assets/icon_alipay.png) no-repeat center center;background-size: 100% 100%;margin-right: 0.20rem}
</style>
