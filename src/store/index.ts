import Vuex from 'vuex'
import modules from './modules'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import { debug } from '@/common/common'

export default Vuex.createStore({
  strict: debug,
  state,
  mutations,
  actions,
  getters,
  modules
})
