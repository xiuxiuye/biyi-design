<template>
  <div>
    <h1 class="h1">
      component1-{{ a }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'by-component1',
  data () {
    return {
      a: 1
    }
  },
  created () {
    this.test()
  },
  methods: {
    test () {
      const a = '123'
      console.log(a)
    }
  }
}
</script>

<style lang="scss">

</style>
