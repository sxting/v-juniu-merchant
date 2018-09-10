<template>
    <div class="main ub ub-ver">
        <div class="toper">
            <img src="../../assets/icon_fail.png" class="udb mato" width="60" height="60">
            <p class="bc f16 tx-c mt15">收银成功</p>
            <p class="sc f12 tx-c mt05">所选银行卡余额不足</p>
            <div class="ub ub-pj1 mt50 plr15">
                <div class="btn">返回首页</div>
                <div class="btn">继续收银</div>
            </div>
        </div>
        <div v-if="isShowMember" class="mt10 bgb">
            <div class="ub ub-ac userInfo plr10">
                <img src="../../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f12 ub ub-ac">王云鹏<i class="icon_male ml05"></i><i class="icon_vip ml10"></i></p>
                    <p class="f12 mt05">10000000000</p>
                </div>
                <div class="userbtn" @click="toDetail">查看详情</div>
            </div>
            <div class="btc h50 ub ub-ac ub-pj plr15">
                <p class="sc">黄金储值卡</p>
                <p class="bc">余额：¥80</p>
            </div>
            <div class="btc h50 ub ub-ac ub-pj plr15">
                <p class="sc">理发次卡</p>
                <p class="bc">余额：¥80</p>
            </div>
        </div>
        <div class="mt30 plr15">
            <div class="btn_common">重新支付</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "charge",
        data() {
            return {
                isShowMember:false
            };
        },
        components: {},
        methods: {
            toDetail(){
                this.$router.push('/memberInfo');
            }
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
.toper{padding: 0.8rem 0 0.50rem;background-color: #fff}
.mt50{margin-top: 0.50rem}
.btn{width: 2.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#999;border-radius: 0.10rem;border:1px #eee solid;}
.userInfo{background-color: #fff;padding:0.16rem 0.24rem; border-radius: 0.20rem}
.userInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.userbtn{background-color: #fff;color: #ff6000;width:1.8rem;height: 0.60rem;border-radius: 0.30rem;font-size: 0.24rem;text-align: center;line-height: 0.56rem;border: 1px #ff6000 solid;}
.h50{height: 1.0rem;}
</style>
