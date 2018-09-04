<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div class="searchBox ub-f1"><i class="icon icon_search"></i><input type="text" placeholder="会员查询"></div>
            <div class="openMember ub ub-ver ub-pc"><i class="icon icon_member"></i><p class="tx-c" @click="">开通会员</p></div>
            <div class="openMore ub ub-ver ub-pc"><i class="icon icon_more"></i><p class="tx-c">更多</p></div>
        </div>
        <div class="content" @scroll="handleScroll" ref="productDiv">
            <ul class="sidebar">
                <li :class="{'on':curTab==1}">项目1</li>
                <li :class="{'on':curTab==2}">项目2</li>
                <li :class="{'on':curTab==3}">项目3</li>
            </ul>
            <ul class="list">
                <!-- <li class="ub item bbc ub-ac">
                    <img src="../assets/user.png" class="udb">
                    <div class="ub-f1 msg">
                        <p class="tit">名称名称名称名称名称</p>
                        <p class="desc">001</p>
                        <p class="price">￥200</p>
                    </div>
                    <div class="ctrl ub">
                        <i class="icon_del" @click="delOne"></i><i class="book_num">{{bookNum}}</i><i class="icon_add" @click="addOne"></i>
                    </div>
                </li> -->
                <productItem v-for="(item,index) in productList" :productInfo="item" :key="index" @updateCount="updateCount"></productItem>
            </ul>
        </div>
        <div class="modal" v-show="isShowBus">
            <div class="goodBusList" v-if="productCount>0">
                <productBusItem v-for="(item,index) in productList" :productInfo="item" :key="index" v-if="item.count>0" @updateCount="updateCount"></productBusItem>
            </div>
            <div class="noGood" v-if="productCount==0" @click="closeModal()">
                您还没选择产品
            </div>
        </div>
        <div class="foot ub">
            <div class="icon_goodbus" @click="openBookList"></div>
            <div class="ub-f1 selected ub ub-ac ub-pc" @click="openBookList">已选择{{productCount}}款产品<i class="arrow-right"></i></div>
            <button :disabled="isDisabled" type="button">下一步</button>
        </div>
    </div>
</template>

<script>
import productItem from '@/components/productItem.vue'; 
import productBusItem from '@/components/productBusItem.vue';
export default {
    name: "charge",
    data() {
        return {
            curTab:1,
            isDisabled:true,
            bookNum:0,
            box:null,
            isShowBus:false,
            bookNum:[0,0,0],
            productCount:0,
            productList:[{
                id:"1111",
                type:'1',
                name:"名字1",
                price:"100",
                desc:"111111111111",
                count:0
            },{
                id:"2222",
                type:'1',
                name:"名字2",
                price:"100",
                desc:"222222222222",
                count:0
            },{
                id:"3333",
                type:'1',
                name:"名字3",
                price:"100",
                desc:"333333333333",
                count:0
            },{
                id:"1111",
                type:'2',
                name:"名字4",
                price:"100",
                desc:"111111111111",
                count:0
            },{
                id:"2222",
                type:'2',
                name:"名字5",
                price:"100",
                desc:"222222222222",
                count:0
            },{
                id:"3333",
                type:'2',
                name:"名字6",
                price:"100",
                desc:"333333333333",
                count:0
            },{
                id:"1111",
                type:'3',
                name:"名字7",
                price:"100",
                desc:"111111111111",
                count:0
            },{
                id:"2222",
                type:'3',
                name:"名字8",
                price:"100",
                desc:"222222222222",
                count:0
            },{
                id:"3333",
                type:'3',
                name:"名字9",
                price:"100",
                desc:"333333333333",
                count:0
            },{
                id:"1111",
                type:'4',
                name:"名字10",
                price:"100",
                desc:"111111111111",
                count:0
            },{
                id:"2222",
                type:'4',
                name:"名字11",
                price:"100",
                desc:"222222222222",
                count:0
            },{
                id:"3333",
                type:'4',
                name:"名字12",
                price:"100",
                desc:"333333333333",
                count:0
            }],
            goodBusList:[]
        };
    },
    components: {productItem,productBusItem},
    methods: {
        updateCount(){
            var productList = this.productList;
            this.productCount = 0;
            for(var i=0;i<productList.length;i++){
                if(productList[i].count>0){
                    this.productCount++;
                }
            }
            this.isDisabled = !Boolean(this.productCount);
        },
        handleScroll(){
            var list = this.$refs.productDiv;
            var listHeight = list.scrollHeight;
            var len = this.productList.length;
            var roundHeight = parseInt(listHeight/len);
            var curIndex = Math.floor(list.scrollTop/roundHeight);
            this.curTab = parseInt(this.productList[curIndex].type)
        },
        openBookList(){
            this.isShowBus = !this.isShowBus;
        },
        closeModal(){
            this.isShowBus = false;
        }
    },
    computed: {

    },
    created() {
        document.title="收银";
    },
    mounted(){

    }
};
</script>

<style scoped>
.main{background: #fff;height: 100%;padding-top: 1.12rem;}
.list{padding-bottom: 1rem;}
.toper{height: 1.12rem;background: #f6f6f6;;width: 100%;position: fixed;top: 0;left: 0;}
.toper .icon + p{font-size: 0.14rem;}
.searchBox{padding-left: 0.60rem;margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.60rem;border-radius: 0.30rem}
.searchBox input{width: 100%;height: 0.60rem;line-height: 0.60rem}
.icon{display:inline-block;}
.icon_search{position: absolute;top: 0.15rem;left: 0.14rem;width: 0.26rem;height: 0.29rem;background: url(../assets/icon_search.png) no-repeat center;background-size: 100% 100%;}
.icon_member{width: 0.30rem;height: 0.28rem;background: url(../assets/icon_member.png) no-repeat center;background-size: 100% 100%;}
.icon_more{width: 0.28rem;height: 0.28rem;background: url(../assets/icon_more.png) no-repeat center;background-size: 100% 100%;}
.openMember{width: 1rem}.openMore{width: 0.80rem;}
.icon_member,.icon_more{margin: 0 auto}
.content{background: #fff;padding-left: 1.7rem;position: relative;height: 100%;overflow: auto;}
.sidebar{width: 1.5rem;position: fixed;top: 1.12rem;left: 0;background: #f6f6f6}
.sidebar li{height: 0.80rem;padding-left: 0.30rem;font-size: 0.28rem;color: #333;line-height: 0.80rem;font-size: 0.26rem}
.sidebar li.on{background-color: #fff}
.foot{height: 1rem;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 10000}
.foot .selected{background-color: rgba(0,0,0,.8);line-height: 1rem;text-align: center;color: #fff;font-size: 0.28rem}
.foot button{background-color: #ff6600;font-size: 0.28rem;line-height: 1rem;width: 2.0rem;text-align: center;color: #fff;}
.foot button:disabled{background-color: #808080}
.icon_goodbus{width: 1.05rem;height: 1.05rem;background: #666666 url(../assets/icon_goodbus.png) no-repeat center center;position: absolute;top: -0.5rem;left: 0.4rem;border-radius: 50%;background-size: 50% 50%;z-index: 9999}

.modal{width: 100%;height: 100%;background-color: rgba(51,51,51,0.5);position: fixed;left: 0;top: 0;z-index: 9999}
.goodBusList{background-color: #fff;position: fixed;bottom:1rem;left: 0;width: 100%;border-radius: 0.20rem 0.20rem 0 0;padding-bottom: 0.6rem}
.noGood{height: 1.8rem;line-height: 1.8rem;text-align: center;background-color: #fff;position: fixed;bottom:1rem;left: 0;width: 100%;border-radius: 0.20rem 0.20rem 0 0;padding-bottom: 0.6rem}
</style>
