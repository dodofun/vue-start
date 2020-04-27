import Vue from 'vue'

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
  bind (el, binding, vnode) {

  },
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
  inserted (el, binding, vnode) {
    // 聚焦元素
    el.focus()
  },
  // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
  update (el, binding, vnode, oldVnode) {

  },
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  componentUpdated (el, binding, vnode, oldVnode) {

  },
  // 只调用一次，指令与元素解绑时调用。
  unbind (el, binding, vnode) {

  }
})
