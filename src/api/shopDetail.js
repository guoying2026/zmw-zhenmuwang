import axiosRequest from "../utils/axiosRequest.js";

export const shopDetailApi = (data) => {
    return axiosRequest({
        url: '/Pc/Index/shopDetail',
        method: 'get',
        params: data
    })
}
