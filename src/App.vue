<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .8s ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
