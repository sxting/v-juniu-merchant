<!-- 主页view -->
<template>
    <div id="index">
        <!--<div class="index_main">-->
            <!-- <transition name="fade"> -->
            <router-view></router-view>
            <!-- </transition> -->
        <!--</div>-->
        <!--<div class="index_footer">-->

            <!--<router-link to="home">-->
                <!--<dl :class="{'symbolsHome_jy2':symbolsHome_jy2,'symbolsHome_jy':symbolsHome_jy}" @click="index_jy">-->
                    <!--<dt></dt>-->
                    <!--<dd>工作</dd>-->
                <!--</dl>-->
            <!--</router-link>-->

            <!--<router-link to="records">-->
                <!--<dl :class="{'symbolsHome_dd':symbolsHome_dd,'symbolsHome_dd2':symbolsHome_dd2}" @click="index_dd">-->
                    <!--<dt></dt>-->
                    <!--<dd>记录</dd>-->
                <!--</dl>-->
            <!--</router-link>-->

            <!--<router-link to="my">-->
                <!--<dl :class="{'symbolsHome_wd':symbolsHome_wd,'symbolsHome_wd2':symbolsHome_wd2}" @click="index_my">-->
                    <!--<dt></dt>-->
                    <!--<dd>我的</dd>-->
                <!--</dl>-->
            <!--</router-link>-->

        <!--</div>-->

    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {
                symbolsHome_jy2: true,
                symbolsHome_jy: false,
                symbolsHome_dd: true,
                symbolsHome_dd2: false,
                symbolsHome_qb: true,
                symbolsHome_qb2: false,
                symbolsHome_wd: true,
                symbolsHome_wd2: false
            };
        },
        methods: {
            index_jy() {
                (this.symbolsHome_jy2 = true),
                    (this.symbolsHome_jy = false),
                    (this.symbolsHome_dd = true),
                    (this.symbolsHome_dd2 = false);
                (this.symbolsHome_qb = true),
                    (this.symbolsHome_qb2 = false),
                    (this.symbolsHome_wd = true),
                    (this.symbolsHome_wd2 = false);
            },
            index_dd() {
                (this.symbolsHome_jy2 = false),
                    (this.symbolsHome_jy = true),
                    (this.symbolsHome_dd = false),
                    (this.symbolsHome_dd2 = true),
                    (this.symbolsHome_qb = true),
                    (this.symbolsHome_qb2 = false),
                    (this.symbolsHome_wd = true),
                    (this.symbolsHome_wd2 = false);
            },
            index_qb() {
                (this.symbolsHome_jy2 = false),
                    (this.symbolsHome_jy = true),
                    (this.symbolsHome_dd = true),
                    (this.symbolsHome_dd2 = false),
                    (this.symbolsHome_qb = false),
                    (this.symbolsHome_qb2 = true),
                    (this.symbolsHome_wd = true),
                    (this.symbolsHome_wd2 = false);
            },
            index_my() {
                (this.symbolsHome_jy2 = false),
                    (this.symbolsHome_jy = true),
                    (this.symbolsHome_dd = true),
                    (this.symbolsHome_dd2 = false),
                    (this.symbolsHome_qb = true),
                    (this.symbolsHome_qb2 = false),
                    (this.symbolsHome_wd = false),
                    (this.symbolsHome_wd2 = true);
            }
        },
        computed: {
            getNavIndex() {
                return '';
            }
        },
        created() {

        }
    };

</script>

<style>
    #index {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #f5f5f5;
    }

    .index_footer {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3.04rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        box-shadow: 0 -5px 10px #dbdcdd;
        background-size: 100% 100%;
        z-index: 999;
    }

    .index_main {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 1.04rem;
        width: 100%;
    }

    .index_footer a dl {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* width:1.44rem; */
    }

    .index_footer a dl dd {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 0.1rem;
        line-height: 0.2rem;
        font-size: 0.2rem;
    }

    .index_footer a {
        display: inline-block;
        flex: 1;
        color: #676c7c;
        text-decoration: none;
    }

    .index_footer .router-link-active {
        text-decoration: none;
    }

</style>
