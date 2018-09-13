<template>
    <div class="main ub ub-ver">
        <div class="toper ub ub-ac">
            <div @click="toMemberSearch" class="searchBox ub-f1 ub ub-ac"><i class="icon_search mr05"></i>会员查询</div>
            <div class="openMember tx-c" @click="toPath('/addMember')"><i class="icon_member"></i><p class="tx-c f12">开通会员</p></div>
            <div class="openMore tx-c mr05" @click="showMenu"><i class="icon_more"></i><p class="tx-c f12">更多</p></div>
        </div>
        <div class="modal1" v-show="isShowMenu">
            <div class="mask1" @click="closeModal1()"></div>
            <div class="arrow-up"></div>
            <ul class="menu">
                <li class="ub ub-ac ub-pc bbc" @click="toPath('/orderList')"><span class="icon_orderlist"></span>历史订单</li>
                <li class="ub ub-ac ub-pc" @click="toPath('/dirCharge')"><span class="icon_sk"></span>直接收款</li>
            </ul>
        </div>
        <div class="ub ub-ac userInfo plr10" v-if="isShowMember">
            <img src="../assets/my.png" class="udb bac" @click="toMemberInfo">
            <div class="ub-f1 ml10" @click="toMemberInfo">
                <p class="f12 bc1 ub ub-ac">王云鹏<i class="icon_male ml05"></i><i class="icon_card ml10"></i></p>
                <p class="f12 mt05 bc1">15011111111</p>
            </div>
            <div class="userbtn btn_vc" @click="toMemberCard">售卡/充值</div>
        </div>
        <div class="content ub-f1 ub">
            <ul class="sidebar">
                <li v-for="(item,index) in tabList" :class="{'on':curTabindex==index}" @click="moveTop(index)">{{item}}</li>
            </ul>
            <div class="ub-f1 h100" ref="productDiv" @scroll="handleScroll">
                <productItem class="d_jump" v-for="(item,index) in productList" :productInfo="item" :key="index" @updateCount="updateCount"></productItem>
            </div>
        </div>
        <div class="modal2" v-show="isShowBus&&productCount>0">
            <div class="mask2" @click="closeModal2()"></div>
            <div class="goodBusList plr10">
                <productBusItem v-for="(item,index) in productList" :productInfo="item" :key="index" v-if="item.count>0" @updateCount="updateCount"></productBusItem>
            </div>
        </div>
        <div class="foot ub">
            <div class="icon_goodbus" :class="{'on':productCount>0}" @click="openBookList"><div class="icon_num" v-show="productCount>0">{{productCount}}</div></div>
            <div class="ub-f1 selected ub ub-ac ub-pc" @click="openBookList">已选择{{productCount}}款产品<i :class="{'ion_down':isShowBus,'ion_up':!isShowBus}" v-show="productCount>0"></i></div>
            <button :disabled="isDisabled" type="button" @click="toOrder">下一步</button>
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
            isDisabled:true,
            isShowMember:true,
            bookNum:0,
            box:null,
            isShowBus:false,
            bookNum:[0,0,0],
            productCount:0,
            isShowMenu:false,
            tabList:['项目1','项目2','项目3','项目4'],
            curTabindex:0,
            productList:[{
                id:"1111",
                type:'0',
                name:"名字1",
                price:"100",
                desc:"编号1",
                count:0
            },{
                id:"2222",
                type:'0',
                name:"名字2",
                price:"100",
                desc:"编号2",
                count:0
            },{
                id:"3333",
                type:'0',
                name:"名字3",
                price:"100",
                desc:"编号3",
                count:0
            },{
                id:"1111",
                type:'1',
                name:"名字4",
                price:"100",
                desc:"编号1",
                count:0
            },{
                id:"2222",
                type:'1',
                name:"名字5",
                price:"100",
                desc:"编号2",
                count:0
            },{
                id:"3333",
                type:'1',
                name:"名字6",
                price:"100",
                desc:"编号3",
                count:0
            },{
                id:"1111",
                type:'2',
                name:"名字7",
                price:"100",
                desc:"编号1",
                count:0
            },{
                id:"2222",
                type:'2',
                name:"名字8",
                price:"100",
                desc:"编号2",
                count:0
            },{
                id:"3333",
                type:'2',
                name:"名字9",
                price:"100",
                desc:"编号3",
                count:0
            },{
                id:"1111",
                type:'3',
                name:"名字10",
                price:"100",
                desc:"编号1",
                count:0
            },{
                id:"2222",
                type:'3',
                name:"名字11",
                price:"100",
                desc:"编号2",
                count:0
            },{
                id:"3333",
                type:'3',
                name:"名字12",
                price:"100",
                desc:"编号3",
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
            if(this.productCount==0){this.isShowBus = false;}
            this.isDisabled = !Boolean(this.productCount);
        },
        showMenu(){
            this.isShowMenu = !Boolean(this.isShowMenu);
        },
        toMemberInfo(){
            this.$router.push('/memberInfo');
        },
        toOrder(){
            this.$router.push('/order');
        },
        toMemberCard(){
            this.$router.push('/memberCard');
        },
        toMemberSearch(){
            this.$router.push('/memberSearch');
        },
        handleScroll(){
            var list = this.$refs.productDiv;
            var listHeight = list.scrollHeight;
            var len = this.productList.length;
            var roundHeight = parseInt(listHeight/len);
            var curIndex = Math.floor(list.scrollTop/roundHeight);
            this.curTabindex = parseInt(this.productList[curIndex].type);
        },
        moveTop(index) {
            this.curTabindex = index;
            let jump = document.querySelectorAll('.d_jump');
            let total = jump[index].offsetTop
            let distance = this.$refs.productDiv.scrollTop;
            // 平滑滚动，时长500ms，每10ms一跳，共50跳
            let step = total / 50;
            if (total > distance) {
              smoothDown();
            } else {
              let newTotal = distance - total;
              step = newTotal / 50;
              smoothUp();
            }
            function smoothDown () {
              if (distance < total) {
                distance += step;
        　　　　this.$refs.productDiv.scrollTop = distance;
                setTimeout(smoothDown, 10);
              } else {
                this.$refs.productDiv.scrollTop = total;
              }
            }
            function smoothUp () {
              if (distance > total) {
                distance -= step;
　　　　　　　  this.$refs.productDiv.scrollTop = distance;
                setTimeout(smoothUp, 10);
              } else {
                this.$refs.productDiv.scrollTop = total;
              }
           } 
        },
        openBookList(){
            if(this.productCount==0){return}
            this.isShowBus = !this.isShowBus;
        },
        closeModal1(){
            this.isShowMenu = false;
        },
        closeModal2(){
            this.isShowBus = false;
        },
        toPath(str){
            this.$router.push(str);
        }
    },
    created() {
        document.title="收银";
    },
    mounted(){

    }
};
</script>

<style scoped>
.main{height: 100%;}
.toper{height: 1.10rem;background: #f2f2f2;;width: 100%;}
.searchBox{margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.64rem;border-radius: 0.32rem;padding-left: 0.20rem;color: #999;font-size: 0.28rem;}

.arrow-up{width:0;height:0;border-left:0.2rem solid transparent;border-right:0.2rem solid transparent;border-bottom:0.2rem solid #fff;position:absolute;top:1.06rem;right:0.3rem;z-index: 9999999}
.menu{width: 2.2rem;background-color: #fff;border-radius: 0.10rem;position: absolute;top: 1.2rem;right: 0.10rem;z-index: 9999999}
.menu li{text-align: center;line-height: 1.07rem}
.icon_sk{display:inline-block;width: 0.30rem;height: 0.34rem;background: url(../assets/icon_sk.png) no-repeat center center;background-size: contain;margin-right: 0.20rem}
.icon_orderlist{display:inline-block;width: 0.24rem;height: 0.34rem;background: url(../assets/icon_orderlist.png) no-repeat center center;background-size: contain;margin-right: 0.20rem}

.content{background: #fff;position: relative;overflow: auto;}
.sidebar{width: 1.5rem;margin-right: 0.20rem;}
.sidebar li{height: 1.00rem;padding-left: 0.30rem;font-size: 0.28rem;background: #f2f2f2;line-height: 1.00rem;font-size: 0.26rem;color: #666;}
.sidebar li.on{background-color: #fff;height: 1.2rem;line-height: 1.2rem;color: #333}
.foot{height: 1rem;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 10000}
.foot .selected{background-color: rgba(0,0,0,.8);line-height: 1rem;text-align: center;color: #fff;font-size: 0.28rem}
.foot button{background: linear-gradient(to right,#FF5000,#FF8000);font-size: 0.28rem;line-height: 1rem;width: 2.0rem;text-align: center;color: #fff;}
.foot button:disabled{background: #808080}
.icon_goodbus{width: 1.05rem;height: 1.05rem;background: #666666 url(../assets/icon_goodbus.png) no-repeat center center;position: absolute;top: -0.4rem;left: 0.4rem;border-radius: 50%;background-size: 50% 50%;z-index: 9999}
.icon_goodbus.on{background-color: #ff8000}
.icon_num{width: 0.40rem;height: 0.40rem;text-align: center;line-height: 0.40rem;position: absolute;top: -0.05rem;right: -0.05rem;background-color: #fd4f00;border-radius: 50%;color: #fff;font-size: .24rem}
.modal1{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 10002}
.modal1 .mask1{background-color: rgba(51,51,51,0.5);position: absolute;width: 100%;height: 100%;left: 0;top: 0;z-index: 10001}
.modal2{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 9999}
.modal2 .mask2{background-color: rgba(51,51,51,0.5);position: absolute;width: 100%;height: 100%;left: 0;top: 0;}
.goodBusList{background-color: #fff;position: fixed;bottom:1rem;left: 0;width: 100%;border-radius: 0.20rem 0.20rem 0 0;padding-bottom: 0.6rem}
.noGood{height: 1.8rem;line-height: 1.8rem;text-align: center;background-color: #fff;position: fixed;bottom:1rem;left: 0;width: 100%;border-radius: 0.20rem 0.20rem 0 0;padding-bottom: 0.6rem}
.ion_up{display: inline-block;width: 0.26rem;height: 0.12rem;background: url(../assets/ion_up.png) no-repeat center center;background-size:100% 100%;margin-left: 0.10rem}
.ion_down{display: inline-block;width: 0.26rem;height: 0.12rem;background: url(../assets/ion_down.png) no-repeat center center;background-size:100% 100%;margin-left: 0.10rem}

.userInfo{padding:0 0.24rem 0.16rem; border-radius: 0.20rem;margin-top: 0.10rem;}
.userInfo img{width: 0.72rem; height: 0.72rem;border-radius: 0.30rem;}
.userbtn{background-color: #ff6000;color: #fff;width:1.6rem;height: 0.50rem;border-radius: 0.30rem;font-size: 0.24rem;}
.h100{height: 100%;overflow: scroll;}
</style>
