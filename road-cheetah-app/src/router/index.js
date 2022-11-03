import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriverHomeView from '../views/DriverHomeView.vue'
import DriverRouteView from '../views/DriverRouteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/driverHomeView',
    name: 'driverHomeView',
    component: DriverHomeView
  },
  {
    path: '/driverRouteView',
    name: 'driverRouteView',
    component: DriverRouteView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
