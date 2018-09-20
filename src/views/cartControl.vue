<template>
  <div class="ub ub-ac">
    <!-- <transition name="fade">
        <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
          <transition name="inner">
          <span class="inner iconfont icon-del"></span>
          </transition>
        </div>
    </transition> -->
    <span class="icon_del" v-show="food.count > 0" @click.stop.prevent="decreaseCart($event)"></span>
    <span class="book_num" v-show="food.count > 0 ">{{food.count}}</span>
    <span class="icon_add" @click.stop.prevent="addCart($event)"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('increment', this.food); // 子组件通过 $emit触发父组件的方法 increment   还
      },
      decreaseCart(event) {
        if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
        this.food.count--;
        this.$emit('increment',this.food);
      }
    }
  };
</script>
<style scoped>
  /*@import "./style/cartControl.css";*/
.icon_del{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_del.png);background-size: 100% 100%;display:block;}
.icon_add{width: 0.40rem;height: 0.40rem;background: url(../assets/icon_add.png);background-size: 100% 100%;display:block;}
.book_num{width: 0.48rem;height: 0.40rem;text-align: center;font-size: 0.28rem;display: block;}

</style>
