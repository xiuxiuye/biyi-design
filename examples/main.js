import Vue from 'vue'
import App from './APP.vue'
import router from './router/index'
import BiyiUI from '../library/index'
// import BiyiUI from '../dist/main.min'
// import '../dist/main.min.css'

Vue.use(BiyiUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})