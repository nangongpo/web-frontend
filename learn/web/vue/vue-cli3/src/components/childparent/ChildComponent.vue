<template>
  <div class="childBox">
    <div class="content">
      <h3 class="inline">这是子组件(子传父emitEvents)</h3><button class="button" @click="sendMsg">emit</button>
    </div>
    <p class="changeColor">{{ title }} - {{ lifeMsg }} - {{num * 10}} - {{ objData.name }}</p>
  </div>
</template>
<script>
export default {
  name: 'ChildComponent',
  // 类型检测
  props: {
    title: [String, Number],
    lifeMsg: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length < 10
      }
    },
    num: {
      type: Number,
      default: 2
    },
    objData: {
      type: Object,
      default: function () {
        return {
          name: '未知',
          age: 2
        }
      }
    }
  },
  data () {
    return {
      msg: '来自子组件的消息'
    }
  },
  methods: {
    sendMsg (event) {
      // 两个参数： 参数1: key 参数2: 数据
      this.$emit('receive', this.msg)
    }
  }
}
</script>
<style scoped>
.childBox {
  width: 500px;
  height: 100px;
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
