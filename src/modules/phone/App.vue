<template lang="html">
  <div id="app" class="">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- <NavCon /> -->
  </div>
</template>

<script>
// import NavCon from '@/components/Nav'

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'fade'
    }
  },
  components: {
    // NavCon
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'PingFangSC-Light', 'PingFangSC-Regular', 'Avenir', Helvetica, Arial, sans-serif;
    width: 100vw;
    min-height: 100vh;
    font-size: 12px;
    line-height: 18px;
  }
</style>
