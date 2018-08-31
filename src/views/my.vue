<!-- 主页view -->
<template>
    <div>
        <div class="h100 ptb20 plr15 bbc bgb">
            <div class="userImg ub-img2"></div>
            <p class="ub-f1 ml20 f14">我的微信名字</p>
        </div>
        <div class="btc bgb userList">
            <div class="bbc plr10 h48">
                <p class="">用户名</p>
            </div>
            <div class="bbc plr10 h48">
                <p class="">用户名</p>
            </div>
            <div class="bbc plr10 h48">
                <p class="">用户名</p>
            </div>
            <div class="bbc plr10 h48">
                <p class="">用户名</p>
            </div>
            <div class="bbc plr10 h48">
                <p class="">用户名</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {
                msg: 'my',
            };
        },
        methods: {
            sayHi() {
                this.msg = 'hi, my'
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
        background: #edeff0;
    }
    .h48{height: 0.96rem;}
    .userList p{font-size: 0.30rem;line-height: 0.96rem;}

</style>
