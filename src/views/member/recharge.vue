<template>
    <div class="main">
        <div class="content">
            <div class="voucher">
                <div class="remark yi">已持有</div>
                <p>黄金储值卡</p>
                <div class="ub ub-pj ub-ac amount">
                    <p class="f20">储值300元</p><p class="f20">￥300元</p>
                </div>
                <div class="btc1 ub ub-pj date">
                    <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                </div>
            </div>
            <p class="f14 mt15">充值金额</p>
            <div class="rechargeDiv ub ub-ac">
                <i class="f16">￥</i><input type="text" class="ub-f1" v-model="amount" placeholder="请输入充值金额"/>
            </div>
        </div>
        <div class="mt30 plr20">
            <button class="btn_common" type="button" @click="submit()">确认</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recharge",
        data() {
            return {
                amount:0
            };
        },
        methods: {
            submit(){
                history.go(-1);
            }
        },
        created() {
            document.title = "充值";
        }
    };
</script>

<style scoped>
.main{background-color: #f9f9f9;height: 100%;}
.content{border-radius: 0.20rem;padding:0.30rem;background-color: #fff;}
.voucher{width: 100%;padding: 0.30rem;background: linear-gradient(left,#FF6C6C,#ffb444);color: #fff;border-radius: 0.10rem;position: relative;box-shadow: 0 8px 13px rgba(255,96,0,0.2);overflow: hidden}
.voucher .remark{width: 1.2rem;height: 0.6rem;padding-top: 0.23rem;font-size: 0.22rem;color: #fff;background-color: #ff8000;transform: rotate(45deg);position: absolute;top: -0.06rem;right: -0.37rem;text-align: center;}
.voucher .remark.yi{color: #fff;background-color: #ff8000;}
.voucher .remark.wei{color: #999;background-color: #dedede;}
.voucher .amount{margin-top: 0.25rem;margin-bottom: 0.28rem;}
.voucher .date{padding-top: 0.26rem;padding-bottom: .05rem;}
.voucher button{width: 1.1rem;line-height:0.42rem;height: 0.42rem;text-align: center;color: #ff6000;background-color: #fff;border-radius: 0.08rem;font-size: 0.28rem}
.rechargeDiv{height:0.72rem;border-bottom: 1px #dedede solid;}
.rechargeDiv input{height: 0.72rem;font-size: 0.30rem;margin-left: 0.08rem;}
</style>
