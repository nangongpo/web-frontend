<template>
  <div class="childBox">
    <h3>子组件</h3>
    <div class="content">
      <slot name="s1"></slot> <!--具名插槽-->
      <hr>
      <slot name="s2" text="我是具名插槽s2"></slot> <!--具名插槽-->
      <slot>没有传递数据，则显示我</slot> <!-- 单个插槽 -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Child',
  data () {
    return {
      msg: '来自子组件的消息'
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.childBox {
  width: 500px;
  height: 200px;
  margin: 0 auto;
  background-color: #ffffff;
}
.content {
  position: relative;
}
.changeColor {
  width: 60%;
  margin: 0 auto;
  background-color: gray;
  overflow: hidden;
}
.button {
  padding: 4px 8px;
  border-radius: 5px;
  outline: 0;
  background-color: rgb(68, 175, 251);
  color: #ffffff;
  font-weight: bolder;
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 20px;
}
</style>
