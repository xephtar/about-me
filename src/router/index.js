import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Icons from '../views/designs/Icons.vue'
import Texts from '../views/designs/Texts.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/about/'),
    children: [
      {
        path: ''
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
            /* webpackChunkName: "projects" */ '../views/about/education.vue'
          )
      }
    ]
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/texts',
    name: 'Texts',
    component: Texts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
