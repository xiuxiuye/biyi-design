<template>
  <div :class="classes" @click="handleClick">
    <span class="by-checkbox-copy">
      <by-icon class="by-checkbox-copy-icon" type="check" size="8"></by-icon>
      <input ref="by-checkbox" type="checkbox" :checked="checked">
    </span>
    <slot>{{label || 'Checkbox'}}</slot>
  </div>
</template>

<script>
const prefix = 'by-checkbox'
export default {
  name: prefix,
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    checked: {
      get () {
        if (this.$parent.$options.name === 'by-checkbox-group') {
          return this.label === this.$parent.value
        } else {
          return this.value
        }
      },
      set (newValue) {
        if (newValue == this.checked) return
        if (this.$parent.$options.name === 'by-checkbox-group') {
          this.$parent.$emit('input', this.label)
          this.$parent.change()
        } else {
          this.$emit('change', newValue)
        }
      }
    },
    classes () {
      return [
        prefix,
        {
          [`${prefix}-size-${this.size}`]: !!this.size,
          [`${prefix}-checked`]: this.checked
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.checked = !this.checked
    }
  }
}
</script>

<style lang="less"></style>