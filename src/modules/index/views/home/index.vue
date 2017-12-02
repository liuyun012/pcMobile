<template lang="html">
  <div class="home">
    <h2>电脑端首页</h2>
    <div class="link">
      <a href="/phone.html">访问手机端网页</a>
      <router-link :to="{ name: 'helloWorld', params: {} }">跳转到 HellloWorld 页面</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
.home {
  width: 500px;
  margin: 0 auto;
  h2 {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
}
.link {
  display: flex;
  justify-content: space-around;
  a {
    padding: 0 20px;
    color: #fff;
    line-height: 30px;
    border-radius: 10px;
    border: 1px solid #2ec75b;
    background-color: #2ec75b;
  }
}
</style>
