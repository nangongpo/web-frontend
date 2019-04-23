<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <button @click="goBack">返回上一个路由</button>
    <div class="content">
      <div class="left">
        <h3>子路由嵌套</h3>
        <ul>
          <!-- <li><router-link to="/routers/child1/200"><span>child1</span></router-link></li>
          <li><router-link to="/routers/child2/2"><span>child2</span></router-link></li>
          <li><router-link to="/routers/child3?id=2001"><span>child3</span></router-link></li>-->
          <li @click="isActive = routerList[0]"><router-link :to="{name: 'ChildRouters1', params: {price: 200}}"><span :class="{changeColor: isActive === routerList[0]}">child1</span></router-link></li>
          <li @click="isActive = routerList[1]"><router-link :to="{name: 'ChildRouters2', params: {num: 2}}"><span :class="{changeColor: isActive === routerList[1]}">child2</span></router-link></li>
          <li @click="isActive = routerList[2]"><router-link :to="{name: 'ChildRouters3', params: { id: 2001 }}"><span :class="{changeColor: isActive === routerList[2]}">child3</span></router-link></li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Routers',
  data () {
    return {
      isActive: '',
      routerList: ['ChildRouters1', 'ChildRouters2', 'ChildRouters3']
    }
  },
  methods: {
    goBack () {
      this.$router.push('/mockjs')
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: decimal;
}
li {
  width: 60px;
  margin: 0 auto;
}
li span {
  font-size: 20px;
  font-weight: bold;
  color: rgb(68, 175, 251);
  cursor: pointer;
}
li span:hover {
  color: green;
}
li span.changeColor {
  color: green
}
.content {
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 10px auto;
}
.left {
  width: 200px;
  border: 1px solid gray;
}
.right {
  width: 300px;
  border: 1px solid gray;
}
</style>
