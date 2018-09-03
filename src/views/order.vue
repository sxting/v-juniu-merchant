<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div class="searchBox ub-f1"><i class="icon icon_search"></i><input type="text" placeholder="会员查询"></div>
            <div class="openMember ub ub-ver ub-pc"><i class="icon icon_member"></i><p class="tx-c">开通会员</p></div>
        </div>
        <div class="content plr15">
            <div class="ub ub-ac userInfo plr10">
                <img src="../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f12">王云鹏</p>
                    <p class="f12 mt05">10000000000</p>
                </div>
                <div class="userbtn">售卡/充值</div>
            </div>
            <div class="clearfix h50 plr10 mt10">
                <span class="ufl sc f13">服务信息</span>
                <span class="ufr addGood" @click="addGood()">+添加产品</span>
            </div>
            <div class="orderInfo">
                <div class="item plr20 bbc">项目名称</div>
                <div class="bbc plr20">
                    <div class="item ub ub-pj ub-ac">
                        <p class="ub-f1 sc f13">服务技师</p>
                        <p class="bc f13">王云鹏</p><i class="arrow-right"></i>
                    </div>
                    <div class="item ub ub-pj ub-ac">
                        <p class="ub-f1 sc f13">是否指定服务技师</p>
                        <div class="switch-btn">
                          <div class="icon-on" v-if="isSwitch1" @click="switchBoolen1"></div>
                          <div class="icon-off" v-else @click="switchBoolen1"></div>
                        </div>
                    </div>
                    <div class="item ub ub-pj ub-ac"><p class="ub-f1 sc f13">服务小工</p><p class="bc f13">王云鹏</p><i class="arrow-right"></i></div>
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
                <button :disabled="isDisabled" type="button">去结算</button>
            </div>
        </div>
    </div>
</template>

<script>
import {Group, XSwitch } from 'vux'

    export default {
        name: "order",
        data() {
            return {
                isDisabled:true,
                bookNum:0,
                isShowBus:false,
                isSwitch1:true,
                isSwitch2:true,
            };
        },
        components: {Group,XSwitch},
        methods: {
            delOne(){
                if(this.bookNum>0){
                    this.bookNum--;
                }
            },
            switchBoolen1(){
                this.isSwitch1 = !this.isSwitch1;
            },
            switchBoolen2(){
                this.isSwitch2 = !this.isSwitch2;
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
</style>
