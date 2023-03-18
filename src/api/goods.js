import axiosRequest from '../utils/axiosRequest.js'
import { formatUnit } from '../utils/good.js'

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
 * @param {string} data.phone
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
 * @param {string} data.phone
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const cancelCollectApi = (data) => {
  return axiosRequest({
    url: 'Pc/Goods/cancelCollect',
    method: 'post',
    params: data
  })
}

/**
 * 获取商品价格(通过指定规格和数量)
 * @typedef SpecItem
 * @type {Object}
 * @property {string} SpecItem.s_id
 * @property {string} SpecItem.spec
 * @property {string|!number} SpecItem.select_count
 * @property {string|!number} SpecItem.count
 * @typedef UnitArr
 * @type {('0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8')}
 * @param {Object} data
 * @param {string|number} data.goods_id
 * @param {SpecItem[]} data.s_id
 * @param {UnitArr} [data.unit]
 * @param {string} [data.order_notes]
 * @returns {Promise<import('axios').AxiosResponse<any,any>>}
 */
export const getGoodsSpecsPriceApi = (data) => {
  if (data.hasOwnProperty('s_id') && typeof data.s_id === 'object') {
    data.s_id = data.s_id.map(item => {
      if (item.is_add_manual == 1) {
        item.specifications = (item.long?item.long:'0')+"cm*"+(item.width?item.width:'0')+"cm*"+(item.height?item.height:'0')+"cm"
      }
      let ret = {
        s_id: item.s_id,
        spec: item.specifications,
        count: item.count,
      }
      if (item.hasOwnProperty('select_count')) {
        ret.count = item.select_count
      }
      return ret
    })
    data.s_id = JSON.stringify(data.s_id)
  }
  return axiosRequest({
    url: 'Pc/Goods/getGoodsSpecsPrice',
    method: 'post',
    data: data,
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 获取商品运费
 * @typedef SpecItem
 * @type {Object}
 * @property {string} s_id
 * @property {string} spec
 * @property {string} count
 * @property {string} count_unit
 * @property {string} is_add_manual
 * @property {string} s_img
 * @property {string} specifications
 * @property {string} goodsnumber
 * @property {string} count_unit_text
 * @property {string} buy_count
 * @property {string} spec_id
 * @property {string} spec_title
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {('0'|'1')} data.type
 * @param {string|number} data.goods_id
 * @param {string|number} data.receive_id
 * @param {string} data.openid
 * @param {string|number} data.p_price
 * @param {SpecItem|SpecItem[]|number} data.s_id
 * @returns {Promise<import('axios').AxiosResponse<any,any>>}
 */
export const getCalcFreightApi = (data) => {
  if (typeof data.s_id === 'object' && data.s_id instanceof Array) {
    data.s_id = data.s_id.map(item => {
      if (item.is_add_manual == 1) {
        item.specifications = item.long+"cm*"+item.width+"cm*"+item.height+"cm"
      }
      console.log(item);
      let _item = {
        buy_count: item.select_count,
        count: item.select_count,
        count_unit: item.count_unit,
        count_unit_text: formatUnit(item.count_unit),
        goodsnumber: item.select_count,
        is_add_manual: item.is_add_manual,
        s_id: item.s_id ? item.s_id : '0',
        s_img: item.s_img,
        spec: item.specifications ? item.specifications : '',
        spec_id: item.s_id ? item.s_id : '0',
        spec_title: item.specifications ? item.specifications : '',
        specifications: item.specifications ? item.specifications : '',
      }
      return _item
    })
  }
  data.s_id = JSON.stringify(data.s_id)
  data.spec_id = data.s_id
  return axiosRequest({
    url: 'Pc/Goods/getFreightPrice',
    method: 'post',
    data: data,
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 下单并生成支付订单
 * @typedef SpecItem
 * @type {Object}
 * @property {number} SpecItem.count
 * @property {srting|number} SpecItem.count_unit
 * @property {('0'|'1')} SpecItem.is_add_manual
 * @property {number} SpecItem.s_id
 * @property {string} SpecItem.s_img
 * @property {string} SpecItem.spec
 * @param {object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {SpecItem[]} data.sid
 * @param {number} data.num
 * @param {string|number} data.goods_id
 * @param {string|number} data.price
 * @param {string|number} data.address_id
 * @param {string} data.freight_title
 * @param {string} [data.order_notes='']
 * @returns {Promise<import('axios').AxiosResponse<any,any>>}
 */
export const submitOrderApi = (data) => {
  data.sid = JSON.stringify(data.sid)
  return axiosRequest({
    url: 'Pc/Goods/submitOrder',
    method: 'post',
    data: data,
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 查询订单支付结果
 * @param {object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {string} data.out_trade_no
 * @returns {Promise<import('axios').AxiosResponse<any,any>>}
 */
export const pollingWxOrderApi = (data) => {
  return axiosRequest({
    url: 'Pc/Goods/polling_wx_order',
    method: 'post',
    data: data,
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    }
  })
}
