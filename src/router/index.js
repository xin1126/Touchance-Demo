import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/pages/LayoutView.vue'),
    redirect: '/pagination',
    children: [
      {
        path: 'lazyLoading',
        name: 'lazyLoading',
        component: () => import('@/pages/LazyLoadingView.vue'),
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import('@/pages/PaginationView.vue'),
      },
      {
        path: 'keep',
        name: 'keep',
        component: () => import('@/pages/KeepView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router