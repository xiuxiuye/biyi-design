<template>
  <button :type="nativeType" :class="classes" @click="handleClick">
    <span>
      <by-icon v-if="loading" :type="loadingIcon" :spin="spin" :pulse="pulse" fixed-width></by-icon>
      <by-icon v-if="icon" :type="icon" fixed-width></by-icon>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import byIcon from '../icon'
const prefix = 'by-button'
export default {
  name: prefix,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    plain: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String
    },
    icon: {
      type: String
    },
    long: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'spinner-b'
    },
    loadingAction: {
      type: String,
      default: 'spin'
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        this.plain ? `${prefix}-${this.type}-plain` : `${prefix}-${this.type}`,
        `${prefix}-${this.size}`,
        {
          [`${prefix}-circle`]: this.shape === 'circle',
          [`${prefix}-${this.size}-circle`]: this.shape === 'circle',
          [`${prefix}-${this.size}-round`]: this.shape === 'round',
          [`${prefix}-long`]: this.long,
          [`${prefix}-disabled`]: this.disabled,
          [`${prefix}-loading`]: this.loading
        }
      ]
    },
    pulse () {
      return this.loadingAction === 'pulse'
    },
    spin () {
      return !this.pulse
    }
  },
  components: {
    byIcon
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>
