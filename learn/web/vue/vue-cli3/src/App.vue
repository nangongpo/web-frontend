<template>
  <div id="app">
    <h2 class="inline"><img src="./assets/images/logo.png"><span>ue基础操作</span></h2>
    <ul class="navBox">
      <li v-for="item in componentsList" :key="item.id" :class="{active: isActive === item.path}" @click="jumpTo(item)">
        {{ item.path.split('/')[1] }}
      </li>
    </ul>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      componentsList: this.$router.options.routes,
      isActive: ''
    }
  },
  methods: {
    jumpTo (item) {
      this.$router.push(item.path)
      this.isActive = item.path
      sessionStorage.setItem('path', item.path)
    }
  },
  mounted () {
    // 获得上次选中
    let path = sessionStorage.getItem('path')
    if (path) {
      this.isActive = path
      this.$router.push(path)
    } else {
      // 默认选中第一个，高亮显示
      this.isActive = this.componentsList[0]
      // 选中第一个的结果
      this.$router.push(this.componentsList[0].path)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main {
  margin: 10px auto;
}
.inline {
  display: inline-block;
}
h2 {
  height: 30px;
}
h2 img {
  width: 25px;
  height: 30px;
  vertical-align: top;
}
h2 span {
  margin-left: -3px;
}
.navBox {
  list-style-type: none;
  padding: 0;
}
.navBox li {
  display: inline-block;
  margin: 0 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgb(68, 175, 251);
  color: #ffffff;
  cursor: pointer;
  font-weight: bolder;
  cursor: pointer;
}
.navBox li:hover {
  background-color: gray;
}
.navBox li.active {
  background-color: gray;
}
a {
  color: #000000;
  text-decoration: none;
}
.button {
  display: inline-block;
  margin: 5px 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgb(68, 175, 251);
  color: #ffffff;
  outline: 0;
  cursor: pointer;
  font-weight: bolder;
  cursor: pointer;
}
hr {
  margin: 0;
  padding: 0;
}
</style>
