<!-- 主页view -->
<template>
    <div class="main">
        <div class="bar">审美造型龙泽店<i class="iconfont icon-arrow"></i></div>
        <div class="content clearfix">
            <div @click="toPath('/charge')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_mt"></span>
                <p>收银</p>
            </div>
            <div @click="toPath('/hexiao')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
                <span class="icon icon_wx"></span>
                <p>微信核销</p>
            </div>
            <div @click="toPath('/hexiao')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_kb"></span>
                <p>口碑核销</p>
            </div>
            <div @click="toPath('/hexiao')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
                <span class="icon icon_mt"></span>
                <p>美团核销</p>
            </div>
            <div @click="toPath('/booklist')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_yy"></span>
                <p>预约管理</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            width: '',
            height: ''
        };
    },
    methods: {
        slideImgChange(index) {
            this.curIndex = index
        },
        toPath(str){
            this.$router.push(str);
        }
    },
    created() {
        var width = document.body.clientWidth;
        this.width = (width-60)/2+'px';
        this.height = (width-60)/2*28/33+'px';
    }
};

</script>

<style scoped>
.main {height: 100%;padding-left: 20px;padding-right: 20px;}
.icon-arrow::before{transform: rotate(180deg);-webkit-transform: rotate(180deg);}
.bar{height: 1rem;border-radius: 0.20rem;background-color: #fff;text-align: center;line-height: 1rem;margin-top: 0.30rem}
.content{margin-top: 0.30rem}
.ml20{margin-left: 20px;}
.icon{width: 0.80rem;height: 0.80rem}
.icon + p{text-align: center;margin-top: 0.20rem;color: #666;font-size: 0.28rem;}
.icon_sy{background: url(../assets/icon_sy.png) no-repeat center center;background-size: contain;}
.icon_mt{background: url(../assets/icon_mt.png) no-repeat center center;background-size: contain;}
.icon_kb{background: url(../assets/icon_kb.png) no-repeat center center;background-size: contain;}
.icon_yy{background: url(../assets/icon_yy.png) no-repeat center center;background-size: contain;}
.icon_wx{background: url(../assets/icon_wx.png) no-repeat center center;background-size: contain;}
.content .item{width: 50%;float: left; height: 2rem;background-color: #fff;margin-bottom: 0.40rem;border-radius: 0.20rem;}
</style>
