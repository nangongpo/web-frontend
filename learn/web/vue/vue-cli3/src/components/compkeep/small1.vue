<template>
  <div main="main">
    <div>
      <button @click="changeInfo">改变small1组件</button>
      <h2 class="inline">{{ msg }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Small1',
  data () {
    return {
      msg: 'small1'
    }
  },
  methods: {
    changeInfo () {
      this.msg = 'small1改变了'
    }
  }
}
</script>
<style scoped>
.inline {
  display: inline-block;
}
</style>
