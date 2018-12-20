<template>
  <div class="main parentBox">
    <h2>父组件 —— slot的数据源来自子组件</h2>
    <my-child>
      <div slot="s1">
        <p class="red" >我是slot1</p>
        <p>Hello Slot</p>
      </div>
      <p slot-scope="props" slot="s2" class="red" >{{ props.text }}</p>
    </my-child>
  </div>
</template>
<script>
import MyChild from './child'

export default {
  name: 'Parent',
  components: {MyChild},
  data () {
    return {
      msg: '来自父组件的消息'
    }
  },
  methods: {
    changeMsg () {
      this.msg = '来自父组件的消息变更'
    }
  }
}
</script>
<style scoped>
.mb-10 {
  margin-bottom: 10px;
}
.red {
  color: red;
}
.parentBox {
  width: 600px;
  height: 300px;
  background-color: gray;
}
.messageBox {
  width: 300px;
  height: 30px;
  margin: 0 auto;
  text-align: left;
}
.content {
  position: relative;
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
.reset {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
  padding: 4px 8px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: bolder;
  cursor: pointer;
  background-color: rgb(68, 175, 251);
}
</style>
