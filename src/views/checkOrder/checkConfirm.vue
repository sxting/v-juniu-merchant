<template>
    <div class="main">
        <!--<div class="item1 ub ub-ac plr15">-->
            <!--<p class="ub-f1">用户名</p>-->
            <!--<img src="../../assets/user.png" class="user"/>-->
            <!--<p class="ml05">帝格(15201375235)</p>-->
        <!--</div>-->
        <div v-if="type === 'koubei' || type === 'meituan'">
            <p class="tit">本次核销信息</p>
            <div class="plr15 bgb">
                <div class="item bbc ub ub-ac ub-pj">
                    <p class="bc">商品名称</p>
                    <p class="bc" v-if="type === 'koubei'">{{data.itemName}}</p>
                    <p class="bc" v-if="type === 'meituan'">{{data.deal_title}}</p>
                </div>
                <div class="item bbc ub ub-ac ub-pj">
                    <p class="bc">商品价格</p>
                    <p class="rc" v-if="type === 'koubei'">￥{{data.currentPrice/100}}</p>
                    <p class="rc" v-if="type === 'meituan'">￥{{data.deal_price}}</p>
                </div>
                <!--<div class="item bbc ub ub-ac ub-pj">-->
                    <!--<p class="bc">截至有效期</p>-->
                    <!--<p class="bc" v-if="type === 'koubei'">2018-09-08</p>-->
                    <!--<p class="bc" v-if="type === 'meituan'">2018-09-08</p>-->
                <!--</div>-->
                <div class="item ub ub-ac ub-pj" v-if="">
                    <p class="bc">选择本次核销份数</p>
                    <p class="ub ub-ac numBox">
                        <span @click="delOne" class="ctlbtn"><i class="icon-del sc iconfont"></i></span>
                        <i class="number btbc">{{bookNum}}</i>
                        <span @click="addOne" class="ctlbtn"><i class="icon-add sc iconfont"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="tit">添加服务技师</p>
            <div class="plr15 bgb">
                <div class="item bbc ub ub-ac ub-pj" @click="openPicker(0)">
                    <p class="bc ub-f1">添加技师</p>
                    <p class="bc">{{name1}}</p>
                    <span class="arrow-down"></span>
                </div>
                <div class="item ub ub-ac ub-pj" @click="openPicker(1)">
                    <p class="bc ub-f1">添加小工</p>
                    <p class="bc">{{name2}}</p>
                    <span class="arrow-down"></span>
                </div>
            </div>
        </div>
        <div class="mt40 plr15">
            <div class="btn_common" @click="submit">确认核销</div>
        </div>
        <mt-popup v-model="pickerVisible1" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker">取消</span>
                <span class="picker-confirm" @click="closePicker">确定</span>
            </div>
            <mt-picker :slots="actions1" :value-key="'staffName'" @change="onPickerChange1" :visible-item-count="5"></mt-picker>
        </mt-popup>
        <mt-popup v-model="pickerVisible2" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker">取消</span>
                <span class="picker-confirm" @click="closePicker">确定</span>
            </div>
            <mt-picker :slots="actions2" :value-key="'staffName'" @change="onPickerChange2" :visible-item-count="5"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import {popup,picker } from 'mint-ui';
export default {
    name: "checkConfirm",
    data() {
        return {
            type: this.$route.params.type,
            code: this.$route.params.code,
            storeId: sessionStorage.getItem('storeId'),
            pickerVisible1:false,
            pickerVisible2:false,
            actions1:[],
            actions2:[],
            name1:'请添加技师',
            staffId1: '',
            name2:'请添加小工',
            staffId2: '',
            bookNum:1,
            data: {}
        };
    },
    components: {},
    methods: {
        getData() {
            let self = this;
            if(this.type === 'koubei') {
                let url = '', data = {
                    shopId: this.storeId,
                    ticketCode: this.code,
                    isQuery: 'T'
                };
                if(this.code.length === 12 && this.code.substring(0, 2) !== '31') {
                    url = '/merchant/order/koubei/queryTicketCode.json'; //口碑核销
                    this.$ajax.get(url, {params: data}).then(function (res) {
                        if(res.success) {
                            self.data = res.data;
                        } else {
                            alert(res.errorInfo);
                        }
                    })
                } else if(this.code.length === 16 && this.code.substring(0, 2) === '31') {
                    url = '/merchant/order/koubei/ticket.json'; //口碑拼团核销
                    this.$ajax.get(url, {params: data}).then(function (res) {
                        if(res.success) {
                            self.$router.push('/checkSuccess');
                        } else {
                            alert(res.errorInfo);
                        }
                    })
                } else {
                    return;
                }
            } else if(this.type === 'meituan') {
                let url = '/xmd/tuangou/receipt/prepare.json', data = {
                    storeId: this.storeId,
                    receiptCode: this.code
                };
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.data = res.data.data;
                    } else {
                        alert(res.errorInfo);
                    }
                    console.log(res);
                })
            } else {
                let url = '/account/merchant/staff/select.json', data = {
                    storeId: this.storeId,
                    timestamp: new Date().getTime()
                };
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.actions1 = [
                            {values: [{staffName: '请添加技师', staffId: ''}].concat(res.data.items)},
                        ];
                        self.actions2 = [
                            {values: [{staffName: '请添加小工', staffId: ''}].concat(res.data.items)},
                        ];
                    } else {
                        alert(res.errorInfo);
                    }
                })
            }
        },
        openPicker(index){
            if(index === 0) {
                this.pickerVisible1 = true;
            } else if(index === 1) {
                this.pickerVisible2 = true;
            }
        },
        closePicker(){
            this.pickerVisible1 = false;
            this.pickerVisible2 = false;
        },
        onPickerChange1(index,values){
            if(values[0]) {
                this.name1 = values[0].staffName;
                this.staffId1 = values[0].staffId;
            }
        },
        onPickerChange2(picker,values){
            if(values[0]) {
                this.name2 = values[0].staffName;
                this.staffId2 = values[0].staffId;
            }
        },
        addOne(){
            this.bookNum++;
        },
        delOne(){
            if(this.bookNum>1)
            this.bookNum--;
        },
        submit(){
            let self = this;
            if(this.type === 'koubei') {
                let url = '/merchant/order/koubei/settle.json', data = {
                    shopId: this.storeId,
                    ticketCode: this.code,
                    quantity: this.bookNum
                };
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.$router.push('/checkSuccess');
                    } else {
                        alert(res.errorInfo);
                    }
                })
            } else if(this.type === 'meituan') {
                let url = '/xmd/tuangou/receipt/consume.json', data = {
                    storeId: this.storeId,
                    receiptCode: this.code,
                    count: this.bookNum,
                };
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.$router.push('/checkSuccess');
                    } else {
                        alert(res.errorInfo);
                    }
                })
            } else if(this.type === 'wechat') {
                let url = '/merchant/order/wxorder/consumeVoucher.json', data = {
                    storeId: this.storeId,
                    voucherCode: this.code,
                    assign: 0,
                    coolie: this.staffId2,
                    merchantId: JSON.parse(sessionStorage.getItem('User-Info')).merchantId,
                    staffId: this.staffId1,
                };
                if(this.code.length >= 16) {
                    this.$ajax.post(url, data).then(function (res) {
                        if(res.success) {
                            self.$router.push('/checkSuccess');
                        } else {
                            alert(res.errorInfo);
                        }
                    })
                }
            }
        }
    },
    mounted() {

    },
    created() {
        document.title="确认核销";
        this.type = this.$route.params.type;
        this.getData();
    }
};
</script>

<style scoped>
.main{height: 100%;overflow: auto}
.toper{padding: 0.8rem 0 0.50rem;background-color: #fff}
.tit{padding-left: 0.30rem;line-height: 0.60rem;font-size: 0.28rem;color: #666;font-size: 0.24rem;}
.btn{width: 2.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#999;border-radius: 0.10rem;border:1px #eee solid;}
.user{width: 0.60rem; height: 0.60rem;border-radius: 50%;margin-right: 0.08rem;}
.mr20{margin-right: 0.40rem;}
.h50{height: 1.0rem;}
.btn_back{background:#fff;height: 0.88rem;color: #ff6000;font-size: 0.32rem;border-radius: 0.10rem;border:1px #ff6000 solid;}
.btn_print{background:#FF6000;height: 0.88rem;color: #fff;font-size: 0.32rem;border-radius: 0.10rem;}
.ml05{margin-left: 0.10rem}
.item{height: 1rem;}
.item1{height: 1rem;background-color: #fff}
.numBox .ctlbtn{width: 0.56rem;height:0.48rem;line-height: 0.48rem;background-color: #eee;text-align: center;}
.numBox .number{width: 0.60rem;height:0.48rem;line-height: 0.48rem;background-color: #fff;text-align: center;}
</style>
