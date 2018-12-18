<template>
  <div class="hello">
    <div v-show="show">
      <p>{{ msg }}</p>
      <p v-html="hello"></p>
      <p v-text="hello"></p>
      <span v-bind:class="myStyle">绑定class</span>
      <p>{{ msg.split('Your')[1] }}</p>
    </div>
    <div class="ifBox">
      <div v-if="code === 0">
        <h1>code为0</h1>
        <a href="www.baidu.com">百度搜索0</a>
      </div>
      <div v-else-if="code === 1">
        <h1>code为1</h1>
        <a href="www.baidu.com">百度搜索1</a>
      </div>
      <div v-else>
        <h1>隐藏</h1>
        <a href="www.baidu.com">百度搜索3</a>
      </div>
    </div>
    <div>
      <ul class="ulBox">
        <li v-for="item in userList" :key="item.id">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
    </div>
    <button @click="handleClick">ClickMe</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello: 'Hello Vue!',
      myStyle: 'myColor',
      show: false,
      code: 0,
      userList: [
        {uid: '0001', name: 'li', age: '24'},
        {uid: '0002', name: 'ji', age: '22'}
      ]
    }
  },
  methods: {
    handleClick () {
      alert('你点击了我！')
      this.show = !this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 2px;
  border-radius: 2px;
  border: 1px solid #000000;
}
a {
  color: #42b983;
}
.hello {
  width: 960px;
  margin: 0 auto;
}
.ulBox {
  text-align: left;
}
.ifBox {
  border: 1px solid #000000;
}
.myColor {
  color: red;
}
</style>
