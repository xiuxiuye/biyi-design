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
    <h4>SuffixIcon</h4>
    <by-input v-model="mesg" style="width: 300px" suffix-icon="search" @click="iconClick"></by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" clearable suffix-icon="search" @click="iconClick" @enter="iconClick"></by-input>
    <hr>
    <h4>PrefixIcon</h4>
    <by-input v-model="mesg" style="width: 300px" prefix-icon="lock" suffix-icon="search" @click="iconClick"></by-input>
    <hr>
    <h4>Slot-Prefix-SuffixIcon</h4>
    <by-input v-model="mesg" style="width: 300px" @click="iconClick">
      <template #suffix>
        <by-icon type="search"></by-icon>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" clearable style="width: 300px" @click="iconClick">
      <template #prefix>
        <by-icon type="search"></by-icon>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" @click="iconClick">
      <template #prefix>
        <by-icon type="search"></by-icon>
      </template>
      <template #suffix>
        <by-icon type="search"></by-icon>
      </template>
    </by-input>
    <hr>
    <h4>Search</h4>
    <by-input v-model="mesg" style="width: 300px" search @search="iconClick"></by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search @search="iconClick"></by-input>
    <hr>
    <h4>Enter Search</h4>
    <by-input v-model="mesg" style="width: 300px" search enter-button @search="iconClick"></by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search enter-button="Search" @search="iconClick"></by-input>
    <br>
    <by-input v-model="mesg" size="large" style="width: 300px" search enter-button="Search" @search="iconClick"></by-input>
    <hr>
    <h4>Prepend & Append</h4>
    <by-input v-model="mesg" style="width: 300px" search enter-button @search="iconClick">
      <template #prepend>
        <div>http://</div>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search enter-button @search="iconClick">
      <template #append>
        <div>.com</div>
      </template>
    </by-input>
    <br>
    <by-input v-model="mesg" style="width: 300px" search enter-button @search="iconClick">
      <template #prepend>
        <div>http://</div>
      </template>
      <template #append>
        <div>.com</div>
      </template>
    </by-input>
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
    <h4>Type: text/password/url/email/date/number/tel</h4>
    <by-input v-model="mesg" type="text" style="width: 300px">
    </by-input>
    <br>
    <by-input v-model="mesg" type="password" style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>TextArea</h4>
    <by-input v-model="mesg" type="textarea" style="width: 300px" @change="iconClick">
    </by-input>
    <br>
    <h4>Autofocus</h4>
    <by-input v-model="mesg" type="textarea" autofocus style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>Rows</h4>
    <by-input v-model="mesg" type="textarea" :rows="6" style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>placeholder</h4>
    <by-input style="width: 300px">
    </by-input>
    <br>
    <hr>
    <h4>Autosize</h4>
    <by-input v-model="mesg" type="textarea" autosize style="width: 300px"></by-input>
    <br>
    <by-input v-model="mesg" type="textarea" :autosize="{ min: 4, max: 8 }" style="width: 300px"></by-input>
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
    iconClick () {
      console.log('icon clicked!')
    }
  }
}
</script>

<style lang="less" scoped>
</style>