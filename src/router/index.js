import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: () => import('../views/Blog.vue')
  // },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue')
  },
  {
    path: '/attachment',
    name: 'Attachment',
    component: () => import('../views/Attachment.vue')
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import('../views/Plans.vue')
  },
  {
    path: '/blog_1',
    name: 'Blog_1',
    component: () => import('../views/blog/list.vue')
  },
  {
    path: '/blog/:title',
    name: 'BlogDetail',
    component: () => import('../views/blog/detail.vue')
  },
  {
    path: '/portfolioMore',
    name: 'PortfolioMore',
    component: () => import('../views/PortfolioMore.vue')
  },
]

const router = new VueRouter({
  // base: '/',
  base: '/dist/',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

// router.afterEach(() => {
//   window.scrollTo(0, 0)
// })

export default router
