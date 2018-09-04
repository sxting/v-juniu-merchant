<template>
    <div>
        <div class="bgb mt10 btc">
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">顾客电话</p>
                <input class="ub-f1 tx-r" v-model="tel" placeholder="请输入顾客电话" />
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">顾客姓名</p>
                <input class="ub-f1 tx-r" v-model="name" placeholder="请输入顾客姓名" />
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">生日</p>
                <input class="ub-f1 tx-r" v-model="bathDate" placeholder="请选择生日" />
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">性别</p>
                <input class="ub-f1 tx-r" v-model="male" placeholder="请输入顾客电话" />
            </div>
        </div>
        <div class="mt10 btbc bgb">
            <textarea v-model="remark" placeholder="添加备注信息"></textarea>
        </div>
        <div class="mt10 btbc bgb p10">
            <p class="f14">选择标签 <span class="f12 ml10 sc uds">*设定会员标签，最多可设置3个</span></p>
            <div class="markList mt10">
                <i @click="clickThis($event)" v-for="item in markList">{{item}}</i>
            </div>
        </div>
        <div class="plr15 mt30">
            <div class="btn_common">确 定</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addmember",
        data() {
            return {
                tel: '',
                name: '',
                bathDate: '',
                male: '',
                remark: '',
                markList:["标签1","标签1","标签1","标签1","标签1","标签1","标签1","标签1"]
            };
        },
        methods: {
            clickThis(event){
                var curObj = event.currentTarget;
                curObj.className = curObj.className?'':'active';
            }
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
textarea{width: 100%;height: 1.6rem;outline: none;padding: 0.20rem 0.30rem}
.markList i{display:inline-block;background-color: #fff;border: 1px #ccc solid;color: #ccc;padding:0.06rem 0.10rem; border-radius: 0.08rem;margin-right: 0.24rem;font-size: 0.24rem;margin-bottom: 0.24rem}
.markList i.active{background-color: #ff6600;border:1px #ff6600 solid; color: #fff;}
</style>
