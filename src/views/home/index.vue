<!-- 主页view -->
<template>
    <div id="index">
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background-color: pink">Slide 1</div>
                    <div class="swiper-slide" style="background-color: #FF6600">Slide 2</div>
                    <div class="swiper-slide" style="background-color: cornflowerblue">Slide 3</div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!--功能块-->
        <div class="module-box">
            <ul class="module">
                <li>
                    <span class="iconfont icon-baobiaobiaoweiguanli"></span>
                    <span>报表</span>
                </li>
                <li>
                    <span class="iconfont icon-mendianzitidaihexiaosvg"></span>
                    <span>核销</span>
                </li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "swiper/dist/css/swiper.css";
    import Swiper from "swiper";

    export default {
        name: "App",
        data() {
            return {
                msg: 'home',
            };
        },
        methods: {
            sayHi() {
                this.msg = 'hi, home'
            }
        },
        computed: {
            getNavIndex() {
                return '';
            }
        },
        created() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                direction: 'vertical',
                spaceBetween: 30,
                autoplay:500
            });
        }
    };

</script>

<style>
    #index {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #F5F5F5;
    }
    .banner,.swiper-slide{
        width: 100%;
        height: 3.6rem;
    }
    .swiper-container,.swiper-wrapper,.swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination {
        position: absolute;
        right: 0;
        bottom: .2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        line-height: .1rem;
        padding-right: .3rem;
    }
    .module-box{
        width: 100%;
        background-color: #FFF;
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #222222;
        margin-top: 0.2rem;
    }
    .module-box .module{
        display: flex;
    }
    .module-box .module li{
        width: 30%;
        flex: 1;
        height: 1.88rem;
        /*line-height: 1.88rem;*/
        text-align: center;
        border-bottom: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
    }
    .module-box .module li:nth-of-type(3n){
        border-right: none;
    }
    .module-box .module li .iconfont{
        color: #FF6600;
        display: block;
        font-size: 0.45rem;
        margin-top: 0.35rem;
    }
</style>
