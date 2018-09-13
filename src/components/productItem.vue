<template>
    <li class="ub item bbc ub-ac ub-pj">
        <img src="../assets/default.png" class="udb">
        <div class="ub-f1 msg">
            <p class="tit">{{productInfo.name}}</p>
            <p class="desc">{{productInfo.desc}}</p>
            <p class="price">￥{{productInfo.price}}</p>
        </div>
        <div class="ctrl ub">
            <i v-if="isShow" class="icon_del" @click="delOne"></i>
            <i v-if="isShow" class="book_num">{{productInfo.count}}</i>
            <i class="icon_add" @click="addOne"></i>
        </div>
    </li>
</template>

<script>
export default {
    props: ['productInfo','updateCount'],
    data () {
        return {
            isShow:false,
        }
    },
    watch:{
        "productInfo.count": function toggle(){
            if(this.productInfo.count==0){
                this.isShow = false;
            }
        }
    },
    methods:{
        initShow(){
            if(this.productInfo.count==0){
                this.isShow = false;
            }
        },
        delOne(){
            if(this.productInfo.count>0){
                this.productInfo.count--;
            }
            if(this.productInfo.count==0){
                this.isShow = false;
            }
            this.$emit('updateCount',null);
        },
        addOne(){
            this.productInfo.count++;
            if(this.productInfo.count>0){
                this.isShow = true;
            }
            this.$emit('updateCount',null);
        }
    }
}
</script>

<style scoped>
.item{height: 2.6rem;position: relative;}
.item img{width: 1.6rem;height: 1.6rem;}
.item div.msg{margin-left: 0.20rem}
.item div.msg p.tit{font-size: 0.30rem;color: #000;margin-top: 0.20rem}
.item div.msg p.desc{font-size: 0.26rem;color: #666;}
.item div.msg p.price{font-size: 0.34rem;color: #ff6600;margin-top: 0.20rem}
.item div.ctrl{width: 1.6rem;margin-right:0.30rem;-webkit-justify-content: flex-end; justify-content: flex-end;}
.icon_del{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_del.png);background-size: 100% 100%;display:block;}
.icon_add{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_add.png);background-size: 100% 100%;display:block;}
.book_num{width: 0.48rem;height: 0.40rem;text-align: center;font-size: 0.28rem;display: block;}
</style>
