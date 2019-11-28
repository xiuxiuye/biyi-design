<template>
  <div :class="classes" @mouseenter="showClearBtn" @mouseleave="hideClearBtn">
    <input
      :value="value"
      @input="handleInput">
    <by-icon
      v-if="isClearable"
      class="by-input-clear"
      type="close-circle-fill"
      @click="clearInput"></by-icon>
    <by-icon
      v-if="!!icon"
      class="by-input-icon"
      :type="icon"></by-icon>
  </div>
</template>

<script>
const prefix = 'by-input'
export default {
  name: 'by-input',
  data () {
    return {
      isClearable: false
    }
  },
  props: {
    value: {},
    size: {
      type: String,
      default: 'default'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {
          [`${prefix}-size-${this.size}`]: !!this.size,
          [`${prefix}-suffix-icon`]: !!this.suffixIcon || this.clearable
        }
      ]
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
      this.showClearBtn()
    },
    showClearBtn () {
      this.isClearable = this.clearable && !!this.value
    },
    hideClearBtn () {
      this.isClearable = false
    },
    clearInput () {
      this.$emit('input', '')
    }
  }
}
</script>
