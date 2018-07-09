import axios from 'axios'
import router from './router'

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.baseURL = process.env.BASE_API_ADDR;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['Access-Token'] = '';
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(response);
    let result = response.data;
    if (false) {
      router.replace({
        path: 'login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      });
    } else {
      return response;
    }

  },
  error => {
    console.log("---------------");
    console.log(error);
    console.log(error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('response.status: 401');
      }
    }
    //判断超时原因 路由跳转页面
    return Promise.reject(error.data);
  });

export default axios;
