import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: (resolve) => require(['./views/index'], resolve),
        children: [{
            path: '/',
            redirect: '/home'
        },{
            path: '/home',
            name: 'home',
            component: (resolve) => require(['./views/home'], resolve)
        },{
            path: '/records',
            name: 'records',
            component: (resolve) => require(['./views/records'], resolve)
        },{
            path: '/my',
            name: 'my',
            component: (resolve) => require(['./views/my'], resolve)
        }]
    },{
        path: '/hexiao',
        name: 'hexiao',
        component: (resolve) => require(['./views/hexiao'], resolve)
    },{
        path: '/order',
        component: (resolve) => require(['./views/order'], resolve)
    },{
        path: '/erwmCharge',
        component: (resolve) => require(['./views/pay/erwmCharge'], resolve)
    },{
        path: '/paySuccess',
        component: (resolve) => require(['./views/pay/paySuccess'], resolve)
    },{
        path: '/payFail',
        component: (resolve) => require(['./views/pay/payFail'], resolve)
    },{
        path: '/charge',
        component: (resolve) => require(['./views/charge'], resolve)
    },{
        path: '/memberInfo',
        component: (resolve) => require(['./views/member/memberInfo'], resolve)
    },{
        path: '/addMember',
        component: (resolve) => require(['./views/member/addMember'], resolve)
    },{
        path: '/memberSearch',
        component: (resolve) => require(['./views/member/memberSearch'], resolve)
    },{
        path:'/memberCard',
        component: (resolve) => require(['./views/member/memberCard'], resolve)
    },{
        path:'/recharge',
        component: (resolve) => require(['./views/member/recharge'], resolve)
    },{
        path: '/bindAccount',
        component: (resolve) => require(['./views/login/bindAccount'], resolve)
    },{
        path: '/bindAccountbycode',
        component: (resolve) => require(['./views/login/bindAccountbycode'], resolve)
    },{
        path: '/orderList',
        component: (resolve) => require(['./views/order/orderList'], resolve)
    },{
        path: '/orderDetail',
        component: (resolve) => require(['./views/order/orderDetail'], resolve)
    },{
        path: '/entry',
        component: (resolve) => require(['./views/entry'], resolve)
    }
];

const router = new VueRouter({
    mode: 'history',
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
