import axiosRequest from "../utils/axiosRequest.js";

//获取短信验证码接口
export const sendSMSVerificationCodeApi = (data) => {
    return axiosRequest({
        url: '/Pc/User/apiSendSms',
        method: 'post',
        data: data,
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    })
}
export const loginApi = (data) => {
    return axiosRequest({
        url: '/Pc/User/login',
        method: 'post',
        data: data,
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    })
}
