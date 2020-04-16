import Vue from 'vue'
import Router from 'vue-router'
import common from './common'

Vue.use(Router)

const routes = [
  ...common
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
