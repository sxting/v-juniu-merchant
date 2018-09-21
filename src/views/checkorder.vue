<template>
    <div class="main">
        <div class="ub ub-ac inputDiv">
            <input type="number" class="ub-f1 code" placeholder="请输入券码对应的数字码" v-model="receiptCode" @keyup="formatInput('receiptCode')" />
            <span class="icon_sao1 mr10"></span>
        </div>
        <div class="btn">
            <button class="btn_common" @click="submit()">点击核销</button>
        </div>

        <div class="recordItem">
            <p class="time">近10条核销记录</p>
            <div class="theItem">
                <div class="ub ub-ac ub-pj item bbc" v-for="item in dataList" @click="toDetail">
                    <div>
                        <p class="bc1 f14 tx-l">+{{item.amount/100}}</p>
                        <p class="bc1 f14 tx-l">15011150022</p>
                    </div>
                    <div>
                        <p class="sc f13 tx-r">已核销</p>
                        <p class="sc f13 tx-r">2018-04-09</p>
                    </div>
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
            receiptCode: '',
            type: '',
            dataList: []
        };
    },
    components: {},
    methods: {
        getData() {
            let self = this;
            let url = '';
            let data = {pageIndex: 1, pageSize: 10};
            if(this.type === 'koubei') {
                url = '/merchant/order/koubei/vouchers.json';
            } else if(this.type === 'meituan') {
                url = '/merchant/order/koubei/vouchers.json';
            } else if(this.type === 'wechat') {
                url = '/merchant/order/koubei/vouchers.json';
            }
            this.$ajax.get(url, {params: data}).then(function (res) {
                self.dataList = res.data.vouchers;
            }).catch(function(err) {
                console.log(err);
            })
        },
        formatInput(value) {
            this[value] = String(this[value]).replace(/[^\d]/g, ""); //清除“数字”以外的字符
        },
        toDetail(){
            this.$router.push('/checkDetail');
        },
        submit(){
            this.$router.push('/checkConfirm');
            if(this.type === 'koubei'){
                //口碑核销查询  /merchant/order/koubei/queryTicketCode.json  shopId   ticketCode  isQuery: T
                //确认核销  /merchant//order/koubei/settle.json   shopId=2016110300077000000019717987&ticketCode=126365494003&quantity=1
                console.log(self.receiptCode);
                this.$ajax.get("merchant/order/koubei/ticket.json", {
                    params: {
                        shopId: self.shopId,
                        ticketNo: self.receiptCode,
                        isQuery: 'T'
                    }
                }).then(function (result) {
                    console.log(result.data);
                    if (result.data.errorCode == "10000") {
                        alert('核销成功');
                        self.$router.push('/home');
                    } else {
                        alert(result.data.errorInfo);
                    }
                });
            }else if(this.type === 'meituan'){
                this.$ajax.get("xmd/tuangou/receipt/prepare.json",{
                    params: {
                        storeId: self.shopId,
                        receiptCode: self.receiptCode
                    }
                }).then(function (result) {
                    console.log(result.data);
                    if (result.data.errorCode == "10000") {
                        alert('核销成功');
                        self.$router.push('/home');
                    } else {
                        alert(result.data.errorInfo);
                    }
                });
            }
        }
    },
    created(){
        document.title = "核销";
        this.type = this.$route.params.type;
        this.getData();
    }
}
</script>

<style scoped>
.main{height: 100%;padding: 0.30rem 0.30rem 0}
.code{height: 0.88rem;line-height: 0.88rem;font-size: 0.28rem;padding-left: 0.20rem}
.time{padding-left: 0.06rem;font-size: 0.24rem;color: #999;line-height: 0.88rem;}
.mr10{margin-right: 0.20rem}
.inputDiv{background-color: #fff;border-radius: 0.10rem}
.theItem{border-radius: 0.10rem;background-color: #fff;padding-left: 0.15rem;padding-right: 0.15rem}
.item{height: 1.2rem;}
.icon_sao1{display: inline-block;width: 0.40rem;height: 0.40rem;background: url(../assets/icon_sao1.png) no-repeat center center;background-size: 100% 100%;}
.btn{margin-top: 0.30rem;margin-bottom: 0.20rem}
</style>
