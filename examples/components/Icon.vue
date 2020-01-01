<template>
  <div>
    <h4>Type</h4>
    <by-icon type="ungroup"></by-icon>
    <by-icon type="shortcut"></by-icon>
    <by-icon type="Console-SQL"></by-icon>
    <by-icon type="bug-fill"></by-icon>
    <hr>
    <h4>Size</h4>
    <by-icon type="twitter" size="16"></by-icon>
    <by-icon type="twitter" size="32"></by-icon>
    <by-icon type="twitter" :size="48"></by-icon>
    <by-icon type="twitter" :size="64" @click="hanldeClick"></by-icon>
    <hr>
    <h4>Color</h4>
    <by-icon type="twitter" color="red"></by-icon>
    <by-icon type="twitter" color="green"></by-icon>
    <by-icon type="twitter" color="blue"></by-icon>
    <by-icon type="twitter" color="yellow"></by-icon>
    <hr>
    <h4>BackgroundColor</h4>
    <by-icon type="twitter" bg-color="red"></by-icon>
    <by-icon type="twitter" bg-color="green"></by-icon>
    <by-icon type="twitter" bg-color="blue"></by-icon>
    <by-icon type="twitter" bg-color="yellow"></by-icon>
    <hr>
    <h4>Rotation</h4>
    <by-icon type="twitter" rotation="30"></by-icon>
    <by-icon type="twitter" rotation="90"></by-icon>
    <by-icon type="twitter" :rotation="180"></by-icon>
    <by-icon type="twitter" :rotation="270"></by-icon>
    <hr>
    <h4>Flip</h4>
    <by-icon type="twitter"></by-icon>
    <by-icon type="twitter" flip="horizontal"></by-icon>
    <by-icon type="twitter" flip="vertical"></by-icon>
    <by-icon type="twitter" flip="both"></by-icon>
    <hr>
    <h4>Spin</h4>
    <by-icon type="reload" spin="ccw"></by-icon>
    <by-icon type="reload" spin></by-icon>
    <by-icon type="spinner-a" spin="cw"></by-icon>
    <by-icon type="spinner-b" spin></by-icon>
    <hr>
    <h4>pulse</h4>
    <by-icon type="spinner-a" pulse="cw"></by-icon>
    <by-icon type="spinner-a" pulse="ccw"></by-icon>
    <hr>
    <h4>All Icons</h4>
    <template v-for="icon in icons">
      <span class="icon-wrapper">
        <by-icon :type="icon['font_class']" :size="24" color="black" />
        <span>{{icon['font_class']}}</span>
      </span>
    </template>
  </div>
</template>

<script>
import icons from './icon.js'
export default {
  data() {
    return {
      icons: icons
    }
  },
  methods: {
    hanldeClick () {
      alert(1)
    } 
  }
}
</script>

<style lang="less" scoped>
.icon-wrapper {
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #eee;
  text-align: center;
  margin: 8px;
  padding: 4px;
  span {
    font-size: 14px;
  }
}
</style>
