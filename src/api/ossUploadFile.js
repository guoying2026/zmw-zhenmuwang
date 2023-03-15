//获得Oss加密信息
import axiosRequest from "../utils/axiosRequest.js";

export const getAnswerOssSignatureApi = (data) => {
    return axiosRequest({
        url: '/Mobile/Index/getAnswerOssSignature',
        method:'post',
        data
    })
}
//上传到oss文件的api,
export const pushAnswerOssApi = (url,data) => {
    return axiosRequest({
        url: url,
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data
    })
}
