<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-col'
export default {
  name: prefix,
  props: {
    span: {
      type: [Number, String]
    },
    order: {
      type: [Number, String]
    },
    push: {
      type: [Number, String],
      default: 0
    },
    pull: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    }
  },
  computed: {
    classes () {
      let tempClasses = {
        [`${prefix}-span-${this.span}`]: this.isEffectiveNum(this.span),
        [`${prefix}-push-${this.push}`]: this.isEffectiveNum(this.push),
        [`${prefix}-pull-${this.pull}`]: this.isEffectiveNum(this.pull),
        [`${prefix}-offset-${this.offset}`]: this.isEffectiveNum(this.offset)
      }
      const reacts = ['xs', 'sm', 'md', 'lg', 'xl']
      const reactiveProps = ['span', 'push', 'pull', 'offset']
      reacts.forEach(react => {
        if (this[react]) {
          reactiveProps.forEach(tag => {
            tempClasses[`${prefix}-${react}-${tag}-${this.isReactive(this[react], tag)}`] = this.isReactive(this[react], tag)
          })
        }
      })
      return [prefix, tempClasses]
    },
    styles () {
      const tempStyles = {}
      if (this.$parent.$options.name === 'by-row') {
        const gutter = this.$parent.gutter
        if (gutter && gutter >= 0) {
          tempStyles['paddingLeft'] = `${gutter / 2}px`
          tempStyles['paddingRight'] = `${gutter / 2}px`
        }
      }
      tempStyles['order'] = this.order
      return tempStyles
    }
  },
  methods: {
    isEffectiveNum (num) {
      return (parseInt(num) > 0 && parseInt(num) < 25) ? true : false
    },
    isReactive (react, tag) {
      if (!react) return false
      switch (tag) {
        case 'span':
          if (typeof react === 'number' && this.isEffectiveNum(react)) {
            return react
          } else if (react.span && this.isEffectiveNum(react.span)) {
            return react.span
          } else {
            return false
          }
          break
        case 'push':
          if (typeof react === 'number') {
            return false
          } else if (react.push && this.isEffectiveNum(react.push)) {
            return react.push
          } else {
            return false
          }
          break
        case 'pull':
          if (typeof react === 'number') {
            return false
          } else if (react.pull && this.isEffectiveNum(react.pull)) {
            return react.pull
          } else {
            return false
          }
          break
        case 'offset':
          if (typeof react === 'number') {
            return false
          } else if (react.offset && this.isEffectiveNum(react.offset)) {
            return react.offset
          } else {
            return false
          }
          break
        default:
          break
      }
    }
  }
}
</script>
