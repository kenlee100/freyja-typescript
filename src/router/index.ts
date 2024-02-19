import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: () => import('@/components/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            title: '首頁'
          }
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login.vue'),
          meta: {
            showInHeader: true,
            title: '會員登入'
          }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Register.vue'),
          meta: {
            title: '註冊'
          }
        },
        {
          path: '/room',
          name: 'room',
          component: () => import('@/views/Room.vue'),
          meta: {
            showInHeader: true,
            title: '客房旅宿'
          }
        },
        {
          path: '/book',
          name: 'book',
          component: () => import('@/views/Book.vue'),
          meta: {
            showInHeader: true,
            title: '立即訂房'
          }
        }
      ]
    },
  ]
})

export default router
