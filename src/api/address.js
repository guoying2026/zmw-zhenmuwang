/**
 * @Author: joytou
 * @Date: 2023-03-16
 * @LastEditors: joytou
 * @LastEditTime: 2023-03-18
 * @FilePath: /zmw-zhenmuwang/src/api/address.js
 * @Description: 
 */
import axiosRequest from "../utils/axiosRequest.js"

/**
 * 设置默认收货地址
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {string|number} data.a_id
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const setDefaultAddressApi = (data) => {
  return axiosRequest({
    url: 'Pc/Address/setDefault',
    method: 'get',
    params: data,
  })
}

/**
 * 新增收货地址
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {string} data.name
 * @param {string} data.mobile_phone
 * @param {string?} data.province
 * @param {string?} data.city
 * @param {string?} data.area
 * @param {string} data.address_detailed
 * @param {string?} data.house_number
 * @param {('0'|'1')} data.is_default
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const addAddressApi = (data) => {
  data.is_edit = '0'
  return axiosRequest({
    url: 'Pc/Address/changeAddress',
    method: 'get',
    params: data,
  })
}

/**
 * 更新收货地址
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {string|number} data.a_id
 * @param {string} data.name
 * @param {string} data.mobile_phone
 * @param {string?} data.province
 * @param {string?} data.city
 * @param {string?} data.area
 * @param {string} data.address_detailed
 * @param {string?} data.house_number
 * @param {('0'|'1')} data.is_default
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const editAddressApi = (data) => {
  data.is_edit = '1'
  return axiosRequest({
    url: 'Pc/Address/changeAddress',
    method: 'get',
    params: data,
  })
}

/**
 * 删除收货地址
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {string|number} data.a_id
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const delAddressApi = (data) => {
  return axiosRequest({
    url: 'Pc/Address/delAddress',
    method: 'get',
    params: data,
  })
}

/**
 * 获取收货地址列表
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getAddressListApi = (data) => {
  return axiosRequest({
    url: 'Pc/Address/getAddressList',
    method: 'get',
    params:data,
  })
}

/**
 * 获取收货地址详细信息
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @param {string|number} data.a_id
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getSingleAddressApi = (data) => {
  return axiosRequest({
    url: 'Pc/Address/getSingleAddress',
    method: 'get',
    params: data,
  })
}

/**
 * 获取默认收货地址
 * @param {Object} data 
 * @param {string|number} data.user_id
 * @param {string|number} data.phone
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getDefaultAddressApi = (data) => {
  return axiosRequest({
    url: 'Pc/Address/getDefaultAddress',
    method: 'get',
    params: data,
  })
}