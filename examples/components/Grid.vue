<template>
  <div>
    <hr>
    <h4>Span</h4>
    <by-row class="row1">
      <by-col span="12" class="col odd"><div>col-12</div></by-col>
      <by-col span="12" class="col even"><div>col-12</div></by-col>
    </by-row>
    <by-row class="row1">
      <by-col span="8" class="col odd"><div>col-8</div></by-col>
      <by-col span="8" class="col even"><div>col-8</div></by-col>
      <by-col span="8" class="col odd"><div>col-8</div></by-col>
    </by-row>
    <by-row class="row1">
      <by-col span="6" class="col odd"><div>col-6</div></by-col>
      <by-col span="6" class="col even"><div>col-6</div></by-col>
      <by-col span="6" class="col odd"><div>col-6</div></by-col>
      <by-col span="6" class="col even"><div>col-6</div></by-col>
    </by-row>
    <h4>Gutter</h4>
    <by-row class="row1" :gutter="16">
      <by-col span="6" class="col odd"><div>col-6</div></by-col>
      <by-col span="6" class="col even"><div>col-6</div></by-col>
      <by-col span="6" class="col odd"><div>col-6</div></by-col>
      <by-col span="6" class="col even"><div>col-6</div></by-col>
    </by-row>
    <h4>Order</h4>
    <by-row class="row1" type="flex">
      <by-col span="6" class="col odd" order="4"><div>4 col-1</div></by-col>
      <by-col span="6" class="col even" order="3"><div>3 col-2</div></by-col>
      <by-col span="6" class="col odd" order="2"><div>2 col-3</div></by-col>
      <by-col span="6" class="col even" order="1"><div>1 col-4</div></by-col>
    </by-row>
    <h4>Push | Pull</h4>
    <by-row class="row1">
      <by-col span="18" class="col odd" push="6"><div>col-18 | push-6</div></by-col>
      <by-col span="6" class="col even" pull="18"><div>col-6 | pull-18</div></by-col>
    </by-row>
    <h4>Offset</h4>
    <by-row class="row1">
      <by-col span="8" class="col odd"><div>col-8</div></by-col>
      <by-col span="8" class="col even" offset="8"><div>col-8 | offset-8</div></by-col>
    </by-row>
    <by-row class="row1">
      <by-col span="6" class="col odd" offset="8"><div>col-6</div></by-col>
      <by-col span="6" class="col even" offset="4"><div>col-6 | offset-4</div></by-col>
    </by-row>
    <by-row class="row1">
      <by-col span="12" class="col odd" offset="8"><div>col-12 | offset-8</div></by-col>
    </by-row>
    <h4>Justify</h4>
    <by-row class="row1" type="flex" justify="start">
      <by-col span="4" class="col odd"><div>col-4 | start</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | start</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" justify="end">
      <by-col span="4" class="col odd"><div>col-4 | end</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | end</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" justify="center">
      <by-col span="4" class="col odd"><div>col-4 | center</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | center</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" justify="space-between">
      <by-col span="4" class="col odd"><div>col-4 | space-between</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | space-between</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" justify="space-around">
      <by-col span="4" class="col odd"><div>col-4 | space-around</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | space-around</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" justify="space-evenly">
      <by-col span="4" class="col odd"><div>col-4 | space-evenly</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | space-evenly</div></by-col>
    </by-row>
    <h4>Align</h4>
    <by-row class="row1" type="flex" align="top" style="height: 100px;background: red;">
      <by-col span="4" class="col odd"><div>col-4 | start</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | start</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" align="bottom" style="height: 100px;background: red;">
      <by-col span="4" class="col odd"><div>col-4 | end</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | end</div></by-col>
    </by-row>
    <by-row class="row1" type="flex" align="middle" style="height: 100px;background: red;">
      <by-col span="4" class="col odd"><div>col-4 | center</div></by-col>
      <by-col span="4" class="col even"><div>col-4 | center</div></by-col>
    </by-row>
    <h4>响应式布局 Span</h4>
    <by-row class="row1">
      <by-col :xs="24" :sm="18" :md="12" :lg="6" :xl="4"  class="col odd"><div>col-4 | space-evenly</div></by-col>
    </by-row>
    <by-row class="row1">
      <by-col :xs="{ span: 24 }" :sm="{ span: 18 }" :md="{ span: 12 }" :lg="{ span: 6 }" :xl="{ span: 4 }"  class="col odd"><div>col-4 | space-evenly</div></by-col>
    </by-row>
    <h4>响应式布局 Push | Pull</h4>
    <by-row class="row1">
      <by-col span="18" :xs="{ push: 6 }" :sm="{ push: 6 }" :md="{ push: 6 }" :lg="{ push: 6 }" :xl="{ push: 6 }" class="col odd"><div>col-18 | push-6</div></by-col>
      <by-col span="6" :xs="{ pull: 22 }" :sm="{ pull: 20 }" :md="{ pull: 18 }" :lg="{ pull: 18 }" :xl="{ pull: 18 }" class="col even"><div>col-6 | pull-18</div></by-col>
    </by-row>
    <h4>响应式布局 Offset</h4>
    <by-row class="row1">
      <by-col span="3" :xs="{ offset: 2 }" :sm="{ offset: 4 }" :md="{ offset: 6 }" :lg="{ offset: 8 }" :xl="{ offset: 10 }" class="col odd"><div>col-18 | push-6</div></by-col>
      <by-col span="3" :xs="{ offset: 2 }" :sm="{ offset: 4 }" :md="{ offset: 6 }" :lg="{ offset: 8 }" :xl="{ offset: 10 }" class="col odd"><div>col-18 | push-6</div></by-col>
    </by-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="less">
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