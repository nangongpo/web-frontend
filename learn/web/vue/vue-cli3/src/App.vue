<template>
  <div id="app">
    <div id="particles">
    </div>
    <h2 class="inline"><img src="./assets/images/logo.png"><span>ue基础操作</span></h2>
    <hr>
    <div class="layout">
      <ul class="navBox">
        <li v-for="item in componentsList" :key="item.id" :class="{active: isActive === item.path}" @click="jumpTo(item)">
          {{ item.path.split('/')[1] }}
        </li>
      </ul>
      <div class="routerContainer">
        <router-view @activeComponent="receive"></router-view>
      </div>
    </div>
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
    },
    receive (path) {
      this.isActive = path
      sessionStorage.setItem('path', path)
    }
  },
  mounted () {
    let particlesJS = window.particlesJS
    particlesJS.load('particles', '/static/Echart/particles.json')
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
#particles {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background:#F0F8FF;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  position: fixed;
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
.layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.navBox {
  width: 18rem;
  height: 35rem;
  position: fixed;
  list-style-type: none;
  margin-top: -5px;
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 4px solid #999;
}
.navBox li {
  margin: 10px 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgb(68, 175, 251);
  color: #fff;
  cursor: pointer;
  font-weight: bolder;
  cursor: pointer;
  box-sizing: border-box;
}
.navBox li:hover {
  background-color: gray;
}
.navBox li.active {
  background-color: gray;
}
.routerContainer {
  flex: 5;
  padding: 10px;
  margin-left: 19rem;
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
  border: 3px solid #999;
}
</style>
