/* jshint esversion: 11 */
/* jshint proto: true */
/* jshint asi: true */
import { ref, watchEffect } from 'vue'

/**
 * @param {String} name 
 * @param {any?=[]} value 
 * @returns {ref}
 * @module common/useStorage
 */
const useStorage = (name, value = []) => {
  let data = ref(JSON.parse(localStorage.getItem(name)) || value)
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  }, {
    flush: 'sync', // 选项参数 flush 指定回调函数的执行时机
    immediate: true, // 选项参数 immediate 指定回调是否需要立即执行
    deep: true, // 选项参数 deep 指定是否递归读取响应式数据
    isMultiSource: true, // 选项参数 isMultiSource 指定是否使用多个源
  })
  return data
}

/**
 * @param {String} cookieStr
 * @returns {Object}
 */
const parseCookie = (cookieStr) => {
  let result = {}
  cookieStr.split(";").forEach(item => {
    let eqOperatorIndex = item.indexOf('=')
    result[item.substring(0, eqOperatorIndex).trim()] = item.substring(eqOperatorIndex + 1)
  })
  return result
}

/**
 * @param {String} name
 * @param {any?=""} value
 * @param {Number?=0} exdays
 * @param {String?=/} path
 * @returns {ref}
 * @module common/useCookie
 */
const useCookie = (name, value = "", exdays = 0, path = '/') => {
  let cookies = ref(parseCookie(document.cookie)[name] || value)
  watchEffect(() => {
    let d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toGMTString()
    document.cookie = name + '=' + cookies.value + ';' + expires + ';path=' + path
  }, {
    flush: 'sync', // 选项参数 flush 指定回调函数的执行时机
    immediate: false, // 选项参数 immediate 指定回调是否需要立即执行
    deep: true, // 选项参数 deep 指定是否递归读取响应式数据
    isMultiSource: true, // 选项参数 isMultiSource 指定是否使用多个源
  })
  return cookies
}

/**
 * 环境变量定义在项目根目录 vitee.config.js 文件 define.process.env
 * @returns {('develop'|'release')}
 * @module common/useEnv
 */
const getEnv = () => {
  return process.env.VITE_APP_ENV
}

/**
 * 获取api接口地址
 * @returns {String}
 * @module common/getApiBase
 */
const getApiBase = () => {
  const env = getEnv()
  switch (env) {
    case 'develop':
      return 'https://api.jinrongwan.cn/'
    case 'release':
      return 'https://api.jinrongwan.cn/'
    default:
      return 'https://api.jinrongwan.cn/'
  }
}

/**
 * @typedef {Object} res
 * @property {String|Object|Arraybuffer} res.data
 * @property {Number} res.statusCode
 * @property {Object} res.header
 * @property {Array<String>} res.cookies
 * @property {Object} res.profile
 * 
 * @typedef {Object} err
 * @property {String} err.errMsg
 * @property {Number} err.errno
 * 
 * @typedef {Object} RequestOption
 * @property {String} RequestOption.url
 * @property {String|Object|ArrayBuffer} RequestOption.data
 * @property {Object} RequestOption.header
 * @property {Number} RequestOption.timeout
 * @property {('get'|'post')} [RequestOption.method='get']
 * @property {('text'|'json')} [RequestOption.dataType='json']
 * @property {('text'|'json'|'blob'|'arrayBuffer'|'formData')} RequestOption.responseType
 * @property {function(res):void} [RequestOption.success=(res)=>{}]
 * @property {function(err):void} [RequestOption.fail=(err)=>{}]
 * @property {function(err):void} [RequestOption.complete=(err)=>{}]
 * @property {('include'|'omit'|'same-origin')} [RequestOption.credentials]
 * @property {('cors'|'navigate'|'no-cors'|'same-origin')} [RequestOption.mode]
 * @property {('default'|'no-store'|'reload'|'no-cache'|'force-cache'|'only-if-cached')} [RequestOption.cache]
 * @property {('follow'|'error'|'manual')} [RequestOption.redirect]
 * @property {('no-referrer'|'client')|String} [RequestOption.referrer]
 * @property {('no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'unsafe-url')} [RequestOption.referrerPolicy]
 * 
 * @param {RequestOption} object 
 * @returns 
 * @module common/useRequest
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API | Fetch API - Web API 接口参考 | MDN}
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/fetch | fetch() - Web API 接口参考 | MDN}
 * @example
 * ```
 * import { useRequest } from '@/utils/common.js'
 * let requestTask = useRequest({
 *  url: 'URL',
 *  method: 'GET',
 *  data: {
 *    user_id: 123
 *  },
 *  success: res => {
 *    console.log(res)
 *  },
 *  fail: err => {
 *    console.log(err)
 *  },
 *  complete: () => {
 *    // doing nothing...
 *  },
 * })
 * requestTask.cancel()
 * ```
 */
const useRequest = (object) => {
  const isLoading = ref(false)
  const result = ref(null)
  const isError = ref(false)
  const isSuccess = ref(false)
  const isCancelled = ref(false)
  const requestTimer = ref('')
  const responseType = ref('')
  const status = ref('')
  const statusText = ref('')
  const headers = ref(null)
  let controller //中止请求
  let signal

  // 定义函数参数默认值 start
  if (!object.hasOwnProperty('url')) {
    object.url = ''
  }

  if (!object.hasOwnProperty('data')) {
    object.data = ''
  }

  if (!object.hasOwnProperty('header')) {
    object.header = {}
  }

  if (!object.hasOwnProperty('timeout')) {
    object.timeout = 60000
  }

  if (!object.hasOwnProperty('method')) {
    object.method = 'get'
  }

  if (!object.hasOwnProperty('dataType')) {
    object.dataType = 'json'
  }

  if (!object.hasOwnProperty('responseType')) {
    object.responseType = ''
  }

  if (!object.hasOwnProperty('success')) {
    object.success = res => { }
  }

  if (!object.hasOwnProperty('fail')) {
    object.fail = err => { }
  }

  if (!object.hasOwnProperty('complete')) {
    object.complete = err => { }
  }
  // 定义函数参数默认值 end

  // 定义中止控制器 start
  // 用于中止请求
  if (AbortController.constructor.name !== undefined) {
    controller = new AbortController()
    signal = controller.signal
  }
  // 定义中止控制器 end

  /**
   * 处理请求
   */
  function requestHandler() {
    const begin = Date.now()
    const delayLoadingTimer = setTimeout(() => isLoading.value = true, 50)

    if (!object.hasOwnProperty('options')) {
      /**
       * 配置项对象，包括所有对请求的设置
       * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/fetch|fetch() - Web API 接口参考 | MDN}
       */
      object.options = {}
    }

    if (!object.options.hasOwnProperty('headers')) {
      object.options.headers = {}
    }

    if (object.hasOwnProperty('headers')) {
      object.options.headers = object.header
    }

    if (object.hasOwnProperty('method')) {
      object.options.method = object.method.toLocaleUpperCase()
    }

    if (object.hasOwnProperty('credentials')) {
      object.options.credentials = object.credentials
    }

    if (object.hasOwnProperty('mode')) {
      object.options.mode = object.mode
    }

    if (object.hasOwnProperty('cache')) {
      object.options.cache = object.cache
    }

    if (object.hasOwnProperty('redirect')) {
      object.options.redirect = object.redirect
    }

    if (object.hasOwnProperty('referrer')) {
      object.options.referrer = object.referrer
    }

    if (object.hasOwnProperty('referrerPolicy')) {
      object.options.referrerPolicy = object.referrerPolicy
    }

    switch (object.method.toLocaleLowerCase().trim()) {
      case 'get':
        let args = ''
        if (typeof object.data == 'string') {
          args = object.data
        } else {
          for (const arg in object.data) {
            args += arg + '=' + object.data[arg] + '&'
          }
          args = args.slice(0, args.length - 1)
        }
        if (args.length > 0) {
          if (object.url.includes('?') && object.url.indexOf('?') < object.url.length - 1) {
            args = '&' + args
          } else if (!object.url.includes('?')) {
            args = '?' + args
          }
        }
        object.url = object.url + args
        break
      case 'post':
        let body = ''
        if (object.options.body) {
          body = object.options.body
        }
        if (body.length > 0) {
          body += '&'
        }
        if (typeof object.data == 'string') {
          body += object.data
        } else {
          for (let arg in object.data) {
            body += arg + '=' + object.data[arg] + '&'
          }
          body = body.slice(0, body.length - 1)
        }
        object.options.body = body
        object.options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        if (object.header.hasOwnProperty('Content-Type')) {
          object.options.headers['Content-Type'] = object.header['Content-Type']
        }
        if (object.header.hasOwnProperty('content-type')) {
          object.options.headers['Content-Type'] = object.header['content-type']
        }
        break
    }

    if (object.hasOwnProperty('dataType') && object.dataType.toLocaleLowerCase().trim() == 'json') {
      object.options.headers['Content-Type'] = 'application/json'
    }

    fetch((object.url || ''), { signal, ...(object.options || {}) }).then(res => {
      const timestamp = Date.now() - begin

      if (isCancelled.value) return
      if (timestamp < 50) clearTimeout(delayLoadingTimer)
      if (timestamp < 5000) clearTimeout(requestTimer.value)

      isSuccess.value = res.ok
      status.value = res.status
      statusText.value = res.statusText
      responseType.value = res.type

      const responseHeaders = {}
      res.headers.forEach((value, key) => {
        responseHeaders[key] = value
      })
      headers.value = responseHeaders

      let responseContent = null
      if (object.hasOwnProperty('responseType') && object.responseType.trim().length > 0) {
        switch (object.responseType.toLocaleLowerCase()) {
          case 'text':
            responseContent = res.text()
            break
          case 'json':
            responseContent = res.json()
            break
          case 'blob':
            responseContent = res.blob()
            break
          case 'arraybuffer':
            responseContent = res.arrayBuffer()
            break
          case 'formdata':
            responseContent = res.formData()
            break
          default:
            responseContent = res.text()
            break
        }
      } else {
        const isJson = ['application/json'].includes(res.headers.get('content-type')?.split(';')[0])
        const isHTML = (/text\/+/gim).test(res.headers.get('content-type')?.split(';')[0])
        if (isJson) responseContent = res.json()
        else if (isHTML) responseContent = res.text()
        else responseContent = res.arrayBuffer()
      }
      return responseContent
    })
      .then(data => {
        result.value = data
        if (object.success) {
          object.success({
            data: data,
            statusCode: status.value,
            header: headers.value,
            cookies: {},
            profile: {},
          })
        }
      })
      .catch(err => {
        isError.value = true
        if (object.fail) {
          object.fail({
            errMsg: err.reason,
            errno: 1,
          })
        }
      })
      .finally(() => {
        isLoading.value = false
        if (object.complete) {
          object.complete({
            errMsg: '',
            errno: isError.value ? 1 : 0,
          })
        }
      })
  }

  /**
   * 初始化请求
   */
  function request() {
    if (isSuccess.value) isSuccess.value = false
    if (isCancelled.value) isCancelled.value = false
    /*if(controller) { 
          controller.abort() 
          controller = new AbortController()
          signal = controller.signal
    */
    requestHandler()
    requestTimer.value = setTimeout(() => {
      clearTimeout(requestTimer.value)
      cancel()
    }, object.timeout || 60000)
  }

  /**
   * 中止请求
   */
  function cancel() {
    clearTimeout(requestTimer.value)
    isCancelled.value = true
    isLoading.value = false

    if (controller) controller.abort()
  }

  Promise.resolve(request())
  return {
    result,
    isLoading,
    request,
    cancel,
    isSuccess,
    isError,
    headers,
    status,
    statusText,
    responseType
  }
}

export default {
  useStorage,
  useCookie,
  getEnv,
  getApiBase,
  useRequest,
}
