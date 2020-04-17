/***
 * Main Actions
 */
import * as types from './mutationTypes'
import router from '../router'
import * as apis from '@/common/apis'
import * as http from '@/resource/httpClient'

// 路由切换
export const changeRouter = async ({ commit }, payload) => {
  router.push({ name: payload.name, path: payload.path })
}

// 更新State
export const updateState = async ({ commit }, payload) => {
  commit(types.UPDATE_STATE, { obj: payload.obj, prop: payload.prop, value: payload.value })
}

// 添加日志
export const createJournal = async ({ commit }, payload) => {
  const journal = payload.journal
  let params = ''
  if (journal) {
    for (const key in journal) {
      params = params.concat(`&${key}=${journal[key]}`)
    }
  }
  const url = `${apis.JOURNAL_API_URL}${params}`
  return http.get(url, null, null)
}

/** **************************************************** 公用方法 ************************************************************ **/
