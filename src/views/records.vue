<!-- 主页view -->
<template>
    <div id="index">
        业绩
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
