<!-- 主页view -->
<template>
    <div class="main">
        <div class="item">
            <div class="tit ub ub-ac bbc">店铺1</div>
            <div class="address ub ub-ac">
                <div class="ub-f1">
                    <p class="f14 bc">店铺名称</p>
                    <p class="f12 bc1 ub ub-ac"><i class="uds icon_local"></i>店铺地址</p>
                </div>
                <div class="btn" @click="toPath('/home')">工作</div>
            </div>
        </div>
        <div class="item">
            <div class="tit ub ub-ac bbc">店铺2</div>
            <div class="address ub ub-ac">
                <div class="ub-f1">
                    <p class="f14 bc">店铺名称</p>
                    <p class="f12 bc1 ub ub-ac"><i class="uds icon_local"></i>店铺地址</p>
                </div>
                <div class="btn" @click="toPath('/home')">工作</div>
            </div>
        </div>
        <div class="item">
            <div class="tit ub ub-ac bbc">店铺3</div>
            <div class="address ub ub-ac">
                <div class="ub-f1">
                    <p class="f14 bc">店铺名称</p>
                    <p class="f12 bc1 ub ub-ac"><i class="uds icon_local"></i>店铺地址</p>
                </div>
                <div class="btn" @click="toPath('/home')">工作</div>
            </div>
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
            this.$router.push(str);
        }
    },
    created() {
        document.title = '选择门店';
    }
};

</script>

<style scoped>
.main {height: 100%;padding: 0.30rem;position: relative;}
.item{background: #fff;margin-bottom: 0.40rem;}
.tit{height:1.18rem;font-size: 0.44rem;color: #000;padding-left: 0.24rem}
.address{padding:0.24rem 0.24rem; }
.btn{width: 1.2rem;height: 0.5rem;line-height: 0.5rem;text-align: center;background: #ff6000;color: #fff;font-size: 0.24rem;border-radius: 0.08rem}
.icon_local{width: 0.30rem;height: 0.30rem;background: url(../assets/icon_local.png) no-repeat center center;background-size: contain;margin-right: 0.08rem}
</style>
