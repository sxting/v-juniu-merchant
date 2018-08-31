<!-- 主页view -->
<template>
    <div id="index">
       工作
    </div>
</template>

<script>

export default {
    name: "App",
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

<style>
#index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
}

.index_main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 1.04rem;
    width: 100%;
}

.index_footer {width: 100%;position: absolute;left: 0;bottom: 0;height: 1.52rem;background: #ffffff;box-shadow: 0 -5px 10px #dbdcp;z-index: 999;}
.index_footer p{color: #333;font-size: 0.24rem;}
.icon_home{width: 0.32rem;height: 0.32rem;background: #666;display: block;}
.icon_home1.active + p{color: #f22}
.icon_home2.active + p{color: #f22}
.icon_home3.active + p{color: #f22}
</style>
