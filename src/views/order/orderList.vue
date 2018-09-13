<template>
    <div class="main">
        <div class="orderItem">
            <p class="time">开单时间：2010-10-10 10:10:10</p>
            <div class="orderInfo">
                <div class="h88 ub ub-ac ub-pj">
                    <p class="bc ub ub-ac"><span class="icon_card mr10"></span>王某某</p>
                    <p class="bc">15011150022</p>
                </div>
                <div class="ub ub-ac orderCon">
                    <img src="../../assets/default.png" class="goodImg">
                    <div class="ub-f1 ml10">
                        <p class="f14 ub ub-ac ub-pj">项目名称<i class="curreny f14">×3</i></p>
                        <p class="f13 sc mt05">服务技师：王某某</p>
                        <p class="f13 sc">服务小工：王某某</p>
                    </div>
                </div>
                <div class="ub ub-ac ub-pj pt10">
                    <p class="bc">微信记录收款</p>
                    <p class="bc">扣卡<i class="curreny ml10">￥200</i></p>
                </div>
                <div class="tx-r pb30 mt10">
                    <button class="btn_concel" @click="cancelOrder()">撤销</button>
                    <button class="btn_read" @click="readOrder()">查看详情</button>
                </div>
            </div>
        </div>
        <comfirmBox ref="comfirmBox"></comfirmBox>
        <alertBox ref="alertBox"></alertBox>
    </div>
</template>

<script>
export default {
    name: "orderList",
    data() {
        return {
            orderList:[]
        };
    },
    methods: {
        readOrder(){
            // this.$refs.alertBox.alert('测试提示框')
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

              }
            });
        }
    },
    created() {
        document.title = "历史订单";
    }
};
</script>

<style scoped>
.main{background-color: #f9f9f9;padding-left: 0.30rem;padding-right: 0.30rem;position: relative;height: 100%;}
.time{padding-left: 0.06rem;font-size: 0.24rem;color: #999;line-height: 0.72rem;}
.goodImg{display: block;width: 1.4rem;height: 1.4rem;}
.orderInfo{background-color: #fff;border-radius: 0.20rem;padding-left: 0.30rem;padding-right: 0.30rem}
.h88{height: .88rem;}
.orderCon{height: 2.0rem;border-top: 1px #eee solid;border-bottom: 1px #eee solid;}
.pt10{padding-top: 0.20rem}

.icon_member{display: inline-block;width: 0.34rem;height: 0.28rem;background: url(../../assets/icon_member.png) no-repeat center;background-size: 100% 100%;margin-right: 0.10rem}
.btn_concel{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #dedede solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #999}
.btn_read{width: 1.4rem;height: 0.44rem;background:#fff;border-radius:0.04rem;border: 1px #ff6000 solid;text-align: center;line-height: 0.44rem;border-sizing:content-box;color: #ff6000;margin-left: 0.30rem}
.pb30{padding-bottom: 0.30rem}
.mr10{margin-right: 0.20rem}
</style>
