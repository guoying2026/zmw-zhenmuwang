import axiosRequest from '../utils/axiosRequest.js'

export const tailCargoList = (data) => {
    return axiosRequest({
        url: '/Mobile/GroupPurchase/tailCargoList',
        method: 'get',
        data
    })
}

export const getIndexDataApi = (data) => {
    return axiosRequest({
        url: '/Pc/Index/getIndexData',
        method: 'get',
        params: data,
    })
}