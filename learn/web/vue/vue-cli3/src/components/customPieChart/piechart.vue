<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <div class="main-box">
      <div class="classify-pie">
        <div class="flex-one" v-for="(value,index) in listData" :key="index">
          <div class="annular-name">{{value.label}}</div>
          <el-progress type="circle" :percentage="value.percentageNum" :stroke-width="16"></el-progress>
          <div class="annular-data-color1">{{value.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PieChart',
  data () {
    return {
      listData: [
        {
          label: '民警执法量',
          percentageNum: 40,
          value: 2000
        },
        {
          label: '协警执法量',
          percentageNum: 60,
          value: 3000
        }
      ]
    }
  }
}
</script>
<style scoped>
.main-box {
  width: 40%;
  height: 240px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #001F33;
}
.classify-pie {
  flex: 1;
  display: flex;
}
/* @media screen and (max-width: 1439px) {
        .classify-pie .el-progress .el-progress-circle {
            width: 90px !important;
            height: 90px !important;
            margin: 0 auto;
        }
    }
    @media screen and (min-width: 1440px) and (max-width: 1930px){
        .classify-pie .el-progress .el-progress-circle {
            width: 120px !important;
            height: 120px !important;
            margin: 0 auto;
        }
    } */
.classify-pie .el-progress .el-progress-circle {
  width: 90% !important;
  height: 90% !important;
  flex: 1;
  margin: 0 auto;
}
.classify-pie .el-progress .el-progress-circle > svg {
  height: 100%;
  width: 100%;
}
.classify-pie .el-progress >>> .el-progress__text {
  color: #f7feff;
  font-weight: bold;
}
.classify-pie .el-progress >>> .el-progress-circle__path {
  stroke-linecap: butt;
}
.classify-pie .el-progress >>> .el-progress-circle__track {
  stroke: transparent;
  stroke: #f7feff;
}
.classify-pie .annular-name {
  font-weight: bold;
  /* margin: 15px 0; */
  margin-top: 10px;
  font-size: 16px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.classify-pie .flex-one {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.classify-pie .annular-data-color1 {
  font-weight: bold;
  /* margin-top: 10px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.classify-pie .flex-one .el-progress {
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
/* 设置圈的背景 */
/* 第一个 */
.classify-pie .flex-one:nth-child(1) >>> .el-progress-circle__path {
  stroke: #009cfb;
}
.classify-pie .flex-one:nth-child(1) .annular-data-color1 {
  color: #009cfb;
}
/* 第二个 */
.classify-pie .flex-one:nth-child(2) >>> .el-progress-circle__path {
  stroke: #00e63a;
}
.classify-pie .flex-one:nth-child(2) .annular-data-color1 {
  color: #00e63a;
}
/* 第三个 */
.classify-pie .flex-one:nth-child(3) >>> .el-progress-circle__path {
  stroke: #ffba2c;
}
.classify-pie .flex-one:nth-child(3) .annular-data-color1 {
  color: #ffba2c;
}
</style>
