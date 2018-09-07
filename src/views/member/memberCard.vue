<template>
    <div class="main">
        <div class="content bgb">
            <div class="clearfix tabList ub">
                <li v-for="(item,index) in tabList" class="ub-f1" :class="{'on':curTabIndex==index}" @click="swtichTab(index)">{{item}}</li>
            </div>
            <div v-show="curTabIndex==0" class="voucher bgb">
                <div class="item">
                    <div class="remark yi">已持有</div>
                    <p>黄金储值卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
                <div class="item">
                    <div class="remark wei">未持有</div>
                    <p>黄金储值卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
            </div>
            <div v-show="curTabIndex==1" class="voucher bgb">
                <div class="item">
                    <div class="remark yi">已持有</div>
                    <p>超值折扣卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
                <div class="item">
                    <div class="remark wei">未持有</div>
                    <p>超值折扣卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
            </div>
            <div v-show="curTabIndex==2" class="voucher bgb">
                <div class="item">
                    <div class="remark yi">已持有</div>
                    <p>理发计次卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
                <div class="item">
                    <div class="remark wei">未持有</div>
                    <p>理发计次卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
            </div>
            <div v-show="curTabIndex==3" class="voucher bgb">
                <div class="item">
                    <div class="remark yi">已持有</div>
                    <p>理发季卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
                <div class="item">
                    <div class="remark wei">未持有</div>
                    <p>理发季卡</p>
                    <div class="ub ub-pj ub-ac amount">
                        <p class="f20">储值300元</p><p class="f20">￥300元</p>
                    </div>
                    <div class="btc1 ub ub-pj date">
                        <p class="f12">全店通用 <i class="ml10 f12">有效期：永久</i></p>
                        <button @click="toRecharge">充值</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "memberCard",
        data() {
            return {
                tabList:['储值卡','折扣卡','计次卡','期限卡'],
                ishave:1,
                curTabIndex:0
            };
        },
        methods: {
            swtichTab(num){
                this.curTabIndex = num;
            },
            toRecharge(){
                this.$router.push('/recharge');
            },
            toAddMember(){
                this.$router.push('/addMember');
            }
        },
        computed: {

        },
        created() {
            document.title = "会员卡";
        }
    };
</script>

<style scoped>
.main{background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;padding-top: 0.30rem;}
.content{border-radius: 0.20rem;overflow: hidden;}
.tabList{border-top: #eee 1px solid;}
.tabList li{line-height: 0.8rem;line-height: 0.8rem;text-align: center;font-size: 0.28rem;border-bottom: #eee 1px solid;color: #666;}
li.on{color: #ff6000!important;border-bottom: #ff6000 1px solid!important;}

.voucher{padding:0.01rem 0.24rem 0.30rem;}
.voucher .item{width: 100%;padding: 0.30rem;margin-top: 0.30rem;background: linear-gradient(left,#FF6C6C,#ffb444);color: #fff;border-radius: 0.10rem;position: relative;box-shadow: 0 8px 13px rgba(255,96,0,0.2);overflow: hidden}
.voucher .item .remark{width: 1.2rem;height: 0.6rem;padding-top: 0.23rem;font-size: 0.22rem;color: #fff;background-color: #ff8000;transform: rotate(45deg);position: absolute;top: -0.06rem;right: -0.37rem;text-align: center;}
.voucher .item .remark.yi{color: #fff;background-color: #ff8000;}
.voucher .item .remark.wei{color: #999;background-color: #dedede;}
.voucher .item .amount{margin-top: 0.25rem;margin-bottom: 0.28rem;}
.voucher .item .date{padding-top: 0.26rem;padding-bottom: .05rem;}
.voucher button{width: 1.1rem;line-height:0.42rem;height: 0.42rem;text-align: center;color: #ff6000;background-color: #fff;border-radius: 0.08rem;font-size: 0.28rem}

</style>
