<template>
  <div class="main plr15">
      <h4 class="pageTit">扫码绑定教程</h4>
      <p class="mt20">请按照以下步骤绑定公众号</p>
      <div class="ub content">
        <div class="left ub ub-ver ub-ac ub-pc">
          <i class="item">1</i>
          <i class="line"></i>
          <i class="item">2</i>
          <i class="line"></i>
          <i class="item">3</i>
          <i class="line"></i>
          <i class="item">4</i>
        </div>
        <div class="right ub-f1">
          <div class="item">桔牛系统用户登录桔牛商家后台</div>
          <div class="item mt15">点击“管理菜单”-“员工目录”，搜索需绑定的员工</div>
          <div class="item mt15">在员工列表中，点击推送通知列下的微信图标进入绑定页</div>
          <div class="item mt15">设置好推送类型后，员工用自己的手机微信扫描页面二维码，绑定桔牛公众号</div>
        </div>
      </div>
      <p class="mt10 tx-c"><span class="f12 rc">是不是很简单，快去绑定吧！</span></p>

      <!--<p class="mt10 tx-c"><span class="f12 rc" @click="toForgetPsw">是不是很简单，快去绑定吧！</span></p>-->

      <!--<div class="elseDiv plr15">-->
        <!--<div class="elseWay">-->
            <!--<div class="line"></div>-->
            <!--<div class="tit"><span>其他绑定方式</span></div>-->
        <!--</div>-->
        <!--<div class="ub ub-pc h200">-->
          <!--<div @click="toElseBind('/bindAccount')"><div class="circle ub ub-ac ub-pc"><span class="icon_pwd"></span></div><p>密码绑定</p></div>-->
          <!--<div @click="toElseBind('/bindAccountbycode')" class="ml50"><div class="circle ub ub-ac ub-pc"><span class="icon_check"></span></div><p>验证码绑定</p></div>-->
        <!--</div>-->
      <!--</div>-->
  </div>
</template>
<script>
import {delBlank} from '@/static/js/function.js';
export default {
  name: 'bindCourse',
  data() {
    return {
      mobile:'',
      password:''
    }
  },
  components: {

  },
  methods: {
    getCode(){
      this.showTime = true;
    },
    submit(){
      this.$router.push('/charge');
      var reg = /^1[23456789]\d{9}$/;
      var mobile = delBlank(this.mobile);
      var password = delBlank(this.password);
      // if (mobile == ""){
      //   this.$toast("请输入手机号码！");return;
      // }
      // if (!reg.test(mobile)){
      //   this.$toast("手机格式不正确！");return;
      // }
      // if(password==""){
      //   this.$toast("密码不能为空！");return;
      // }
    },
    toElseBind(str){
      this.$router.push(str)
    },
    toForgetPsw(){
      this.$router.push('/forgetPsw')
    }
  },
  mounted() {
    document.title = '扫码绑定教程';
  }
}
</script>
<style scoped>
.main{height: 100%;background-color: #fff;padding-top: 0.40rem;position: relative;}
.pageTit{font-size: 0.40rem;color: #000;}
.content{margin-top: 0.30rem}
.content .left{width: 0.40rem;margin-right: 0.15rem;}
.content .left .item{display:block;width: .40rem;height: .40rem;background: url(../../assets/icon_cicyle.png) no-repeat;background-size: 100% 100%;text-align:center;line-height: 0.40rem;color: #fff;font-size: 0.24rem;}
.content .left .line{display:block;width: 2px;height: 0.70rem;background-color: #ff6000;margin-top: 0.10rem;margin-bottom: 0.10rem;transform:scaleX(0.5);}
.content .right .item{height: 1.0rem;width: 100%;background: url(../../assets/bg_con.png) no-repeat; background-size: 100% 100%; display: -webkit-flex; display: flex; position: relative;-webkit-align-items: center; align-items: center;padding:0 0.20rem 0 0.30rem;font-size: 0.24rem;color: #666;}

.elseDiv{position: absolute;width: 100%;bottom: 0;left: 0;}
.elseWay{position: relative; width: 100%;height: 0.60rem;}
.elseWay .line{border-bottom: 1px solid #dedede; width: 100%;}
.elseWay > div.tit{position: absolute;width: 100%;height: 100%;left: 0;top: -50%;text-align: center;}
.elseWay > div.tit > span{font-size: 0.24rem;display: inline-block;line-height: 0.60rem;background-color: #fff;padding: 0 0.20rem;color: #999}
.h200{height: 1.8rem}
.circle{width: 0.94rem;height: 0.94rem;border: 1px #dedede solid;border-radius: 50%;margin: 0 auto;}
.circle + p{font-size: 0.20rem;margin-top: 0.10rem;text-align: center;color: #999}
.ml50{margin-left: 1rem;}
.icon_pwd{width:0.44rem;height:0.44rem;display: inline-block;background: url(../../assets/icon_pwd.png) no-repeat center center; background-size: contain;}
.icon_check{width:0.44rem;height:0.44rem;display: inline-block;background: url(../../assets/icon_check.png) no-repeat center center; background-size: contain;}
</style>
