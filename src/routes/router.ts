import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./LandingPage.vue'),
      name: 'LandingPage',
    },
    {
      path: '/demo',
      component: () => import('./Demo.vue'),
      name: 'Demo',
    },
    {
      path: '/layout',
      component: () => import('./Layout.vue'),
      name: 'Layout',
    },
  ],
})
