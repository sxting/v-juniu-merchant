<!-- 主页view -->
<template>
    <div class="main ub ub-ac ub-pc">
        这是业绩页面
    </div>
</template>

<script>
export default {
    name: "records",
    data() {
        return {
            msg: 'my',
        };
    },
    methods: {

    },
    created() {
        document.title = '业绩';
    }
};
</script>

<style scoped>
.main{height: 100%;}
</style>
