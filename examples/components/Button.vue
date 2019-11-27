<template>
  <div>
    <hr>
    <router-link to="button"></router-link>
    <by-button size="large">Default</by-button>
    <by-button>Default</by-button>
    <by-button size="small">Default</by-button>
    <hr>
    <by-button type="default">Default</by-button>
    <by-button type="primary">Default</by-button>
    <by-button type="success">Default</by-button>
    <by-button type="error">Default</by-button>
    <by-button type="warning">Default</by-button>
    <hr>
    <by-button type="default" plain>Default</by-button>
    <by-button type="primary" plain>Default</by-button>
    <by-button type="success" plain>Default</by-button>
    <by-button type="error" plain>Default</by-button>
    <by-button type="warning" plain>Default</by-button>
    <hr>
    <by-button type="primary" circle>A</by-button>
    <by-button type="success" circle>B</by-button>
    <by-button type="error" circle size="large">C</by-button>
    <by-button type="warning" circle size="small">D</by-button>
    <hr>
    <by-button size="large" round>Default</by-button>
    <by-button round>Default</by-button>
    <by-button size="small" round>Default</by-button>
    <hr>
    <by-button type="primary" circle icon="fas-search"></by-button>
    <by-button type="primary" icon="fas-search">Search</by-button>
    <by-button type="primary" icon="fas-search" round>Search</by-button>
    <by-button type="primary">
      <by-icon type="fas-search"></by-icon>
      Search
    </by-button>
    <by-button type="primary" round>
      Search
      <by-icon type="fas-search"></by-icon>
    </by-button>
    <by-button type="primary">
      Forward
      <by-icon type="fas-angle-right"></by-icon>
    </by-button>
    <by-button type="primary" size="large">
      Forward
      <by-icon type="fas-angle-right"></by-icon>
    </by-button>
    <by-button type="primary" size="small">
      Forward
      <!-- <by-icon type="fas-angle-right"></by-icon> -->
      <ion-icon name="arrow-forward"></ion-icon>
    </by-button>
    <hr>
    <by-button type="error" long>Long Button</by-button>
    <hr>
    <by-button type="primary" disabled>Disabled</by-button>
    <hr>
    <by-button type="primary" loading>Loading</by-button>
    <hr>
    <h4>Basic</h4>
    <by-button-group>
      <by-button>Default</by-button>
      <by-button type="primary">Default</by-button>
    </by-button-group>
    <by-button-group>
      <by-button>Yesterday</by-button>
      <by-button>Today</by-button>
      <by-button>Tomorrow</by-button>
    </by-button-group>
    <by-button-group>
      <by-button type="primary">L</by-button>
      <by-button>M</by-button>
      <by-button type="success">R</by-button>
      <by-button>M</by-button>
      <by-button type="error">R</by-button>
      <by-button>M</by-button>
      <by-button type="warning">R</by-button>
    </by-button-group>
    <by-button-group round>
      <by-button icon="fas-share"></by-button>
      <by-button icon="fas-poo"></by-button>
      <by-button icon="fas-skating"></by-button>
      <by-button icon="fas-spider"></by-button>
    </by-button-group>
    <by-button-group round size="large">
      <by-button icon="fas-share"></by-button>
      <by-button icon="fas-poo"></by-button>
      <by-button icon="fas-skating"></by-button>
      <by-button icon="fas-spider"></by-button>
    </by-button-group>
    <by-button-group round size="small">
      <by-button icon="fas-share"></by-button>
      <by-button icon="fas-poo"></by-button>
      <by-button icon="fas-skating"></by-button>
      <by-button icon="fas-spider"></by-button>
    </by-button-group>
    <by-button-group size="small">
      <by-button type="primary">
        <by-icon type="fas-angle-left"></by-icon>
        Backward
      </by-button>
      <by-button type="primary">
        Forward
        <by-icon type="fas-angle-right"></by-icon>
      </by-button>
    </by-button-group>
    <by-button-group>
      <by-button type="primary">
        <by-icon type="fas-angle-left"></by-icon>
        Backward
      </by-button>
      <by-button type="primary">
        Forward
        <by-icon type="fas-angle-right"></by-icon>
      </by-button>
    </by-button-group>
    <by-button-group size="large">
      <by-button type="primary">
        <by-icon type="fas-angle-left"></by-icon>
        Backward
      </by-button>
      <by-button type="primary">
        Forward
        <by-icon type="fas-angle-right"></by-icon>
      </by-button>
    </by-button-group>
    <hr>
    <h4>Vertical</h4>
    <by-button-group vertical>
      <by-button icon="fas-share"></by-button>
      <by-button icon="fas-poo"></by-button>
      <by-button icon="fas-skating"></by-button>
      <by-button icon="fas-spider"></by-button>
    </by-button-group>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>