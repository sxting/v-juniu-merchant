import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: (resolve) => require(['./views/index'], resolve),
        children: [{
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
        },{
            path: '/hexiao',
            name: 'hexiao',
            component: (resolve) => require(['./views/hexiao'], resolve)
        }]
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
