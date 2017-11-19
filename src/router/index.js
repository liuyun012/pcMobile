/**
 * @Author: qinzhenxing
 * @Date:   2017-11-18
 * @Filename: index.js
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2017-11-19
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/modules/index/views/Cart'
import CartList from '@/modules/index/views/CartList'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/cartList',
      name: 'CartList',
      component: CartList
    },
  ]
})
