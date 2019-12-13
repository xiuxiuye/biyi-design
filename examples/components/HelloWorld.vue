<template>
  <div>
    <router-link to="grid">Grid</router-link>
    <hr>
    <router-link to="icon">Icon</router-link>
    <hr>
    <router-link to="button">Button</router-link>
    <hr>
    <router-link to="input">Input</router-link>
    <hr>
    <router-link to="radio">Radio</router-link>
    <hr>
    <router-link to="checkbox">Checkbox</router-link>
    <hr>
    <router-link to="switch">Switch</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    clickevn() {
      console.log(1);
    }
  }
};
</script>

<style lang="less" scoped>
.row1 {
  margin: 8px 0;
  background: yellow;
}
.odd {
  div {
    background-color: #1e90ff;
    height: 64px;
  }
}
.even {
  div {
    background-color: #00C853;
    height: 64px;
  }
}
</style>
