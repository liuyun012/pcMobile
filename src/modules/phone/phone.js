/**
 * @Author: qinzhenxing
 * @Date:   2017-11-18
 * @Filename: phone.js
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2017-11-18
 */
 import Vue from 'vue'
 import App from './App'
 import router from '@/router/phone'

 Vue.config.productionTip = false

 /* eslint-disable no-new */
 new Vue({
   el: '#app',
   router,
   render: h => h(App)
 })
