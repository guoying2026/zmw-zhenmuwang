import axiosRequest from "../utils/axiosRequest.js";

//发布投诉接口
export const publishBrokenRecordApi = (data) => {
    return axiosRequest({
        url: '/Pc/BrokenRecord/publishBrokenRecord',
        method:'post',
        data: data,
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    })
}
//查询投诉列表根据companyInfoId
export const brokenRecordListByCompanyInfoIdApi = (data) => {
    return axiosRequest({
        url: '/Pc/BrokenRecord/brokenRecordListByCompanyInfoId',
        method: 'get',
        params: data
    })
}
//查询投诉列表根据userId
export const brokenRecordListByUserIdApi = (data) => {
    return axiosRequest({
        url: '/Pc/BrokenRecord/brokenRecordListByUserId',
        method: 'get',
        params: data
    })
}
