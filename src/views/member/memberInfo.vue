<template>
    <div class="main">
        <div class="blackbar"></div>
        <div class="memberInfo">
            <div class="ub ub-ac bbc pb15">
                <img src="../../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f14 bc1 ub ub-ac">
                        {{customer.customerName}}
                        <i v-if="customer.gender" class="icon_male ml05"></i>
                        <i v-else class="icon_women ml05"></i>
                        <i class="icon_card ml10"></i>
                    </p>
                    <p class="mt05"><i class="icon_tel"></i><a href="" class="f12 bc1">{{customer.phone}}</a></p>
                </div>
                <div style="height:0.8rem">
                    <div class="compilebtn ub ub-ac ub-pc" @click="toAddMember()"><i class="icon_compile"></i>编辑</div>
                </div>
            </div>
            <div class="ub ub-pj mt10">
                <p class="f12 bc1">生日：{{customer.birthday ? customer.birthday : '--'}}</p>
                <p class="f12 bc1">持卡张数：{{cardApplies.length}}</p>
            </div>
            <div class="ub ub-pj mt10">
                <p class="f12 bc1">会员来源：桔牛</p>
                <p class="f12 bc1">累计消费：¥{{memberInfo.allPay/100}}</p>
            </div>
            <!--<p class="f12 bc1 mt10">展示标签：<span class="mark">优质会员</span></p>-->
        </div>
        <div class="content mt10 bgb">
            <div class="clearfix tabList">
                <li :class="{'on':curTabIndex==0}" @click="swtichTab(0)">卡劵</li>
                <li :class="{'on':curTabIndex==1}" @click="swtichTab(1)">消费记录</li>
            </div>
            <div v-show="curTabIndex==0" class="voucher bgb">
                <div class="item" v-for="item in cardApplies">
                    <!--<div class="remark yi">已持有</div>-->
                    <p>{{item.card.cardName}}</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20 card-money">
                            卡余额：
                            <span v-if="item.card.type === 'REBATE'||item.card.type === 'STORED'" class="money">{{item.card.balance/100}}</span>
                            <span v-if="item.card.type === 'METERING'" class="money">{{item.card.balance}}</span>
                            <span v-if="item.card.type === 'REBATE'||item.card.type === 'STORED'">元</span>
                            <span v-if="item.card.type === 'METERING'">次</span>
                        </p>
                        <!--<p class="f20">￥300元</p>-->
                    </div>
                    <!--<div class="btc1 ub ub-pj date">-->
                        <!--<p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>-->
                        <!--&lt;!&ndash;<button @click="toRecharge">充值</button>&ndash;&gt;-->
                    <!--</div>-->
                </div>
                <div class="no-data" v-if="cardApplies.length === 0">暂无数据</div>
            </div>
            <div v-show="curTabIndex==1" class="costRecord">
                <div v-for="item in customerOrders" class="ub ub-pj ub-ac bgb item">
                    <div class="tx-c">
                        <span class="t">{{item.juniuoModel.dateCreated.substring(0, 10)}}</span>
                        <span class="b">{{item.consumeProductNames}}</span>
                    </div>
                    <div class="tx-c">
                        <span class="t">{{item.payTypeName}}</span><span class="b">{{item.money / 100}}</span>
                    </div>
                    <div class="tx-c">
                        <span class="t">服务技师</span><span class="b">{{item.serveStaffNames ? item.serveStaffNames : '--'}}</span>
                    </div>
                </div>
                <div class="no-data" v-if="customerOrders.length === 0">暂无数据</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "memberInfo",
        data() {
            return {
                ishave:1,
                curTabIndex:0,
                customerId: '',
                pageIndex: 1,
                memberInfo: {},
                customer: {},
                cardApplies: [],
                customerOrders: []
            };
        },
        methods: {
            getData() {
                if(sessionStorage.getItem('chargeInfo')) {
                    this.memberInfo = JSON.parse(sessionStorage.getItem('chargeInfo')).memberInfo;
                    this.customer = this.memberInfo ? this.memberInfo.customer : {};
                    this.cardApplies = this.memberInfo ? this.memberInfo.cardApplies : [];
                }
            },
            swtichTab(num){
                this.curTabIndex = num;
                if(num === 1) {
                    let url = '/merchant//order/customerOrders.json', data = {
                        customerId: this.customerId,
                        pageIndex: this.pageIndex,
                        pageSize: 20
                    };
                    let self = this;
                    this.$ajax.get(url, {params: data}).then(function (res) {
                        if(res.success) {
                            self.customerOrders = res.data.content;
                        } else {
                            alert(res.errorInfo)
                        }
                    })
                }
            },
            toAddMember(){
                this.$router.push({
                    name: 'addMember',
                    params: {
                        customerId: this.customerId
                    }
                });
            },
            toRecharge(){
                // this.$router.push('/recharge');
            }
        },
        computed: {

        },
        created() {
            document.title = "会员信息";
            this.customerId = this.$route.params.customerId;
            this.getData();
        }
    };
</script>

<style scoped>
.main{background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;padding-top: 0.30rem;}
.blackbar{background-color:#000;height: 2.1rem;width: 100%;position: absolute;top: 0;left: 0;z-index: 0}

.memberInfo{padding:0.30rem;background: #fff;position: relative;z-index: 1;border-radius: .20rem}
.memberInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.memberInfo .compilebtn{color: #ff6000;width:0.9rem;margin-top: -0.06rem;font-size: 0.24rem;text-align: center;line-height: 0.40rem;}
.mark{display:inline-block;background: linear-gradient(left,#ff8000,#ff5000);color: #fff;margin-right: 0.24rem;font-size: 0.20rem;height: 0.40rem;line-height: 0.48rem; border-radius: 0.20rem;width: 1.0rem;text-align: center;line-height: 0.40rem}
.content{border-radius: 0.20rem;overflow: hidden;}
.tabList li{width: 50%;float: left;line-height: 0.8rem;line-height: 0.8rem;text-align: center;font-size: 0.28rem;border-bottom: #eee 1px solid;color: #666;}
li.on{color: #ff6000!important;border-bottom: #ff6000 1px solid!important;}

.voucher{padding:0.01rem 0.24rem 0.30rem;}
.voucher .item{width: 100%;padding: 0.30rem;margin-top: 0.30rem;background: linear-gradient(left,#FF6C6C,#ffb444);color: #fff;border-radius: 0.10rem;position: relative;box-shadow: 0 8px 13px rgba(255,96,0,0.2);overflow: hidden}
.voucher .item .remark{width: 1.2rem;height: 0.6rem;padding-top: 0.23rem;font-size: 0.18rem;color: #fff;background-color: #ff8000;transform: rotate(45deg);position: absolute;top: -0.08rem;right: -0.37rem;text-align: center;}
.voucher .item .remark.yi{color: #fff;background-color: #ff8000;}
.voucher .item .remark.wei{color: #999;background-color: #dedede;}
.voucher .item .amount{margin-top: 0.25rem;/*margin-bottom: 0.28rem;*/}
.voucher .item .date{padding-top: 0.26rem;padding-bottom: .05rem;}
.voucher button{width: 1.1rem;line-height:0.42rem;height: 0.42rem;text-align: center;color: #ff6000;background-color: #fff;border-radius: 0.08rem;font-size: 0.28rem}
.pb15{padding-bottom: 0.30rem}
.costRecord .item{border-bottom: 1px #eee solid;height: 1.32rem; padding-left: 0.20rem;padding-right: 0.20rem;}
.costRecord .item .t{font-size: 0.24rem;color: #999}
.costRecord .item .b{font-size: 0.24rem;color: #666;margin-top: 0.08rem}
    .card-money span {
        display: inline;
    }
    .no-data {
        padding: 0.2rem;
        text-align: center;
    }
    .tx-c {
        max-width: 30%;
        width: 30%;
    }
.tx-c .b {
    height: 0.3rem;
    overflow: hidden;
}
</style>
