/***
 * 异常捕获
 * @param error
 * @param vm
 */
export const errorHandler = (error, vm, info) => {
  console.error('抛出全局异常')
  console.error(error)
  console.error(vm)
  console.error(info)
}
