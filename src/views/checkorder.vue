<template>
    <div class="main">
        <div class="ub ub-ac bgb">
            <input type="number" class="ub-f1 code" placeholder="请输入券码对应的数字码" v-model="receiptCode" @keyup="formatInput('receiptCode')" />
            <span class="icon_sao1 mr10"></span>
        </div>
        <div class="btn">
            <button class="btn_common" @click="submit()">确认核销</button>
        </div>

        <div class="recordItem">
            <p class="time">今天</p>
            <div class="ub ub-ac ub-pj item bbc" @click="toDetail">
                <div>
                    <p class="bc1 f14 tx-l">+100</p>
                    <p class="bc1 f14 tx-l">15011150022</p>
                </div>
                <div>
                    <p class="sc f13 tx-r">已核销</p>
                    <p class="sc f13 tx-r">2018-04-09</p>
                </div>
            </div>
            <div class="ub ub-ac ub-pj item" @click="toDetail">
                <div>
                    <p class="bc1 f14 tx-l">+100</p>
                    <p class="bc1 f14 tx-l">15011150022</p>
                </div>
                <div>
                    <p class="sc f13 tx-r">已核销</p>
                    <p class="sc f13 tx-r">2018-04-09</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "checkOrder",
    data() {
        return {
            shopId:'',
            receiptCode: ''
        };
    },
    components: {},
    methods: {
        formatInput(value) {
            this[value] = String(this[value]).replace(/[^\d]/g, ""); //清除“数字”以外的字符
        },
        toDetail(){
            this.$router.push('/checkDetail');
        },
        submit(){
            this.$router.push('/checkConfirm');
            // if(type === '口碑核销'){
            //     console.log(self.receiptCode);
            //     this.$ajax.get("merchant/order/koubei/ticket.json", {
            //         params: {
            //             shopId: self.shopId,
            //             ticketNo: self.receiptCode,
            //             isQuery: 'T'
            //         }
            //     }).then(function (result) {
            //         console.log(result.data);
            //         if (result.data.errorCode == "10000") {
            //             alert('核销成功');
            //             self.$router.push('/home');
            //         } else {
            //             alert(result.data.errorInfo);
            //         }
            //     });
            // }else if(type === '美团核销'){
            //     this.$ajax.get("xmd/tuangou/receipt/prepare.json",{
            //         params: {
            //             storeId: self.shopId,
            //             receiptCode: self.receiptCode
            //         }
            //     }).then(function (result) {
            //         console.log(result.data);
            //         if (result.data.errorCode == "10000") {
            //             alert('核销成功');
            //             self.$router.push('/home');
            //         } else {
            //             alert(result.data.errorInfo);
            //         }
            //     });
            // }
        }
    },
    created(){

    }
}
</script>

<style scoped>
.main{height: 100%;padding: 0.30rem 0.30rem 0}
.code{height: 0.88rem;line-height: 0.88rem;font-size: 0.28rem;padding-left: 0.20rem}
.btn{margin-top: 0.60rem;}
.time{padding-left: 0.06rem;font-size: 0.24rem;color: #999;line-height: 0.88rem;}
.mr10{margin-right: 0.20rem}
.item{background-color: #fff;padding:0.10rem 0.16rem;border-radius: 0.10rem}
.icon_sao1{display: inline-block;width: 0.40rem;height: 0.40rem;background: url(../assets/icon_sao1.png) no-repeat center center;background-size: 100% 100%;}
</style>
