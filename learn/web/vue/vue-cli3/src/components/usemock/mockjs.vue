<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <button @click="getRequest">获取数据</button>
    <div class="divBox">
      <pre class="div1">
      {
        'title': 'Syntax Demo',

        'string1|1-10': '★',
        'string2|3': 'value',

        'number1|+1': 100,
        'number2|1-100': 100,
        'number3|1-100.1-10': 1,
        'number4|123.1-10': 1,
        'number5|123.3': 1,
        'number6|123.10': 1.123,

        'boolean1|1': true,
        'boolean2|1-2': true,

        'object1|2-4': {
          '110000': '北京市',
          '120000': '天津市',
          '130000': '河北省',
          '140000': '山西省'
        },
        'object2|2': {
          '310000': '上海市',
          '320000': '江苏省',
          '330000': '浙江省',
          '340000': '安徽省'
        },
        'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
        'array2|1-10': ['Mock.js'],
        'array3|3': ['Mock.js'],

        'function': function () {
          return this.title
        }
      }
      </pre>
      <div class="div2">
          <table>
            <tr>
              <th>属性名key</th>
              <th>值value</th>
            </tr>
            <tr v-for="(item, index) in dataList" :key="item.id">
              <td>{{ index }}</td>
              <td>{{ item }}</td>
            </tr>
          </table>
      </div>
    </div>
  </div>
</template>
<script>
let template = {
  'title': 'Syntax Demo',

  'string1|1-10': '★',
  'string2|3': 'value',

  'number1|+1': 100,
  'number2|1-100': 100,
  'number3|1-100.1-10': 1,
  'number4|123.1-10': 1,
  'number5|123.3': 1,
  'number6|123.10': 1.123,

  'boolean1|1': true,
  'boolean2|1-2': true,

  'object1|2-4': {
    '110000': '北京市',
    '120000': '天津市',
    '130000': '河北省',
    '140000': '山西省'
  },
  'object2|2': {
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省'
  },
  'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
  'array2|1-10': ['Mock.js'],
  'array3|3': ['Mock.js'],

  'function': function () {
    return this.title
  }
}
export default {
  name: 'MockJS',
  data () {
    return {
      dataList: [],
      keys: [],
      templates: template
    }
  },
  created () {
    this.$emit('activeComponent', this.$router.history.current.path)
    console.log(this.$router)
  },
  methods: {
    getMock () {
      this.Mock.mock(/\.json/, 'get', template)
    },
    postMock () {
      this.Mock.mock(/\.json/, 'post', template)
    },
    getRequest () {
      this.getMock()
      this.$axios({
        method: 'get',
        url: 'get.json',
        responseType: 'json'
      })
        .then(res => {
          this.dataList = res.data
          console.log(this.dataList)
        })
    }
  }
}
</script>
<style scoped>
.divBox {
  display: flex;
  justify-content: center;
}
.div1 {
  width: 400px;
  text-align: left;
  box-sizing: border-box;
  border: 2px solid gray;
  margin: 10px 0;
}
.div2 {
  width: 450px;
  text-align: left;
  box-sizing: border-box;
  border: 2px solid gray;
  margin: 10px 10px;
}
table {
  margin: 10px auto;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
}
table tr th, table tr td{
  border-bottom: 1px solid gray;
}
table tr th:first-child, table tr td:first-child {
  width: 100px;
  border-right: 1px solid gray;
}
table tr th:last-child {
  width: 350px;
}
</style>
