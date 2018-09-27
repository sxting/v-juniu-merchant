<template>
    <div>
        <!--<scroller lock-x height="100vh" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">-->
            <!--<p v-for="i in bottomCount">placeholder {{i}}</p>-->
            <div class="main">
                <div class="orderItem" v-for="(item,index) in orderList">
                    <p class="time">开单时间：{{item.juniuoModel? item.juniuoModel.dateCreated : '-'}}</p>
                    <div class="orderInfo">
                        <!--<div class="h88 ub ub-ac ub-pj">-->
                        <!--<p class="bc ub ub-ac"><span class="icon_card mr10"></span>王某某</p>-->
                        <!--<p class="bc">15011150022</p>-->
                        <!--</div>-->
                        <div class="ub ub-ac orderCon">
                            <ul class="orderCon-box">
                                <li>
                                    <p class="title">顾客名称</p>
                                    <p class="fr"><i class="icon_card mr10" v-if="item.bizType === 'MEMBER'"></i>{{item.customerName}}</p>
                                </li>
                                <li>
                                    <p class="title">顾客电话</p>
                                    <span>{{item.phone}}</span>
                                </li>
                                <li>
                                    <p class="title">支付类型</p>
                                    <span>{{item.bizTypeName}}支付</span>
                                </li>
                                <li>
                                    <p class="title">支付方式</p>
                                    <span>{{item.payTypeName}}</span>
                                </li>
                            </ul>
                            <!--<img src="../../assets/default.png" class="goodImg">-->
                            <!--<div class="ub-f1 ml10">-->
                            <!--<p class="f14 ub ub-ac ub-pj">项目名称<i class="curreny f14">×3</i></p>-->
                            <!--<p class="f13 sc mt05">服务技师：王某某</p>-->
                            <!--<p class="f13 sc">服务小工：王某某</p>-->
                            <!--</div>-->
                        </div>
                        <div class="ub ub-ac ub-pj pt10">
                            <p class="bc">实收</p>
                            <p class="bc"><i class="curreny ml10">￥{{item.paidMoney? item.paidMoney/100 : 0}}</i></p>
                        </div>
                        <div class="tx-r pb30 mt10">
                            <button class="btn_read" @click="cancelOrder(item.orderId)">撤销</button>
                            <!--btn_concel-->
                            <!--<button class="btn_read" @click="readOrder(item.orderId)">查看详情</button>-->
                        </div>
                    </div>
                </div>
                <comfirmBox ref="comfirmBox"></comfirmBox>
                <alertBox ref="alertBox"></alertBox>
            </div>
            <!--<load-more tip="下拉加载更多..." v-if="onFetching"></load-more>-->
        <!--</scroller>-->
    </div>
</template>
<script>
    import { Scroller, LoadMore } from 'vux'

    export default {
        name: "orderList",
        components: {
            Scroller,
            LoadMore
        },
        data () {
            return {
                scrollTop: 0,
                onFetching: false,
                bottomCount: 20,
                orderList:[],
                pageNo: 1
            }
        },
        methods: {
            // onScrollBottom () {
            //     let self  = this;
            //     console.log(0);
            //     if (this.onFetching) {
            //         // do nothing
            //
            //     } else {
            //         this.onFetching = true;
            //         setTimeout(() => {
            //             // this.bottomCount += 10;//操作数据
            //             self.getData(self.pageNo + 1);//操作数据
            //             this.$nextTick(() => {
            //                 this.$refs.scrollerBottom.reset({
            //                     bottom: 0
            //                 })
            //             });
            //             this.onFetching = false
            //         }, 2000)
            //     }
            // },
            readOrder(id){
                // this.$refs.alertBox.alert('测试提示框')
                console.log(id);
                this.$router.push('/orderDetail');
            },
            showConfirm(option){
                this.$refs.comfirmBox.show(option);
            },
            cancelOrder(){
                this.showConfirm({
                    title: '提示',
                    content: '1.扣卡首款撤销卡额度恢复到扣卡前状态<br/>2.扫码首款撤销付款金额原路返回<br/>3.会员开卡撤销只可撤销未消费的会员卡',
                    leftname: '取消',
                    rightname: '确定',
                    leftListener: () => {
                        console.log('cancel');
                    },
                    rightListener: () => {
                        console.log(0);
                    }
                });
            },
            getData(index) {
                let data = {
                    pageIndex: index,
                    pageSize: 100000000
                };
                let self = this;
                this.$ajax.get('merchant/order/currentDayOrders.json', {
                    params: data
                }).then(function (res) {
                    if(res.success) {
                        self.orderList = res.data.orders;
                        // if(self.onFetching){
                        //     res.data.orders.forEach(function (item) {
                        //         self.orderList.push(item);
                        //     })
                        // }
                        console.log(self.orderList);
                    } else {
                        alert(res.errorInfo);
                    }
                })
            },
        },
        created() {
            document.title = "历史订单";
            this.getData(this.pageNo);//查询订单列表
        }
    }
</script>

<style scoped>
    .main{background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;height: 100%;}
    .time{padding-left: 0.06rem;font-size: 0.24rem;color: #999;line-height: 0.72rem;}
    .goodImg{display: block;width: 1.4rem;height: 1.4rem;}
    .orderInfo{background-color: #fff;border-radius: 0.20rem;padding-left: 0.30rem;padding-right: 0.30rem}
    .h88{height: .88rem;}
    .orderCon{
        /*height: 2.0rem;*/
        border-top: 1px #eee solid;
        border-bottom: 1px #eee solid;
    }
    .pt10{padding-top: 0.20rem}

    .icon_member{display: inline-block;width: 0.34rem;height: 0.28rem;background: url(../../assets/icon_member.png) no-repeat center;background-size: 100% 100%;margin-right: 0.10rem}
    .btn_concel{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #dedede solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #999}
    .btn_read{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #ff6000 solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #ff6000;margin-left: 0.30rem}
    .pb30{padding-bottom: 0.30rem}
    .mr10{margin-right: 0.20rem}
    .orderCon-box{
        width: 100%;
    }
    .orderCon-box li{
        width: 100%;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px #eee solid;
    }
    .orderCon-box li:last-of-type{
        border-bottom:none;
    }
    .orderCon-box li .title{
        display: inline-block;
        float: left;
    }
    .orderCon-box li span{
        float: right;
    }
    .fr{
        float: right;
    }
</style>

