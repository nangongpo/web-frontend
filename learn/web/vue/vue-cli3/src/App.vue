<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <!-- <HelloWorld/> -->
    <!-- <Events/> -->
    <!-- <FormData/> -->
    <Watch/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Events from '@/components/Event'
import FormData from '@/components/FormData'
import Watch from '@/components/Watch'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Events,
    FormData,
    Watch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
