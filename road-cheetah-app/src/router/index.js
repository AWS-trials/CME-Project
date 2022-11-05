import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriverHomeView from '../views/DriverHomeView.vue'
import DriverRouteView from '../views/DriverRouteView.vue'
import DriverManager from '../views/DriverManager.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DriverHomeView
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
    path: '/driverManager',
    name: 'driverManager',
    component: DriverManager
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/driverHomeView',
    name: 'driverHomeView',
    component: DriverHomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL+"driverHomeView"),
  routes
})

export default router
