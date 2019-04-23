<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <div class="jclbhglhz-bar">
      <echart-item-title text='本年检测类别合格率汇总统计（单位：%）'></echart-item-title>
      <div ref="chart" class="chart-content">
        <div v-if="listData.length === 0" class="tip-info">&lt;---暂无数据，请联系后台管理员---&gt;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dataBalance',
  data () {
    return {
      data: require('./data/jclbhglhz.json'),
      listData: [],
      copyList: [
        {ychgl: 95, label: '注册登记', hgl: 24.78},
        {ychgl: 96.65, label: '在用车定检', hgl: 61.59},
        {ychgl: 0, label: '临时检验', hgl: 0},
        {ychgl: 0, label: '特殊检验', hgl: 0},
        {ychgl: 89.55, label: '在用车非定检', hgl: 2.57}
      ]
    }
  },
  watch: {
    listData: function () {
      this.dataFun()
    }
  },
  created () {
    // let url = this.db + '/gateway/'
    this.listData = this.copyList
    // this.$axios.post(url, {
    //   method: 'integrity_DDZHSystem'
    // })
    //   .then(response => {
    //     if (this.DealRes(response)) {
    //       this.listData = response.data.response_data.jclbhglhz
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  },
  methods: {
    dataFun () {
      let chart = this.$echarts.init(this.$refs.chart)
      let list1 = []
      let list2 = []
      let list3 = []
      for (let item of this.listData) {
        if (item.hgl == null || item.ychgl == null) {
          item.hgl = 0
          item.ychgl = 0
        }
        list1.push(item.label)
        list2.push((item.hgl).toFixed(0))
        list3.push((item.ychgl).toFixed(0))
      }
      this.data.config.xAxis.data = list1
      this.data.config.series[0].data = list2
      this.data.config.series[1].data = list3
      chart.setOption(this.data.config, true)
      const timer = setInterval(() => {
        chart.clear()
        chart.setOption(this.data.config, true)
      }, this.$animTimeInterval)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    }
  }
}
</script>
<style scoped>
.jclbhglhz-bar {
  width: 40%;
  height: 380px;
  margin: 0 auto;
  flex: 1;
  background-color: #001F33;
  color: '#fff';
  display: flex;
  flex-direction: column;
  z-index: 100;
}
.chart-content {
  display: flex;
  flex: 1;
  height: 280px;
}
.tip-info {
  display: flex;
  margin: 0 auto;
  align-items: center;
  color: red;
}
</style>
