import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'hello-router',
    component: Hello
  }
]

const router = new Router({
  routes
})

export default router
