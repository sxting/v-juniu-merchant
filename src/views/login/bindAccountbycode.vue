<template>
  <div class="main plr15">
      <div class="icon_logo"></div>
      <h4 class="pageTit mt15">绑定桔牛系统账号</h4>
      <div class="mt10">
        <input class="form-input" type="text" autocomplete="off" v-model="mobile" placeholder="请输入登录系统使用的手机号" maxlength="11" />
      </div>
      <div class="mt10 ub">
          <input class="form-input1 ub-f1" type="text" @focus="focuThis($event)" @keyup="" autocomplete="off" v-model="msgCode" placeholder="请输入验证码" />
          <span v-if="showTime" class="msgCode on">{{count}}秒后重试</span>
          <span v-else class="msgCode" @click="getCode()">获取验证码</span>
      </div>
      <div class="mt30">
          <button class="btn_common" type="button" @click="submit()">确认绑定</button>
      </div>
      <p class="mt10 tx-c"><span class="f12 rc" @click="toForgetPsw">忘记密码</span></p>
      <div class="elseDiv plr15">
        <div class="elseWay">
            <div class="line"></div>
            <div class="tit"><span>其他绑定方式</span></div>
        </div>
        <div class="ub ub-pc h200">
          <div @click="toElseBind"><div class="circle ub ub-ac ub-pc"><span class="icon_check"></span></div><p>密码绑定</p></div>
          <div class="ml50"><div class="circle ub ub-ac ub-pc"><span class="icon_sao"></span></div><p>扫码绑定</p></div>
        </div>
      </div>
  </div>
</template>
<script>
import {delBlank} from '@/static/js/function.js';
export default {
  name: 'bindAccountbycode',
  data() {
    return {
      mobile:'',
      msgCode:'',
      showTime:false,
      count:'60'
    }
  },
  components: {

  },
  methods: {
    getCode(){
      var reg = /^1[23456789]\d{9}$/;
      var mobile = delBlank(this.mobile);
      if (mobile == "") {
        this.$toast("请输入手机号码！");return;
      }
      if (!reg.test(mobile)) {
        this.$toast("手机格式不正确！");return;
      }

      this.$toast('发送验证码成功');
      this.showRestTime();
    },
    showRestTime(){
      var restTime = 60;
      if (!this.timer) {
        this.count = restTime;
        this.showTime = true;
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= restTime) {
            this.count--;
          } else {
            this.showTime = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    submit(){
      var reg = /^1[23456789]\d{9}$/;
      var mobile = delBlank(this.mobile);
      var msgCode = delBlank(this.msgCode);
      if (mobile == "") {
        this.$toast("请输入手机号码！");return;
      }
      if (!reg.test(mobile)) {
        this.$toast("手机格式不正确！");return;
      }
      if(msgCode==""){
        this.$toast("手机验证码不能为空！");return;
      }
    },
    toElseBind(){
      this.$router.push('/bindAccount');
    },
    toForgetPsw(){
      this.$router.push('/forgetPsw');
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.main{height: 100%;background-color: #fff;padding-top: 0.60rem}
.pageTit{font-size: 0.40rem;color: #000;}
.form-input{width: 100%;height: 0.88rem;border-radius: 0.08rem;padding-left: 10px;background:#f2f2f2;font-size: 0.28rem;}
.form-input1{height: 0.88rem;border-radius: 4px;padding-left: 10px;background:#f2f2f2;font-size:0.28rem;}
.msgCode{height: 0.88rem;width: 2rem;text-align: center;font-size: 0.28rem;text-align: center;line-height: 0.88rem;margin-left: 0.20rem;background-color: #e1e1e1;border-radius: 0.08rem;}
.msgCode.on{background-color: #ff6000;color: #fff}

.elseDiv{position: fixed;position: fixed;width: 100%;bottom: 0;left: 0;}
.elseWay{position: relative; width: 100%;height: 0.60rem;}
.elseWay .line{border-bottom: 1px solid #999; width: 100%;}
.elseWay > div.tit{position: absolute;width: 100%;height: 100%;left: 0;top: -50%;text-align: center;}
.elseWay > div.tit > span{font-size: 0.24rem;display: inline-block;line-height: 0.60rem;background-color: #fff;padding: 0 0.20rem;color: #999}
.h200{height: 1.8rem}
.circle{width: 0.94rem;height: 0.94rem;border: 1px #dedede solid;border-radius: 50%;margin: 0 auto;}
.circle + p{font-size: 0.20rem;margin-top: 0.10rem;text-align: center;color: #999}
.ml50{margin-left: 1rem;}
.icon_sao{width:0.44rem;height:0.44rem;display: inline-block;background: url(../../assets/icon_sao.png) no-repeat center center; background-size: contain;}
.icon_check{width:0.44rem;height:0.44rem;display: inline-block;background: url(../../assets/icon_check.png) no-repeat center center; background-size: contain;}
</style>