<template>
  <i
  :class="classes"
  :style="styles"
  @click="handleClick"></i>
</template>

<script>
const prefix = 'by-icon'
export default {
  name: prefix,
  props: {
    type: {
      type: String
    },
    size: {
      type: [String, Number],
      default: 14
    },
    color: {
      type: String
    },
    bgColor: {
      type: String
    },
    // 旋转
    rotation: {
      type: [String, Number]
    },
    // 翻转
    flip: {
      type: String
    },
    // 匀速旋转
    spin: {
      type: [Boolean, String]
    },
    // 八角旋转
    pulse: {
      type: [Boolean, String]
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        'iconfont',
        {
          [`icon-${this.type}`]: !!this.type,
          [`${prefix}-flip-${this.flip}`]: !!this.flip,
          [`${prefix}-spin`]: this.spin,
          [`${prefix}-spin-${this.spin}`]: ['cw', 'ccw'].includes(this.spin),
          [`${prefix}-pulse`]: this.pulse,
          [`${prefix}-pulse-${this.pulse}`]: ['cw', 'ccw'].includes(this.pulse)
        }
      ]
    },
    styles () {
      return {
        fontSize: `${this.size / 16}rem`,
        color: this.color,
        backgroundColor: this.bgColor,
        transform: `rotate(${this.rotation}deg)`
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', event)
    }
  }
}
</script>
