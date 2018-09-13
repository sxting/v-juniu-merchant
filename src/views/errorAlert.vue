<!-- 主页view -->
<template>
    <div class="main">
        <div class="item bgb">
            <img src="../assets/icon_fail.png" class="udb mato" width="60" height="60">
            <p class="mt20">对不起！此功能目前只向桔牛系统用户及所属门店的店长与员工开放访问！</p>
            <a class="mt10" href="javascript:" @click="toPath('/bindAccount')">我是系统用户，点击绑定账号</a>
        </div>
        <div class="item bgb">
            <p>桔牛系统是您最贴心的门店管家，可以帮您管理门店的日常收银、会员管理、预约预定、商品营销,更能帮您对接第三方平台引流带顾客，打通微信支付宝和新美大，一个系统管理线上线下所有生意。</p>
            <p class="mt05">了解更多信息请登录桔牛官网，桔牛大家庭期待您的加入！</p>
            <a class="mt10" href="http://www.juniuo.com">www.juniuo.com</a>
        </div>
    </div>
</template>




<script>
export default {
    name: "selectSells",
    data() {
        return {

        };
    },
    methods: {
        toPath(str){
            this.$router.replace(str);
        }
    },
    created() {
        document.title = '提示';
    }
};
</script>

<style scoped>
.main {height: 100%;padding: 0.30rem;position: relative;}
.item{padding: 0.60rem 0.40rem 0.44rem;margin-bottom: 0.30rem;border-radius: 0.12rem;overflow: hidden;}
.item p{line-height: 0.44rem;font-size: 0.24rem;}
.item a{display:inline-block;line-height: 0.50rem;font-size: 0.24rem;color: #ff6000;border-bottom: 1px #ff6000 solid;}
</style>
