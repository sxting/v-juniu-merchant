<template>
    <div class="main ub ub-ver">
        <div class="toper ub ub-ac">
            <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac"><i class="icon_search mr05"></i>会员查询</div>
            <div @click="toPath('/addMember')" class="openMember tx-c"><i class="icon_member"></i><p class="tx-c f12">开通会员</p></div>
        </div>
        <div class="plr15 mt05">
            <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
                <img src="../assets/user.png" class="udb bac" @click="toMemberInfo">
                <div class="ub-f1 ml10">
                    <p class="f12 bc1 ub ub-ac">王云鹏<i class="icon_male ml05"></i><i class="icon_card ml10"></i></p>
                    <p class="f12 mt05 bc1">15000000000</p>
                </div>
                <div class="userbtn btn_vc" @click="toMemberCard">售卡/充值</div>
            </div>
            <div class="orderInfo mt10 plr15">
                <div class="item bbc ub ub-ac">
                    <i class="f15 rc">￥</i>
                    <input type="number" maxlength="11" class="ub-f1" placeholder="请输入结算金额" autofocus/>
                </div>
                <div v-if="isShowMember" class="item ub ub-ac" @click="showCard">
                    <p class="ub-f1">选择扣卡</p><p class="f13 rc mr20" v-if="cardName!='选择优惠'">-￥13.00</p><p class="bc">{{cardName}}</p><i class="arrow-down"></i>
                </div>
            </div>
        </div>
        <mt-popup v-model="pickerVisible" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker">取消</span> 
                <span class="picker-confirm" @click="closePicker">确定</span>
            </div>
            <mt-picker :slots="slotArr" @change="onPickerChange" :visible-item-count="5"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import {popup,picker } from 'mint-ui';
export default {
    name: "dirCharge",
    data() {
        return {
            isShowMember:true,
            pickerVisible:false,
            slotArr:[{
              values: ['超值折扣卡','黄金储值卡','白金优惠卡']
            }],
            cardName:'选择优惠',
        };
    },
    methods: {
        toMemberSearch(){
            this.$router.push('/memberSearch');
        },
        toMemberCard(){
            this.$router.push('/memberCard');
        },
        toMemberInfo(){
            this.$router.push('/memberInfo');
        },
        closePicker(){
            this.pickerVisible = false;
        },
        onPickerChange(picker,values){
            this.cardName = values[0];
        },
        toPath(str){
            this.$router.push(str);
        },
        showCard(){
            this.pickerVisible=true;
        },
        selectCard(item){
            this.cardName = item;
            this.pickerVisible=false;
        }
    },
    computed: {

    },
    created() {
        document.title="直接收款";
    },
    mounted(){

    }
};
</script>

<style scoped>
.main{height: 100%;}
.list{padding-bottom: 1rem;/*transition: all .3s ease;*/}
.toper{height: 1.10rem;background: #f6f6f6;;width: 100%;}
.searchBox{margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.64rem;border-radius: 0.32rem;padding-left: 0.20rem;color: #999;font-size: 0.28rem;}
.content{background: #fff;padding-left: 1.7rem;position: relative;overflow: auto;}
.userInfo{padding:0.16rem 0.24rem; border-radius: 0.20rem;background-color: #fff}
.userInfo img{width: 0.72rem; height: 0.72rem;border-radius: 50%;}
.userbtn{background-color: #ff6000;color: #fff;width:1.6rem;height: 0.50rem;border-radius: 0.30rem;font-size: 0.24rem;}
.orderInfo{background-color: #fff; border-radius: 0.10rem}
.item input{height: 0.60rem;font-size: 0.28rem;margin-left: 0.10rem;color: #ff6000}
.orderInfo .item{height: 1rem;}
.mr05{margin-right: 0.10rem;}
</style>