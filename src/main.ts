import './utils/class-component-hooks'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './router/hooks'
import store from './store'
import { errorHandler } from '@/utils/error-hander'

Vue.config.errorHandler = errorHandler
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
