<template>
    <div class="main ub ub-ver">
        <div class="toper">
            <img src="../../assets/erwm.png" class="udb mato" width="60" height="60">
            <p class="bc f16 tx-c">收银成功</p>
            <p class="sc f12 tx-c">会员卡支付</p>
            <div class="ub ub-pj1 mt50 plr15">
                <div class="btn">返回首页</div>
                <div class="btn">继续收银</div>
                <div class="btn1">打印小票</div>
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
            document.title="收银成功";
        }
    };
</script>

<style scoped>
.main{height: 100%;}
.toper{padding: 0.8rem 0;background-color: #fff}
.mt50{margin-top: 0.50rem}
.btn{width: 1.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#ff6600;border-radius: 0.10rem;border:1px #ff6600 solid;}
.btn1{width: 1.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.70rem;text-align: center;background-color: #ff6600;color:#fff;border-radius: 0.10rem;}
</style>
