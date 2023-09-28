import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/GalleryAlbum',
      name: 'GalleryAlbum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/GalleryAlbum.vue')
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutUs.vue')
    },
    {
      path: '/VideoAlbum',
      name: 'VideoAlbum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/VideoAlbum.vue')
    },
    {
      path: '/Gallery/:Title',
      name: 'Gallery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Gallery.vue')
    }
    ,
    {
      path: '/EventDetails/:Title',
      name: 'EventDetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/EventDetails.vue')
    },
    {
      path: '/Events',
      name: 'Events',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Events.vue')
    },
        {
      path: '/EventBooking/:Id',
      name: 'EventBooking',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/EventBooking.vue')
    },
  ]
})

export default router
