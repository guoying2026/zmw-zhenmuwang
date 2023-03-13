import axiosRequest from '../utils/axiosRequest.js'

/**
 * 获取商品详情信息
 * @param {Object} data
 * @param {string|number} data.goods_id
 * @param {('0'|'1')} data.type
 * @param {string|number} [data.user_id]
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getGoodsDetailApi = (data) => {
  return axiosRequest({
    url: 'Pc/Goods/getDetail',
    method: 'get',
    params: data
  })
}

/**
 * 收藏商品
 * @param {Object} data
 * @param {string|number} data.goods_id
 * @param {('0'|'1')} data.type
 * @param {string|number} data.user_id
 * @param {string} data._token
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const addCollectApi = (data) => {
  return axiosRequest({
    url: 'Pc/Goods/addCollect',
    method: 'post',
    params: data
  })
}

/**
 * 取消收藏商品
 * @param {Object} data
 * @param {string|number} data.goods_id
 * @param {('0'|'1')} data.type
 * @param {string|number} data.user_id
 * @param {string} data._token
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const cancelCollectApi = (data) => {
  return axiosRequest({
    url: 'Pc/Goods/cancelCollect',
    method: 'post',
    params: data
  })
}
