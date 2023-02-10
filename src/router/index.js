import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Kitchens from '../views/kitchens.vue'
import NotFound from '../views/pageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/kitchens',
      name: 'kitchens',
      component: () => import('@/views/kitchens.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },

    {
      path: '/kitchens/:id',
      component: () => import('@/views/kitchensDetails.vue')
    },

    {
      path: '/closets',
      name: 'closets',
      component: () => import('@/views/closets.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },

    {
      path: '/closets/:id',
      component: () => import('@/views/closetsDetails.vue')
    },

    {
      path: '/other',
      name: 'other',
      component: () => import('@/views/otherFurn.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/other/:id',
      component: () => import('@/views/otherDetails.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    // ! box routes
    // TODO: upper boxes
    {
      path: '/upperboxes',
      component: () => import('@/views/boxes/upperBoxes.vue')
    },
    {
      path: '/upperboxes/:id',
      component: () => import('@/views/boxes/upperBoxesDetails.vue')
    },

    // TODO: lower boxes
    {
      path: '/lowerboxes',
      component: () => import('@/views/boxes/lowerBoxes.vue')
    },

    {
      path: '/lowerboxes/:id',
      component: () => import('@/views/boxes/lowerBoxesDetails.vue')
    },





    // TODO: 404 page
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: NotFound,

    }
  ]
})

export default router
