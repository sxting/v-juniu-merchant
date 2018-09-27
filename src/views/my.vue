<template>
    <div>
        <div class="userInfo tx-c">
            <div>
                <img src="../assets/user.png" class="user" />
                <p class="tit tx-c mt15">{{userInfo.staffName}}</p>
                <p class="f14 bc1 tx-c mt05">{{userInfo.merchantName}}</p>
            </div>
        </div>
        <div class="plr15">
            <div class="item bbc ub ub-pj ub-ac" @click="toMyInfo">
                <p class="f14 bc">个人信息</p>
                <span class="arrow-right"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "my",
    data() {
        return {
            userInfo : sessionStorage.getItem('User-Info') ? JSON.parse(sessionStorage.getItem('User-Info')) : '',
        };
    },
    methods: {
        toMyInfo(){
            this.$router.push('/myInfo');
        }
    },
    computed: {

    },
    created() {
        document.title = '我的';
    }
};
</script>

<style scoped>
.userInfo{background-image: linear-gradient(to left, #FF8000 0%, #FF5000 100%);height: 2.66rem;padding-left: 0.30rem;padding-right: 0.30rem;padding-top: 1.00rem;}
.userInfo div{background-color: #fff;border-radius: 0.20rem;padding-top: 1px;padding-bottom: 0.40rem}
.user{display: block;width: 1.20rem;height: 1.20rem;border-radius: 50%;;margin: -0.6rem auto 0;border: 5px solid #fff;box-sizing:content-box;background-color: #fff}
.item{height: 0.96rem;padding-right: 0.30rem;padding-left: 0.30rem;background-color: #fff;margin-top: 1.2rem;border-radius: 0.20rem}
.tit{font-size: 0.30rem;color: #333;}
</style>
