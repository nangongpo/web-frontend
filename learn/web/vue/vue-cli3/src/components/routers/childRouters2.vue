<template>
  <div class="main">
    <h2>childRouters2</h2>
    <p>数量: {{ $route.params.num }}个</p>
  </div>
</template>
<script>
export default {
  name: 'ChildRouters2'
}
</script>
<style scoped>
h2 {
  color: gray;
}
</style>
