<template>
  <icon-group>
    <slot></slot>
  </icon-group>
</template>

<script>
import { FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
export default {
  name: 'by-icon-group',
  components: {
    'icon-group': FontAwesomeLayers,
    'icon-text': FontAwesomeLayersText
  },
  props: {
    text: {
      type: String
    }
  }
}
</script>
