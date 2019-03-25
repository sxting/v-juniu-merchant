<!-- 主页view -->
<template>
  <div class="main">
    <div class="bar" @click="toPath('SelectSell', '','11111')">{{sellName}}
      <i class="iconfont icon-arrow" v-if="ifShow"></i>
    </div>
    <!-- <div @click="toPath('Charge', '')" class="bgb sy_btn mt15 ub ub-ver ub-pc ub-ac" style="width:100%;height:2.2rem">
            <span class="icon icon_sy"></span>
            <p>收银</p>
        </div> -->
    <div class="content clearfix">
      <div @click="toPath('Charge', '','900201')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
        <span class="icon icon_sy"></span>
        <p>收银</p>
      </div>
      <div @click="toPath('zhijiePay', '','900201')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
        <span class="icon icon_sd"></span>
        <p>收单</p>
      </div>
      <div @click="toPath('CheckOrder', 'koubei','900802')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
        <span class="icon icon_kb"></span>
        <p>口碑核销</p>
      </div>
      <div @click="toPath('CheckOrder', 'wechat','900205')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
        <span class="icon icon_wx"></span>
        <p>微信核销</p>
      </div>
      <div @click="toPath('CheckOrder', 'meituan','900203')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
        <span class="icon icon_mt"></span>
        <p>美团核销</p>
      </div>
      <div @click="toPath('Booklist', '','900301')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
        <span class="icon icon_yy"></span>
        <p>预约管理</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      pickerVisible: false,
      sellName: "店铺名称",
      width: "",
      ifShow: false,
      height: "",
      storeInfor: false,
      ifShowTop: true
    };
  },
  methods: {
    slideImgChange(index) {
      this.curIndex = index;
    },
    initBtnSize() {
      var sw = document.body.clientWidth;
      this.width = (sw - 50) / 2 + "px";
      this.height = (sw - 50) / 2 * 28 / 33 + "px";
    },
    toPath(str, type, menuId) {
      let self = this;
      let storeList = JSON.parse(sessionStorage.getItem("User-Info"))
        ? JSON.parse(sessionStorage.getItem("User-Info")).storeList
        : "";
      let menuIds = [];
      storeList.forEach(function(i) {
        if (i.storeId === sessionStorage.getItem("storeId")) {
          menuIds = i.moduleIds;
        }
      });
      if (menuIds.indexOf(menuId) > -1 || menuId === "11111") {
        if (str == "SelectSell") {
          if (this.ifShow) {
            //true 的话  好多门店
            this.$router.push({
              name: str,
              params: {
                type: type
              }
            });
          }
        } else {
          if (
            type === "koubei" &&
            this.storeInfor &&
            !this.storeInfor.alipayShopId
          ) {
            console.log(this.storeInfor.alipayShopId);
            console.log(this.storeInfor);

            alert("该门店尚未绑定口碑门店");
          } else if (
            type === "meituan" &&
            this.storeInfor &&
            !this.storeInfor.bindingXmd
          ) {
            alert("该门店尚未绑定美大门店");
          } else {
            // if(str === 'Charge') alert("功能暂未开放")
            // else{
            this.$router.push({
              name: str,
              params: {
                type: type
              }
            });
            // }
          }
        }
      } else {
        self.$toast("暂无此功能权限,如需使用此功能请联系超级管理员申请");
      }
    },
    getData() {
      let self = this;
      this.$ajax
        .get("account/merchant/store/wechatPubStoreList.json")
        .then(function(res) {
          if (res.success) {
            console.log(res.data);
            sessionStorage.setItem("storeId", res.data[0].storeId);
            self.sellName = res.data[0].branchName;
            sessionStorage.setItem("storeList", JSON.stringify(res.data));
            sessionStorage.setItem("storeInfor", JSON.stringify(res.data[0]));
            self.ifShow = res.data.length === 1 ? false : true;
          } else {
            self.$toast(res.errorInfo);
          }
        })
        .catch(function(err) {
          self.$toast(err);
        });
    },
    pushHistory() {
      //写入空白历史路径
      let state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, state.title, state.url);
    },
    back() {
      this.pushHistory();
      window.addEventListener(
        "popstate",
        function(e) {
          window.WeixinJSBridge.call("closeWindow");
        },
        false
      );
    }
  },
  created() {
    let self = this;
    let data = {
      memberInfo: false,
      products: false,
      orderInfo: false,
      status: false,
      cardInfo: false,
      changeType: true
    };
    sessionStorage.setItem("chargeInfo", JSON.stringify(data));
    this.storeInfor = JSON.parse(sessionStorage.getItem("storeInfor"))
      ? JSON.parse(sessionStorage.getItem("storeInfor"))
      : "";
    let storeList = JSON.parse(sessionStorage.getItem("storeList"))
      ? JSON.parse(sessionStorage.getItem("storeList"))
      : [];
    this.sellName = this.storeInfor.branchName
      ? this.storeInfor.branchName
      : storeList[0].branchName;
    self.ifShow = true;
    // if (this.$route.query.type) {
    // } else {
    //     self.getData();
    // }
  },
  mounted() {
    document.title = "工作";
    this.initBtnSize();
    window.onresize = () => {
      this.initBtnSize();
    };
    // this.back();
  }
};
</script>

<style scoped>
.main {
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}

.sy_btn {
  position: relative;
  z-index: 10;
}

.icon-arrow::before {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.bar {
  height: 1rem;
  background-color: #fff;
  text-align: center;
  line-height: 1rem;
  margin-left: -0.3rem;
  margin-right: -0.3rem;
}

.content {
  margin-top: 0.3rem;
  position: relative;
  z-index: 10;
  padding-bottom: 1rem;
}

.ml20 {
  margin-left: 20px;
}

.icon {
  width: 0.8rem;
  height: 0.8rem;
}

.icon + p {
  text-align: center;
  margin-top: 0.12rem;
  color: #666;
  font-size: 0.28rem;
}

.icon_sy {
  width: 1.12rem;
  height: 0.92rem;
  background: url(../assets/icon_sy.png) no-repeat center center;
  background-size: contain;
}

.icon_mt {
  background: url(../assets/icon_mt.png) no-repeat center center;
  background-size: contain;
}

.icon_kb {
  background: url(../assets/icon_kb.png) no-repeat center center;
  background-size: contain;
}

.icon_yy {
  background: url(../assets/icon_yy.png) no-repeat center center;
  background-size: contain;
}

.icon_wx {
  background: url(../assets/icon_wx.png) no-repeat center center;
  background-size: contain;
}

.icon_sd {
  background: url(../assets/icon_sd.png) no-repeat center center;
  background-size: contain;
}

.content .item {
  width: 50%;
  float: left;
  height: 2rem;
  background-color: #fff;
  margin-bottom: 0.4rem;
  border-radius: 0.2rem;
}
</style>
