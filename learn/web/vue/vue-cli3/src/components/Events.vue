<template>
  <div>
    <input type="text" v-model="inputContent" @keyup.enter="getKeyInfo($event)">
    <button @click="pushArr">添加</button>
    <ul>
      <li v-for="(name, index) in names" :key="index" v-on:click.self="getItemInfo(name, $event)">
        {{ index }} - {{ name }}
      </li>
    </ul>
    <div class="inline">
      <p>原数组: {{ this.nums }}</p>
      <button @click="getOdd">获取奇数</button>
    </div>
    <ul class="ulBox">
      <li v-for="num in wantNums" :key="num.id">{{ num }}</li>
    </ul>
    <div class="inline">
      <span>按键控制: </span>
      <button @click.alt.exact="onCtrlClick">按下alt在点击</button> <!--同时按下alt和click触发-->
      <button @click.left="onClick($event)">左键点击</button>
      <button @click.right="onClick($event)">右键点击</button>
    </div>
    <div class="inline">
      <button @click="computedClick">获取计算后的值</button>
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Events',
  data () {
    return {
      message: 'HelloWorld',
      names: ['lucky', 'merry', 'jack'],
      inputContent: '',
      nums: [1, 2, 3, 4, 5, 6, 7],
      wantNums: [],
      msg: ''
    }
  },
  methods: {
    getItemInfo (name, event) {
      console.log(name)
      console.log(event)
    },
    getKeyInfo (event) {
      console.log(event.keyCode)
    },
    onCtrlClick () {
      alert('你按了alt键')
    },
    onClick (event) {
      alert(event.target.textContent)
    },
    pushArr () {
      this.names.push(this.inputContent)
    },
    getOdd () {
      this.nums.forEach((num) => {
        if (num % 2 !== 0) {
          this.wantNums.push(num)
        }
      })
    },
    computedClick () {
      this.message = this.msgRe
    }
  },
  computed: {
    msgRe () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 4px 8px;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  background-color: gray;
  cursor: pointer;
}
.ulBox {
  width: 300px;
  height: 50px;
  margin: 0 auto;
}
.inline {
  overflow: hidden;
  margin-top: 10px;
}
.inline p {
  display: inline-block;
}
.inline button {
  margin: 0 10px;
}
</style>
