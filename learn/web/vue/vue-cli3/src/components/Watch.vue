<template>
  <div>
    <p>你会得到一个yes/no的答案: <input type="text" v-model="question"></p>
    <p>{{ answer }}</p>
    <div v-show="!forced">
      <img :src="imageUrl" :alt="answer" v-if="answer === 'Yes'">
      <img :src="imageUrl" :alt="answer" v-else-if="answer === 'No'">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      question: '',
      answer: '你提问后给与答案！',
      imageUrl: '',
      forced: true
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = '请稍等...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    this.debouncedGetAnswer = this.lodash.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      let _this = this
      let check = /[?？]$/.test(_this.question)
      if (!check) {
        _this.answer = '请输入一个包含问号的语句。'
        return
      }
      _this.answer = '思考中...'
      _this.axios.get('https://yesno.wtf/api')
        .then(function (response) {
          _this.forced = response.data.forced
          _this.imageUrl = response.data.image
          _this.answer = _this.lodash.capitalize(response.data.answer)
        })
        .catch(function (error) {
          _this.answer = '请求出错! 无法获取API。' + error
        })
    }
  }
}
</script>
<style scoped>

</style>
