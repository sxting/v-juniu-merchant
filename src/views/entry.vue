<template>
    <div v-if="!isReady" class="on-ready">
        <img src="../assets/loading.gif" />
    </div>
    <div v-else>
        <msg :title="tipTitle" :description="tipDesc" :icon="tipIcon"></msg>
    </div>
</template>

<script>
    import { Msg } from 'vux'
    export default {
        name: "App",
        data() {
            return {
                isReady: false,
                tipTitle: '请从微信菜单进入',
                tipDesc: '该功能只能通过桔牛商家公众号使用',
                tipIcon: 'warn'
            };
        },
        methods: {
            sayHi() {
                this.msg = 'hi, records'
            }
        },
        computed: {
            getNavIndex() {
                return '';
            }
        },
        created() {
            // 获得参数
            let openidSource = this.$route.query.openid;
            this.$ajax.get('/account/login/wechatPub.json', {
                params: {
                    code: openidSource,
                    terminal:'WECHAT_PUB'
                }
            }).then(res => {
                console.log(res);
                if (res.errorCode == "10000" && res.success == true) {
                    // 存储数据至sessionStorage
                    sessionStorage.setItem('App-Token', res.data.token);//存储token
                    sessionStorage.setItem('User-Info', JSON.stringify(res.data));//存储用户信息
                    sessionStorage.setItem('alipayShops', JSON.stringify(res.data.alipayShopList));//存储门店
                    sessionStorage.setItem('storeList', JSON.stringify(res.data.storeList));//存储门店
                    sessionStorage.setItem('storeInfor', JSON.stringify(res.data.storeList[0]));//存储门店
                      sessionStorage.setItem('storeId', res.data.storeList[0].storeId);//存储门店
                    // 跳转
                    this.$router.replace({path: '/home'});
                } else {
                    // this.tipDesc = "本公众号为使用桔牛系统的商家提供移动办公解决方案，包括系统消息接收、报表查看、收银核销等。";
                    // let errorCode = res.data.errorCode;
                    // if ("invalid_wechat_auth_code" == errorCode || "parse_openid_error" == errorCode) {
                    //     this.tipTitle = "请从公众号进入";
                    // } else if ("staff_not_found" == errorCode) {
                    //     this.tipTitle = "未绑定系统账户";
                    //     this.tipDesc = "您可以在桔牛系统的员工管理中进行扫码绑定之后再进入尝试。<br><br>" + this.tipDesc + "";
                    // }
                    this.$router.replace({path: '/errorAlert'});
                    this.isReady = true;
                }
            });
        },
        components: {
            Msg
        }
    };
</script>

<style scoped>
    .on-ready {
        text-align: center;
        width: 13px;
        height: 13px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>
