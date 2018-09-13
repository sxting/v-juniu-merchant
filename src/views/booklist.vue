<template>
<div class="main">
    <div class="orderTab ub ub-pj plr15">
        <li v-for="(item,index) in tablist" :class="{'on':curTabIndex==index}" @click="switchTab(index)">{{item}}</li>
    </div>
    <div v-show="curTabIndex==0">
        <div class="orderInfo">
            <p class="time">预约时间：2010-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj top">
                <p class="bc ub ub-ac bc1">王某某<i class="icon_card"></i></p>
                <p class="bc1"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="ub ub-ac orderCon">
                <img src="../assets/user.png" class="goodImg">
                <div class="ub-f1 ml10">
                    <p class="f14">项目名称</p>
                    <p class="f13 sc">服务技师：王某某</p>
                    <p class="f13 currency mt10">￥200.00</p>
                </div>
            </div>
            <div class="tx-r clearfix mt05">
                <span class="f12 ufl sc">预约技师：小仙女</span>
                <div class="ufr uds">
                    <button class="btn_concel" @click="cancelOrder('id')">拒绝</button>
                    <button class="btn_read" @click="okOrder('id')">接受</button>
                </div>
            </div>
        </div>
        <div class="orderInfo mt10">
            <p class="time">预约时间：2010-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj top">
                <p class="bc ub ub-ac bc1">王某某<i class="icon_card"></i></p>
                <p class="bc1"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="tx-r clearfix mt15">
                <div class="ufr uds">
                    <button class="btn_concel" @click="cancelOrder('id')">拒绝</button>
                    <button class="btn_read" @click="okOrder('id')">接受</button>
                </div>
            </div>
        </div>
    </div>
    <div v-show="curTabIndex==1">
        <div class="orderInfo" v-show="curTabIndex==1">
            <p class="time">预约时间：2020-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj top">
                <p class="bc ub ub-ac bc1">王某某<i class="icon_card"></i></p>
                <p class="bc1"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="ub ub-ac orderCon">
                <img src="../assets/user.png" class="goodImg">
                <div class="ub-f1 ml10">
                    <p class="f14">项目名称</p>
                    <p class="f13 sc">服务技师：王某某</p>
                    <p class="f13 currency mt10">￥200.00</p>
                </div>
            </div>
            <div class="tx-r clearfix mt05">
                <span class="f12 ufl sc">预约技师：小仙女</span>
                <button class="btn_disabled ufr" @click="okOrder('id')">已接受</button>
            </div>
        </div>
    </div>
    <div v-show="curTabIndex==2">
        <div class="orderInfo" v-show="curTabIndex==2">
            <p class="time">预约时间：2030-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj top">
                <p class="bc ub ub-ac bc1">王某某<i class="icon_card"></i></p>
                <p class="bc1"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="ub ub-ac orderCon">
                <img src="../assets/user.png" class="goodImg">
                <div class="ub-f1 ml10">
                    <p class="f14">项目名称</p>
                    <p class="f13 sc">服务技师：王某某</p>
                    <p class="f13 currency mt10">￥200.00</p>
                </div>
            </div>
            <div class="tx-r clearfix mt05">
                <span class="f12 ufl sc">预约技师：小仙女</span>
                <button class="btn_disabled ufr" @click="okOrder('id')">已过期</button>
            </div>
        </div>
    </div>
    <comfirmBox ref="comfirmBox"></comfirmBox>
</div>
</template>

<script>
export default {
    name: "boopkList",
    data() {
        return {
            tablist:['未接受','已接受','已过期'],
            orderList:[],
            curTabIndex:0,
        };
    },
    computed: {

    },
    methods: {
        okOrder(id){
            console.log("订单已接受");
        },
        switchTab(index){
            this.curTabIndex = index;
        },
        showConfirm(option){
            this.$refs.comfirmBox.show(option);
        },
        cancelOrder(){
            this.showConfirm({
              title: '提示',
              content: '<center>确定执行此操作</center>',
              leftname: '取消',
              rightname: '确定',
              leftListener: () => {
                console.log('订单已撤销');
              },
              rightListener: () => {
                console.log('继续下一步');
              }
            });
        }
    },
    created() {
        document.title = "预约管理";
    }
};
</script>

<style scoped>
.main{background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;height: 100%;padding-top: 0.30rem}
.time{font-size: 0.24rem;color: #999;line-height: 0.56rem;}
.goodImg{display: block;width: 1.4rem;height: 1.4rem;}
.h88{height: .88rem;}
.pt10{padding-top: 0.20rem}

.orderTab{height: 1rem;background-color: #fff;border-radius: 0.20rem;}
.orderTab li{line-height: 1rem;text-align: center;width: 1rem}
.orderTab li.on{border-bottom: 1px #ff6000 solid;color: #ff6000}
.orderInfo{background-color: #fff;border-radius: 0.20rem;padding-left: 0.30rem;padding: 0.30rem;margin-top: 0.30rem;}
.icon_card{margin-left: 0.06rem;}
.top{border-bottom: 1px #eee solid;padding-bottom: 0.30rem}
.orderCon{height: 2.0rem;}
.btn_concel{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #ff6000 solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #ff6000}
.btn_read{width: 1.4rem;height: 0.44rem;background:#ff6000;border-radius:0.04rem;border: 1px #ff6000 solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #fff;margin-left: 0.30rem}
.btn_disabled{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #eee solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #fff;margin-left: 0.30rem;color:#999;}
.pb30{padding-bottom: 0.30rem}
</style>
