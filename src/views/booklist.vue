<template>
<div class="main">
    <div class="orderTab ub ub-pj plr15">
        <li v-for="(item,index) in tablist" :class="{'on':curTabIndex==index}" @click="switchTab(index)">{{item}}</li>
    </div>
    <div v-show="">
        <div v-show="curTabIndex==0">
            <div class="orderInfo">
                <p class="time">预约时间：</p>
                <div class="ub ub-ac ub-pj top">
                    <p class="bc ub ub-ac bc1">王某某<i class="icon_card"></i></p>
                    <p class="bc1"><i class="icon_tel"></i>15011150022</p>
                </div>
                <div class="ub ub-ac orderCon">
                    <img src="../assets/default.png" class="goodImg">
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
                    <img src="../assets/default.png" class="goodImg">
                    <div class="ub-f1 ml10">
                        <p class="f14">项目名称</p>
                        <p class="f13 sc">服务技师：王某某</p>
                        <p class="f13 currency mt10">￥200.00</p>
                    </div>
                </div>
                <div class="tx-r clearfix mt05">
                    <span class="f12 ufl sc">预约技师：小仙女</span>
                    <button class="btn_disabled ufr" @click="okOrder('id')">取消预约</button>
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
                    <img src="../assets/default.png" class="goodImg">
                    <div class="ub-f1 ml10">
                        <p class="f14">项目名称</p>
                        <p class="f13 sc">服务技师：王某某</p>
                        <p class="f13 currency mt10">￥200.00</p>
                    </div>
                </div>
                <div class="tx-r clearfix mt05">
                    <span class="f12 ufl sc">预约技师：小仙女</span>
                    <!--<button class="btn_disabled ufr" @click="okOrder('id')">已取消</button>-->
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <div v-show="curTabIndex==0">
                <div class="orderInfo" v-for="data in orderList">
                    <p class="time top">预约时间：{{data.date}} {{data.time}}</p>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.phone">
                        <p class="bc ub ub-ac bc1">预约会员</p>
                        <p class="bc1"><i class="icon_tel"></i>{{data.phone}}</p>
                    </div>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.productName">
                        <p class="bc ub ub-ac bc1">预约项目</p>
                        <p class="bc1">{{data.productName}}</p>
                    </div>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.staffName">
                        <p class="bc ub ub-ac bc1">预约技师</p>
                        <p class="bc1">{{data.staffName}}</p>
                    </div>
                    <div class="tx-r clearfix mt10">
                        <div class="ufr uds">
                            <button class="btn_concel" @click="refuseReservation(data.reservationsId)">拒绝</button>
                            <button class="btn_read" @click="accpetReservation(data.reservationsId)">接受</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="curTabIndex==1">
                <div class="orderInfo" v-for="data in orderList">
                    <p class="time top">预约时间：{{data.date}} {{data.time}}</p>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.phone">
                        <p class="bc ub ub-ac bc1">预约会员</p>
                        <p class="bc1"><i class="icon_tel"></i>{{data.phone}}</p>
                    </div>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.productName">
                        <p class="bc ub ub-ac bc1">预约项目</p>
                        <p class="bc1">{{data.productName}}</p>
                    </div>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.staffName">
                        <p class="bc ub ub-ac bc1">预约技师</p>
                        <p class="bc1">{{data.staffName}}</p>
                    </div>
                    <div class="tx-r clearfix mt10">
                        <div class="ufr uds">
                            <button class="btn_concel" @click="cancelReservation(data.reservationsId)">取消预约</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="curTabIndex==2">
                <div class="orderInfo" v-for="data in orderList">
                    <p class="time" v-bind:class="{top: data.phone || data.productName || data.staffName}">预约时间：{{data.date}} {{data.time}}</p>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.phone">
                        <p class="bc ub ub-ac bc1">预约会员</p>
                        <p class="bc1"><i class="icon_tel"></i>{{data.phone}}</p>
                    </div>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.productName">
                        <p class="bc ub ub-ac bc1">预约项目</p>
                        <p class="bc1">{{data.productName}}</p>
                    </div>
                    <div class="ub ub-ac ub-pj lh06" v-if="data.staffName">
                        <p class="bc ub ub-ac bc1">预约技师</p>
                        <p class="bc1">{{data.staffName}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="loading-wrapper"></div>
        <div class="no-data" v-if="orderList.length === 0">暂无数据</div>
    </div>
    <comfirmBox ref="comfirmBox"></comfirmBox>
</div>
</template>

<script>
import  axios  from "../http.js";
import BScroll from 'better-scroll';

export default {
    name: "boopkList",
    data() {
        return {
            tablist:['未接受','已接受','已取消'],
            orderList:[],
            curTabIndex:0,
            pageNo: 1
        };
    },
    computed: {

    },
    methods: {
        //查询订单列表
        getData(index) {
            let data = {
                status: 'INIT',
                storeId: sessionStorage.getItem('storeId'),
                pageNo: this.pageNo,
                pageSize: 30
            };
            if(index === 0) {
                data.status = 'INIT';
            } else if(index === 1) {
                data.status = 'SUCCESS';
            } else {
                data.status = 'CANCEL';
            }
            let url = `/merchant/reserve/reservations/records.json`;
            let self = this;
            axios.get(url, {
                params: data
            }).then(function (res) {
                if(res.success) {
                    self.orderList = res.data.content;
                    self.$nextTick(() => {
                        self.scroll = new BScroll(self.$refs.wrapper, {});
                        if (!self.scroll) {
                            self.scroll = new Bscroll(self.$refs.wrapper, {});
                            self.scroll.on('touchend', (pos) => {
                                // 下拉动作
                                if (pos.y > 50) {
                                    self.pageNo = self.pageNo + 1;
                                    self.getData()
                                }
                            })
                        } else {
                            self.scroll.refresh()
                        }

                    });
                } else {
                    alert(res.errorInfo);
                }
            })
        },
        showConfirm(option){
            this.$refs.comfirmBox.show(option);
        },
        refuseReservation(id) {
            let self = this;
            this.showConfirm({
                title: '提示',
                content: '<center>确定执行此操作</center>',
                leftname: '取消',
                rightname: '确定',
                leftListener: () => {},
                rightListener: () => {
                    let url = '/merchant/reserve/reservations/refuse.json';
                    let data = { reservationId: id };
                    this.$ajax.get(url, {params: data}).then(function (res) {
                        if(res.success) {
                            alert('操作成功');
                            self.getData(self.curTabIndex);
                        } else {
                            alert(res.errorInfo);
                        }
                    })
                }
            });
            this.getData(this.curTabIndex);
        },
        accpetReservation(id){
            let self = this;
            let url = '/merchant/reserve/reservations/accpet.json';
            let data = { reservationId: id };
            this.$ajax.get(url, {params: data}).then(function (res) {
                if(res.success) {
                    alert('操作成功');
                    self.getData(self.curTabIndex);
                } else {
                    alert(res.errorInfo);
                }
            });
        },
        cancelReservation(id){
            let self = this;
            this.showConfirm({
                title: '提示',
                content: '<center>确定执行此操作</center>',
                leftname: '取消',
                rightname: '确定',
                leftListener: () => {},
                rightListener: () => {
                    let url = '/merchant/reserve/reservations/cancel.json';
                    let data = { reservationsId: id };
                    this.$ajax.get(url, {params: data}).then(function (res) {
                        if(res.success) {
                            alert('操作成功');
                            self.getData(self.curTabIndex);
                        } else {
                            alert(res.errorInfo);
                        }
                    })
                }
            });
        },
        switchTab(index){
            this.curTabIndex = index;
            this.pageNo = 1;
            this.getData(this.curTabIndex);
        },
    },
    created() {
        document.title = "预约管理";
        this.getData(this.curTabIndex);
    },
    mounted() {

    }
};
</script>

<style scoped>
.main{padding-bottom: 0.30rem;background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;min-height: 100%;padding-top: 0.30rem}
.time{font-size: 0.24rem;color: #999; /*line-height: 0.56rem;*/}
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
.lh06 {line-height: 0.6rem;}
    .no-data {
        text-align: center;
        margin-top: 2rem;
    }
</style>
