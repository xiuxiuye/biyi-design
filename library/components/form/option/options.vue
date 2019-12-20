<template>
  <li class="by-dropdown-list-item" @click="handleClick">
    <slot>{{label || value}}</slot>
  </li>
</template>

<script>
const prefix = 'by-option'
export default {
  name: prefix,
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$parent.handleChange(this.value)
    }
  }
}
</script>
