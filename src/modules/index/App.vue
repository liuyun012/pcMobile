<template>
  <div id="app" class="flex">
    <!-- <HeaderCon /> -->
    <div class="container">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
    <!-- <FooterCon /> -->
  </div>
</template>

<script>
// import HeaderCon from '@/components/Header'
// import FooterCon from '@/components/Footer'

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'fade'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'fade'
    }
  },
  components: {
    // HeaderCon,
    // FooterCon
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'PingFangSC-Light', 'PingFangSC-Regular', 'Avenir', Helvetica, Arial, sans-serif;
    color: #333;
    width: 100%;
    min-height: 100vh;
    font-size: 14px;
    font-weight: 100;
    line-height: 24px;
    text-align: justify;
  }
</style>
