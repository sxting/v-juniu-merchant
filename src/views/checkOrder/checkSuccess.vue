<template>
    <div class="main">
        <div class="toper">
            <img src="../../assets/icon_success.png" class="udb mato" width="60" height="60">
            <p class="bc f16 tx-c mt15">核销成功</p>
            <p class="sc f12 tx-c mt05">顾客名称(15011562222)</p>
            <div class="mt20 ub plr15">
                <div class="btn_back ub-f1 ub ub-ac ub-pc mr20">返回首页</div>
                <div class="btn_print ub-f1 ub ub-ac ub-pc">打印小票</div>
            </div>
        </div>
        <p class="tit">商品信息</p>
        <div class="bgb plr15">
            <div class="item ub ub-ac ub-pj">
                <p class="bc">商品名称</p>
                <p class="rc">￥18</p>
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
        name: "checkSuccess",
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
            document.title="核销成功";
        }
    };
</script>
<style scoped>
.main{height: 100%;overflow: auto}
.toper{padding: 0.8rem 0 0.50rem;background-color: #fff}
.tit{padding-left: 0.30rem;line-height: 0.60rem;font-size: 0.28rem;color: #666;font-size: 0.24rem;}
.btn{width: 2.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#999;border-radius: 0.10rem;border:1px #eee solid;}
.userInfo{background-color: #fff;padding:0.25rem 0.30rem; border-radius: 0.20rem}
.userInfo img{width: 0.60rem; height: 0.60rem;border-radius: 0.30rem;margin-right: 0.08rem;}
.mr20{margin-right: 0.40rem;}
.h50{height: 1.0rem;}
.btn_back{background:#fff;height: 0.88rem;color: #ff6000;font-size: 0.30rem;border-radius: 0.10rem;border:1px #ff6000 solid;}
.btn_print{background:#ff6000;height: 0.88rem;color: #fff;font-size: 0.30rem;border-radius: 0.10rem;}
.item{height: 1rem;background-color: #fff;border-top:1px #eee solid;}
</style>
