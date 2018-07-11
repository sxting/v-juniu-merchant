<template>
    <div class="hexiao">
        <h3 class="title-hexiao">核销·{{title}}</h3>
        <div class="hexiao-content">
            <group label-width="5em">
                <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :placeholder="storeName"></popup-picker>
                <x-input :title="titletype" name="username" :placeholder="placeholderText" required type="number" text-align="right" v-model="ticketNo"></x-input>
            </group>
            <div class="button-box" @click="submitData">
                <x-button type="primary" :gradients="['#FF6600', '#FF9500']">提交</x-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { XInput, PopupPicker, Group, XButton } from 'vux';
    import axios from 'axios';
    import { Toast } from 'vux'

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
                list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
                ifShowLoading: false,
                ticketNo: '',//核销码
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
                console.log('val change', val)
            },
            onShow () {
                console.log('on show')
            },
            onHide (type) {
                console.log('on hide', type)
            },
            submitData(){
                console.log('submit data');
                let self = this;
                axios({
                    method: "POST",
                    url: "/order/koubei/ticket.json",
                    params: {
                        shopId: '2016080900077000000017955745',
                        ticketNo: self.ticketNo,
                        isQuery: 'T'
                    }
                }).then(function (result) {
                    console.log(result.data);
                    if (result.data.errorCode == 0) {
                        alert('核销成功');
                    } else {
                        alert(result.data.errorInfo);
                    }
                });
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
