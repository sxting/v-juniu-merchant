<!-- 主页view -->
<template>
    <div id="index">
        <div class="banner">
            <swiper loop auto :list="sliderList" :index="curIndex" @on-index-change="slideImgChange"></swiper>
        </div>
        <!--功能块-->
        <div class="module-box">
            <div class="modules-list">
                <p class="title-module">收银</p>
                <ul class="module">
                    <li @click="toPage('charge')">
                        <span class="iconfont icon-baobiaobiaoweiguanli"></span>
                        <span>收银</span>
                    </li>
                    <li @click="toPage('charge')">
                        <span class="iconfont icon-baobiaobiaoweiguanli"></span>
                        <span>订单</span>
                    </li>
                </ul>
            </div>
            <div class="modules-list">
                <p class="title-module">核销</p>
                <ul class="module">
                    <li @click="toPage('hexiao')">
                        <span class="iconfont icon-baobiaobiaoweiguanli"></span>
                        <span>口碑核销</span>
                    </li>
                    <li @click="toPage('hexiao')">
                        <span class="iconfont icon-mendianzitidaihexiaosvg"></span>
                        <span>美团核销</span>
                    </li>
                    <li @click="toPage('hexiao')">
                        <span class="iconfont icon-baobiaobiaoweiguanli"></span>
                        <span>微信核销</span>
                    </li>
                </ul>
            </div>
            <div class="modules-list">
                <p class="title-module">报表</p>
                <ul class="module">
                    <li @click="toMonthReport">
                        <span class="iconfont icon-baobiaobiaoweiguanli"></span>
                        <span>月报表</span>
                    </li>
                    <li @click="toDayReport">
                        <span class="iconfont icon-mendianzitidaihexiaosvg"></span>
                        <span>日报表</span>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperItem } from 'vux';

    export default {
        name: "App",
        data() {
            return {
                msg: 'home',
                sliderList: [{
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                }, {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
                }, {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
                }],
                openId: '11111111',
                date: '',
                dateMonthly: '',
                curIndex: 0,
                swiperItemIndex: 1
            };
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods: {
            slideImgChange(index) {
                this.curIndex = index
            },
            toPage(page){
                this.$router.push(page);
            },
            toDayReport(){//日报表
                window.location.href = "https://api.juniuo.com/staff/#/order/store/report;date=" + this.date + ";openid=" + this.openId ;
            },
            toMonthReport(){//月报表
                window.location.href = "https://api.juniuo.com/staff/#/order/monthly/report;date=" + this.dateMonthly + ";openid=" + this.openId;
            }
        },
        computed: {
            getNavIndex() {
                return '';
            }
        },
        created() {
            // this.openId = JSON.parse(sessionStorage.getItem('staffInfo')).openid;
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

            // let token = '355db1aaef8655041cf6d44ffbcc5bd7';
            // sessionStorage.setItem('appToken', token);//存储token
        }
    };

</script>

<style scoped>
    #index {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #F5F5F5;
    }
    .modules-list{
        width: 100%;
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #222222;
    }
    .title-module{
        padding: 0 0.3rem;
        color: #a6a6a6;
        font-size: 0.28rem;
        line-height: 1rem;
    }
    .modules-list .module{
        display: flex;
        background-color: #FFF;
    }
    .modules-list .module li{
        width: 30%;
        flex: 1;
        height: 1.88rem;
        text-align: center;
        border-bottom: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
    }
    .modules-list .module li:nth-of-type(3n){
        border-right: none;
    }
    .modules-list .module li .iconfont{
        color: #FF6600;
        display: block;
        font-size: 0.45rem;
        margin-top: 0.35rem;
    }
</style>
