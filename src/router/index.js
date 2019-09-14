import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'hello-router',
  component: () => import('../components/hello-router.vue')
}]

const router = new Router({
  routes
})

export default router