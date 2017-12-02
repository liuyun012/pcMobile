/**
 * @Author: qinzhenxing
 * @Date:   2017-11-18
 * @Filename: phone.js
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2017-12-02
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeCon from '@/modules/phone/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCon
    },
    {
      path: '/home',
      name: 'home',
      component: HomeCon
    },
    {
      path: '/home/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
  ]
})
