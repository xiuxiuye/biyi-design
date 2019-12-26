<template>
  <div :class="classes" :style="styles" @click="handleClick">
    <span :class="ballClasses"></span>
    <span :class="slotClasses">
      <span class="by-switch-slot-inner">
        <slot v-if="this.value" name="on"></slot>
        <slot v-else name="off"></slot>
      </span>
    </span>
    <input type="hidden" :value="value">
  </div>
</template>

<script>
const prefix = 'by-switch'
export default {
  name: prefix,
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: String, 
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onColor: {
      type: String
    },
    offColor: {
      type: String
    },
    beforeChange: {
      type: Function
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {
          [`${prefix}-off`]: !this.value,
          [`${prefix}-on`]: this.value,
          [`${prefix}-size-${this.size}`]: !!this.size,
          [`${prefix}-disabled`]: this.disabled,
          [`${prefix}-loading`]: this.loading
        }
      ]
    },
    styles () {
      return {
        backgroundColor: this.value ? this.onColor : this.offColor
      }
    },
    ballClasses () {
      return [
        `${prefix}-ball`,
        {
          [`${prefix}-ball-off`]: !this.value,
          [`${prefix}-ball-on`]: this.value,
          [`${prefix}-${this.size}-ball`]: this.size
        }
      ]
    },
    slotClasses () {
      return [
        `${prefix}-slot`,
        {
          [`${prefix}-slot-off`]: !this.value,
          [`${prefix}-slot-on`]: this.value
        }
      ]
    }
  },
  methods: {
    handleClick () {
      if (this.disabled || this.loading) return
      if (this.beforeChange) {
        this.beforeChange().then(() => {
          this.emitChange()
        })
      } else {
        this.emitChange()
      }
    },
    emitChange () {
      this.$emit('input', !this.value)
      this.$emit('change', !this.value)
    }
  }
}
</script>
