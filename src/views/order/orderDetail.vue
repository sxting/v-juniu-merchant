<template>
    <div class="main">
        <div class="memberInfo">
            <div class="ub ub-ac bbc pb10 mb20">
                <img src="../../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f12 bc1 ub ub-ac">王某某<i class="icon_male ml05"></i><i class="icon_card ml10"></i></p>
                    <p class="mt05"><a href="" class="f12 bc1">15011101110</a></p>
                </div>
            </div>
            <p class="f12 bc1">开单员工：2018-05-23 11:37:34</p>
            <p class="f12 bc1">开单时间：2018-08-08 07:00</p>
            <p class="f12 bc1">流水号：8923781297318973138</p>
        </div>
        <div class="tit">服务信息</div>
        <div class="orderInfo">
            <div class="item1 bbc ub ub-ac ub-pj">
                <p class="bc">黄金储值卡</p>
                <p class="currency">￥200</p>
            </div>
            <div class="item ub ub-pj ub-ac bbc">
                <p class="sc f13">服务技师</p>
                <p class="bc f13">王某某</p>
            </div>
            <div class="item ub ub-pj ub-ac bbc">
                <p class="sc f13">服务小工</p>
                <p class="bc f13">王某某</p>
            </div>
            <div class="item1 ub ub-ac ub-pj">
                <p class="bc">实付</p>
                <p class="currency">￥190</p>
            </div>
        </div>
        <div class="orderInfo mt10">
            <div class="item1 bbc ub ub-ac ub-pj">
                <p class="bc">是否抹零</p>
                <p class="bc">是</p>
            </div>
            <div class="item1 ub ub-ac ub-pj">
                <p class="bc">合计</p>
                <p class="currency">￥190</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderDetail",
        data() {
            return {
                orderInfo:{}
            };
        },
        methods: {
            getOrderInfo(id){
               
            }
        },
        created() {
            document.title = "订单详情";
        }
    };
</script>

<style scoped>
.main{background-color: #f9f9f9;padding: 0.30rem;position: relative;height: 100%;}
.pb10{padding-bottom: 0.20rem}
.memberInfo{padding:0.30rem 0.24rem;background: #fff;position: relative;z-index: 1;border-radius: .20rem}
.memberInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.36rem;}
.memberInfo .compilebtn{color: #ff6000;width:0.9rem;height: 0.42rem;font-size: 0.24rem;text-align: center;line-height: 0.40rem;}
.mb20{margin-bottom: 0.20rem}
.tit{padding-left: 0.30rem;font-size: 0.26rem;color: #999;line-height: 0.88rem;}
.memberInfo > p{margin-top: 0.10rem;color: #999}
.orderInfo{background-color: #fff;border-radius: 0.20rem;}
.orderInfo .item{height: .82rem;padding-left: 0.30rem;padding-right: 0.30rem}
.orderInfo .item1{height: .98rem;padding-left: 0.30rem;padding-right: 0.30rem}
</style>
