<template>
  <div>
    <h4>基本用法{{model1}}</h4>
    <by-select v-model="model1" style="width: 300px;">
      <by-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</by-option>
    </by-select>
    <br />
    <h4>多选{{model2}}</h4>
    <by-select v-model="model2" multiple style="width: 300px;">
      <by-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</by-option>
    </by-select>
    <br />
    <!-- <hr>
    <h4>Size</h4>
    <by-select v-model="sw" size="large"></by-select>
    <br>
    <by-select v-model="sw" size="default"></by-select>
    <br>
    <by-select v-model="sw" size="small"></by-select>
    <hr>
    <h4>Size</h4>
    <by-select v-model="sw" iconSolid></by-select>
    <br>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      model1: "London",
      model2: ["London"]
    };
  },
  methods: {},
  created () {
    // setTimeout(() => {
    //   this.model1 = ['Canberra']
    // },3000)
  }
};
</script>

<style>
</style>
