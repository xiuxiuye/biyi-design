import component1 from './component1.vue'

component1.install = function (Vue, opts = {}) {
  console.log('component1----install----')
  Vue.component(component1.name, component1)
}

export default component1
