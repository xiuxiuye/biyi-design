import './style/biyi.scss'
import component1 from './components/component1'

const components = {
  component1
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

module.exports.default = module.exports = API
