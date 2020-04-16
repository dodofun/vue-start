import router from './index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const whiteList = ['/'] // 不需要权限验证拦截的白名单路由

router.beforeEach(async (to, from, next) => {
  console.log('beforeEach to', to)
  NProgress.start() // 开启Progress
  // TODO 业务处理
  next()
})

router.afterEach((route) => {
  console.log('afterEach route', route)
  NProgress.done() // 结束Progress
})
