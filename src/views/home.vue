<!-- 主页view -->
<template>
    <div class="main">
        <div class="bar" @click="toPath('/selectSell')">{{sellName}}<i class="iconfont icon-arrow"></i></div>
        <div @click="toPath('/charge')" class="bgb sy_btn mt15 ub ub-ver ub-pc ub-ac" style="width:100%" :style="{height:height}">
            <span class="icon icon_mt"></span>
            <p>收银</p>
        </div>
        <div class="content clearfix">
            <div @click="toPath('/checkOrder')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_wx"></span>
                <p>微信核销</p>
            </div>
            <div @click="toPath('/checkOrder')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
                <span class="icon icon_kb"></span>
                <p>口碑核销</p>
            </div>
            <div @click="toPath('/checkOrder')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_mt"></span>
                <p>美团核销</p>
            </div>
            <div @click="toPath('/booklist')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
                <span class="icon icon_yy"></span>
                <p>预约管理</p>
            </div>
        </div>
        <div class="logo_bg"></div>
    </div>
</template>

<script>
import {popup,picker } from 'mint-ui';
export default {
    name: "home",
    data() {
        return {
            pickerVisible:false,
            sellName:'店铺名称',
            width: '',
            actions:[{
              values: ['店铺1', '店铺2', '店铺3', '店铺4', '店铺5', '店铺6']
            }],
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
        document.title = '工作';
        var width = document.body.clientWidth;
        this.width = (width-60)/2+'px';
        this.height = (width-60)/2*28/33+'px';
    }
};

</script>

<style scoped>
.main {height: 100%;padding-left: 20px;padding-right: 20px;position: relative;}
.logo_bg{background:url(../assets/logo_bg.png) no-repeat center center;height: 0.48rem;width: 100%;position: absolute;z-index: 9;left: 0;bottom: 0.60rem;background-size: contain;}
.sy_btn{position: relative;z-index: 10}
.icon-arrow::before{transform: rotate(180deg);-webkit-transform: rotate(180deg);}
.bar{height: 1rem;border-radius: 0.20rem;background-color: #fff;text-align: center;line-height: 1rem;margin-top: 0.30rem}
.content{margin-top: 0.30rem;position: relative;z-index: 10}
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
