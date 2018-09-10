<template>
    <div class="main ub ub-ver">
        <div class="toper ub ub-ac">
            <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac"><i class="icon_search mr05"></i>会员查询</div>
            <div @click="toPath('/addMember')" class="openMember tx-c"><i class="icon_member"></i><p class="tx-c f12">开通会员</p></div>
        </div>
        <div class="plr15">
            <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
                <img src="../assets/user.png" class="udb bac" @click="toMemberInfo">
                <div class="ub-f1 ml10">
                    <p class="f12 bc1 ub ub-ac">王云鹏<i class="icon_male ml05"></i><i class="icon_card ml10"></i></p>
                    <p class="f12 mt05">10000000000</p>
                </div>
                <div class="userbtn" @click="toMemberCard">售卡/充值</div>
            </div>
            <div class="orderInfo mt10">
                <div class="item bbc ub ub-ac">
                    <p class="ub-f1 sc f13">请输入结算金额</p><input type="text"><p class="f13 rc">元</p>
                </div>
                <div v-if="isShowMember" class="item ub ub-ac">
                    <p class="ub-f1">选择扣卡</p><p class="f13 rc mr05">-￥13.00</p><p class="bc">黄金储值卡</p><i class="arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "dirCharge",
    data() {
        return {
            isDisabled:true,
            isShowMember:true,
            isShowBus:false,
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
        toPath(str){
            this.$router.push(str);
        }
    },
    computed: {

    },
    created() {
        document.title="快速收款";
    },
    mounted(){

    }
};
</script>

<style scoped>
.main{height: 100%;}
.list{padding-bottom: 1rem;/*transition: all .3s ease;*/}
.toper{height: 1.12rem;background: #f6f6f6;;width: 100%;}
.searchBox{margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.64rem;border-radius: 0.32rem;padding-left: 0.20rem;color: #999;font-size: 0.28rem;}
.content{background: #fff;padding-left: 1.7rem;position: relative;overflow: auto;}
.userInfo{padding:0.16rem 0.24rem; border-radius: 0.20rem;background-color: #fff}
.userInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.userbtn{background-color: #ff6000;color: #fff;width:1.6rem;height: 0.50rem;border-radius: 0.30rem;font-size: 0.24rem;text-align: center;line-height: 0.46rem;}
.orderInfo{background-color: #fff; border-radius: 0.10rem}
.item input{height: 0.60rem;border-bottom: 1px #ff6000 solid;width: 1rem}
.orderInfo .item{padding-left: 0.20rem;padding-right: 0.20rem;height: 0.96rem;}
.mr05{margin-right: 0.10rem;}
</style>