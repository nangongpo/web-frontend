// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import particles from 'particles.js'
import EchartItemTitle from '@/components/dataBalance/common/ChartTitle'
import echarts from 'echarts'

import Lodash from 'lodash'
import Axios from 'axios'
import Animated from 'animate.css'
import Mock from 'mockjs'
// 处理后台传来的数据
import DealRes from './assets/js/common'

// excel导入导出
import Blob from './assets/excel/Blob.js'
import Export2Excel from './assets/excel/Export2Excel.js'

Vue.use(ElementUI)
Vue.use(particles)
Vue.use(Animated)
Vue.use(DealRes)

Vue.prototype.$echarts = echarts
Vue.prototype.lodash = Lodash
Vue.prototype.$axios = Axios

Vue.prototype.HOST = '/api'
Vue.prototype.TEST = '/test'
Vue.prototype.db = '/db'
Vue.prototype.Mock = Mock

require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
Vue.component('echart-item-title', EchartItemTitle)

// echart刷新的频率
Vue.prototype.$timeInterval = 5 * 60 * 1000
Vue.prototype.$animTimeInterval = 5 * 1000

// 全局的 axios 默认值
// Axios.defaults.baseURL = 'http://www.wwtliu.com'
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('请求' + config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('响应' + response.data.data)
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.filter('myFilter', function (value) {
  if (value % 1 === 0) {
    return value.toFixed(0)
  } else {
    return value.toFixed(2) + '%'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
