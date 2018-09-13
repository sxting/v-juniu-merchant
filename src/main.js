import Vue from 'vue'
// import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http';
import ResetRem from './static/js/resetrem';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './static/css/reset.css';
import './static/css/iconfont.css';
import confirmBox from './static/js/confirmBox.js';
import alertBox from './static/js/alertBox.js';


// FastClick.attach(document.body);
Vue.use(ResetRem); //采用rem的相对布局方式，使用resetrem插件
Vue.use(Mint);
Vue.use(confirmBox);
Vue.use(alertBox);

//绑定到Vue的实例方法上
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;
Vue.resetrem();

new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app-box');
