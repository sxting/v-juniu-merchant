<template>
    <div>
        <div class="userInfo ub ub-ac bbc">
            <img src="../assets/user.png" class="udb" width="60" height="60">
            <div class="ub-f1 ml10">
                <p class="f14">微信名字</p>
                <p class="f12">店铺名称</p>
            </div>
        </div>
        <div class="bgb mt10 btc">
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">姓名</p>
                <p class="sc">ddddddd</p>
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">手机号</p>
                <p class="sc">ddddddd</p>
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">职务</p>
                <p class="sc">ddddddd</p>
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">所属门店</p>
                <p class="sc">ddddddd</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "my",
        data() {
            return {
                userInfo: {},
            };
        },
        methods: {

        },
        computed: {

        },
        created() {

        }
    };
</script>

<style scoped>
.userInfo p{color: #fff}
.item{height: 0.84rem;padding-right: 0.30rem;padding-left: 0.30rem;}
.userInfo{padding: 0.40rem 0.30rem;background-color: #ff6600;}
</style>
