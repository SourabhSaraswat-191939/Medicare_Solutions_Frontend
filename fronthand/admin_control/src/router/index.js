import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/products.vue'
import Categories from '../views/categories.vue'
import Orders from '../views/orders.vue'
import Active_Orders from '../views/active_orders.vue'
import Delivery from '../views/delivery.vue'
import Rejected_Orders from '../views/rejected_orders.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/dashboard.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/products',
        name: 'Products',
        component: Products
      },
      {
        path: '/categories',
        name: 'Categories',
        component: Categories
      },
      {
        path: '/orders',
        name: 'Orders',
        component: Orders
      },
      {
        path: '/active_orders',
        name: 'Active_Orders',
        component: Active_Orders
      },
      {
        path: '/delivery',
        name: 'Delivery',
        component: Delivery
      },
      {
        path: '/rejected_orders',
        name: 'Rejected_Orders',
        component: Rejected_Orders
      },
      
    ]
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
