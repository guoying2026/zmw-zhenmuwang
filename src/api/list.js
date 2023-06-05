import axiosRequest from '../utils/axiosRequest.js'

export const getIndexDataApi = (data) => {
    return axiosRequest({
        url: '/Pc/Index/getIndexData',
        method: 'get',
        params: data,
    })
}

export const getCountsApi = () => {
    return axiosRequest({
        url: '/Pc/Index/getCounts',
        method: 'get',
    })
}

export const getRankingListApi = (data, controller = new AbortController()) => {
    return axiosRequest({
        url: '/Pc/Index/getRankingList',
        method: 'get',
        params: data,
        signal: controller.signal,
    })
}
