import Vue from 'vue'
import App from './APP.vue'
import router from './router/index'
import BiyiUI from '../lib/index'
import test from '../dist/biyi.min'
console.log(BiyiUI)
console.log(test)
// import BiyiUI from '../dist/main.min'
// import '../dist/main.min.css'

Vue.use(BiyiUI)
// Vue.use(component1)
// Vue.use(component2)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})