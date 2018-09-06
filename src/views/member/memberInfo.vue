<template>
    <div class="main">
        <div class="blackbar"></div>
        <div class="memberInfo">
            <div class="ub ub-ac">
                <img src="../../assets/user.png" class="udb">
                <div class="ub-f1 ml10">
                    <p class="f12 bc1 ub ub-ac">王云鹏<i class="icon_male ml05"></i><i class="icon_card ml10"></i></p>
                    <p class="mt05"><i class="icon_tel"></i><a href="" class="f12 bc1">15011101110</a></p>
                </div>
                <div class="compilebtn ub ub-ac ub-pc" @click="toAddMember()"><i class="icon_compile"></i>编辑</div>
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
        <div class="content mt10 bgb">
            <div class="clearfix tabList">
                <li :class="{'on':curTabIndex==0}" @click="swtichTab(0)">卡劵</li>
                <li :class="{'on':curTabIndex==1}" @click="swtichTab(1)">消费记录</li>
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
                        <button>充值</button>
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
                        <button>充值</button>
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
    </div>
</template>

<script>
    export default {
        name: "memberInfo",
        data() {
            return {
                ishave:1,
                curTabIndex:0
            };
        },
        methods: {
            swtichTab(num){
                this.curTabIndex = num;
            },
            toAddMember(){
                this.$router.push('/addMember');
            }
        },
        computed: {

        },
        created() {
            document.title = "会员";
        }
    };
</script>

<style scoped>
.main{background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;padding-top: 0.30rem;}
.blackbar{background-color:#000;height: 0.8rem;width: 100%;position: absolute;top: 0;left: 0;z-index: 0}

.memberInfo{padding:0.16rem 0.24rem;background: #fff;position: relative;z-index: 1;border-radius: .20rem}
.memberInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.memberInfo .compilebtn{color: #ff6000;width:0.9rem;height: 0.42rem;font-size: 0.24rem;text-align: center;line-height: 0.40rem;}
.mark{display:inline-block;background: linear-gradient(left,#ff8000,#ff5000);color: #fff;padding:0 0.24rem;margin-right: 0.24rem;font-size: 0.24rem;margin-bottom: 0.24rem;height: 0.48rem;line-height: 0.48rem; border-radius: 0.24rem;}
.content{border-radius: 0.20rem;overflow: hidden;}
.tabList{border-top: #eee 1px solid;}
.tabList li{width: 50%;float: left;line-height: 0.8rem;line-height: 0.8rem;text-align: center;font-size: 0.28rem;border-bottom: #eee 1px solid;color: #666;}
li.on{color: #ff6000!important;border-bottom: #ff6000 1px solid!important;}

.voucher{padding:0.01rem 0.24rem 0.30rem;}
.voucher .item{width: 100%;padding: 0.30rem;margin-top: 0.30rem;background: linear-gradient(left,#FF6C6C,#ffb444);color: #fff;border-radius: 0.10rem;position: relative;box-shadow: 0 8px 13px rgba(255,96,0,0.2);overflow: hidden}
.voucher .item .remark{width: 1.2rem;height: 0.6rem;padding-top: 0.23rem;font-size: 0.22rem;color: #fff;background-color: #ff8000;transform: rotate(45deg);position: absolute;top: -0.06rem;right: -0.37rem;text-align: center;}
.voucher .item .remark.yi{color: #fff;background-color: #ff8000;}
.voucher .item .remark.wei{color: #999;background-color: #dedede;}
.voucher .item .amount{margin-top: 0.25rem;margin-bottom: 0.28rem;}
.voucher .item .date{padding-top: 0.26rem;padding-bottom: .05rem;}
.voucher button{width: 1.1rem;line-height:0.42rem;height: 0.42rem;text-align: center;color: #ff6000;background-color: #fff;border-radius: 0.08rem;font-size: 0.28rem}

.costRecord .item{border-bottom: 1px #eee solid;height: 1.32rem; padding-left: 0.20rem;padding-right: 0.20rem;}
.costRecord .item .t{font-size: 0.24rem;color: #999}
.costRecord .item .b{font-size: 0.24rem;color: #666;margin-top: 0.08rem}
</style>
