<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <!-- <input type="text" v-model.lazy="msg"> <span>enter后触发</span><br> -->
    <input type="text" v-model.number="msg"> <span>转换为数字</span><br>
    <!-- <input type="text" v-model.trim="msg"> <span>空格过滤</span> -->
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'FormInput',
  data () {
    return {
      msg: 'hello',
      message: 'hello'
    }
  },
  watch: {
    msg: function (data) {
      console.log(data)
      if (data === '') {
        alert('Game Over!')
      }
      setTimeout(() => {
        this.message = data
      }, 1000)
    }
  }
}
</script>
<style scoped>

</style>
