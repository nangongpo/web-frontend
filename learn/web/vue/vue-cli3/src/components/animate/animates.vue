<template>
  <div class="main">
    <h1>{{this.$router.history.current.name}}</h1>
    <div>
      <h3>过渡----<button @click="showHide">隐藏/显示</button></h3>
      <div class="divBox div1">
        <ul v-if="show1">
          <li v-for="(state, index) in stateList" :key="index">
            <p><span :title="state.describe">{{ state.name }}</span>: {{ state.describe.slice(0, 22) + '...' }}</p>
          </li>
        </ul>
      </div>
      <div class="divBox div2">
        <transition name="fade">
          <img v-if="show1" src="../../assets/images/transition.png">
        </transition>
      </div>
    </div>
    <div>
      <div class="inline">
        <h3>动画----<button @click="showHideAnim">隐藏/显示</button></h3>
        <div class="div2 divBox">
          <transition name="bounce">
            <img v-if="show2" src="../../assets/images/transition.png">
          </transition>
        </div>
      </div>
      <div class="inline">
        <h3>动画库---<button @click="animLibs">隐藏/显示</button></h3>
        <div class="div2 divBox">
          <transition name="animated" :duration="{ enter: 1000, leave: 500 }"
            enter-active-class="animated zoomIn"
            leave-active-class="animated bounceOutRight" >
            <img v-if="show3" src="../../assets/images/transition.png">
          </transition>
        </div>
      </div>
      <div>
        <p>
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG">SVG用法</a>
        </p>
        <svg viewBox="0 30 120 120" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="30"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Animates',
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      stateList: [
        {name: 'v-enter', describe: '定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除'},
        {name: 'v-enter-active', describe: '定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数'},
        {name: 'v-enter-to', describe: '2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除'},
        {name: 'v-leave', describe: '定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除'},
        {name: 'v-leave-active', describe: '定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数'},
        {name: 'v-leave-to', describe: '2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除'}
      ]
    }
  },
  methods: {
    showHide () {
      this.show1 = !this.show1
    },
    showHideAnim () {
      this.show2 = !this.show2
    },
    animLibs () {
      this.show3 = !this.show3
    }
  }
}
</script>
<style scoped>
.divBox {
  vertical-align: middle;
  margin: 0 auto;
  border: 1px solid #ddd;
}
.divBox li {
  text-align: left;
}
.div1 {
  display: inline-block;
  width: 520px;
  height: 240px;
}
.div2 {
  display: inline-block;
  width: 480px;
  height: 240px;
}
.div2 img {
  width: 400px;
  height: 200px;
  padding: 20px;
}
.inline {
  display: inline-block;
}
a {
  color: #121212;
  cursor: pointer;
}
a:hover {
  color: rgb(68, 175, 251);
}
/* .fade-leave-active below version 2.1.8 */

/* transition */
.fade-enter-active, .fade-leave-active {
  /* transition: opacity 2s; */
  transition: all 2s ease;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
  transform: translate(30px, 0)
}
.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: translate(0, 0)
}
/* animate */
.bounce-enter-active {
  animation: bounce-in .5s ease;
}
.bounce-leave-active {
  animation: bounce-in .5s ease reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
