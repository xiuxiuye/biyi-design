<template>
  <div>
    <h4>单独使用</h4>
    <by-radio v-model="mesg" @change="handleChange"></by-radio>
    <br>
    {{mesg}}
    <hr>
    <h4>Size</h4>
    <by-radio v-model="mesg" size="large"></by-radio>
    <by-radio v-model="mesg"></by-radio>
    <by-radio v-model="mesg" size="small"></by-radio>
    <br>
    <hr>
    <h4>组合使用</h4>
    <by-radio-group v-model="Label">
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚"></by-radio>
    </by-radio-group>
    <br>
    {{Label}}
    <br>
    <by-radio-group v-model="Label2" @change="handleChange">
      <by-radio label="apple">
        <by-icon type="apple"></by-icon>
        <span>apple</span>
      </by-radio>
      <by-radio label="android">
        <by-icon type="android"></by-icon>
        <span>android</span>
      </by-radio>
      <by-radio label="windows">
        <by-icon type="windows"></by-icon>
        <span>windows</span>
      </by-radio>
    </by-radio-group>
    <br>
    {{Label2}}
    <br>
    <hr>
    <h4>Disabled</h4>
    <by-radio v-model="mesg" disabled>金斑蝶</by-radio>
    <br>
    <by-radio-group v-model="Label">
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚" disabled></by-radio>
    </by-radio-group>
    <br>
    <hr>
    <h4>Vertical</h4>
    <by-radio-group v-model="Label" vertical button>
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚" disabled></by-radio>
    </by-radio-group>
    <hr>
    <h4>Border</h4>
    <by-radio v-model="mesg" border>金斑蝶</by-radio>
    <by-radio v-model="mesg" disabled border>金斑蝶</by-radio>
    <br><br>
    <by-radio v-model="mesg" border size="large">金斑蝶</by-radio>
    <by-radio v-model="mesg" disabled border>金斑蝶</by-radio>
    <by-radio v-model="mesg" border size="small">金斑蝶</by-radio>
    <br><br>
    <by-radio-group v-model="Label">
      <by-radio label="金斑蝶" border></by-radio>
      <by-radio label="爪哇犀牛" border></by-radio>
      <by-radio label="印度黑羚" disabled border></by-radio>
    </by-radio-group>
    <hr>
    <h4>Button模式</h4>
    <by-radio-group v-model="Label" button>
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚" disabled></by-radio>
    </by-radio-group>
    <hr>

    <h4>Size</h4>
    <by-radio-group v-model="Label" button size="large">
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚" disabled></by-radio>
    </by-radio-group>
    <br>
    <by-radio-group v-model="Label" button>
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚" disabled></by-radio>
    </by-radio-group>
    <br>
    <by-radio-group v-model="Label" button size="small" @change="iconClick1">
      <by-radio label="金斑蝶"></by-radio>
      <by-radio label="爪哇犀牛"></by-radio>
      <by-radio label="印度黑羚" disabled></by-radio>
    </by-radio-group>
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
    },
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>