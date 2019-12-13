<template>
  <div>
    <h4>基本用法</h4>
    <by-switch v-model="sw"></by-switch>
    <br>
    {{sw}}
    <hr>
    <h4>Size</h4>
    <by-switch v-model="sw" size="large"></by-switch>
    <by-switch v-model="sw"></by-switch>
    <by-switch v-model="sw" size="small"></by-switch>
    <br>
    {{sw}}
    <hr>
    <h4>自定义内容</h4>
    <by-switch v-model="sw">
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <by-switch v-model="sw">
      <template #on>
        <by-icon type="check"></by-icon>
      </template>
      <template #off>
        <by-icon type="close"></by-icon>
      </template>
    </by-switch>
    <by-switch v-model="sw" size="large">
      <template #on>开启</template>
      <template #off>关闭</template>
    </by-switch>
    <by-switch v-model="sw" size="large">
      <template #on>ON</template>
      <template #off>OFF</template>
    </by-switch>
    <br>
    {{sw}}
    <hr>
    <h4>Disabled</h4>
    <by-switch v-model="sw" disabled>
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <br>
    {{sw}}
    <hr>
    <h4>Loading</h4>
    <by-switch v-model="sw" loading size="large">
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <by-switch v-model="sw" loading>
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <by-switch v-model="sw" loading size="small">
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <br>
    {{sw}}
    <hr>
    <h4>自定义背景颜色</h4>
    <by-switch v-model="sw" on-color="green" off-color="red">
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <br>
    {{sw}}
    <hr>
    <h4>阻止切换</h4>
    <by-switch v-model="sw" :before-change="ischange">
      <template #on>开</template>
      <template #off>关</template>
    </by-switch>
    <br>
    {{sw}}
    <hr>
  </div>
</template>

<script>
import icons from './icon.js'
export default {
  data() {
    return {
      sw: false
    }
  },
  methods: {
    ischange () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
