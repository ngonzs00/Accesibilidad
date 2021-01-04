import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',

    component: () => import(/* webpackChunkName: "about" */ '../views/FAQ.vue')
  },
  {
    path: '/foro',
    name: 'Foro',

    component: () => import(/* webpackChunkName: "about" */ '../views/Foro.vue')
  }
  ,
  {
    path: '/merch',
    name: 'Merchandising',

    component: () => import(/* webpackChunkName: "about" */ '../views/Merchandising.vue')
  },
  {
    path: '/profile',
    name: 'Profile',

    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/kernels',
    name: 'Kernels',

    component: () => import(/* webpackChunkName: "about" */ '../views/Kernels.vue')
  },
  {
    path: '/vm',
    name: 'VM',

    component: () => import(/* webpackChunkName: "about" */ '../views/VM.vue')
  },
  {
    path: '/kernel',
    name: 'Kernel',

    component: () => import(/* webpackChunkName: "about" */ '../views/Kernel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
