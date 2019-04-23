<template>
  <div class="title" v-if="text">
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    text: String
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  background: #001F33;
  color: #fff;
  opacity: 0.7;
  cursor: default;
  height: 30px;
  line-height: 30px;
}
.text {
  margin-left: 10px;
  opacity: 1;
}
</style>
