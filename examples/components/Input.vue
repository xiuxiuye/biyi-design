<template>
  <div>
    <h4>v-modal</h4>
    <by-input v-model="mesg" style="width: 300px"></by-input>
    {{mesg}}
    <hr>
    <h4>Size</h4>
    <by-input v-model="mesg" size="small" style="width: 300px"></by-input>
    <br>
    <by-input v-model="mesg" size="default" style="width: 300px"></by-input>
    <br>
    <by-input v-model="mesg" size="large" style="width: 300px"></by-input>
    <hr>
    <h4>Clearable</h4>
    <by-input v-model="mesg" clearable style="width: 300px"></by-input>
    <hr>
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