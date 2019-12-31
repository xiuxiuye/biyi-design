<template>
  <div>
    <h4>indeterminate</h4>
    <by-checkbox v-model="mesg" :indeterminate="indeterminate"></by-checkbox>
    <br />
    {{mesg}}
    <hr />
    <h4>Change事件(测试true-value和false-value)</h4>
    <by-checkbox v-model="mesg" true-value="1" @change="onchange"></by-checkbox>
    <br />
    {{mesg}}
    <hr />
    <h4>单独使用</h4>
    <by-checkbox v-model="mesg"></by-checkbox>
    <br />
    {{mesg}}
    <hr />
    <h4>Size</h4>
    <by-checkbox v-model="mesg" size="large"></by-checkbox>
    <by-checkbox v-model="mesg"></by-checkbox>
    <by-checkbox v-model="mesg" size="small"></by-checkbox>
    <br />
    <hr />
    <h4>组合使用</h4>
    <by-checkbox-group v-model="social" @change="groupChange">
      <by-checkbox label="twitter">
        <by-icon type="twitter"></by-icon>
        <span>Twitter</span>
      </by-checkbox>
      <by-checkbox label="facebook">
        <by-icon type="facebook"></by-icon>
        <span>Facebook</span>
      </by-checkbox>
      <by-checkbox label="Gitlab">
        <by-icon type="Gitlab"></by-icon>
        <span>Gitlab</span>
      </by-checkbox>
      <by-checkbox label="QQ">
        <by-icon type="QQ"></by-icon>
        <span>QQ</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    {{social}}
    <hr />
    <h4>Disabled</h4>
    <by-checkbox-group v-model="social">
      <by-checkbox disabled label="twitter">
        <by-icon type="twitter"></by-icon>
        <span>Twitter</span>
      </by-checkbox>
      <by-checkbox disabled label="facebook">
        <by-icon type="facebook"></by-icon>
        <span>Facebook</span>
      </by-checkbox>
      <by-checkbox disabled label="Gitlab">
        <by-icon type="Gitlab"></by-icon>
        <span>Gitlab</span>
      </by-checkbox>
      <by-checkbox label="QQ">
        <by-icon type="QQ"></by-icon>
        <span>QQ</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    <hr />
    <h4>Border</h4>
    <by-checkbox-group v-model="borders">
      <by-checkbox border label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox border label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox border label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    {{borders}}
    <hr />
    <h4>Border-disabled</h4>
    <by-checkbox-group v-model="borders">
      <by-checkbox border disabled label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox border disabled label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox border label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    {{borders}}
    <hr />
    <h4>Size</h4>
    <by-checkbox-group v-model="borders">
      <by-checkbox size="large" border disabled label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox border disabled label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox size="small" border label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    {{borders}}
    <hr />
    <h4>Button模式</h4>
    <by-checkbox-group v-model="borders" button>
      <by-checkbox label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    {{borders}}
    <hr />
    <h4>Button模式-size</h4>
    <by-checkbox-group v-model="borders" button size="large">
      <by-checkbox label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <by-checkbox-group v-model="borders" button>
      <by-checkbox label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <by-checkbox-group v-model="borders" button size="small">
      <by-checkbox label="香蕉">
        <span>香蕉</span>
      </by-checkbox>
      <by-checkbox label="苹果">
        <span>苹果</span>
      </by-checkbox>
      <by-checkbox label="西瓜">
        <span>西瓜</span>
      </by-checkbox>
    </by-checkbox-group>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      indeterminate: true,
      mesg: true,
      Label: "爪哇犀牛",
      Label2: "windows",
      social: ["facebook", "twitter"],
      borders: ["苹果"]
    };
  },
  methods: {
    onchange (value) {
      console.log(value)
    },
    groupChange (value) {
      console.log(value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.indeterminate = false
    },3000)
    setTimeout(() => {
      this.indeterminate = true
    },5000)
  }
};
</script>

<style lang="less" scoped>
</style>