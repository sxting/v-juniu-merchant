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
.h48{height: 0.96rem;}
.userList p{font-size: 0.30rem;line-height: 0.96rem;}

</style>
