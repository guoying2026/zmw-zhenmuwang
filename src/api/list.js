import axiosRequest from '../utils/axiosRequest.js'

export const tailCargoList = (data) => {
    return axiosRequest({
        url: '/Mobile/GroupPurchase/tailCargoList',
        method: 'get',
        data
    })
}

export const getIndexData = (data, paramStr='') => {
    return axiosRequest({
        url: '/Pc/Index/getIndexData' + (paramStr.trim().length > 0 ? '?' : '') + paramStr,
        method: 'get',
        data
    })
}