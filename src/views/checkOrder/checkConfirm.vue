<template>
    <div class="main">
        <!--<div class="item1 ub ub-ac plr15">-->
            <!--<p class="ub-f1">用户名</p>-->
            <!--<img src="../../assets/user.png" class="user"/>-->
            <!--<p class="ml05">帝格(15201375235)</p>-->
        <!--</div>-->
        <div v-if="type === 'koubei' || type === 'meituan'">
            <p class="tit">本次核销信息</p>
            <div class="plr15 bgb">
                <div class="item bbc ub ub-ac ub-pj">
                    <p class="bc">商品名称</p>
                    <p class="bc">商品名称</p>
                </div>
                <div class="item bbc ub ub-ac ub-pj">
                    <p class="bc">商品价格</p>
                    <p class="rc">￥20</p>
                </div>
                <div class="item bbc ub ub-ac ub-pj">
                    <p class="bc">截至有效期</p>
                    <p class="bc">2018-09-08</p>
                </div>
                <div class="item ub ub-ac ub-pj" v-if="">
                    <p class="bc">选择本次核销份数</p>
                    <p class="ub ub-ac numBox">
                        <span @click="delOne" class="ctlbtn"><i class="icon-del sc iconfont"></i></span>
                        <i class="number btbc">{{bookNum}}</i>
                        <span @click="addOne" class="ctlbtn"><i class="icon-add sc iconfont"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="tit">添加服务技师</p>
            <div class="plr15 bgb">
                <div class="item bbc ub ub-ac ub-pj" @click="openPicker1">
                    <p class="bc ub-f1">添加技师</p>
                    <p class="bc">{{name1}}</p>
                    <span class="arrow-down"></span>
                </div>
                <div class="item ub ub-ac ub-pj" @click="openPicker2">
                    <p class="bc ub-f1">添加小工</p>
                    <p class="bc">{{name2}}</p>
                    <span class="arrow-down"></span>
                </div>
            </div>
        </div>
        <div class="mt40 plr15">
            <div class="btn_common" @click="submit">确认核销</div>
        </div>
        <mt-popup v-model="pickerVisible1" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker1">取消</span> 
                <span class="picker-confirm" @click="closePicker1">确定</span>
            </div>
            <mt-picker :slots="actions1" @change="onPickerChange1" :visible-item-count="5"></mt-picker>
        </mt-popup>
        <mt-popup v-model="pickerVisible2" position="bottom" class="w_100">
            <div class="picker-toolbar bbc">
                <span class="picker-cancel" @click="closePicker2">取消</span> 
                <span class="picker-confirm" @click="closePicker2">确定</span>
            </div>
            <mt-picker :slots="actions2" @change="onPickerChange2" :visible-item-count="5"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import {popup,picker } from 'mint-ui';
export default {
    name: "checkConfirm",
    data() {
        return {
            pickerVisible1:false,
            pickerVisible2:false,
            actions1:[{
              values: ['技师1', '技师2', '技师3', '技师4', '技师5', '技师6']
            }],
            actions2:[{
              values: ['技师1', '技师2', '技师3', '技师4', '技师5', '技师6']
            }],
            name1:'请添加技师',
            name2:'请添加小工',
            bookNum:1,
            isShowMember:false,
            type: ''
        };
    },
    components: {},
    methods: {
        openPicker1(){
            this.pickerVisible1 = true;
        },
        openPicker2(){
            this.pickerVisible2 = true;
        },
        closePicker1(){
            this.pickerVisible1 = false;
        },
        closePicker2(){
            this.pickerVisible2 = false;
        },
        onPickerChange1(picker,values){
            // this.name1 = values[0];
        },
        onPickerChange2(picker,values){
            // this.name2 = values[0];
        },
        addOne(){
            this.bookNum++;
        },
        delOne(){
            if(this.bookNum>0)
            this.bookNum--;
        },
        submit(){
            this.$router.push('/checkSuccess');
        }
    },
    mounted() {

    },
    created() {
        document.title="确认核销";
        this.type = this.$route.params.type
    }
};
</script>

<style scoped>
.main{height: 100%;overflow: auto}
.toper{padding: 0.8rem 0 0.50rem;background-color: #fff}
.tit{padding-left: 0.30rem;line-height: 0.60rem;font-size: 0.28rem;color: #666;font-size: 0.24rem;}
.btn{width: 2.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#999;border-radius: 0.10rem;border:1px #eee solid;}
.user{width: 0.60rem; height: 0.60rem;border-radius: 50%;margin-right: 0.08rem;}
.mr20{margin-right: 0.40rem;}
.h50{height: 1.0rem;}
.btn_back{background:#fff;height: 0.88rem;color: #ff6000;font-size: 0.32rem;border-radius: 0.10rem;border:1px #ff6000 solid;}
.btn_print{background:#FF6000;height: 0.88rem;color: #fff;font-size: 0.32rem;border-radius: 0.10rem;}
.ml05{margin-left: 0.10rem}
.item{height: 1rem;}
.item1{height: 1rem;background-color: #fff}
.numBox .ctlbtn{width: 0.56rem;height:0.48rem;line-height: 0.48rem;background-color: #eee;text-align: center;}
.numBox .number{width: 0.60rem;height:0.48rem;line-height: 0.48rem;background-color: #fff;text-align: center;}
</style>
