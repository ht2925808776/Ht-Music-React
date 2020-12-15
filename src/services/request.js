import axios from 'axios';
import {BASE_URL,TIMEOUT} from './config';

const instance = axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})

// 1.请求拦截:
instance.interceptors.request.use(config=>{
    // 在拦截这边可以做的事情：
    // 1.在发送请求的时候，在界面中间显示一个loading的组件
    // 2.某一些请求要求用户必须携带token，如果没有携带的话，那么直接返回登录页
    // 3.如果有些后台要求前端传递过去的params/data数据需要做序列化的操作
    return config;//一定要return
},err=>{

});
// 2.响应拦截
instance.interceptors.response.use(res=>{
    // 在响应拦截这边可以做的事情：
    // console.log("请求被拦截")
    return res.data;//这边要把服务器返回的结果return出去
},err=>{
    if(err && err.response.status){
        switch(err.response.status){
            case 400:
                console.log("请求错误")
                break;
            case 401:
                console.log("未授权访问")
                break;
            default:
                console.log("其它错误信息")
        }
    }
    return err;
});
export default instance;