import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

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
        path: '',
        name: 'About'
      },
      {
        path: 'projects',
        name: 'Project',
        component: () =>
          import(
            /* webpackChunkName: "projects" */ '../views/about/project.vue'
          )
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
        path: '',
        name: 'v1'
      },
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

export default router
