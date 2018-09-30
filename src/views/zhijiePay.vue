<template>
  <div class='key-container'>
    <div class="inputBigBox">
      <div class='input-box'>{{ money }}</div>
    </div>
    <div class="zhizhu">
      <div></div>
      <div></div>
    </div>
    <div class='keyboard'>
      <div @click.stop='_handleKeyPress'>
        <div class='key-row'>
          <div class='key-cell' data-num='7'>7</div>
          <div class='key-cell' data-num='8'>8</div>
          <div class='key-cell' data-num='9'>9</div>

        </div>
        <div class='key-row'>
          <div class='key-cell' data-num='4'>4</div>
          <div class='key-cell' data-num='5'>5</div>
          <div class='key-cell' data-num='6'>6</div>

        </div>
        <div class='key-row'>
          <div class='key-cell' data-num='1'>1</div>
          <div class='key-cell' data-num='2'>2</div>
          <div class='key-cell' data-num='3'>3</div>
        </div>
        <div class='key-row'>
          <div class='key-cell' data-num='.'>.</div>
          <div class='key-cell' data-num='0'>0</div>
          <div class='key-cell qingchu' data-num='D'>C</div>
          <!-- <div class='key-cell' data-num='3'>3</div>
          <div class='key-cell' data-num='.'>.</div> -->
        </div>
        <div class='key-row'>
          <!-- <div class='key-cell qingchu' data-num='C'>清除</div> -->
          <div class='key-cell  ' :class="money.length>0?'saoma':'qingchu'" data-num='S'>{{money.length>0?'扫码收款':'请输入金额'}}</div>
        </div>
        <!-- <div class='key-confirm' data-num='S'>确认</div> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "zhijiePay",
  data() {
    return {
      storeId: sessionStorage.getItem("storeId"),
      money: ""
    };
  },
  methods: {
    //处理按键
    _handleKeyPress(e) {
      let num = e.target.dataset.num;
      //不同按键处理逻辑
      // -1 代表无效按键，直接返回
      if (num == -1 || !num || Number(this.money) > 99999999) return false;
      switch (String(num)) {
        //小数点
        case ".":
          this._handleDecimalPoint();
          break;
        //删除键
        case "D":
          this._handleDeleteKey();
          break;
        //清空键
        case "C":
          this._handleClearKey();
          break;
        //确认键
        case "S":
          this._handleConfirmKey();
          break;
        default:
          this._handleNumberKey(num);
          break;
      }
    },
    //处理小数点函数
    _handleDecimalPoint() {
      //如果包含小数点，直接返回
      if (this.money.indexOf(".") > -1) return false;
      //如果小数点是第一位，补0
      if (!this.money.length) this.money = "0.";
      else
        //如果不是，添加一个小数点
        this.money = this.money + ".";
    },
    //处理删除键
    _handleDeleteKey() {
      let S = this.money;
      //如果没有输入，直接返回
      if (!S.length) return false;
      //否则删除最后一个
      this.money = S.substring(0, S.length - 1);
    },
    //处理清空键
    _handleClearKey() {
      this.money = "";
    },
    //处理数字
    _handleNumberKey(num) {
      let S = this.money;
      //如果有小数点且小数点位数不小于2
      if (S.indexOf(".") > -1 && S.substring(S.indexOf(".") + 1).length < 2)
        this.money = S + num;
      //没有小数点
      if (!(S.indexOf(".") > -1)) {
        //如果第一位是0，只能输入小数点
        if (num == 0 && S.length == 0) this.money = "0.";
        else {
          if (S.length && Number(S.charAt(0)) === 0) return;
          this.money = S + num;
        }
      }
    },
    //提交
    _handleConfirmKey() {
      let S = this.money;
      //未输入
      if (!S.length||Number(S) === 0) {
        alert("您目前未输入!");
        return false;
      } else {
        //将 8. 这种转换成 8.00
        if (S.indexOf(".") > -1 && S.indexOf(".") == S.length - 1)
          S = Number(S.substring(0, S.length - 1)).toFixed(2);
        //保留两位
        S = Number(S).toFixed(2);

        let that = this;
        // 调起微信扫一扫
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
          scanType: ["qrCode", "barCode"], // 配置扫描二维码和条形码
          success: function(res) {
            // 扫描的结果
            var result = res.resultStr;
            // alert(result.split(",")[1]);
            if (result.indexOf(",") > -1)
              that.jiesuanFun(result.split(",")[1],S);
            else that.jiesuanFun(result,S);
          },
          fail: function(res) {
            console.log(res);
            alert(JSON.stringify(res));
          }
        });
      }
    },

    jiesuanFun(authCode,num) {
      let data = {
        authCode: authCode,
        bizType: "FIT",
        recordType: "COLLECT_MONEY",
        orderItem: [],
        preferentialMonery: 0,
        settleCardDTOList: [],
        money: this.NP.times(num,100),
        storeId: this.storeId,
        wipeDecimal: false
      };
      this.createOrderFun(data);
    },
    submit: function() {},
    createOrderFun(create) {
      let that = this;
      this.$ajax
        .post("merchant/order/openOrder.json", create)
        .then(function(res) {
          if (res.success) {
            if (res.data === "CLOSE") {
              that.$router.push("/payFail");
            } else {
              that.$router.push("/paySuccess");
              // let data = {
              //   member: that.memberInfo,
              //   order: res.data
              // };
              // sessionStorage.setItem("succesInfo", JSON.stringify(data));
            }
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.$ajax
      .get("https://w.juniuo.com/merchant/get_js_api_config.json", {
        params: {
          debug: false,
          jsApiList: "scanQRCode", // 需要的jsapi权限，多个用半角逗号分隔
          url: location.href.split("#")[0] // 获取到当前url
        }
      })
      .then(function(res) {
        var resp = res.data;
        if (res.success) {
          // 注入配置
          wx.config(resp);
        } else {
          alert(resp.errorInfo);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.zhizhu {
  width: 100%;
  position: absolute;
  top: 3.8rem;
  left: 0;
  right: 0;
  bottom: 9.4rem;
  display: flex;
  justify-content: space-around;
}
.saoma {
  background: #ff6600 !important;
  font-size: 0.4rem !important;
}
.qingchu {
  background: #d4d4d4 !important;
  font-size: 0.4rem !important;
}
.zhizhu div {
  width: 0.8rem;
  height: 100%;
  background: #333;
}
.key-container {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.inputBigBox {
  width: 100%;
  color: #fff;
  background: #333;
  border-radius: 0.4rem;
  padding: 0.4rem;
}
.input-box {
  font-size: 0.7rem;
  font-weight: bold;
  height: 2rem;
  padding: 0.2rem 0.3rem;
  text-align: right;
  line-height: 2rem;
  background: #808080;
  border-radius: 0.2rem;
}
.keyboard {
  font-size: 0.7rem;
  position: fixed;
  bottom: 0.6rem;
  left: 0;
  right: 0;
  padding: 0.4rem 0.4rem;
  width: 100%;
  background: #333333;
  border-radius: 0.4rem;
}
.keyboard .key-row {
  display: flex;
  display: -webkit-flex;
  position: relative;
  height: 1.6rem;
  line-height: 1.6rem;
}
/* .keyboard .key-row::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
} */
.keyboard .key-cell {
  flex: 1;
  -webkit-box-flex: 1;
  text-align: center;
  position: relative;
  background: #808080;
  margin: 5px;
  color: #fff;
  font-size: 0.4rem;
}
/* .keyboard .key-cell::after {
  content: "";
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  height: 200%;
  border-right: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
} */
.keyboard .key-cell:nth-last-child(1)::after {
  border-right: 0;
}
.keyboard .disabled {
  background: rgba(0, 0, 0, 0.2);
}
.keyboard .key-confirm {
  position: absolute;
  text-align: center;
  height: 2.36rem;
  width: 25%;
  line-height:  2.36rem;
  background: #fff;
  z-index: 5;
  right: 0;
  bottom: 1px;
}
</style>
