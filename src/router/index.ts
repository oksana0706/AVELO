import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
    
  },

  {
    path: '/voucher',
    name: 'Voucher',
    component: () => import('../views/Voucher.vue')
    
  },

  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
    
  },

  {
    path: '/about_us',
    name: 'about_us',
    component: () => import('../views/AboutUs.vue')
    
  },

  {
    path: '/alacard',
    name: 'alacard',
    component: () => import('../views/Alacard.vue')
    
  },

  {
    path: '/breakfast',
    name: 'breakfast',
    component: () => import('../views/Breakfast.vue')
    
  },

  {
    path: '/lunch',
    name: 'lunch',
    component: () => import('../views/Lunch.vue')
    
  },

  {
    path: '/wine',
    name: 'wine',
    component: () => import('../views/Wine.vue')
    
  },

  {
    path: '/book',
    name: 'book',
    component: () => import('../views/Book.vue')
    
  }

    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});



export default router
