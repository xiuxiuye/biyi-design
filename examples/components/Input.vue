<template>
  <div>
    <h4>v-modal</h4>
    <by-input v-model="mesg" ref="myinput" style="width: 300px"></by-input>
    {{mesg}}
    <hr>
    <h4>Type</h4>
    <by-input v-model="mesg" type="text" style="width: 300px">
    </by-input>
    <br>
    <by-input v-model="mesg" type="password" style="width: 300px">
    </by-input>
    <br>
    <by-input v-model="mesg" type="textarea" style="width: 300px">
    </by-input>
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
    <h4>SuffixIcon</h4>
    <by-input v-model="mesg" style="width: 300px" suffix-icon="search"  @click="handleChange"></by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" clearable suffix-icon="search"></by-input>
    <hr>
    <h4>PrefixIcon</h4>
    <by-input v-model="mesg" style="width: 300px" prefix-icon="lock" suffix-icon="search"></by-input>
    <hr>
    <h4>Search</h4>
    <by-input v-model="mesg" style="width: 300px" search></by-input>
    <br>
    <hr>
    <h4>Enter Search</h4>
    <by-input v-model="mesg" style="width: 300px" search enter-button></by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search enter-button="Search"></by-input>
    <br>
    <by-input v-model="mesg" size="large" style="width: 300px" search enter-button="Search"></by-input>
    <hr>
    <h4>show-word-limit</h4>
    <by-input v-model="mesg" style="width: 300px" :maxlength="10" show-word-limit></by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" :maxlength="10" show-word-limit suffixIcon="search">
    </by-input>
    <br>
    <by-input v-model="mesg" type="textarea" :maxlength="10" :autosize="{ min: 4, max: 8 }" show-word-limit style="width: 300px"></by-input>
    <hr>
    <h4>Disabled</h4>
    <by-input v-model="mesg" style="width: 300px" disabled>
    </by-input>
    <br>
    <by-input v-model="mesg" type="textarea" style="width: 300px" disabled>
    </by-input>
    <hr>
    <h4>TextArea</h4>
    <by-input v-model="mesg" type="textarea" style="width: 300px">
    </by-input>
    <br>
    <h4>Rows</h4>
    <by-input v-model="mesg" type="textarea" :rows="6" style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>placeholder</h4>
    <by-input style="width: 300px" placeholder="请输入内容">
    </by-input>
    <br>
    <hr>
    <h4>Autofocus</h4>
    <by-input v-model="mesg" type="textarea" autofocus style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>Readonly</h4>
    <by-input v-model="mesg" readonly style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>Autosize</h4>
    <by-input v-model="mesg" type="textarea" autosize style="width: 300px"></by-input>
    <br>
    <by-input v-model="mesg" type="textarea" :autosize="{ min: 4, max: 8 }" style="width: 300px"></by-input>
    <hr>
    <h4>Password</h4>
    <by-input v-model="mesg" type="password" password style="width: 300px"></by-input>
    <br>
    <by-input v-model="mesg" type="password" prefix-icon="lock" password style="width: 300px">
    </by-input>
    <hr>
    <h4>Slot-Prefix-SuffixIcon</h4>
    <by-input v-model="mesg" style="width: 300px">
      <template #suffix>
        <by-icon type="search"></by-icon>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" clearable style="width: 300px">
      <template #prefix>
        <by-icon type="search"></by-icon>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px">
      <template #prefix>
        <by-icon type="search"></by-icon>
      </template>
      <template #suffix>
        <by-icon type="search"></by-icon>
      </template>
    </by-input>
    <hr>
    <h4>Prepend & Append</h4>
    <by-input v-model="mesg" style="width: 300px" search enter-button>
      <template #prepend>
        <div>http://</div>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search enter-button>
      <template #append>
        <div>.com</div>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search enter-button>
      <template #prepend>
        <div>http://</div>
      </template>
      <template #append>
        <div>.com</div>
      </template>
    </by-input>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mesg: 'hello'
    }
  },
  methods: {
    handleChange (value) {
      console.log('value changed:', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs['myinput'].focus()
    },2000)
    setTimeout(() => {
      this.$refs['myinput'].blur()
    },4000) 
  }
}
</script>

<style lang="less" scoped>
</style>