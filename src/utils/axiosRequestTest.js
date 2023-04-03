import axios from "axios";

axios.defaults.baseURL = 'http://localhost:11112/';
//创建axios实例
const axiosRequestTest = axios.create();
//在请求超时前，会等待2.5s
axiosRequestTest.defaults.timeout = 2500;
axiosRequestTest.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded';
export default axiosRequestTest
