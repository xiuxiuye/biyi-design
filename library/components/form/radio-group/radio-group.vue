<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-radio-group'
export default {
  name: prefix,
  props: {
    value: {
      type: [String, Number]
    },
    vertical: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {
          [`${prefix}-vertical`]: this.vertical,
          [`${prefix}-button`]: this.button,
          [`${prefix}-size-${this.size}`]: this.button && !!this.size
        }
      ]
    }
  },
  methods: {
    change () {
      this.$emit('change')
    }
  }
}
</script>
