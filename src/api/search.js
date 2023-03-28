import axiosRequest from '../utils/axiosRequest.js'

export const searchApi = (data) => {
  return axiosRequest({
    url: '/Pc/Index/search',
    method: 'get',
    params: data,
  })
}

/**
 * 
 * @param {Object} data 
 * @param {('0'|'1'|'2')} data.type
 * @param {string} data.name
 * @param {number} data.page
 * @param {number} [data.size]
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getSearchResultApi = (data) => {
  return axiosRequest({
    url: '/Pc/Index/getSearchResult',
    method: 'get',
    params: data,
  })
}