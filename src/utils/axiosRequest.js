import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:11112/';
// axios.defaults.baseURL = 'https://api.zhenmuwang.com/';
//创建axios实例
const axiosRequest = axios.create();
//在请求超时前，会等待2.5s
axiosRequest.defaults.timeout = 2500;
axiosRequest.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded';
export default axiosRequest
