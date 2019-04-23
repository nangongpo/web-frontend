<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <button class="button" @click="handleClick">v-show的使用</button>
    <div v-show="show">
      <p>{{ msg }}</p>
      <p v-html="hello"></p>
      <p v-text="hello"></p>
      <span v-bind:class="myStyle">绑定class</span>
      <p>{{ msg.split('Your')[1] }}</p>
    </div>
    <div class="ifBox">
      <h2>v-if/v-else-if/v-else的使用</h2>
      <div>
        code: <input type="text" v-model="code" size="30" placeholder="请输入code值(0, 1)">
      </div>
      <div v-if="code == 0">
        <h3>code = 0</h3>
        <a href="http://www.baidu.com">百度搜索0</a>
      </div>
      <div v-else-if="code == 1">
        <h3>code = 1</h3>
        <a href="http://www.baidu.com">百度搜索1</a>
      </div>
      <div v-else>
        <h3>其他隐藏</h3>
        <a href="http://www.baidu.com">百度搜索3</a>
      </div>
    </div>
    <div>
      <h2>v-for的使用</h2>
      <ul class="ulBox">
        <li v-for="item in userList" :key="item.id">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
    </div>
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
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: gray;
  color: #ffffff;
  font-weight: bold;
}
a {
  color: rgb(68, 175, 251);
  text-decoration: none;
  font-weight: bolder;
}
.ulBox {
  margin: 0 auto;
}
.ifBox {
  height: 210px;
  border: 1px solid #000000;
}
.ifBox a {
  margin-top: 5px;
}
.myColor {
  color: red;
}
</style>
