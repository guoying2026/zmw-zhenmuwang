import axios from 'axios'

//创建axios实例
axios.defaults.baseURL = 'https://api.jinrongwan.cn/';
const axiosRequest = axios.create();
//在请求超时前，会等待2.5s
axiosRequest.defaults.timeout = 2500;
export default axiosRequest
