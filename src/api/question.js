import axiosRequest from "../utils/axiosRequest.js";

//获取问答列表接口
export const questionListApi = (data,comment_info_id) => {
    return axiosRequest({
        url: "/Pc/CompanyComment/questionList?comment_info_id="+comment_info_id,
        method: 'get',
        data
    })
}
