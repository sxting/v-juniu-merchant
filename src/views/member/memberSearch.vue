<template>
  <div class="main">
    <div class="toper ub ub-ac">
      <div class="searchBox ub ub-f1 ub-ac">
        <i class="icon_search"></i>
        <input type="number" v-model="inpValue" v-on:input="showList()" placeholder="会员查询">
      </div>
      <div class="plr15 rc" @click="showList()">搜索</div>
      <ul class="result plr15" v-show="isShowList">
        <li class="ub ub-ac bbc" v-for="(item,index) in userList" :key="index" @click="slectedItem(item)">
          <p class="ub ub-ac w100">
            <i v-if="item.cardApplies.length>0" class="icon_card"></i>
          </p>
          <p>{{item.customer.customerName}}</p>
          <p class="ml20">{{item.customer.customerName}}</p>
        </li>
      </ul>
    </div>
    <div class="bodyBg" @click="hideList"></div>
    <alertBox ref="alertBox"></alertBox>
  </div>
</template>

<script>
export default {
  name: "memberSearch",
  data() {
    return {
      userList: [],
      isShowList: false,
      inpValue: "",
      storeId: sessionStorage.getItem("storeId"),
      chargeInfo: {}
    };
  },
  components: {},
  methods: {
    slectedItem(item) {
      let data = {
        memberInfo: false,
        products: false,
        orderInfo: false,
        status: false
      };
      sessionStorage.setItem("chargeInfo", JSON.stringify(data));
      this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"));
      this.chargeInfo.memberInfo = item;
      sessionStorage.setItem("chargeInfo", JSON.stringify(this.chargeInfo));
      this.isShowList = false;
      this.$router.push("/charge");
    },
    showList() {
      if (this.inpValue.length === 11) {
        this.isShowList = true;
        this.memberHttp();
      }
    },
    hideList() {
      this.isShowList = false;
    },
    memberHttp() {
      let that = this;
      let data = {
        storeId: that.storeId,
        search: that.inpValue
      };
      this.$ajax
        .get("merchant/member/card/searchs.json", {
          params: data
        })
        .then(function(res) {
          if (res.success) {
            that.userList = res.data;
          } else {
            that.$refs.alertBox.alert(res.errorInfo);
          }
        })
        .catch(function(err) {
          console.log(err);
          //   that.$refs.alertBox.alert(err);
        });
    }
  },
  computed: {},
  created() {
    this.chargeInfo = JSON.parse(sessionStorage.getItem("chargeInfo"));

    document.title = "查询会员";
  }
};
</script>

<style scoped>
.main {
  background: #fff;
  height: 100%;
}
.w100 {
  width: 1rem;
}
.toper {
  height: 1.12rem;
  background: #f6f6f6;
  position: relative;
  z-index: 1;
}
.searchBox {
  margin-left: 0.25rem;
  position: relative;
  background: #e1e1e1;
  height: 0.66rem;
  border-radius: 0.33rem;
}
.icon_search {
  margin-left: 0.2rem;
  margin-right: 0.12rem;
}
.searchBox input {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
}
.result {
  position: absolute;
  width: 100%;
  top: 1.12rem;
  left: 0;
}
.result li {
  background-color: #fff;
  line-height: 1rem;
}
.result li p {
  color: #666;
  font-size: 0.24rem;
}
.ml20 {
  margin-left: 0.4rem;
}
.ml30 {
  margin-left: 0.6rem;
}
.bodyBg {
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
