import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',//首页
        component: (resolve) => require(['./views/index'], resolve),
        children: [{
            path: '/',
            redirect: '/bindAccount'
        },{
            path: '/home',//工作
            component: (resolve) => require(['./views/home'], resolve)
        },{
            path: '/records',//业绩
            component: (resolve) => require(['./views/records'], resolve)
        },{
            path: '/my',//我的
            component: (resolve) => require(['./views/my'], resolve)
        }]
    },{
        path: '/selectSell',//选择商家
        component: (resolve) => require(['./views/selectSell'], resolve)
    },{
        path: '/errorAlert',//未绑定提示页
        component: (resolve) => require(['./views/errorAlert'], resolve)
    },{
        path: '/order',//订单
        component: (resolve) => require(['./views/order'], resolve)
    },{
        path: '/erwmCharge',//二维码付款
        component: (resolve) => require(['./views/pay/erwmCharge'], resolve)
    },{
        path: '/paySuccess',//付款成功
        component: (resolve) => require(['./views/pay/paySuccess'], resolve)
    },{
        path: '/payFail',//付款失败
        component: (resolve) => require(['./views/pay/payFail'], resolve)
    },{
        path: '/charge',//收银
        component: (resolve) => require(['./views/charge'], resolve)
    },{
        path: '/memberInfo',//会员信息
        component: (resolve) => require(['./views/member/memberInfo'], resolve)
    },{
        path: '/addMember',//开通会员
        component: (resolve) => require(['./views/member/addMember'], resolve)
    },{
        path: '/memberSearch',//查询会员
        component: (resolve) => require(['./views/member/memberSearch'], resolve)
    },{
        path:'/memberCard',//会员卡
        component: (resolve) => require(['./views/member/memberCard'], resolve)
    },{
        path:'/recharge',//充值
        component: (resolve) => require(['./views/member/recharge'], resolve)
    },{
        path: '/bindAccount',//绑定账号
        component: (resolve) => require(['./views/login/bindAccount'], resolve)
    },{
        path: '/bindAccountbycode',//通过验证码绑定账号
        component: (resolve) => require(['./views/login/bindAccountbycode'], resolve)
    },{
        path: '/forgetPsw',//改密码
        component: (resolve) => require(['./views/login/forgetPsw'], resolve)
    },{
        path: '/bindCourse',//绑定教程
        component: (resolve) => require(['./views/login/bindCourse'], resolve)
    },{
        path: '/orderList',//历史订单
        component: (resolve) => require(['./views/order/orderList'], resolve)
    },{
        path: '/orderDetail',//订单详情
        component: (resolve) => require(['./views/order/orderDetail'], resolve)
    },{
        path: '/myInfo',//我的信息
        component: (resolve) => require(['./views/my/myInfo'], resolve)
    },{
        path: '/booklist',//预约管理
        component: (resolve) => require(['./views/booklist'], resolve)
    },{
        path: '/dirCharge',//直接收款
        component: (resolve) => require(['./views/dirCharge'], resolve)
    },{
        path: '/checkOrder',//核销
        component: (resolve) => require(['./views/checkOrder'], resolve)
    },{
        path: '/checkConfirm',//核销
        component: (resolve) => require(['./views/checkOrder/checkConfirm'], resolve)
    },{
        path: '/checkSuccess',//核销成功
        component: (resolve) => require(['./views/checkOrder/checkSuccess'], resolve)
    },{
        path: '/checkDetail',//核销详情
        component: (resolve) => require(['./views/checkOrder/checkDetail'], resolve)
    },{
        path: '/checkFail',//核销失败
        component: (resolve) => require(['./views/checkOrder/checkFail'], resolve)
    },{
        path: '/entry',
        component: (resolve) => require(['./views/entry'], resolve)
    }
];

const router = new VueRouter({
    // mode: 'history',
    base: '/',
    routes
});

//路由钩子 某个路由配置了meta的requireAuth字段 判断vuex的token
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (false) {
            next({ //如果token不存在 跳转到登录
                path: '/login',
                replace: true,
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        console.log(to.path);
        next();
    }
});

export default router;
