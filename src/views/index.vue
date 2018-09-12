<template>
    <div id="index">
        <div class="index_main">
            <!-- <transition name="fade"> -->
            <router-view></router-view>
            <!-- </transition> -->
        </div>
        <div class="index_footer ub ub-ac">
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(1,'home')">
                <span class="icon icon_index1" :class="{'active':curActiveIndex==1}"></span>
                <p class="tx-c">工作</p>
            </li>
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(2,'records')">
                <span class="icon icon_index2"></span>
                <p class="tx-c">业绩</p>
            </li>
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(3,'my')">
                <span class="icon icon_index3" :class="{'active':curActiveIndex==3}"></span>
                <p class="tx-c">我的</p>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            curActiveIndex: sessionStorage.navIndex||1
        };
    },
    methods: {
        toHome(index,str) {
            this.curActiveIndex = index;
            sessionStorage.navIndex = index;
            this.$router.push(str);
        },
    }
};

</script>

<style scoped>
#index {width: 100%;height: 100%;display: flex;flex-direction: column;background: #f5f5f5;}
.index_main {position: absolute;top: 0;left: 0;bottom: 1.04rem;width: 100%;}
.index_footer {width: 100%;position: fixed;left: 0;bottom: 0;height: 1.02rem;background: #fff;z-index: 999;-webkit-box-shadow: 0 -5px 10px #dbdcdd; box-shadow: 0 -5px 10px #dbdcdd;}
.index_footer p{color: #333;font-size: 0.24rem;}
.index_footer .active + p{color: #ff6000}
.icon{width: 0.40rem;height: 0.40rem;background: #666;display: block;margin: 0 auto;}
.icon_index1{background: url(../assets/icon_index1.png) no-repeat center center;background-size: contain;}
.icon_index2{background: url(../assets/icon_index2.png) no-repeat center center;background-size: contain;}
.icon_index3{background: url(../assets/icon_index3.png) no-repeat center center;background-size: contain;}
.icon_index3.active{background: url(../assets/icon_index3_on.png) no-repeat center center;background-size: contain;}
</style>