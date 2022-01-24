/****   request.js   ****/
import axios from 'axios'


//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口
  baseURL: process.env.BASE_API,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000
})

// 2.请求拦截器
service.interceptors.request.use(config => {
   //注意使用token的时候需要引入cookie方法或者用本地sessionStorage等方法
   config.data = JSON.stringify(config.data);
   let token = sessionStorage.getItem('token');
   if(token){
      config.headers.token= token; //如果要求携带在请求头中
    }
  return config
}, error => {
  return Promise.reject(error);
})

// 3.响应拦截器
service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error);
})
//4.导入文件
export default service
