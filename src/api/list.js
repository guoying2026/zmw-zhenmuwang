import axiosRequest from '../utils/axiosRequest.js'

export const getIndexDataApi = (data) => {
    return axiosRequest({
        url: '/Pc/Index/getIndexData',
        method: 'get',
        params: data,
    })
}
