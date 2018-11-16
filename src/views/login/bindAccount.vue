<template>
  <div class="main plr15">
      <div class="icon_logo"></div>
      <h4 class="pageTit mt15">绑定桔牛系统账号</h4>
      <div class="mt10">
        <input class="form-input" type="text" autocomplete="off" v-model="mobile" placeholder="请输入登录系统使用的手机号" maxlength="11" />
      </div>
      <div class="mt10">
        <input class="form-input" type="password" autocomplete="off" v-model="password" placeholder="请输入密码" />
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
        <div class="ub ub-pc h200 mt10">
          <div @click="toElseBind()">
            <div class="circle ub ub-ac ub-pc">
              <span class="icon_check"></span>
            </div>
            <p>验证码绑定</p>
          </div>
          <div class="ml50">
            <div class="circle ub ub-ac ub-pc">
              <span class="icon_sao"></span>
              <i @click="toCourse()" class="icon_course"></i>
            </div>
            <p>扫码绑定</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import {delBlank} from '@/static/js/function.js';
export default {
  name: 'bindAccount',
  data() {
    return {
      mobile:'',
      password:''
    }
  },
  methods: {
    getCode(){
      this.showTime = true;
    },
    submit(){
        let self = this;
        let reg = /^1[23456789]\d{9}$/;
        let mobile = delBlank(this.mobile);
        let password = delBlank(this.password);
        if (mobile == ""){
            this.$toast("请输入手机号码！");return;
        }else if (!reg.test(mobile)){
            this.$toast("手机格式不正确！");return;
        }else if(password==""){
            this.$toast("密码不能为空！");return;
        }else {
          let data = {
              loginName:mobile,
              password:password,
              terminal:'WECHAT_PUB'
          };
          this.$ajax
              .get("account/login/login/name.json", {
                  params: data
              })
              .then(function(res) {
                  if (res.success) {
                      self.$toast("登录成功");
                      sessionStorage.setItem('App-Token', res.data.token);//存储token
                      sessionStorage.setItem('User-Info', JSON.stringify(res.data));//存储用户信息
                      sessionStorage.setItem('alipayShops', JSON.stringify(res.data.alipayShopList));//存储门店
                      if(res.data.staffType === 'MERCHANT'){
                          self.$router.push('/selectSell');//商家登陆
                      }else {
                          self.$router.push('/home');//门店登陆
                      }
                  } else {
                      self.$toast(res.errorInfo);
                  }
              })
              .catch(function(err) {
                  self.$toast(err);
              });
        }
    },
    toElseBind(){
      this.$router.push('/bindAccountbycode')
    },
    toForgetPsw(){
      this.$router.push('/forgetPsw')
    },
    toCourse(){
      this.$router.push('/bindCourse')
    }
  },
  mounted() {
      document.title = '桔牛';
  }
}
</script>
<style scoped>
.main{height: 100%;background-color: #fff;padding-top: 0.60rem;position: relative;}
.pageTit{font-size: 0.40rem;color: #000;}
.form-input{width: 100%;height: 0.88rem;border-radius: 0.08rem;padding-left: 10px;background:#f2f2f2;font-size: 0.28rem;}

.elseDiv{position: absolute;width: 100%;bottom: 0;left: 0;}
.elseWay{position: relative; width: 100%;height: 0.60rem;}
.elseWay .line{border-bottom: 1px solid #dedede; width: 100%;}
.elseWay > div.tit{position: absolute;width: 100%;height: 100%;left: 0;top: -50%;text-align: center;}
.elseWay > div.tit > span{font-size: 0.24rem;display: inline-block;line-height: 0.60rem;background-color: #fff;padding: 0 0.20rem;color: #999}
.h200{height: 1.8rem}
.circle{width: 0.94rem;height: 0.94rem;border: 1px #dedede solid;border-radius: 50%;margin: 0 auto;}
.circle + p{font-size: 0.20rem;margin-top: 0.10rem;text-align: center;color: #999}
.ml50{margin-left: 1rem;}
.icon_sao{width:0.44rem;height:0.44rem;display: inline-block;background: url(../../assets/icon_sao.png) no-repeat center center; background-size: contain;}
.icon_check{width:0.44rem;height:0.44rem;display: inline-block;background: url(../../assets/icon_check.png) no-repeat center center; background-size: contain;}
.icon_course{display: block;width: 1rem;height: 0.4rem;background: url(../../assets/icon_course.png) no-repeat center center; background-size: contain;position:absolute;top: -0.3rem;right: -0.8rem}
</style>
