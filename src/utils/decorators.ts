// 自定义装饰器
import { createDecorator } from 'vue-class-component'

/***
 * computed 禁止缓存
 * @type {VueDecorator}
 */
export const NoCache = createDecorator((options: any, key: string) => {
  options.computed[key].cache = false
})
