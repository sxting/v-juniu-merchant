<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div class="searchBox ub-f1"><i class="icon icon_search"></i><input type="text" placeholder="会员查询"></div>
            <div class="openMember ub ub-ver ub-pc"><i class="icon icon_member"></i><p class="tx-c">开通会员</p></div>
            <div class="openMore ub ub-ver ub-pc"><i class="icon icon_more"></i><p class="tx-c">更多</p></div>
        </div>
        <div class="content">
            <ul class="sidebar">
                <li class="on">项目</li>
                <li class="">项目</li>
                <li class="">项目</li>
                <li class="">项目</li>
                <li class="">项目</li>
            </ul>
            <ul class="list">
                <li class="ub item bbc ub-ac">
                    <img src="../assets/user.png" class="udb">
                    <div class="ub-f1 msg">
                        <p class="tit">名称名称名称名称名称</p>
                        <p class="desc">001</p>
                        <p class="price">￥200</p>
                    </div>
                    <div class="ctrl ub">
                        <i class="icon_del" @click="delOne"></i><i class="book_num">{{bookNum}}</i><i class="icon_add" @click="addOne"></i>
                    </div>
                </li>
                <li class="ub item bbc ub-ac">
                    <img src="../assets/user.png" class="udb">
                    <div class="ub-f1 msg">
                        <p class="tit">名称名称名称名称名称</p>
                        <p class="desc">001</p>
                        <p class="price">￥200</p>
                    </div>
                    <div class="ctrl ub">
                        <i class="icon_del" @click="delOne"></i><i class="book_num">{{bookNum}}</i><i class="icon_add" @click="addOne"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="modal" v-show="isShowBus" @click="closeModal()">
            <div class="goodBusList">
                <li class="ub ub-ac plr10 bbc">
                    <p class="ub-f1">名称1</p>
                    <p class="price">￥200</p>
                    <div class="ctrl ub">
                        <i class="icon_del" @click="delOne"></i><i class="book_num">{{bookNum}}</i><i class="icon_add" @click="addOne"></i>
                    </div>
                </li>
                <li class="ub ub-ac plr10 bbc">
                    <p class="ub-f1">名称1</p>
                    <p class="price">￥200</p>
                    <div class="ctrl ub">
                        <i class="icon_del" @click="delOne"></i><i class="book_num">{{bookNum}}</i><i class="icon_add" @click="addOne"></i>
                    </div>
                </li>
                <li class="ub ub-ac plr10 bbc">
                    <p class="ub-f1">名称1</p>
                    <p class="price">￥200</p>
                    <div class="ctrl ub">
                        <i class="icon_del" @click="delOne"></i><i class="book_num">{{bookNum}}</i><i class="icon_add" @click="addOne"></i>
                    </div>
                </li>
            </div>
        </div>
        <div class="foot ub">
            <div class="icon_goodbus" @click="openBookList"></div>
            <div class="ub-f1 selected">已选择0款产品 ></div>
            <button :disabled="isDisabled" type="button">下一步</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "charge",
        data() {
            return {
                isDisabled:true,
                bookNum:0,
                isShowBus:false
            };
        },
        components: {},
        methods: {
            delOne(){
                if(this.bookNum>0){
                    this.bookNum--;
                }
            },
            addOne(){
                this.bookNum++;
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
        }
    };
</script>

<style scoped>
.main{background: #fff;padding-top:1.12rem;height: 100%;padding-bottom: 1rem;}
.toper{height: 1.12rem;background: #f6f6f6;position: fixed;top: 0;left: 0;width: 100%;z-index: 999}
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
.sidebar{width: 1.5rem;position: absolute;top: 0;left: 0;background: #f6f6f6}
.sidebar li{height: 0.80rem;padding-left: 0.30rem;font-size: 0.28rem;color: #333;line-height: 0.80rem;font-size: 0.26rem}
.sidebar li.on{background-color: #fff}
.list .item{height: 2rem;position: relative;}
.list .item img{width: 1.6rem;height: 1.6rem;}
.list .item div.msg{margin-left: 0.20rem}
.list .item div.msg p.tit{font-size: 0.24rem;color: #000;}
.list .item div.msg p.desc{font-size: 0.20rem;color: #666;margin-top: 0.20rem;}
.list .item div.msg p.price{font-size: 0.32rem;color: #ff6600;margin-top: 0.20rem}
.list .item div.ctrl{width: 1.6rem;position:absolute;bottom: 0.20rem;right: 0.10rem}
.icon_del{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_del.png);background-size: 100% 100%;display:block;}
.icon_add{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_add.png);background-size: 100% 100%;display:block;}
.book_num{width: 0.48rem;height: 0.48rem;text-align: center;font-size: 0.28rem;display: block;}
.foot{height: 1rem;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 10000}
.foot .selected{background-color: rgba(0,0,0,.8);line-height: 1rem;text-align: center;color: #fff;font-size: 0.28rem}
.foot button{background-color: #ff6600;font-size: 0.28rem;line-height: 1rem;width: 2.0rem;text-align: center;color: #fff;}
.foot button:disabled{background-color: #808080}
.icon_goodbus{width: 1.05rem;height: 1.05rem;background: #666666 url(../assets/icon_goodbus.png) no-repeat center center;position: absolute;top: -0.5rem;left: 0.4rem;border-radius: 50%;background-size: 50% 50%;}

.modal{width: 100%;height: 100%;background-color: rgba(51,51,51,0.5);position: fixed;left: 0;top: 0;z-index: 9999}
.goodBusList{background-color: #fff;position: fixed;bottom:1rem;left: 0;width: 100%;border-radius: 0.20rem 0.20rem 0 0;padding-bottom: 0.6rem}
.goodBusList li{height: 1.0rem}
.goodBusList li .price{width: 1.8rem;margin-left: 0.20rem;}
.goodBusList li .price{width: 1.8rem;margin-left: 0.20rem;}
.goodBusList li .ctrl{width: 1.4rem;}
</style>
