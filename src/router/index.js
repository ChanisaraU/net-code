import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Features from '../views/Features'
import Integrations from '../views/Integrations'
import Pricing from '../views/Pricing'
import Contact from '../views/Contact'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/All_Features',
    name: 'ALL FEATURES',
    component: Features
  },
  {
    path: '/Integrations',
    name: 'INTEGRATIONS',
    component: Integrations
  },
  {
    path: '/pricing',
    name: 'PRICING',
    component: Pricing
  },
  {
    path: '/contact',
    name: 'CONTACT',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
