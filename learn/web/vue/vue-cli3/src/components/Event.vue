<template>
  <div>
    <ul>
      <li v-for="(name, index) in names" :key="index" v-on:click.self="getItemInfo(name, $event)">
        {{ index }} - {{ name }}
      </li>
    </ul>
    <input type="text" @keyup.enter="getKeyInfo($event)">
    <button @click="pushArr">按钮</button>
    <hr>
    <p>原数组: {{ this.nums }}</p>
    <button @click="getOdd">获取奇数</button>
    <ul>
      <li v-for="num in wantNums" :key="num.id">{{ num }}</li>
    </ul>
    <!--<button @click.alt.exact="onCtrlClick">按下alt在点击</button>--> <!--同时按下alt和click触发-->
    <!-- <button @click.left="onLeftClick">左键点击</button> -->
    <div>
      {{ msgRe }}
      {{ msgRe }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Event',
  data () {
    return {
      message: 'HelloWorld',
      names: ['lucky', 'merry', 'jack'],
      nums: [1, 2, 3, 4, 5, 6, 7],
      wantNums: []
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
    onLeftClick () {
      alert('你按了鼠标左键')
    },
    pushArr () {
      this.names.push('nangongpo')
    },
    getOdd () {
      this.nums.filter((num) => {
        if (num % 2 !== 0) {
          this.wantNums.push(num)
        }
        return num % 2 !== 0
      })
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

</style>
