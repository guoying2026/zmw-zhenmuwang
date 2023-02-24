import axios from 'axios'

//创建axios实例
axios.defaults.baseURL = 'https://api.zhenmuwang.com/';
const axiosRequest = axios.create();
//在请求超时前，会等待2.5s
axiosRequest.defaults.timeout = 2500;
//post请求需要解决同源策略
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axiosRequest
