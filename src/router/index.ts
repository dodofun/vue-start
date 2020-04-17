import { createRouter, createWebHistory } from 'vue-router'
import common from './common'

const routes = [
  ...common
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
