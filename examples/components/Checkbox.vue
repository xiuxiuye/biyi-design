<template>
  <div>
    <h4>单独使用</h4>
    <by-checkbox v-model="mesg"></by-checkbox>
    <br>
    {{mesg}}
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mesg: false,
      Label: '爪哇犀牛',
      Label2: 'windows'
    }
  },
  methods: {
    iconClick () {
      console.log('icon clicked!')
    },
    iconClick1 () {
      console.log('icon1 clicked!')
    }
  }
}
</script>

<style lang="less" scoped>
</style>