<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{message}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'hello cvue-cli'
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>

