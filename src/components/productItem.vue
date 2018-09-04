<template>
    <li class="ub item bbc ub-ac">
        <img src="../assets/user.png" class="udb">
        <div class="ub-f1 msg">
            <p class="tit">{{productInfo.name}}</p>
            <p class="desc">{{productInfo.desc}}</p>
            <p class="price">￥{{productInfo.price}}</p>
        </div>
        <div class="ctrl ub">
            <i class="icon_del" @click="delOne"></i><i class="book_num">{{productInfo.count}}</i><i class="icon_add" @click="addOne"></i>
        </div>
    </li>
</template>

<script>
export default {
  props: ['productInfo','updateCount'],
  data () {
    return {
        bookNum: 0,
    }
  },
  methods:{
    delOne(){
        if(this.productInfo.count>0){
            this.productInfo.count--;
        }
        this.$emit('updateCount',null);
    },
    addOne(){
        this.productInfo.count++;
        this.$emit('updateCount',null);
    }
  }
}
</script>

<style scoped>
.item{height: 2rem;position: relative;}
.item img{width: 1.6rem;height: 1.6rem;}
.item div.msg{margin-left: 0.20rem}
.item div.msg p.tit{font-size: 0.24rem;color: #000;}
.item div.msg p.desc{font-size: 0.20rem;color: #666;margin-top: 0.20rem;}
.item div.msg p.price{font-size: 0.32rem;color: #ff6600;margin-top: 0.20rem}
.item div.ctrl{width: 1.6rem;position:absolute;bottom: 0.20rem;right: 0.10rem}
.icon_del{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_del.png);background-size: 100% 100%;display:block;}
.icon_add{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_add.png);background-size: 100% 100%;display:block;}
.book_num{width: 0.48rem;height: 0.48rem;text-align: center;font-size: 0.28rem;display: block;}

</style>
