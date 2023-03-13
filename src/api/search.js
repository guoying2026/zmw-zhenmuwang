import axiosRequest from '../utils/axiosRequest.js'

export const getSearchResultApi = (data) => {
  return axiosRequest({
    url: '/Pc/Index/search',
    method: 'get',
    params: data,
  })
}