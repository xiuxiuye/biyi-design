<template>
  <div :class="classes" @click="handleClick">
    <span class="by-checkbox-copy" v-if="nonbutton">
      <span :class="copyClasses"></span>
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
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked: {
      get () {
        if (this.$parent.$options.name === 'by-checkbox-group') {
          return this.$parent.value.includes(this.label)
        } else {
          return this.value === this.trueValue
        }
      },
      set (newValue) {
        if (newValue == this.checked) return
        if (this.$parent.$options.name === 'by-checkbox-group') {
          if (newValue) {
            if (!this.$parent.value.includes(this.label)) {
              this.$parent.value.push(this.label)
            }
          } else {
            if (this.$parent.value.includes(this.label)) {
              let index = this.$parent.value.findIndex((value, index) => {
                return value === this.label
              })
              if (index >= 0) {
                this.$parent.value.splice(index, 1)
              }
            }
          }
          this.$parent.$emit('input', this.$parent.value)
          this.$parent.change()
        } else {
          this.$emit('change', newValue ? this.trueValue : this.falseValue)
        }
      }
    },
    classes () {
      return [
        prefix,
        {
          [`${prefix}-size-${this.size}`]: !!this.size,
          [`${prefix}-checked`]: this.checked,
          [`${prefix}-disabled`]: this.disabled,
          [`${prefix}-border`]: this.border,
          [`${prefix}-border-${this.size}`]: this.border && !!this.size,
          [`${prefix}-size`]: this.size
        }
      ]
    },
    copyClasses () {
      return [
        {
          ['by-checkbox-copy-indeterminate']: this.indeterminate,
          ['by-checkbox-copy-checked']: !this.indeterminate
        }
      ]
    },
    nonbutton () {
      return !this.$parent.button
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      if (this.indeterminate) return
      this.checked = !this.checked
    }
  }
}
</script>

<style lang="less"></style>