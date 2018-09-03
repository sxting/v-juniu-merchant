<template>
    <div class="hexiao">
        <div class="hexiao-content">
            <group label-width="5em">
                <popup-picker :title="title1" :data="list1" :columns="1" @on-show="onShow" @on-change="onChange" v-model="value1" show-name :placeholder="storeName"></popup-picker>
            </group>
            <div class="ub ub-ac bgb inputDiv btc plr15">
                <p>核销码</p>
                <input type="number" class="ub-f1 inputNumber tx-r" placeholder="请输入顾客核销码" v-model="receiptCode" @keyup="formatInput('receiptCode')" />
            </div>
            <div class="btn" @click="submitData(title)">
                <x-button type="primary" :gradients="['#FF6600', '#FF9500']">确认核销</x-button>
            </div>
        </div>
    </div>
</template>

<script>
import { XInput, PopupPicker, Group, XButton } from 'vux';
export default {
    name: "hexiao",
    data() {
        return {
            title: '口碑核销',
            title1: '请选择门店',
            storeName: '请选择',
            titletype: '核销码',
            placeholderText: '请输入顾客核销码',
            value1: [],
            list1: ['门店1','门店2'],
            ifShowLoading: false,
            receiptCode: '',//核销码
            shopId: '',//门店ID
            onShow:false
        };
    },
    components: {
        PopupPicker,
        Group,
        XInput,
        XButton,
    },
    methods: {
        onChange (val) {
            this.shopId = val[0];
            console.log(this.shopId);
        },
        //格式化输入的字符
        formatInput(value) {
            this[value] = String(this[value]).replace(/[^\d]/g, ""); //清除“数字”以外的字符
        },
        submitData(type){
            console.log('submit data' + type);
            let self = this;
            if(type === '口碑核销'){
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
            }else if(type === '美团核销'){
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
            }else {//微信核销

            }
        }
    },
    created(){
        document.title = "输码核销";
        if(this.$route.params.type === 'meituan'){
            this.title = '美团核销';
            this.titletype = '输入券码';
            this.placeholderText = '请输入团购券序列号'
        }else if(this.$route.params.type === 'kouebi'){
            this.title = '口碑核销';
            this.titletype = '核销码';
            this.placeholderText = '请输入顾客核销码'
        }else {
            this.title = '微信核销';
            this.titletype = '核销码'
        }
        // let arrShopList = JSON.parse(sessionStorage.getItem('staffInfo')).alipayShopList||{};
        var arrShopList = [];
        var arrStoreList = [];
        arrShopList.forEach(function (item) {
            let list = {
                name: item.shopName,
                value: item.shopId
            };
            arrStoreList.push(list);
        });
        this.list1 = arrStoreList;
    }
}
</script>

<style scoped>
.hexiao{ width: 100%; height: 100%;}
.btn{padding: 0 0.3rem; margin-top: 1rem;}
.inputDiv{height: 1.0rem}
.inputNumber{height: 0.96rem;line-height: 0.96rem;font-size: 0.28rem;margin-left: 0.20rem;}
</style>
