<template>
  <div class='main'>
    <h1>{{this.$router.history.current.name.slice(3)}}</h1>
    <div class='main-box'>
      <div class='text-scroll'>
        <div class='scroll-text'>
          <div>企业名称</div>
          <div>违法数</div>
          <div>排名</div>
        </div>
        <marquee direction='up'>
          <div class='text-scroll-component' ref='textComponent'>
            <div class='text-bottom' ref='textScroll'>
              <div v-for='item in listData' :key='item.id' class='text-bottom-box'>
                <div class='mc-div'>{{item.label}}</div>
                <div>{{item.value | myFilter}}</div>
                <div>{{item.pm | myFilter}}</div>
              </div>
            </div>
          </div>
        </marquee>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UseMarquee',
  data () {
    return {
      listData: [
        { label: '公司1', value: 13, pm: 1 },
        { label: '公司2', value: 10, pm: 2 },
        { label: '公司3', value: 1, pm: 3 },
        { label: '公司4', value: 12, pm: 4 },
        { label: '公司5', value: 4, pm: 5 },
        { label: '公司6', value: 1, pm: 6 },
        { label: '公司7', value: 3, pm: 7 },
        { label: '公司8', value: 1, pm: 8 },
        { label: '公司9', value: 1, pm: 9 },
        { label: '公司10', value: 1, pm: 10 },
        { label: '公司11', value: 1, pm: 11 },
        { label: '公司12', value: 1, pm: 12 }
      ]
    }
  }
}
</script>
<style scoped>
.main-box {
  width: 40%;
  height: 100%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #001F33;
}
.text-scroll {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.scroll-text {
  flex: 1;
  display: flex;
  margin: 15px 0;
}
.scroll-text > div:nth-child(1) {
  flex: 2;
  padding: 0 10px;
}
.scroll-text > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-bottom-box {
  display: flex;
  align-content: center;
  justify-content: center;
}
.text-bottom-box > div:nth-child(1) {
  flex: 2;
}
.text-bottom-box > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-scroll-component {
  width: 100%;
  overflow: hidden;
  flex: 9;
  margin-bottom: 5px;
}
.mc-div {
  padding: 0 10px;
  text-align: center;
}
.text-bottom-box {
  font-size: 14px;
  padding: 10px 0;
}
.text-bottom-box:nth-child(4n + 1) {
  color: #3386cc;
}
.text-bottom-box:nth-child(4n + 2) {
  color: #00e23a;
}
.text-bottom-box:nth-child(4n + 3) {
  color: #ffbc2d;
}
.text-bottom-box:nth-child(4n) {
  color: #c90018;
}
</style>
