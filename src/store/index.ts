import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import { debug } from '@/common/common'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createLogger()],
  strict: debug,
  state,
  mutations,
  actions,
  getters,
  modules
})
