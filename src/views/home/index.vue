<!-- 主页view -->
<template>
    <div id="index">
        {{ msg }}
    </div>
</template>

<script>

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

</style>
