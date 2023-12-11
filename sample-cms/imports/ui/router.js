import { createRouter, createWebHistory } from 'vue-router'
import Login from './login/login.vue'
import Dashboard from './dashboard/dashboard.vue'
import DocViewer from './docView/docView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/doc-view',
      name: 'docView',
      component: DocViewer,
    },
  ],
})
