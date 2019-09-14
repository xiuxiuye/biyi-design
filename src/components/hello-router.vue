<style lang="less">
@import './hello-router.less';
.wrapper {
  h1 {
    color: purple;
  }
}
</style>

<template>
  <div class="wrapper">
    <h1>{{mesg}}</h1>
    <h2>{{mesg2}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesg: 'hello router',
      mesg2: 'i am mesg2!'
    }
  }
}
</script>

