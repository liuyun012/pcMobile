<template lang="html">
  <div id="app" class="">
    <transition :name="transitionName">
      <router-view class="app-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    position: relative;
    width: 100vw;
    min-height: 100vh;
    font-size: 12px;
    line-height: 18px;
    color: #333;
    background-color: #f0f0f0;
  }

  .app-view {
     position: absolute;
     width: 100%;
  }
</style>
