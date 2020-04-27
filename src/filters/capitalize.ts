import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

/***
 * 使用：先注册，后使用
 * <!-- 在双花括号中 -->
 * {{ message | capitalize }}
 *
 * <!-- 在 `v-bind` 中 -->
 * <div v-bind:msg="message | capitalize"></div>
 *
 */
