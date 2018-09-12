<template>
  <div v-show="showflag" class="modal ub ub-ac ub-pc" @click="modalListener">
    <div class="alertbox">
      <h1 class="title tx-c">{{option.title}}</h1>
      <div class="content plr20" v-html="option.content"></div>
      <div class="ub btc">
        <div @click="leftListener(hide())" class="ub-f1 btn_concel">取消</div>
        <div @click="rightListener(hide())" class="ub-f1 btn_confirm">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showflag: false,//显示标记
      option: {
        modalClickHide: false,//模态背景层点击是否可以隐藏
        title: '提示',
        content: '请确认',
      }
    }
  },
  methods: {
      leftListener() {
        this.showflag = false;
      },
      rightListener() {
        this.showflag = false;
      },
      modalListener() {
        if (this.option.modalClickHide) {
          this.showflag = false;
        }
      },
      hide() {
        return this.showflag = false;
      },
      show(options) {
        let opt = {
          title: '提示',
          content: '请确认',
          leftname: '取消',
          rightname: '确认',
          leftListener: this.leftListener,
          rightListener: this.rightListener,
          modalListener: this.modalListener
        };
        for (let property in options) {
          opt[property] = options[property]; // 使用 options 的配置
        }
        this.option.title = opt.title;
        this.option.content = opt.content;
        this.option.leftname = opt.leftname;
        this.option.rightname = opt.rightname;
        this.leftListener = opt.leftListener;
        this.rightListener = opt.rightListener;
        this.modalListener = opt.modalListener;
        this.showflag = true;
      }
  }
}
</script>
<style scoped>
.modal{width:100%;height:100%;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5);z-index: 999}
.alertbox{width:80%;margin:auto;border-radius:0.10rem;background:#fff;overflow: hidden;}
.title{font-size:0.36rem;color:#666;font-weight:normal;height: 0.96rem;line-height: 0.96rem;background-color: #f2f2f2}
.content{font-size:0.26rem;color:#333;line-height: 0.60rem;width: 100%;padding: 0.50rem;text-align: justify;}
.btn_concel{height: 0.88rem;line-height: 0.88rem;color: #999;text-align: center;}
.btn_confirm{height: 0.88rem;line-height: 0.88rem;color: #ff6000;text-align: center;border-left:1px #eee solid;}
</style>