/** ************************************** API host ************************************** **/

export const apiHost = process.env.VUE_APP_API_HOST
export const JOURNAL_API_URL = process.env.VUE_APP_JOURNAL_API_URL

/** ************************************** 接口组装 ************************************** **/

/***
 * 接口
 * @param url 接口地址
 * @returns {*}
 */
export function api (url: string) {
  return apiHost + url
}

/** ************************************** API 列表 ************************************** **/

const VERSION = '/v1.0'

/**
 * 用户登录
 * @type {string}
 */
export const LOGIN = VERSION + '/authenticate/login'
