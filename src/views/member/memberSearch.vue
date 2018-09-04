<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div class="searchBox ub-f1"><i class="icon icon_search"></i><input type="text" @focus="showList()" placeholder="会员查询"></div>
            <div class="plr15 rc" @click="searchThis()">搜索</div>
            <ul class="result" v-show="isShowList">
                <li class="ub" v-for="item in userList" @click="slectedItem(item)"><p>{{item.name}}</p><p class="ml30">{{item.tel}}</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "charge",
        data() {
            return {
                userList:[{name:"王某某",tel:"15011235620"},{name:"王某某",tel:"15011235620"},{name:"王某某",tel:"15011235620"}],
                isShowList:false
            };
        },
        components: {},
        methods: {
            slectedItem(){
                this.isShowList = false;
            },
            showList(){
                this.isShowList = true;
            },
            hideList(){
                this.isShowList = false;
            },
            closeModal(){
                this.isShowBus = false;
            }
        },
        computed: {

        },
        created() {
            document.title="收银";
        }
    };
</script>

<style scoped>
.main{background: #fff;height: 100%;}
.toper{height: 1.12rem;background: #f6f6f6;position: relative;}
.searchBox{padding-left: 0.60rem;margin-left: 0.25rem;position: relative;background: #fff;height: 0.66rem;border-radius: 0.10rem}
.searchBox input{width: 100%;height: 0.60rem;line-height: 0.60rem}
.icon{display:inline-block;}
.icon_search{position: absolute;top: 0.15rem;left: 0.14rem;width: 0.26rem;height: 0.29rem;background: url(../../assets/icon_search.png) no-repeat center;background-size: 100% 100%;}
.result{position: absolute;width: 100%;top: 1.12rem;left: 0;}
.result li{background-color: #fff;line-height: 0.72rem;padding-left: 0.30rem;border-bottom: 1px #eee solid;}
.result li p{color: #666;font-size: 0.24rem}
.ml30{margin-left: 0.60rem;}
</style>
