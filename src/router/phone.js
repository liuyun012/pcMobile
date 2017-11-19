/**
 * @Author: qinzhenxing
 * @Date:   2017-11-18
 * @Filename: phone.js
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2017-11-18
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
