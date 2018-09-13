<template>
    <div class="main">
        <div class="toper ub ub-ac">
            <div class="searchBox ub ub-f1 ub-ac">
                <i class="icon_search"></i>
                <input type="text" @focus="showList()" placeholder="会员查询">
            </div>
            <div class="plr15 rc" @click="searchThis()">搜索</div>
            <ul class="result plr15" v-show="isShowList">
                <li class="ub ub-ac bbc" v-for="item in userList" @click="slectedItem(item)">
                    <p class="ub ub-ac w100"><i v-if="item.card==1" class="icon_card"></i></p>
                    <p>{{item.name}}</p>
                    <p class="ml20">{{item.tel}}</p>
                </li>
            </ul>
        </div>
        <div class="bodyBg" @click="hideList"></div>
    </div>
</template>

<script>
    export default {
        name: "memberSearch",
        data() {
            return {
                userList:[
                    {name:"王某某",tel:"15011235620",card:1},
                    {name:"王某某",tel:"15011235620",card:0},
                    {name:"王某某",tel:"15011235620",card:0}
                ],
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
            }
        },
        computed: {

        },
        created() {
            document.title="查询会员";
        }
    };
</script>

<style scoped>
.main{background: #fff;height: 100%;}
.w100{width: 1.0rem;}
.toper{height: 1.12rem;background: #f6f6f6;position: relative;z-index: 1}
.searchBox{margin-left: 0.25rem;position: relative;background: #e1e1e1;height: 0.66rem;border-radius: 0.33rem}
.icon_search{margin-left: 0.20rem;margin-right: 0.12rem;}
.searchBox input{width: 100%;height: 0.60rem;line-height: 0.60rem;font-size: 0.28rem;}
.result{position: absolute;width: 100%;top: 1.12rem;left: 0;}
.result li{background-color: #fff;line-height: 1.0rem;}
.result li p{color: #666;font-size: 0.24rem}
.ml20{margin-left: 0.40rem}
.ml30{margin-left: 0.60rem;}
.bodyBg{background-color: #fff;position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 0}
</style>
