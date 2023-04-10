import axiosRequest from "../utils/axiosRequest.js";

//获取短信验证码接口
export const sendSMSVerificationCodeApi = (data) => {
    return axiosRequest({
        url: '/Pc/User/apiSendSms',
        method: 'post',
        data
    })
}
export const loginApi = (data) => {
    return axiosRequest({
        url: '/Pc/User/login',
        method: 'post',
        data
    })
}
