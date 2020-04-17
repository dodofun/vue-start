import router from './index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'
import { analyticsEvent } from '@/utils/analytics' // Progress 进度条样式

const whiteList = ['/'] // 不需要权限验证拦截的白名单路由

router.beforeEach(async (to, from, next) => {
  console.log('beforeEach to', to)
  analyticsEvent('view_page', {page: to.fullPath})
  NProgress.start() // 开启Progress
  // TODO 业务处理
  next()
})

router.afterEach((route) => {
  console.log('afterEach route', route)
  NProgress.done() // 结束Progress
})
