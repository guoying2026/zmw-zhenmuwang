import axiosRequest from "../utils/axiosRequest.js";

//获取评论列表接口
export const commentListApi = (data) => {
    return axiosRequest({
        url: "PC/CompanyComment/ceshi_guoying",
        method: 'get',
        data
    })
}
