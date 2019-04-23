<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <div class="parentBox">
      <div class="content">
        <h2 class="inline">这是父组件(父传子Props)</h2><span @click="changeMsg" class="button">props</span>
        <p class="messageBox">父组件日志：{{ childMsg }}</p>
      </div>
      <input class="mb-10" type="text" v-model="inputContent">
      <child-component :title="msg" :lifeMsg="inputSlice" :num="age" :objData="myObj" @receive="getMsg"></child-component>
      <span class="reset" @click="reset">重置</span>
    </div>
</div>
</template>
<script>
import ChildComponent from './ChildComponent'

export default {
  name: 'Parent',
  components: {ChildComponent},
  data () {
    return {
      msg: '来自父组件的消息',
      childMsg: '',
      inputContent: 'input',
      inputSlice: 'input',
      age: 2,
      myObj: {
        name: 'tom'
      }
    }
  },
  methods: {
    changeMsg () {
      this.msg = '来自父组件的消息变更'
    },
    getMsg (data) {
      this.childMsg = data
    },
    reset () {
      this.msg = '来自父组件的消息'
      this.childMsg = ''
      this.inputContent = 'input'
    }
  },
  watch: {
    inputContent () {
      if (this.inputContent.length > 6) {
        this.inputSlice = this.inputContent.slice(0, 6) + '...'
      } else {
        this.inputSlice = this.inputContent
      }
    }
  }
}
</script>
<style scoped>
.mb-10 {
  margin-bottom: 10px;
}
.parentBox {
  width: 600px;
  height: 300px;
  background-color: gray;
  margin: 0 auto;
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
