import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Index.vue'
import dashboard from './moduls/dashboard'
import admin from './moduls/admin'

const routes = [{
  path: '/',
  name: 'Home Page',
  redirect: '/dashboard',
  component: Home,
  children: [
    dashboard.Route,
    admin.Route
  ]
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
