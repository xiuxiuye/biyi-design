<template>
  <div :class="classes" @click="handleClick">
    <span class="by-radio-copy" v-if="nonbutton">
    </span>
    <input ref="radio" type="radio" :checked="checked">
    <slot>{{label || 'Radio'}}</slot>
  </div>
</template>

<script>
const prefix = 'by-radio'
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
      type: [String, Number]
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
    }
  },
  computed: {
    checked: {
      get () {
        if (this.$parent.$options.name === 'by-radio-group') {
          return this.label === this.$parent.value
        } else {
          return this.value
        }
      },
      set (newValue) {
        if (newValue == this.checked) return
        if (this.$parent.$options.name === 'by-radio-group') {
          this.$parent.$emit('input', this.label)
          this.$parent.change(this.label)
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
          [`${prefix}-checked`]: this.checked,
          [`${prefix}-disabled`]: this.disabled,
          [`${prefix}-border`]: this.border,
          [`${prefix}-border-checked`]: this.border && this.checked,
          [`${prefix}-border-disabled`]: this.border && this.disabled
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
      this.checked = true
    }
  }
}
</script>
