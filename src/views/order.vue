<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div class="searchBox ub-f1"><i class="icon icon_search"></i><input type="text" placeholder="会员查询"></div>
            <div class="openMember ub ub-ver ub-pc"><i class="icon icon_member"></i><p class="tx-c">开通会员</p></div>
        </div>
        <div class="content plr15">
            <div class="clearfix h50 plr10">
                <span class="ufl f13">服务信息</span>
                <span class="ufr addGood" @click="addGood()">+添加产品</span>
            </div>
            <div class="orderInfo">
                <div class="item plr20 bbc">项目名称</div>
                <div class="bbc plr20">
                    <div class="item ub ub-pj ub-ac"><p class="ub-f1 sc f13">服务技师</p><p class="bc f13">王云鹏</p><i class="arrow-right"></i></div>
                    <div class="item ub ub-pj ub-ac"><p class="ub-f1 sc f13">是否指定服务技师</p><p class="bc f13">王云鹏</p><i class="arrow-right"></i></div>
                    <div class="item ub ub-pj ub-ac"><p class="ub-f1 sc f13">服务小工</p><p class="bc f13">王云鹏</p><i class="arrow-right"></i></div>
                </div>
                <div class="item plr20 bbc ub ub-ac ub-pj"><p class="ub-f1 sc f13">折扣</p><p class="f13">9.5折</p><i class="arrow-right"></i></div>
                <div class="item plr20 ub ub-pj"><p>实付</p><p class="rc">￥190</p></div>
            </div>
        </div>
        <div class="foot ub">
            <div class="ub-f1 total">￥190</div>
            <button :disabled="isDisabled" type="button">去结算</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                isDisabled:true,
                bookNum:0,
                isShowBus:false
            };
        },
        components: {},
        methods: {
            delOne(){
                if(this.bookNum>0){
                    this.bookNum--;
                }
            },
            addGood(){

            },
            addOne(){
                this.bookNum++;
            },
            openBookList(){
                this.isShowBus = !this.isShowBus;
            },
            closeModal(){
                this.isShowBus = false;
            }
        },
        computed: {},
        created() {
            document.title="订单";
        }
    };
</script>

<style scoped>
.main{background: #f2f2f2;padding-top:1.12rem;height: 100%;padding-bottom: 1rem;}
.toper{height: 1.12rem;background: #f6f6f6;position: fixed;top: 0;left: 0;width: 100%;z-index: 999;}
.toper .icon + p{font-size: 0.14rem;}
.searchBox{padding-left: 0.60rem;margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.60rem;border-radius: 0.30rem;}
.searchBox input{width: 100%;height: 0.60rem;line-height: 0.60rem}
.icon{display:inline-block;}
.icon_search{position: absolute;top: 0.15rem;left: 0.14rem;width: 0.26rem;height: 0.29rem;background: url(../assets/icon_search.png) no-repeat center;background-size: 100% 100%;}
.icon_member{width: 0.30rem;height: 0.28rem;background: url(../assets/icon_member.png) no-repeat center;background-size: 100% 100%;}
.openMember{width: 1rem}
.icon_member{margin: 0 auto}
.content{position: relative;height: 100%;overflow: auto;}
.orderInfo{margin-top:0.20rem;border-radius: 0.20rem;background-color: #ffffff;}
.orderInfo .item{height: 1.0rem;line-height: 1.0rem;}
.h50{height: 0.5rem}
.foot{height: 1rem;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 10000;}
.foot .total{background-color: rgba(0,0,0,.9);line-height: 1rem;text-align: left;color: #fff;font-size: 0.36rem;padding-left: 0.20rem;}
.foot button{background-color: #ff6600;font-size: 0.28rem;line-height: 1rem;width: 2.0rem;text-align: center;color: #fff;}
.foot button:disabled{background-color: #808080}
.icon_goodbus{width: 1.05rem;height: 1.05rem;background: #666666 url(../assets/icon_goodbus.png) no-repeat center center;position: absolute;top: -0.5rem;left: 0.4rem;border-radius: 50%;background-size: 50% 50%;}
.addGood{display:inline-block;width: 1.64rem;height: 0.46rem;border-radius: 0.25rem;border:1px #333 solid;text-align: center;line-height: 0.44rem;font-size: 0.24rem}
.arrow-right{display: inline-block;width: 0.14rem;height: 0.30rem;background: url(../assets/arrow-right.png) no-repeat center center;background-size:100% 100%;margin-left: 0.20rem}

</style>