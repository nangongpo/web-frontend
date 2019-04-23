<template>
  <div class="main">
      <h1>{{this.$router.history.current.name}}导入导出</h1>
      <a href="javascript:;" class="file">导入表格
        <input id="upload" type="file" @change="importfExcel(this)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
      </a>
  </div>
</template>
<script>
export default {
  name: 'Excel',
  data () {
    return {}
  },
  methods: {
    exportExcel () {
      this.$confirm('此操作将导出excel文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.excelData = this.dataList // 你要导出的数据list
        this.export2Excel()
      }).catch((e) => {
        alert(e)
      })
    },
    export2Excel () {
      var _this = this
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../assets/excel/Export2Excel.js') // 这里必须使用绝对路径
        const tHeader = ['id','withNum', 'userId', 'name','amount','status','amountIn','amountSuccess','createTime'] // 导出的表头名
        const filterVal = ['id','withNum','userId', 'name','amount','status','amountIn','amountSuccess','createTime'] // 导出的表头字段名
        const list = _this.excelData
        const data = _this.formatJson(filterVal, list)
        let time1,time2 = ''
        if(this.start !== '') {
          time1 = _this.moment(_this.start).format('YYYY-MM-DD')
        }
        if(this.end !== '') {
          time2 = _this.moment(_this.end).format('YYYY-MM-DD')
        }
        export_json_to_excel(tHeader, data, `[${time1}-${time2}]提现管理excel`) // 导出的表格名称，根据需要自己命名
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    importExcel(obj) {
      let _this = this
      let inputDOM = this.$refs.inputer
      // 通过DOM取文件数据
      this.file = event.currentTarget.files[0]
      var rABS = false // 是否将文件读取为二进制字符串
      var f = this.file
      var reader = new FileReader()
      // if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = ""
        var rABS = false // 是否将文件读取为二进制字符串
        var pt = this
        var wb // 读取完成的数据
        var outdata
        var reader = new FileReader()
        reader.onload = function(e) {
          var bytes = new Uint8Array(reader.result)
          var length = bytes.byteLength
          for(var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          var XLSX = require('xlsx')
          if(rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), { // 手动转化
              type: 'base64'
            })
          } else {
            wb = XLSX.read(binary, {
              type: 'binary'
            })
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) // outdata就是你想要的东西
          this.da = [...outdata]
          let arr = []
          this.da.map(v => {
            let obj = {}
            obj.id = v.id
            obj.status = v.status
            arr.push(obj)
          })
          console.log(arr)
          let para = {
            // withList: JSON.stringify(this.da)
            withList: arr
          }
            _this.$message({
              message: '请耐心等待导入成功',
              type: 'success'
            })
            withImport(para).then(res => {
              window.location.reload()
            })     
          }
          reader.readAsArrayBuffer(f)
        }
        if(rABS) {
          reader.readAsArrayBuffer(f)
        } else {
          reader.readAsBinaryString(f)
        }
    }
  }
}
</script>
<style scoped>

</style>
