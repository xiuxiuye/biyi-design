<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefix = 'by-row'
export default {
  name: prefix,
  props: {
    type: {
      type: String,
      default: 'float'
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String
    },
    align: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {
          [`${prefix}-float`]: this.type !== 'flex',
          [`${prefix}-flex`]: this.type === 'flex',
          [`${prefix}-justify-${this.justify}`]: this.justify,
          [`${prefix}-align-${this.align}`]: this.align
        },
      ]
    }
  }
}
</script>
