import './styles/index.less'
import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Input from './components/form/input'
import Radio from './components/form/radio'
import RadioGroup from './components/form/radio-group'
import Checkbox from './components/form/checkbox'
import CheckboxGroup from './components/form/checkbox-group'
import Switch from './components/form/switch'


const components = [
  Icon,
  Button,
  ButtonGroup,
  Row,
  Col,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch
]

const install = function (Vue, opts = {}) {
  for (let component of components) {
    Vue.component(component.name, component)
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export {
  Icon,
  Button,
  ButtonGroup,
  Row,
  Col
}
