<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac"><i class="icon_search mr05"></i>查询会员</div>
            <div class="openMember tx-c" @click="toAddMember"><i class="icon_member"></i><p class="tx-c f12">开通会员</p></div>
        </div>
        <div class="content plr15">
            <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
                <img src="../assets/user.png" class="udb" @click="toMemberInfo">
                <div class="ub-f1 ml10">
                    <p class="f12 bc1 ub ub-ac">王某某<i class="icon_male ml05"></i><i class="icon_card ml10"></i></p>
                    <p class="f12 mt05">10000000000</p>
                </div>
                <div class="userbtn" @click="toMemberCard">售卡/充值</div>
            </div>
            <div class="h50 plr10 mt10 ub ub-ac ub-pj">
                <span class="sc f13">服务信息</span>
                <span class="addGood" @click="addGood()">+添加产品</span>
            </div>
            <div class="orderInfo">
                <div class="item plr20 bbc ub ub-ac ub-pj">
                    <p class="ub ub-ac"><i class="icon_drop" @click="dropOrder"></i>项目名称</p>
                    <p class="ub ub-ac numBox">
                        <span @click="delOne" class="ctlbtn"><i class="icon-del iconfont"></i></span>
                        <i class="number btbc">{{bookNum}}</i>
                        <span @click="addOne()" class="ctlbtn"><i class="icon-add iconfont"></i></span>
                    </p>
                </div>
                <div class="bbc plr20" v-show="isShowMoreItem">
                    <div class="item ub ub-pj ub-ac">
                        <p class="ub-f1 sc f13">服务技师</p>
                        <p class="bc f13">王某某</p><i class="arrow-right"></i>
                    </div>
                    <div class="item ub ub-pj ub-ac">
                        <p class="ub-f1 sc f13">是否指定服务技师</p>
                        <div class="switch-btn">
                          <div class="icon-on" v-if="isSwitch1" @click="switchBoolen1"></div>
                          <div class="icon-off" v-else @click="switchBoolen1"></div>
                        </div>
                    </div>
                    <div class="item ub ub-pj ub-ac"><p class="ub-f1 sc f13">服务小工</p><p class="bc f13">王某某</p><i class="arrow-right"></i></div>
                </div>
                <div class="item plr20 bbc ub ub-ac ub-pj"><p class="ub-f1 sc f13">折扣</p><p class="f13">9.5折</p><i class="arrow-right"></i></div>
                <div class="item plr20 ub ub-pj"><p>实付</p><p class="rc">￥190</p></div>
            </div>
        </div>
        <div class="foot">
            <div class="ub ub-ac ub-pj switchDiv plr15">
                <p>是否抹零</p>
                <div class="switch-btn">
                  <div class="icon-on" v-if="isSwitch2" @click="switchBoolen2"></div>
                  <div class="icon-off" v-else @click="switchBoolen2"></div>
                </div>
            </div>
            <div class="ub">
                <div class="ub-f1 total">￥190</div>
                <button :disabled="isDisabled" type="button" @click="toerwmCharge">去结算</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "order",
    data() {
        return {
            isDisabled:false,
            bookNum:0,
            isShowMoreItem:false,
            isShowBus:false,
            isSwitch1:true,
            isSwitch2:true,
            isShowMember:true
        };
    },
    methods: {
        delOne(){
            if(this.bookNum>0){
                this.bookNum--;
            }
        },
        dropOrder(){
            this.isShowMoreItem = !this.isShowMoreItem;
        },
        switchBoolen1(){
            this.isSwitch1 = !this.isSwitch1;
        },
        switchBoolen2(){
            this.isSwitch2 = !this.isSwitch2;
        },
        toerwmCharge(){
            this.$router.push('/erwmCharge');
        },
        toMemberInfo(){
            this.$router.push('/memberInfo');
        },
        addGood(){
            this.$router.push('/charge');
        },
        toMemberSearch(){
            this.$router.push('/memberSearch');
        },
        toMemberCard(){
            this.$router.push('/memberCard');
        },
        addOne(){
            this.bookNum++;
        },
        delOne(){
            if(this.bookNum>0)
            this.bookNum--;
        },
        openBookList(){
            this.isShowBus = !this.isShowBus;
        },
        toAddMember(){
            this.$router.push('/addMember');
        },
        closeModal(){
            this.isShowBus = false;
        }
    },
    created() {
        document.title="订单";
    }
};
</script>

<style scoped>
.main{background: #f2f2f2;padding-top:1.12rem;height: 100%;padding-bottom: 1rem;}
.toper{height: 1.12rem;background: #f6f6f6;position: fixed;top: 0;left: 0;width: 100%;z-index: 999;}
.searchBox{margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.64rem;border-radius: 0.32rem;padding-left: 0.20rem;color: #999;font-size: 0.28rem;}
.content{position: relative;height: 100%;overflow: auto;}
.orderInfo{margin-top:0.20rem;border-radius: 0.20rem;background-color: #ffffff;}
.orderInfo .item{height: 1.0rem;line-height: 1.0rem;}
.h50{height: 0.5rem}
.foot{height: 2rem;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 10000;background-color: #fff;border-radius: 0.20rem 0.20rem 0 0} 
.foot .total{background-color: rgba(0,0,0,.9);line-height: 1rem;text-align: left;color: #fff;font-size: 0.40rem;padding-left: 0.30rem;font-weight: bold}
.foot button{background-color: #ff6600;font-size: 0.28rem;line-height: 1rem;width: 2.0rem;text-align: center;color: #fff;}
.foot button:disabled{background-color: #808080}
.icon_goodbus{width: 1.05rem;height: 1.05rem;background: #666666 url(../assets/icon_goodbus.png) no-repeat center center;position: absolute;top: -0.5rem;left: 0.4rem;border-radius: 50%;background-size: 50% 50%;}
.addGood{display:inline-block;width: 1.64rem;height: 0.46rem;border-radius: 0.25rem;border:1px #333 solid;text-align: center;line-height: 0.44rem;font-size: 0.24rem}
.arrow-right{display: inline-block;width: 0.14rem;height: 0.30rem;background: url(../assets/arrow-right.png) no-repeat center center;background-size:100% 100%;margin-left: 0.20rem}
.switchDiv{height: 1rem;}
.icon-on{width:0.82rem;height:0.4rem;background: url(../assets/icon_switch_open.png);background-size: 100% 100%;}
.icon-off{width:0.82rem;height:0.4rem;background: url(../assets/icon_switch_close.png);background-size: 100% 100%;}

.userInfo{background-color: #fff;padding:0.16rem 0.24rem; border-radius: 0.20rem}
.userInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.userbtn{background-color: #ff6600;color: #fff;width:1.6rem;height: 0.60rem;border-radius: 0.30rem;font-size: 0.24rem;text-align: center;line-height: 0.60rem;}

.numBox .ctlbtn{width: 0.56rem;height:0.48rem;line-height: 0.48rem;background-color: #eee;text-align: center;}
.numBox .number{width: 0.60rem;height:0.48rem;line-height: 0.48rem;background-color: #fff;text-align: center;}

.icon_drop{width: 0.32rem;height: 0.28rem;background: url(../assets/icon_drop.png);background-size: 100% 100%;margin-right: 0.08rem}
</style>
