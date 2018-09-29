<template>
    <div class="main">
        <div class="ub ub-ac inputDiv">
            <input type="number" class="ub-f1 code" placeholder="请输入券码对应的数字码" v-model="receiptCode" @keyup="formatInput(receiptCode)" />
            <span class="icon_sao1 mr10" @click="saomiao"></span>
        </div>
        <div class="btn">
            <button class="btn_common" @click="submit()">点击核销</button>
        </div>

        <div class="recordItem">
            <p class="time">近10条核销记录</p>
            <div class="theItem" v-if="type === 'koubei'">
                <div class="no-data" v-if="dataList.length === 0">暂无数据</div>
                <div class="ub ub-ac ub-pj item bbc" v-for="item in dataList" @click="toDetail(item)">
                    <div>
                        <p class="bc1 f14 tx-l">+{{item.amount/100}}</p>
                        <p class="bc1 f14 tx-l">{{item.content}}</p>
                    </div>
                    <div>
                        <p class="sc f13 tx-r">已核销</p>
                        <p class="sc f13 tx-r">{{item.settleTime.substring(0, 10)}}</p>
                    </div>
                </div>
            </div>
            <div class="theItem" v-if="type === 'meituan'">
                <div class="no-data" v-if="dataList.length === 0">暂无数据</div>
                <div class="ub ub-ac ub-pj item bbc" v-for="item in dataList" @click="toDetail(item)">
                    <div>
                        <p class="bc1 f14 tx-l">+{{item.amount}}</p>
                        <p class="bc1 f14 tx-l">{{item.itemName}}</p>
                    </div>
                    <div>
                        <p class="sc f13 tx-r">已核销</p>
                        <p class="sc f13 tx-r">{{item.verifyTime.substring(0, 10)}}</p>
                    </div>
                </div>
            </div>
            <div class="theItem" v-if="type === 'wechat'">
                <div class="no-data" v-if="dataList.length === 0">暂无数据</div>
                <div class="ub ub-ac ub-pj item bbc" v-for="item in dataList" @click="toDetail(item)">
                    <div>
                        <p class="bc1 f14 tx-l">+{{item.price/100}}</p>
                        <p class="bc1 f14 tx-l">{{item.productName}}</p>
                    </div>
                    <div>
                        <p class="sc f13 tx-r">已核销</p>
                        <p class="sc f13 tx-r">{{item.usedDate.substring(0, 10)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "checkOrder",
    data() {
        return {
            shopId:'',
            receiptCode: '',
            type: '',
            dataList: []
        };
    },
    components: {},
    methods: {
        getData() {
            let self = this;
            let url = '';
            let data = {pageIndex: 1, pageSize: 10};
            if(this.type === 'koubei') {
                url = '/merchant/order/koubei/vouchers.json';
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.dataList = res.data.vouchers;
                    } else {
                        alert(res.errorInfo);
                    }
                })
            } else if(this.type === 'meituan') {
                url = '/xmd/tuangou/receipt/list.json';
                data.storeId = sessionStorage.getItem('storeId');
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.dataList = res.data.details;
                    } else {
                        alert(res.errorInfo);
                    }
                })
            } else if(this.type === 'wechat') {
                data = {storeId: sessionStorage.getItem('storeId')};
                url = '/merchant/order/wxorder/voucher/list.json';
                this.$ajax.get(url, {params: data}).then(function (res) {
                    if(res.success) {
                        self.dataList = res.data;
                    } else {
                        alert(res.errorInfo);
                    }
                })
            }

        },
        saomiao() {
            let self = this;
            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
                scanType: ["barCode" ], // 配置扫描二维码和条形码
                success: function(res) {
                    // 扫描的结果
                    var result = res.resultStr;
                    console.log(res);
                    alert(result);
                    self.receiptCode = result.split(',')[1];
                },
                fail: function(res) {
                    console.log(res);
                    alert(JSON.stringify(res));
                }
            });
        },
        formatInput(value) {
            this[value] = String(this[value]).replace(/[^\d]/g, ""); //清除“数字”以外的字符
        },
        toDetail(item){
            this.$router.push({
                name: 'checkDetail',
                params: {
                    type: this.type,
                    data: item,
                }
            });
        },
        submit(){
            if(!this.receiptCode) {
                alert('请输入核销码');
                return;
            }
            this.$router.push({
                name: 'checkConfirm',
                params: {
                    type: this.type,
                    code: this.receiptCode
                }
            });
        }
    },
    created(){
        document.title = "核销";
        this.type = this.$route.params.type;
        this.getData();
        // 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用，同一个url仅需调用一次
        // 通过后台接口获得配置
        this.$ajax.get('http://w.juniuo.com/merchant/get_js_api_config.json', {
            params: {
                debug: false,
                jsApiList: "scanQRCode", // 需要的jsapi权限，多个用半角逗号分隔
                url: location.href.split('#')[0] // 获取到当前url
            }
        }).then(function (res) {
            var resp = res.data;
            if (res.success) {
                // 注入配置
                wx.config(resp);
            } else {
                alert(resp.errorInfo);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
}
</script>

<style scoped>
.no-data {text-align: center; padding: 1rem 0}
.recordItem {margin-bottom: 0.2rem}
.main{height: 100%;padding: 0.30rem 0.30rem 0}
.code{height: 0.88rem;line-height: 0.88rem;font-size: 0.28rem;padding-left: 0.20rem}
.time{padding-left: 0.06rem;font-size: 0.24rem;color: #999;line-height: 0.88rem;}
.mr10{margin-right: 0.20rem}
.inputDiv{background-color: #fff;border-radius: 0.10rem}
.theItem{padding-bottom: 0.1rem;border-radius: 0.10rem;background-color: #fff;padding-left: 0.15rem;padding-right: 0.15rem}
.item{height: 1.2rem;}
.icon_sao1{display: inline-block;width: 0.40rem;height: 0.40rem;background: url(../assets/icon_sao1.png) no-repeat center center;background-size: 100% 100%;}
.btn{margin-top: 0.30rem;margin-bottom: 0.20rem}
    .bbc:last-child {border-bottom: none}
</style>
