<template>
    <div class="main">
        <div class="orderTab ub">
            <li v-for="(item,index) in tablist" class="ub-f1" :class="{'on':curTabIndex==index}" @click="switchTab(index)">{{item}}</li>
        </div>
        <div class="orderInfo" v-show="curTabIndex==0">
            <p class="time">开单时间：2010-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj">
                <p class="bc ub ub-ac">王某某<i class="icon_card"></i></p>
                <p class="bc"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="ub ub-ac orderCon">
                <img src="../assets/user.png" class="goodImg">
                <div class="ub-f1 ml10">
                    <p class="f14">项目名称</p>
                    <p class="f13 sc mt05">服务技师：王某某</p>
                    <p class="f13 rc">￥200.00</p>
                </div>
            </div>
            <div class="tx-r pb30 mt10">
                <button class="btn_concel" @click="cancelOrder()">拒绝</button>
                <button class="btn_read" @click="readOrder()">接受</button>
            </div>
        </div>
        <div class="orderInfo" v-show="curTabIndex==1">
            <p class="time">开单时间：2020-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj">
                <p class="bc ub ub-ac">王某某<i class="icon_card"></i></p>
                <p class="bc"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="ub ub-ac orderCon">
                <img src="../assets/user.png" class="goodImg">
                <div class="ub-f1 ml10">
                    <p class="f14">项目名称</p>
                    <p class="f13 sc mt05">服务技师：王某某</p>
                    <p class="f13 rc">￥200.00</p>
                </div>
            </div>
            <div class="tx-r pb30 mt10">
                <button class="btn_concel" @click="cancelOrder()">拒绝</button>
                <button class="btn_read" @click="readOrder()">接受</button>
            </div>
        </div>
        <div class="orderInfo" v-show="curTabIndex==2">
            <p class="time">开单时间：2030-10-10 10:10:10</p>
            <div class="ub ub-ac ub-pj">
                <p class="bc ub ub-ac">王某某<i class="icon_card"></i></p>
                <p class="bc"><i class="icon_tel"></i>15011150022</p>
            </div>
            <div class="ub ub-ac orderCon">
                <img src="../assets/user.png" class="goodImg">
                <div class="ub-f1 ml10">
                    <p class="f14">项目名称</p>
                    <p class="f13 sc mt05">服务技师：王某某</p>
                    <p class="f13 rc">￥200.00</p>
                </div>
            </div>
            <div class="tx-r pb30 mt10">
                <button class="btn_concel" @click="cancelOrder()">拒绝</button>
                <button class="btn_read" @click="readOrder()">接受</button>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    name: "orderList",
    data() {
        return {
            tablist:['未接受','已接受','已取消'],
            orderList:[],
            curTabIndex:0,
        };
    },
    computed: {

    },
    methods: {
        readOrder(){
            this.$router.push('/orderDetail');
        },
        switchTab(index){
            this.curTabIndex = index;
        },
        cancelOrder(){
            MessageBox.confirm('确定执行此操作?').then(action => {
                console.log("订单已撤销");
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

.orderTab{height: 0.88rem;background-color: #fff;border-radius: 0.10rem;}
.orderTab li{line-height: 0.88rem;text-align: center;}
.orderTab li.on{border-bottom: 1px #ff6000 solid;color: #ff6000}
.orderInfo{background-color: #fff;border-radius: 0.20rem;padding-left: 0.30rem;padding-right: 0.30rem;margin-top: 0.30rem;}
.icon_card{margin-left: 0.06rem;}
.orderCon{height: 1.8rem;border-top: 1px #eee solid;border-bottom: 1px #eee solid;margin-top: 0.10rem}
.btn_concel{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #dedede solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #999}
.btn_read{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #ff6000 solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #ff6000;margin-left: 0.30rem}
.pb30{padding-bottom: 0.30rem}
</style>
