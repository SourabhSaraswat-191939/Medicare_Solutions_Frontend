import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Login from '../components/login.vue'
import Sign_Up from '../views/Sign_Up.vue'

import Products from '../views/Products.vue'
import product_details from '../views/Product_Details.vue'
import Cart from '../views/cart.vue'
import Search from '../views/search.vue'
import Address from '../views/address.vue'
import Paytm_Gateway from '../views/paytm_gateway.vue'
import transaction_status from '../views/transaction_status.vue'
import user_orders from '../views/orders.vue'
import user_settings from '../views/user_settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign_up',
    name: 'Sign_Up',
    component: Sign_Up
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user_settings',
    name: 'User_Settings',
    component: user_settings,
    props: true,

  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product_details',
    name: 'Product_Details',
    component: product_details,
    props: true,

  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    props: true,

  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    props: true,

  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: true,

  },
  {
    path: '/paytm_gateway',
    name: 'Paytm_Gateway',
    component: Paytm_Gateway,
    props: true,

  },
  {
    path: '/transaction_status',
    name: 'Transaction_Status',
    component: transaction_status,
    props: true,

  },
  {
    path: '/user_orders',
    name: 'User_Orders',
    component: user_orders,
    props: true,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
