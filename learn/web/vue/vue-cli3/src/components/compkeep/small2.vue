<template>
  <div main="main">
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'Small2',
  data () {
    return {
      msg: 'Small2'
    }
  }
}
</script>
<style scoped>
p {
  vertical-align: middle;
}
</style>
