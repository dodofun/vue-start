/***
 * Main Mutations
 */
import Vue from 'vue'
import * as types from './mutationTypes'

export default {
  // 更新 state
  [types.UPDATE_STATE] (state: any = {}, { obj, prop, value }: any) {
    console.log(obj, prop, value, state.user.user)
    Vue.set(obj, prop, value)
  }
}
