<template>
  <div class="main plr15">
      <h4 class="pageTit">忘记密码</h4>
      <div class="mt20">
        <input class="form-input" type="text" autocomplete="off" v-model="mobile" placeholder="请输入登录系统使用的手机号" maxlength="11" />
      </div>
      <div class="mt10 ub">
          <input class="form-input1 ub-f1" type="text" @keyup="" autocomplete="off" v-model="msgCode" placeholder="请输入验证码" />
          <span v-if="showTime" class="msgCode on">{{count}}秒后重试</span>
          <span v-else class="msgCode" @click="getCode">获取验证码</span>
      </div>
      <div class="mt10">
        <input class="form-input" type="password" @keyup="" autocomplete="off" v-model="password" placeholder="至少6位密码区分大小写" />
      </div>
      <div class="mt10">
        <input class="form-input" type="password" @keyup="" autocomplete="off" v-model="repassword" placeholder="确认密码" />
      </div>
      <div class="mt30">
          <button class="btn_common" type="button" @click="submit()">更新密码</button>
      </div>
      <p class="mt10 tx-c"><span class="f12 rc" @click="tobind">使用已有账户绑定</span></p>
  </div>
</template>
<script>
import {delBlank} from '@/static/js/function.js';
export default {
  name: 'forgetPsw',
  data() {
    return {
      mobile:'',
      msgCode:'',
      password:'',
      repassword:'',
      showTime:false,
      count:60
    }
  },
  components: {

  },
  methods: {
    submit(){
      var reg = /^1[23456789]\d{9}$/;
      var mobile = delBlank(this.mobile);
      var msgCode = delBlank(this.msgCode);
      var password = delBlank(this.password);
      var repassword = delBlank(this.repassword);
      if (mobile == "") {
        this.$toast("请输入手机号码！");return;
      }
      if (!reg.test(mobile)) {
        this.$toast("手机格式不正确！");return;
      }
      if(msgCode==""){
        this.$toast("手机验证码不能为空！");return;
      }
      if (password == "") {
        this.$toast("请输入登录密码！");return;
      }
      if (password.length < 6) {
        this.$toast("密码格式不正确");return;
      }
      if(password!=repassword){
        this.$toast("两次密码输入不一致");return;
      }
    },
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
    tobind(){
      this.$router.push('/bindAccount');
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.main{height: 100%;background-color: #fff;padding-top: 0.40rem}
.pageTit{font-size: 0.40rem;color: #000;}
.form-input{width: 100%;height: 0.88rem;border-radius: 0.08rem;padding-left: 10px;background:#f2f2f2;font-size: 0.28rem;}
.form-input1{height: 0.88rem;border-radius: 4px;padding-left: 10px;background:#f2f2f2;font-size:0.28rem;}
.msgCode{height: 0.88rem;width: 2rem;text-align: center;font-size: 0.28rem;text-align: center;line-height: 0.88rem;margin-left: 0.20rem;background-color: #f2f2f2;border-radius: 0.08rem;}
.msgCode.on{background-color: #ff6000;color: #fff}
</style>