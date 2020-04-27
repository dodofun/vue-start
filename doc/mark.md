### 1.用 key 管理可复用的元素
````
key可做到复用，或避免复用
````
### 2.当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级

### 3.data 必须是一个函数
````
一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
如果 Vue 没有这条规则，点击一个按钮就可能会像如下代码一样影响到其它所有实例
````

### 4.动态组件
````
<component v-bind:is="currentTabComponent"></component>
````
### 5.传入一个对象的所有 property
````
post: {
  id: 1,
  title: 'My Journey with Vue'
}

<blog-post v-bind="post"></blog-post>

````
### 6. .sync 修饰符
````
父组件
<text-document v-bind:title.sync="doc.title"></text-document>
子组件
this.$emit('update:title', newTitle)
````
### 7.mixin
````
1.数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
2.同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用
3.值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
````

### 8.指令
````
如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。
````

### 9.函数式组件向子元素或子组件传递 attribute 和事件
````
Vue.component('my-functional-button', {
  functional: true,
  render: function (createElement, context) {
    // 完全透传任何 attribute、事件监听器、子节点等。
    return createElement('button', context.data, context.children)
  }
})
````
