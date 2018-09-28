<template>
    <div class="main">
        <div class="bgb plr15">
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">顾客电话</p>
                <input class="ub-f1 tx-r f14" v-model="tel" type="number" placeholder="请输入顾客电话" />
            </div>
            <div class="item bbc ub ub-pj ub-ac">
                <p class="f14 bc">顾客姓名</p>
                <input class="ub-f1 tx-r f14" v-model="name" placeholder="请输入顾客姓名" />
            </div>
            <div class="item bbc ub ub-pj ub-ac" @click="showPicker">
                <p class="f14 bc">生日</p>
                <input class="ub-f1 tx-r f14 bgb" readonly v-model="bathDate" placeholder="请选择生日" />
                <div class="icon_calener"></div>
            </div>
            <div class="item ub ub-pj ub-ac">
                <p class="f14 bc">性别</p>
                <p class="circle_parent ub ub-ac ub-pj">
                    <span v-for="(item,index) in maleList" class="ub ub-ac f12" @click="switchMale(index)">
                        <i class="circle" :class="{'on':curMaleIndex==index}"><i class="inner"></i></i>{{item}}
                    </span>
                </p>
            </div>
        </div>
        <div class="mt10 bgb remarkDiv">
            <textarea v-model="remark" placeholder="添加备注信息"></textarea>
        </div>
        <!--<div class="mt10 markDiv">-->
            <!--<p class="f14 clearfix">选择标签<span class="f12 ml10 sc uds ufr">*设定会员标签，最多可设置3个</span></p>-->
            <!--<div class="markList ub ub-pj">-->
                <!--<i @click="clickThis($event)" v-for="item in markList">{{item}}</i>-->
            <!--</div>-->
        <!--</div>-->
        <div class="plr15 mt40">
            <div class="btn_common" @click="submit()">确 定</div>
        </div>
        <mt-datetime-picker v-model="dateVal" @confirm="handleConfirm" ref="picker" type="date" year-format="{value}年" month-format="{value}月" date-format="{value}日" :startDate="new Date('1900')" :endDate="new Date('2018')"></mt-datetime-picker>
    </div>
</template>

<script>
import { DatetimePicker } from 'mint-ui';
export default {
    name: "addmember",
    data() {
        return {
            tel: '',
            name: '',
            bathDate: '',
            male: '',
            remark: '',
            maleList:['女', '男'],
            curMaleIndex: 0,
            dateVal:new Date('2000-01-01'),
            storeId: sessionStorage.getItem('storeId'),
            customerId: '',
            chargeInfo: '',
            // isMale:true,
            // pickerVisible:false,
            // markList:["标签1","标签1","标签1","标签1"]
        };
    },
    components: {DatetimePicker},
    methods: {
        clickThis(event){
            var curObj = event.currentTarget;
            curObj.className = curObj.className?'':'active';
        },
        switchMale(index){
            this.curMaleIndex = index;
        },
        showPicker(){
            this.$refs.picker.open();
        },
        handleConfirm(str){
            var date = new Date(str);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            this.bathDate = year+'-'+(month<10?'0'+month:month)+"-"+(day<10?'0'+day:day);
        },
        submit(){
            let self =this;
            let reg = /^1\d{10}$/;
            if (!this.tel || !this.name) {
                alert('手机号或客户名称不能为空');
            } else if(!reg.test(this.tel)) {
                alert('手机格式不对');
            } else {
                let data = {
                    birthday: this.bathDate,
                    customerName: this.name,
                    gender: this.curMaleIndex,
                    phone: this.tel,
                    remarks: this.remark,
                    storeId: this.storeId,
                    customerId: this.customerId
                };
                let url;
                if(this.customerId) {
                    url = '/merchant/member/customer/updateCustomer.json';
                    this.$ajax.get(url, {params: data}).then(function (res) {
                        if(res.success) {
                            let url1 = '/merchant/member/card/searchs.json';
                            let data1 = {
                                storeId: self.storeId,
                                search: self.tel
                            };
                            self.$ajax.get(url1, {params: data1}).then(function(res) {
                                    if (res.success) {
                                        self.chargeInfo.memberInfo = res.data[0];
                                        sessionStorage.setItem('chargeInfo', JSON.stringify(self.chargeInfo));
                                        alert('编辑成功');
                                        history.go(-1);
                                    } else {
                                        alert(res.errorInfo);
                                    }
                                });
                        } else {
                            alert(res.errorInfo);
                        }
                    });
                } else {
                    delete data.customerId;
                    url = '/merchant/member/customer/add.json';
                    this.$ajax.post(url, data).then(function (res) {
                        if(res.success) {
                            alert('开通成功');
                            history.go(-1);
                        } else {
                            alert(res.errorInfo);
                        }
                    });
                }


            }
        }
    },
    created() {
        document.title = '开通会员';
        this.customerId = this.$route.params.customerId;
        this.chargeInfo = JSON.parse(sessionStorage.getItem('chargeInfo'));
        if(this.customerId && sessionStorage.getItem('chargeInfo')) {
            this.memberInfo = JSON.parse(sessionStorage.getItem('chargeInfo')).memberInfo;
            let customer = this.memberInfo ? this.memberInfo.customer : {};
            this.bathDate = customer.birthday;
            this.name = customer.customerName;
            this.curMaleIndex = customer.gender;
            this.tel = customer.phone;
            this.remark = customer.remarks;
        }
    }
};
</script>

<style scoped>
.main{height: 100%;}
.userInfo p{color: #fff}
.item{height: 1.0rem;}
.userInfo{padding: 0.40rem 0.30rem;background-color: #ff6600;}
.remarkDiv{background-color: #fff;padding: 0.40rem 0.30rem}
textarea{width: 100%;height: 2.2rem;outline: none;padding: 0.20rem 0.30rem;font-size: 0.28rem;background-color: #f2f2f2;border-radius: 0.10rem}
.markDiv{background-color: #fff; padding:0.24rem 0.24rem 0.40rem;}
.markList i{display:block;background-color: #fff;border: 1px #ccc solid;color: #ccc;width: 1.5rem;height: 0.54rem;line-height: 0.52rem; border-radius:0.27rem;font-size: 0.24rem;margin-top: 0.20rem;text-align: center;}
.markList i.active{background: linear-gradient(to left,#ff8000,#ff5000);border:1px #ff6600 solid; color: #fff;}
.circle_parent{width: 1.8rem;}
.circle{width: 0.24rem;height: 0.24rem;border-radius: 50%;border:1px #999 solid;margin-left: 0.20rem;margin-right: 0.10rem;}
.circle .inner{display: none;width: 0.16rem;height: 0.16rem;background-color: #ff6000;border-radius: 50%;}
.circle.on{border:1px #ff6000 solid;display: flex;justify-content:center;align-items:center;}
.circle.on .inner{display:block;}
.mt50{margin-top: 1rem}.ml10{margin-left: 0.20rem}
.modal{position:fixed;width: 100%;height: 100%;left: 0;top: 0}
.modal .searchResult{margin-top: 1rem;background-color: #fff;}
.modal .searchResult .item{height: 1rem;border-bottom: 1px #eee solid;}
.modal .searchResult .item:last-child{border-bottom: none;}
.modal .mask{background-color: rgba(0,0,0,.3);width: 100%;}
</style>
<style>
.picker-toolbar:after{clear: both;content: "";display: table;}
.mint-datetime-cancel{width: 1.4rem;float: left;color: #999999}
.mint-datetime-confirm{width: 1.4rem;float: right;color: #ff6000}
</style>
