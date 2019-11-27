<template>
  <div>
    <by-input v-model="mesg"></by-input>
    {{mesg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      mesg: 'hello'
    }
  }
}
</script>

<style lang="less" scoped>
</style>