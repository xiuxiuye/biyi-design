<template>
  <li :class="classes" @click.stop="handleClick">
    <slot>{{label || value}}</slot>
    <by-icon v-if="selected" class="by-option-selected-icon" type="check"></by-icon>
  </li>
</template>

<script>
const prefix = 'by-option'
export default {
  name: prefix,
  data () {
    return {
      selected: false,
      currentSelected: false
    }
  },
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
  computed: {
    classes () {
      return [
        'by-dropdown-list-item',
        {
          [`${prefix}-selected`]: this.selected,
          [`${prefix}-current-selected`]: this.currentSelected
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.currentSelected = true
      this.$parent.handleChange(this.value)
      this.$parent.setOptionCurrentSelected(this.value)
      this.$parent.handleClick('option')
    }
  }
}
</script>
