<template>
    <div>
        <!--<div class="plr15 bgb">-->
            <!--<div class="item1 ub ub-pj ub-ac">-->
                <!--<p class="f14 bc">头像</p>-->
                <!--<img src="../../assets/user.png" class="user" />-->
            <!--</div>-->
        <!--</div>-->
        <p class="tit">基本信息</p>
        <div class="plr15 bgb">
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">姓名</p>
                <p class="sc">{{userInfo.staffName}}</p>
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">手机号</p>
                <p class="sc">{{userInfo.loginName}}</p>
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">职位</p>
                <p class="sc">{{userInfo.roleName}}</p>
            </div>
            <div class="item ub ub-pj ub-ac">
                <p class="f14 bc">商家名称</p>
                <p class="sc">{{userInfo.merchantName}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "myInfo",
    data() {
        return {
            userInfo : sessionStorage.getItem('User-Info') ? JSON.parse(sessionStorage.getItem('User-Info')) : '',
        };
    },
    methods: {

    },
    mounted(){

    },
    created() {
        document.title = '个人信息';
    }
};
</script>

<style scoped>
.item{height: 1rem;}
.item1{height: 1.2rem;}
.user{display: block;width: 0.60rem;height: 0.60rem;border-radius: 50%;}
.tit{padding-left: 0.30rem;line-height: 0.72rem;font-size: 0.24rem;color: #666;}
</style>
