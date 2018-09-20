<!-- 主页view -->
<template>
    <div class="main">
        <div class="bar" @click="toPath('SelectSell', '')">{{sellName}}
            <i class="iconfont icon-arrow"></i>
        </div>
        <div @click="toPath('Charge', '')" class="bgb sy_btn mt15 ub ub-ver ub-pc ub-ac" style="width:100%;height:2.2rem">
            <span class="icon icon_sy"></span>
            <p>收银</p>
        </div>
        <div class="content clearfix">
            <div @click="toPath('CheckOrder', 'koubei')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_kb"></span>
                <p>口碑核销</p>
            </div>
            <div @click="toPath('CheckOrder', 'wechat')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
                <span class="icon icon_wx"></span>
                <p>微信核销</p>
            </div>
            <div @click="toPath('CheckOrder', 'meituan')" class="item ub ub-ver ub-pc ub-ac" :style="{width:width,height:height}">
                <span class="icon icon_mt"></span>
                <p>美团核销</p>
            </div>
            <div @click="toPath('Booklist', '')" class="item ub ub-ver ub-pc ub-ac ml20" :style="{width:width,height:height}">
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
      height: ""
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
    toPath(str, id) {
        this.$router.push({
          name: str,
          params: {
              type: id
          }
      });
    }
  },
  created() {
    let data = {
      memberInfo: false,
      products: false,
      orderInfo: false,
      status:false
    };
    sessionStorage.setItem("chargeInfo", JSON.stringify(data));
    sessionStorage.setItem("storeId", '1509727485937142590380');
  },
  mounted() {
    document.title = "工作";
    this.initBtnSize();
    window.onresize = () => {
      this.initBtnSize();
    };
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
.content .item {
  width: 50%;
  float: left;
  height: 2rem;
  background-color: #fff;
  margin-bottom: 0.4rem;
  border-radius: 0.2rem;
}
</style>
