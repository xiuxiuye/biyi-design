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
const prefix = 'by-btn'
export default {
  name: 'by-button',
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
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
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
          [`${prefix}-circle`]: this.circle,
          [`${prefix}-${this.size}-circle`]: this.circle,
          [`${prefix}-${this.size}-round`]: this.round && !this.circle,
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
