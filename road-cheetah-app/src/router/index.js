import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriverHomeView from '../views/DriverHomeView.vue'
import DriverRouteView from '../views/DriverRouteView.vue'
import DriverManager from '../views/DriverManager.vue'
import DriverManagerManpowerManagement from '../views/DriverManagerManpowerManagement.vue'
import DriverManagerOrders from '../views/DriverManagerOrders.vue'

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
    path: '/driverManager',
    name: 'driverManager',
    component: DriverManager
  },
  {
    path: '/driverManagerManpowerManagement',
    name: 'driverManagerManpowerManagement',
    component: DriverManagerManpowerManagement
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
    path: '/driverManagerOrders',
    name: 'DriverManagerOrders',
    component: DriverManagerOrders
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
