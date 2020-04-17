/***
 * 自定义装饰器
 */
import { createDecorator } from 'vue-class-component'
import Vue, { ComponentOptions } from 'vue'

/***
 * computed 禁止缓存
 * @type {VueDecorator}
 */
export const NoCache = createDecorator((options: any, key: string) => {
  options.computed[key].cache = false
})

// Declare Log decorator.
export const Log = createDecorator((options: ComponentOptions<Vue>, key: string) => {
  console.log('options', options, key)
  // Keep the original method for later.
  // @ts-ignore
  const originalMethod = options.methods[key]
  // Wrap the method with the logging logic.
  // @ts-ignore
  options.methods[key] = function wrapperMethod(...args) {
    // Print a log.
    console.log(`Invoked: ${key}(`, ...args, ')')
    // Invoke the original method.
    originalMethod.apply(this, args)
  }
})
