<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-radio-group'
export default {
  name: prefix,
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number]
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {
          [`${prefix}-vertical`]: this.vertical
        }
      ]
    }
  }
}
</script>
