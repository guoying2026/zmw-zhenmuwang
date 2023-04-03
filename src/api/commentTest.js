import axiosRequestTest from "../utils/axiosRequestTest.js";

//获取评论列表接口
export const commentListApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/CompanyComment/companyCommentList",
        method: 'get',
        params: data,
    })
}
//评论的点赞接口
export const likedCommentApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/CompanyComment/likedComment",
        method: 'post',
        data
    })
}
//评论的取消点赞接口
export const dislikedCommentApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/CompanyComment/dislikedComment",
        method: 'post',
        data
    })
}
//回复点赞接口
export const likedCommentReplyApi = (data) => {
    return axiosRequestTest({
        url: "/Pc/CompanyComment/likedCommentReply",
        method: 'post',
        data
    })
}
//回复取消点赞接口
export const dislikedCommentReplyApi = (data) => {
    return axiosRequestTest({
        url: '/Pc/CompanyComment/dislikedCommentReply',
        method: 'post',
        data
    })
}
//发布评论接口
export const publishCommentApi = (data) => {
    return axiosRequestTest({
        url: '/Pc/CompanyComment/publishComment',
        method:'post',
        data
    })
}
//发布回复接口
export const publishCommentReplyApi = (data) => {
    return axiosRequestTest({
        url: '/Pc/CompanyComment/publishCommentReply',
        method:'post',
        data
    })
}

