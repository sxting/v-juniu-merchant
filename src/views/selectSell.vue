<!-- 主页view -->
<template>
    <div class="main">
        <div class="item plr15" v-for="(item,index) in storeList">
            <div class="tit bbc">店铺{{index+1}}</div>
            <div class="address ub ub-ac">
                <div class="ub-f1">
                    <p class="f14 bc">{{item.branchName}}</p>
                    <p class="f12 bc1 ub ub-ac mt05"><i class="uds icon_local"></i>店铺地址</p>
                </div>
                <div class="btn" @click="toPath('/home')">工作</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "selectSells",
    data() {
        return {
            storeList: []
        };
    },
    methods: {
        toPath(str){
            this.$router.push(str);
        }
    },
    created() {
        let self = this;
        document.title = '选择门店';
        this.$ajax
            .get("account/merchant/store/wechatPubStoreList.json")
            .then(function(res) {
                if (res.success) {
                    console.log(res.data);
                    sessionStorage.setItem("storeId", res.data[0].storeId);
                    self.storeList = res.data;
                    sessionStorage.setItem("storeList", JSON.stringify(res.data))
                } else {
                    self.$toast(res.errorInfo);
                }
            })
            .catch(function(err) {
                self.$toast(err);
            });
    }
};

</script>

<style scoped>
.main {height: 100%;padding: 0.30rem;position: relative;}
.item{background: #fff;margin-bottom: 0.30rem;border-radius: 0.20rem;}
.tit{height:1.10rem;font-size: 0.34rem;color: #333;line-height: 1.1rem;}
.address{height: 1.68rem;}
.btn{width: 1.2rem;height: 0.5rem;line-height: 0.5rem;text-align: center;background: #ff6000;color: #fff;font-size: 0.28rem;border-radius: 0.08rem}
.icon_local{width: 0.30rem;height: 0.30rem;background: url(../assets/icon_local.png) no-repeat center center;background-size: contain;margin-right: 0.08rem}
</style>
