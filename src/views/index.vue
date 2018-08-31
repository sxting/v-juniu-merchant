<!-- 主页view -->
<template>
    <div id="index">
        <div class="index_main">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <div class="index_footer ub ub-ac">
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(1,'home')">
                <span class="icon_home icon_home1" :class="{'active':curActiveIndex==1}"></span>
                <p class="tx-c">工作</p>
            </li>
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(2,'records')">
                <span class="icon_home icon_home2" :class="{'active':curActiveIndex==2}"></span>
                <p class="tx-c">业绩</p>
            </li>
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(3,'my')">
                <span class="icon_home icon_home3" :class="{'active':curActiveIndex==3}"></span>
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
            curActiveIndex: 1
        };
    },
    methods: {
        toHome(index,str) {
            this.curActiveIndex=index;
            this.$router.push(str);
        },
    },
    created() {

    }
};

</script>

<style scope>
#index {width: 100%;height: 100%;display: flex;flex-direction: column;background: #f5f5f5;}
.index_main {position: absolute;top: 0;left: 0;bottom: 1.04rem;width: 100%;}
.index_footer {width: 100%;position: fixed;left: 0;bottom: 0;height: 1.52rem;background: #ffffff;box-shadow: 0 -5px 10px #dbdcp;z-index: 999;}
.index_footer p{color: #333;font-size: 0.24rem;}
.icon_home{width: 0.32rem;height: 0.32rem;background: #666;display: block;margin: 0 auto;}
.icon_home1.active + p{color: #f22}
.icon_home2.active + p{color: #f22}
.icon_home3.active + p{color: #f22}
</style>