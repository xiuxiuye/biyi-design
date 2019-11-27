<template>
  <div :class="classes">
    <input :value="value" @input="handleInput">
  </div>
</template>

<script>
const prefix = 'by-input'
export default {
  name: 'by-input',
  props: {
    value: {}
  },
  computed: {
    classes () {
      return [
        prefix
      ]
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="less">

</style>