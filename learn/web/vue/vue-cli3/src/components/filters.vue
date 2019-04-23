<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <h2>filters —— 双花括号插值 和 v-bind表达式从 2.1.0+ 开始支持</h2>
    <p :title="price | moneyChange">零售价: {{ price | moneyChange }}</p>
    <p>{{ info }} <span class="small">{{info | contentData}}</span></p>
    <p>当前时间: {{ date | formatTime }}</p>
  </div>
</template>
<script>
export default {
  name: 'Filters',
  data () {
    return {
      price: 20,
      info: '钢铁是怎样炼成的...',
      date: new Date()
    }
  },
  mounted () {
    var _this = this
    this.timer = setInterval(function () {
      _this.date = new Date()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  filters: {
    moneyChange (value) {
      if (typeof value === 'number') {
        return '￥' + value
      }
    },
    contentData (value) {
      return '————本文摘自《钢铁是怎样炼成的》'
    },
    formatTime (time) {
      var d = time
      var year = d.getFullYear()
      var month = change(d.getMonth() + 1)
      var day = change(d.getDate())
      var hour = change(d.getHours())
      var minute = change(d.getMinutes())
      var second = change(d.getSeconds())
      function change (t) {
        if (t < 10) {
          return '0' + t
        } else {
          return t
        }
      }
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    }
  }
}
</script>
<style scoped>
.small {
  font-size: 10px;
}
</style>
