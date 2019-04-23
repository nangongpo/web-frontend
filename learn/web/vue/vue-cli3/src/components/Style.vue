<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <h2>--------class绑定<button @click="bindClass2">绑定class2</button>----------</h2>
    <div class="mt-10">
      <button @click="bindClass1">绑定class1</button>
      <span :class="{changeColor: !isActive1, 'ml-10': true}">对象语法1</span>
    </div>
    <div class="mt-10">
      <button @click="bindClass2">绑定class2</button>
      <span :class="classObj">对象语法2</span>
    </div>
    <div class="mt-10">
      <button @click="bindClass3">绑定class3</button>
      <span :class="changeStyle">对象语法3</span>
    </div>
    <div class="mt-10">
      <button @click="bindClass4">绑定class4</button>
      <span :class="[changeColor, marginLeft]">数组语法1</span>
    </div>
    <div class="mt-10">
      <h3>数组语法2</h3>
      <ul class="ulBox">
        <li :class="[{changeColor: index % 2 === 0}]" v-for="(name, index) in names" :key="index">{{ name }}</li>
      </ul>
    </div>
    <div class="mt-10">
      <h2>--------------style绑定-------------</h2>
      <div :style="{color: activeColor, fontSize: fontSize + 'px'}">对象语法1</div>
      <div :style="styleObj">对象语法2</div>
      <div :style="[styleObj, style2Obj]">数组语法1</div>
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'],  justifyContent: 'center'}">多重值绑定</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Style',
  data () {
    return {
      isActive: false,
      isActive1: true,
      isActive2: true,
      classObj: {
        changeColor: false,
        'ml-10': true
      },
      changeColor: '',
      marginLeft: 'ml-10',
      names: ['lucky', 'jack', 'tom'],
      activeColor: 'red',
      fontSize: 30,
      styleObj: {
        color: 'red',
        fontSize: '30px'
      },
      style2Obj: {
        fontWeight: 'bold'
      }
    }
  },
  methods: {
    bindClass1 () {
      this.isActive1 = !this.isActive1
    },
    bindClass2 () {
      this.classObj.changeColor = !this.classObj.changeColor
    },
    bindClass3 () {
      this.isActive2 = !this.isActive2
    },
    bindClass4 () {
      this.changeColor = this.changeColor === '' ? 'changeColor' : ''
    }
  },
  computed: {
    changeStyle () {
      return {
        'changeColor': !this.isActive2,
        'ml-10': true
      }
    }
  }
}
</script>
<style scoped>
h2, h3 {
  font-weight: normal;
}
.mt-10 {
  margin-top: 10px;
}
.ml-10 {
  margin-left: 10px;
}
.changeColor {
  color: red;
}
.ulBox {
  width: 80px;
  margin: 0 auto;
}
</style>
