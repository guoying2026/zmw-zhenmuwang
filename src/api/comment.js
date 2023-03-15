import axiosRequest from "../utils/axiosRequest.js";

//获取评论列表接口
export const commentListApi = (data,comment_info_id) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/companyComment?comment_info_id="+comment_info_id,
        method: 'get',
        data
    })
}
//评论的点赞接口
export const likedCommentApi = (data) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/likedComment",
        method: 'post',
        data
    })
}
//评论的取消点赞接口
export const dislikedCommentApi = (data) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/dislikedComment",
        method: 'post',
        data
    })
}
//回复点赞接口
export const likedCommentReplyApi = (data) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/likedCommentReply",
        method: 'post',
        data
    })
}
//回复取消点赞接口
export const dislikedCommentReplyApi = (data) => {
    return axiosRequest({
        url: '/Pc/CompanyComment/dislikedCommentReply',
        method: 'post',
        data
    })
}
//发布评论接口
export const publishCommentApi = (data) => {
    return axiosRequest({
        url: '/Pc/CompanyComment/publishComment',
        method:'post',
        data
    })
}

