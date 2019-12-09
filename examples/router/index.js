import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'hello-router',
    component: Hello
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../components/Button.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../components/Icon.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('../components/Grid.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../components/Input.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('../components/Radio.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('../components/Checkbox.vue')
  }
]

const router = new Router({
  routes
})

export default router
