import axiosRequest from "../utils/axiosRequest.js";

//获取问答列表接口
export const questionListApi = (data) => {
    return axiosRequest({
        url: "/Pc/Question/questionList",
        method: 'get',
        params: data,
    })
}
//发布问题接口
export const publishQuestionApi = (data) => {
    return axiosRequest({
        url: "/Pc/Question/publishQuestion",
        method: 'post',
        data
    })
}
//发布回答接口
export const publishAnswerApi = (data) => {
    return axiosRequest({
        url: "/Pc/Question/publishAnswer",
        method: 'post',
        data
    })
}
//有用接口
export const usefulAnswerApi = (data) => {
    return axiosRequest({
        url: "/Pc/Question/usefulAnswer",
        method: 'post',
        data
    })
}
//没用接口
export const uselessAnswerApi = (data) => {
    return axiosRequest({
        url: '/Pc/Question/uselessAnswer',
        method: 'post',
        data
    })
}
//取消说有用还是没用接口
export const cancelAnswerApi = (data) => {
    return axiosRequest({
        url: '/Pc/Question/cancelAnswer',
        method: 'post',
        data
    })
}
