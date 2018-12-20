<template>
  <div class="main">
    <h2>自定义全局指令——focus</h2>
    <input v-focus type="text">
    <h2>自定义局部指令——red</h2>
    <input v-mycss type="text">
    <div class="divBox mt-10">
      <ul class="div inline">
        <h3>自定义指令的钩子函数</h3>
        <li v-for="(hook, index) in hookList" :key="index">
          <p><span :title="hook.describe">{{ hook.name }}</span>: {{ hook.describe.slice(0, 22) + '...' }}</p>
        </li>
        <li>
          <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
        </li>
      </ul>
      <ul class="div inline">
        <h3>钩子函数中的参数</h3>
        <li v-for="(param, index) in paramsList" :key="index">
          <div>
            <p><span :title="param.describe">{{ param.name }}</span>: {{ param.describe.slice(0, 22) + '...' }}</p>
            <ul>
              <li v-for="(item, index) in param.childrens" :key="index">
                <p><span :title="item.describe">{{ item.name }}</span>: {{ item.describe.slice(0, 22) + '...' }}</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Directives',
  data () {
    return {
      message: 'hello!',
      hookList: [
        {name: 'bind', describe: '只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置'},
        {name: 'inserted', describe: '被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)'},
        {name: 'update', describe: '所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新'},
        {name: 'componentUpdated', describe: '指令所在组件的 VNode 及其子 VNode 全部更新后调用'},
        {name: 'unbind', describe: '只调用一次，指令与元素解绑时调用'}
      ],
      paramsList: [
        {name: 'el', describe: '指令所绑定的元素，可以用来直接操作 DOM'},
        {
          name: 'binding',
          describe: '一个对象，包含以下属性',
          childrens: [
            {name: 'name', describe: '指令名，不包括 v- 前缀'},
            {name: 'value', describe: '指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2'},
            {name: 'oldValue', describe: '指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用'},
            {name: 'expression', describe: '字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"'},
            {name: 'arg', describe: '传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"'},
            {name: 'modifiers', describe: '一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }'}
          ]
        },
        {name: 'vnode', describe: 'Vue 编译生成的虚拟节点'},
        {name: 'oldVnode', describe: '上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用'}
      ]
    }
  },
  directives: {
    mycss: {
      // 定义的指令
      inserted: function (el) {
        el.style.color = 'red'
      }
    },
    // 自定义钩子样例  —— 除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行
    demo: {
      bind: function (el, binding, vnode) {
        let s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br>' +
          'value: ' + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: ' + s(binding.arg) + '<br>' +
          'modifiers: ' + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    }
  }
}
</script>
<style scoped>
.divBox {
  vertical-align: middle;
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.divBox li {
  text-align: left;
}
.divBox li span {
  cursor: default;
}
.div{
  display: inline-block;
  width: 440px;
  height: 480px;
  border: 1px solid #ddd;
}
.mt-10 {
  margin-top: 10px;
}
</style>
