import axiosRequest from "../utils/axiosRequest.js";

//获取问答列表接口
export const questionListApi = (data,comment_info_id) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/questionList?comment_info_id="+comment_info_id,
        method: 'get',
        data
    })
}
//发布问答列表接口
export const publishQuestionApi = (data) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/publishQuestion",
        method: 'post',
        data
    })
}
//有用接口
export const likeQuestionApi = (data) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/likeQuestion",
        method: 'post',
        data
    })
}
//没用接口
export const dislikeQuestionApi = (data) => {
    return axiosRequest({
        url: '/Pc/CompanyComment/disLikeQuestion',
        method: 'post',
        data
    })
}
//取消说有用还是没用接口
export const cancelQuestionApi = (data) => {
    return axiosRequest({
        url: '/Pc/CompanyComment/cancelQuestion',
        method: 'post',
        data
    })
}
