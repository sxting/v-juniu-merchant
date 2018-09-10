<template>
    <div>
        <div class="item bbc ub ub-pj ub-ac">
            <p class="f14 bc">头像</p>
            <img src="../../assets/user.png" class="user" />
        </div>
        <p class="tit">基本信息</p>
        <div class="btc">
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
.item{height: 0.96rem;padding-right: 0.30rem;padding-left: 0.30rem;background-color: #fff}
.user{display: block;width: 0.60rem;height: 0.60rem;border-radius: 50%;}
.tit{padding-left: 0.30rem;line-height: 0.72rem;font-size: 0.24rem;color: #666;}
</style>
