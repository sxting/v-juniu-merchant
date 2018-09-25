import axios from "axios";
import router from "./router";

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.baseURL = process.env.BASE_API_ADDR;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem("App-Token");
        if (token) {
            config.headers["token"] = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        let result = response.data;
        console.log(result);
        if (result.errorCode == 'invalid_token') {
            router.replace({
                path: "/bindAccount",
                query: {
                    redirect: router.currentRoute.fullPath
                }
            });
        } else {
            return response.data;
        }
    },
    error => {
        console.log(error);
        console.log(error.response);
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log("response.status: 401");
            }
        }
        //判断超时原因 路由跳转页面
        console.log(JSON.stringify(error)); //console : Error: Request failed with status code 402
        return Promise.reject(error.data);
    }
);

export default axios;
