import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../Components/layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: '/home', // 重定向到第一个子路由
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },

      ],
    },
  ],
})

export default router
