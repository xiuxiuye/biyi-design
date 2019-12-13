<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-checkbox-group'
export default {
  name: prefix,
  props: {
    value: {
      type: Array,
      default: []
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
          [`${prefix}-button`]: this.button,
          [`${prefix}-size-${this.size}`]: this.button && !!this.size
        }
      ]
    }
  },
  methods: {
    change () {
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="less"></style>