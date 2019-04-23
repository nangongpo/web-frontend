<template>
  <div class="main">
    <h2>childRouters1</h2>
    <p>蛋糕: ￥{{ $route.params.price }}</p>
  </div>
</template>
<script>
export default {
  name: 'ChildRouters1'
}
</script>
<style scoped>
h2 {
  color: goldenrod;
}
</style>
