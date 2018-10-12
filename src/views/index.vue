<template>
    <div id="index">
        <div class="index_main">
            <!-- <transition name="fade"> -->
            <router-view></router-view>
            <!-- </transition> -->

        </div>
        <div class="logo_bg"></div>
        <div class="index_footer ub ub-ac">
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(1,'home')">
                <span class="icon icon_index1" :class="{'active':curActiveIndex==1}"></span>
                <p class="tx-c">工作</p>
            </li>
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(2,'records')">
                <span class="icon icon_index2"></span>
                <p class="tx-c">业绩</p>
            </li>
            <li class="ub-f1 ub-pc ub-ac ub-ver" @click="toHome(3,'my')">
                <span class="icon icon_index3" :class="{'active':curActiveIndex==3}"></span>
                <p class="tx-c">我的</p>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            curActiveIndex: sessionStorage.navIndex||1,
            openId: '',
            date: '',
            dateMonthly: '',
            staffId: '',
            url :"https://api.juniuo.com/staff/#/order/store/report;date=",
            storeId : sessionStorage.getItem("storeId")
        };
    },
    methods: {
        toHome(index,str) {
            let that = this;
            this.curActiveIndex = index;
            sessionStorage.navIndex = index;
            if(str === 'records'){
                window.location.href = that.url + this.date + ";openid=" + this.openId + ";staffId=" + this.staffId + ";storeId=" + this.storeId;
            }else {
                this.$router.push(str);
            }
        },
    },
    created() {
        this.openId = JSON.parse(sessionStorage.getItem('User-Info')).openid;
        this.staffId = JSON.parse(sessionStorage.getItem('User-Info')).staffId;
        /*
        *
        * 获取当前的年月日
        *
        **/
        let year = new Date().getFullYear();        //获取当前年份(2位)
        let month = new Date().getMonth()+1;       //获取当前月份(0-11,0代表1月)
        let changemonth = month < 10 ? '0' + month : '' + month;
        let day = new Date().getDate();           //获取当前日(1-31)
        this.date = year+'-'+changemonth+'-'+day;     //到日
        this.dateMonthly = year+'-'+changemonth;      //到月
    }
};

</script>

<style scoped>
#index {width: 100%;height: 100%;display: flex;flex-direction: column;background: #f2f2f2;}
.index_main {position: absolute;top: 0;left: 0;bottom: 1.04rem;width: 100%;}
.index_footer {width: 100%;position: fixed;left: 0;bottom: 0;height: 1.02rem;background: #fff;z-index: 999;}
.index_footer p{color: #999;font-size: 0.24rem;line-height: 0.40rem;margin-top: 0.04rem}
.index_footer .active + p{color: #ff6000}
.icon{width: 0.40rem;height: 0.40rem;background: #666;display: block;margin: 0 auto;}
.icon_index1{background: url(../assets/icon_index1.png) no-repeat center center;background-size: contain;}
.icon_index1.active{background: url(../assets/icon_index1_on.png) no-repeat center center;background-size: contain;}
.icon_index2{background: url(../assets/icon_index2.png) no-repeat center center;background-size: contain;}
.icon_index3{background: url(../assets/icon_index3.png) no-repeat center center;background-size: contain;}
.icon_index3.active{background: url(../assets/icon_index3_on.png) no-repeat center center;background-size: contain;}
.logo_bg{background:url(../assets/logo_bg.png) no-repeat center center;height: 0.48rem;width: 100%;position: fixed;z-index: 9;left: 0;bottom: 1.40rem;background-size: contain;}
</style>
