// 全局处理后端返回数据
export default {
  install (Vue, option) {
    Vue.prototype.DealRes = function (response) {
      response.data.data_status = false
      // 正常执行
      if (response.data.data_type === '1') {
        response.data.data_status = true
      } else if (response.data.data_type === '2') {
        // 提示信息，弱提示
        this.$ready(function () {
          // AlipayJSBridge.call('toast', {
          //   content: response.data.msg,
          //   duration: 2000
          // }, function (e) {
          //   // alert('toast消失回调')
          // })
        })
      } else if (response.data.data_type === '3') {
        // 退出窗口
        // this.$ready(function () {
        //   AlipayJSBridge.call('exitApp')
        // })
      } else {
        // 不做处理
        console.log('111')
      }
      console.log(response.data.data_status)
      return response
    }
  }
}
