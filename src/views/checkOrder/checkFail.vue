<template>
    <div class="main ub ub-ver">
        <div class="toper">
            <img src="../../assets/icon_fail.png" class="udb mato" width="60" height="60">
            <p class="bc f16 tx-c mt15">核销失败</p>
            <p class="sc f12 tx-c mt05">该门店暂无核销该券的功能</p>
            <div class="mt20 ub plr15">
                <div class="btn_back ub-f1 ub ub-ac ub-pc mr20">返回首页</div>
                <div class="btn_print ub-f1 ub ub-ac ub-pc">点击重新输码</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "checkFail",
        data() {
            return {
                isShowMember:false
            };
        },
        methods: {
            toDetail(){
                this.$router.push('/memberInfo');
            }
        },
        created() {
            document.title="核销失败";
        }
    };
</script>

<style scoped>
.main{height: 100%;}
.toper{padding: 0.8rem 0 0.50rem;background-color: #fff}
.tit{padding-left: 0.30rem;line-height: 0.72rem;font-size: 0.28rem;color: #666;font-size: 0.24rem;}
.btn{width: 2.8rem; height: 0.70rem;font-size: 0.28rem;line-height: 0.68rem;text-align: center;background-color: #fff;color:#999;border-radius: 0.10rem;border:1px #eee solid;}
.userInfo{background-color: #fff;padding:0.25rem 0.30rem; border-radius: 0.20rem}
.userInfo img{width: 0.60rem; height: 0.60rem;border-radius: 0.30rem;margin-right: 0.08rem;}
.mr20{margin-right: 0.40rem;}
.h50{height: 1.0rem;}
.btn_back{background:#fff;height: 0.88rem;color: #999;font-size: 0.30rem;border-radius: 0.10rem;border:1px #eee solid;}
.btn_print{background:#FF6000;height: 0.88rem;color: #fff;font-size: 0.30rem;border-radius: 0.10rem;}
</style>
