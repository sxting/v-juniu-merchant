<template>
    <div class="main">
        <div class="toper ub ub-ver ub-pc ub-ac">
            <h1>¥99.5</h1>
            <p class="f14">商家实收（元）</p>
        </div>
        <p class="tit">商品信息</p>
        <div class="bgb plr15">
            <div class="item ub ub-ac ub-pj">
                <p class="bc">商品名称</p>
                <p class="rc">￥200</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="bc">核销份数</p>
                <p class="sc">1份</p>
            </div>
        </div>
        <p class="tit">付款明细</p>
        <div class="bgb plr15">
            <div class="item ub ub-ac ub-pj">
                <p class="bc">商品价格</p>
                <p class="rc">￥20</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="bc">顾客实付</p>
                <p class="rc">￥18</p>
            </div>
        </div>
        <p class="tit">其它信息</p>
        <div class="bgb plr15">
            <div class="item ub ub-ac ub-pj">
                <p class="bc">技师信息</p>
                <p class="sc">name1</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="bc">小工信息</p>
                <p class="sc">name2</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="bc">核销门店</p>
                <p class="sc">某某某</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="bc">核销时间</p>
                <p class="sc">某某某</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="bc">核销码</p>
                <p class="sc">888888888888</p>
            </div>
            <div class="item ub ub-ac ub-pj">
                <p class="sbc">订单编号</p>
                <p class="sc">888888888888</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "checkDetail",
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
            document.title="核销详情";
        }
    };
</script>

<style scoped>
.main{height: 100%;overflow: auto}
.toper{height: 3rem;background-image:linear-gradient(right,#ff8000,#ff5000);color: #fff}
.toper h1{font-size: 0.60rem;font-weight: bold;text-align: center;}
.toper p{font-size: 0.28rem;text-align: center;}
.tit{padding-left: 0.30rem;line-height: 0.60rem;font-size: 0.28rem;color: #666;font-size: 0.24rem;}
.btn{width: 2.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#999;border-radius: 0.10rem;border:1px #eee solid;}
.userInfo{background-color: #fff;padding:0.25rem 0.30rem; border-radius: 0.20rem}
.userInfo img{width: 0.60rem; height: 0.60rem;border-radius: 0.30rem;margin-right: 0.08rem;}
.mr20{margin-right: 0.40rem;}
.h50{height: 1.0rem;}
.btn_back{background:#fff;height: 0.88rem;color: #ff6000;font-size: 0.32rem;border-radius: 0.10rem;border:1px #ff6000 solid;}
.btn_print{background:#FF6000;height: 0.88rem;color: #fff;font-size: 0.32rem;border-radius: 0.10rem;}

.item{height: 1rem;border-top:1px #eee solid;}
div .item:first-child{border-top:none; }
</style>
