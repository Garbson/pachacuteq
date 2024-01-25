import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'lead',
      component: () => import('../views/leadView.vue')
    },
    {
      path: '/simples',
      name: 'simples',
      component: () => import('../views/habitacionSview.vue')
    },
    {
      path: '/doble',
      name: 'doble',
      component: () => import('../views/habDviews.vue')
    },
    {
      path: '/matrimonial',
      name: 'matrimonial',
      component: () => import('../views/habMviews.vue')
    },
    {
      path: '/cuadruple',
      name: 'cuadruple',
      component: () => import('../views/habQviews.vue')
    },
    {
      path: '/triple',
      name: 'triple',
      component: () => import('../views/habTviews.vue')
    },
    {
      path: '/hab',
      name: 'hab',
      component: () => import('../views/habview.vue')
    },
  ]
})


export default router