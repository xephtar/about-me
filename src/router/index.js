import Home from '../views/home/index.vue'
import Project from '@/views/about/project'
import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/about/'),
    children: [
      {
        path: 'projects',
        name: 'Project',
        component: Project
      },
      {
        path: 'education',
        name: 'Education',
        component: () =>
          import(
            /* webpackChunkName: "education" */ '../views/about/education.vue'
          )
      }
    ]
  },
  {
    path: '/v1',
    name: 'v1',
    component: () => import(/* webpackChunkName: "v1" */ '../views/designs/'),
    children: [
      {
        path: 'icons',
        name: 'Icons',
        component: () =>
          import(/* webpackChunkName: "icons" */ '../views/designs/Icons.vue')
      },
      {
        path: 'texts',
        name: 'Texts',
        component: () =>
          import(/* webpackChunkName: "texts" */ '../views/designs/Texts.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  console.log(to, from)
  window.analytics.page(to.name, {user_id: '123456', user_detail: {
      name: 'Omer Faruk Davarci',
      email: 'omer.davarci@sabancidx.com'
    }})
})

export default router
