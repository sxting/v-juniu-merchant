<template>
    <div class="hexiao">
        <h3 class="title-hexiao">核销·{{title}}</h3>
        <div class="hexiao-content">
            <group label-width="5em">
                <popup-picker :title="title1" :data="list1" :columns="1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" v-model="value1" show-name :placeholder="storeName"></popup-picker>
                <x-input :title="titletype" name="username" :placeholder="placeholderText" required type="number" text-align="right" v-model="receiptCode"></x-input>
            </group>
            <div class="button-box" @click="submitData(title)">
                <x-button type="primary" :gradients="['#FF6600', '#FF9500']">提交</x-button>
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
                list1: ['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'],
                ifShowLoading: false,
                receiptCode: '',//核销码
                shopId: '',//门店ID
            };
        },
        components: {
            PopupPicker,
            Group,
            XInput,
            XButton,
            Toast
        },
        methods: {
            onChange (val) {
                this.shopId = val[0];
                console.log(this.shopId);
            },
            onShow () {
                console.log('on show')
            },
            onHide (type) {
                console.log('on hide', type)
            },
            submitData(type){
                console.log('submit data' + type);
                let self = this;
                if(type === '口碑核销'){
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
            console.log(this.$route.params.type);
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
            let arrShopList = JSON.parse(sessionStorage.getItem('staffInfo')).alipayShopList;
            let arrStoreList = [];
            arrShopList.forEach(function (item) {
                let list = {
                    name: item.shopName,
                    value: item.shopId
                };
                arrStoreList.push(list);
            });
            this.list1 = arrStoreList;
            console.log(this.list1);
        }
    }
</script>

<style scoped>
    .hexiao{
        width: 100%;
        height: 100%;
    }
    .hexiao .title-hexiao{
        padding: 0 0.3rem;
        height: 0.88rem;
        line-height: 0.88rem;;
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
        color: #222222;
        background-color: #fff;
        font-weight: initial;
        margin-bottom: 0.2rem;
    }
    .button-box{
        padding: 0 0.3rem;
        margin-top: 1.5rem;
    }
</style>
