<template>
    <div>
        <div class="memberInfo">
            <div class="ub ub-ac">
                <img src="../../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f12 bc1">王云鹏</p>
                    <p class="f12 bc1 mt05">10000000000</p>
                </div>
                <div class="compilebtn">编辑</div>
            </div>
            <div class="ub ub-pj mt10">
                <p class="f12 bc1">创建日期：2018-05-23 11:37:34</p>
                <p class="f12 bc1">持卡张数：1</p>
            </div>
            <div class="ub ub-pj mt10">
                <p class="f12 bc1">会员来源：桔牛</p>
                <p class="f12 bc1">累计消费：¥200</p>
            </div>
            <p class="f12 bc1 mt10">展示标签：<span class="mark">优质会员</span></p>
        </div>
        <div class="clearfix tabList mt10 bgb">
            <li :class="{'on':curTabIndex==0}" @click="swtichTab(0)">卡劵</li>
            <li :class="{'on':curTabIndex==1}" @click="swtichTab(1)">消费记录</li>
        </div>
        <div v-show="curTabIndex==0" class="voucher bgb">
            <div class="item ub ub-ac ub-pj">
                <div>
                    <p>黄金储值卡</p>
                    <p class="f20 mt12">储值500元</p>
                    <p class="f12 mt12">全店通用 <i class="ml30 f12">有效期：永久</i></p>
                </div>
                <div class="ub ub-ver ub-pc ub-ac">
                    <p class="f18">￥300元</p>
                    <button class="mt12">充值</button>
                </div>
            </div>
        </div>
        <div v-show="curTabIndex==1" class="costRecord">
            <div class="ub ub-pj ub-ac bgb item">
                <div class="tx-c">
                    <span class="t">2018-02-02</span><span class="b">储值卡</span>
                </div>
                <div class="tx-c">
                    <span class="t">发型总监设计</span><span class="b">储值卡</span>
                </div>
                <div class="tx-c">
                    <span class="t">余额</span><span class="b">储值卡</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "memberInfo",
        data() {
            return {
                curTabIndex:0
            };
        },
        methods: {
            swtichTab(num){
                this.curTabIndex = num;
            }
        },
        computed: {

        },
        created() {

        }
    };
</script>

<style scoped>
.tabList{border-top: #eee 1px solid;}
.tabList li{width: 50%;float: left;line-height: 0.8rem;line-height: 0.8rem;text-align: center;font-size: 0.28rem;border-bottom: #eee 1px solid;color: #666;}
li.on{color: #ff6000!important;border-bottom: #ff6000 1px solid!important;}

.voucher{padding:0.01rem 0.24rem 0.24rem;}
.voucher .item{width: 100%;padding: 0.24rem;margin-top: 0.20rem;background: linear-gradient(left,#FF6C6C,#ffb444);color: #fff;border-radius: 0.10rem}
.voucher button{width: 1.1rem;line-height:0.42rem;height: 0.42rem;text-align: center;color: #ff6000;background-color: #fff;border-radius: 0.08rem;font-size: 0.28rem}

.costRecord .item{border-bottom: 1px #eee solid;height: 1.32rem; padding-left: 0.20rem;padding-right: 0.20rem;}
.costRecord .item .t{font-size: 0.24rem;color: #999}
.costRecord .item .b{font-size: 0.24rem;color: #666;margin-top: 0.08rem}
.ml30{margin-left: 0.60rem}
.mt12{margin-top: 0.24rem}

.memberInfo{padding:0.16rem 0.24rem;background-color: #ff6000;color: #fff}
.memberInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.memberInfo .compilebtn{background-color: #fff;color: #ff6000;width:0.9rem;height: 0.42rem;border-radius: 0.10rem;font-size: 0.24rem;text-align: center;line-height: 0.40rem;border: 1px #ff6000 solid;}
.memberInfo p{color: #fff;}
.mark{display:inline-block;background-color: #fff;border: 1px #ccc solid;color: #ccc;padding:0.04rem 0.08rem; border-radius: 0.06rem;margin-right: 0.24rem;font-size: 0.24rem;margin-bottom: 0.24rem}
</style>
