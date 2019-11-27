<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-btn-group'
export default {
  name: 'by-button-group',
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
