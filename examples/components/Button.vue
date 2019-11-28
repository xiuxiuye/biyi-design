<template>
  <div>
    <hr>
    <h4>Size</h4>
    <by-button size="large">Default</by-button>
    <by-button>Default</by-button>
    <by-button size="small">Default</by-button>
    <hr>
    <h4>Type</h4>
    <by-button type="default">Default</by-button>
    <by-button type="primary">Default</by-button>
    <by-button type="success">Default</by-button>
    <by-button type="error">Default</by-button>
    <by-button type="warning">Default</by-button>
    <hr>
    <h4>Plain</h4>
    <by-button type="default" plain>Default</by-button>
    <by-button type="primary" plain>Default</by-button>
    <by-button type="success" plain>Default</by-button>
    <by-button type="error" plain>Default</by-button>
    <by-button type="warning" plain>Default</by-button>
    <hr>
    <h4>Circle</h4>
    <by-button type="primary" circle>A</by-button>
    <by-button type="success" circle>B</by-button>
    <by-button type="error" circle size="large">C</by-button>
    <by-button type="warning" circle size="small">D</by-button>
    <hr>
    <h4>Round</h4>
    <by-button size="large" round>Default</by-button>
    <by-button round>Default</by-button>
    <by-button size="small" round>Default</by-button>
    <hr>
    <h4>Icon</h4>
    <by-button type="primary" circle icon="search"></by-button>
    <by-button type="primary" icon="search">Search</by-button>
    <by-button type="primary" icon="search" round>Search</by-button>
    <by-button type="primary">
      <by-icon type="search"></by-icon>
      Search
    </by-button>
    <by-button type="primary" round>
      Search
      <by-icon type="search"></by-icon>
    </by-button>
    <by-button type="primary">
      <by-icon type="left"></by-icon>
      Back
    </by-button>
    <by-button type="primary" size="large">
      Forward
      <by-icon type="right"></by-icon>
    </by-button>
    <hr>
    <h4>Long</h4>
    <by-button type="error" long>Long Button</by-button>
    <hr>
    <h4>Disabled</h4>
    <by-button type="primary" disabled>Disabled</by-button>
    <hr>
    <h4>Loading</h4>
    <by-button type="primary" loading>Loading</by-button>
    <hr>
    <h3>Button Group</h3>
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
      <by-button icon="apple-fill"></by-button>
      <by-button icon="twitter"></by-button>
      <by-button icon="QQ"></by-button>
      <by-button icon="wechat-fill"></by-button>
    </by-button-group>
    <by-button-group round size="large">
      <by-button icon="apple-fill"></by-button>
      <by-button icon="twitter"></by-button>
      <by-button icon="QQ"></by-button>
      <by-button icon="wechat-fill"></by-button>
    </by-button-group>
    <by-button-group round size="small">
      <by-button icon="apple-fill"></by-button>
      <by-button icon="twitter"></by-button>
      <by-button icon="QQ"></by-button>
      <by-button icon="wechat-fill"></by-button>
    </by-button-group>
    <by-button-group>
      <by-button type="primary">
        <by-icon type="left"></by-icon>
        Backward
      </by-button>
      <by-button type="primary">
        Forward
        <by-icon type="right"></by-icon>
      </by-button>
    </by-button-group>
    <by-button-group size="large">
      <by-button type="primary">
        <by-icon type="left"></by-icon>
        Backward
      </by-button>
      <by-button type="primary">
        Forward
        <by-icon type="right"></by-icon>
      </by-button>
    </by-button-group>
    <hr>
    <h4>Vertical</h4>
    <by-button-group vertical>
      <by-button icon="apple-fill"></by-button>
      <by-button icon="twitter"></by-button>
      <by-button icon="QQ"></by-button>
      <by-button icon="wechat-fill"></by-button>
    </by-button-group>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>