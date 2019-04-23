<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <h2>切换组件</h2>
    <button @click="changeView">切换组件</button>
    <!-- <small1></small1>
    <small2></small2> -->
    <!-- {{ currentView }} -->
    <div class="divBox div1">
      <component :is="currentView"></component>
    </div>
    <div class="divBox div2">
      <h3>--------keep-alive 缓存组件,不会更新数据--------</h3>
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Small1 from './small1'
import Small2 from './small2'

export default {
  name: 'Big',
  data () {
    return {
      currentView: 'Small1'
    }
  },
  components: {
    Small1,
    Small2
  },
  methods: {
    changeView () {
      this.currentView = this.currentView === 'Small1' ? 'Small2' : 'Small1'
    }
  }
}
</script>
<style scoped>
.divBox {
  width: 400px;
  margin: 10px auto;
  border: 2px solid gray;
}
.div1 {
  height: 70px;
}
.div2 {
  height: 135px;
}
</style>
