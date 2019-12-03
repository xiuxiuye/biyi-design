<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-button-group'
export default {
  name: prefix,
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    vertical: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        prefix,
        `${prefix}-${this.size}`,
        {
          [`${prefix}-vertical`]: this.vertical,
          [`${prefix}-horizontal`]: !this.vertical,
          [`${prefix}-${this.size}-round`]: this.round
        }
      ]
    }
  }
}
</script>
