<template>
	<li class="ub ub-ac plr10 bbc">
	    <p class="ub-f1">{{productInfo.name}}</p>
	    <p class="price">￥{{productInfo.price}}</p>
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
        this.$emit('updateCount','');
    },
    addOne(){
        this.productInfo.count++;
        this.$emit('updateCount','');
    }
  }
}
</script>

<style scoped>
 li{height: 1.0rem}
 li .price{width: 1.8rem;margin-left: 0.20rem;}
 li .price{width: 1.8rem;margin-left: 0.20rem;}
 li .ctrl{width: 1.4rem;}
.icon_del{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_del.png);background-size: 100% 100%;display:block;}
.icon_add{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_add.png);background-size: 100% 100%;display:block;}
.book_num{width: 0.48rem;height: 0.48rem;text-align: center;font-size: 0.28rem;display: block;}
</style>
