import axiosRequestTest from "../utils/axiosRequestTest.js";

//获取问答列表接口
export const questionListApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/Question/questionList",
        method: 'get',
        params: data,
    })
}
//发布问题接口
export const publishQuestionApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/Question/publishQuestion",
        method: 'post',
        data
    })
}
//发布回答接口
export const publishAnswerApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/Question/publishAnswer",
        method: 'post',
        data
    })
}
//有用接口
export const usefulAnswerApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/Question/usefulAnswer",
        method: 'post',
        data
    })
}
//没用接口
export const uselessAnswerApi = (data) => {
    return axiosRequestTest({
        url: '/Pc/Question/uselessAnswer',
        method: 'post',
        data
    })
}
//取消说有用还是没用接口
export const cancelAnswerApi = (data) => {
    return axiosRequestTest({
        url: '/Pc/Question/cancelAnswer',
        method: 'post',
        data
    })
}
