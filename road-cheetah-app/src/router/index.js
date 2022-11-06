import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriverHomeView from '../views/DriverHomeView.vue'
import DriverRouteView from '../views/DriverRouteView.vue'
import DriverManager from '../views/DriverManager.vue'
import DriverManagerManpowerManagement from '../views/DriverManagerManpowerManagement.vue'

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
    path: '/driverManagerManpowerManagement',
    name: 'driverManagerManpowerManagement',
    component: DriverManagerManpowerManagement
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL+"driverHomeView"),
  routes
})

export default router
