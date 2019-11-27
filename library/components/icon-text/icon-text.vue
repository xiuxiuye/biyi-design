<template>
  <icon-text
    :style="styles"
    :transform="transform"
    :value="value" />
</template>

<script>
import { FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
export default {
  name: 'by-icon-text',
  components: {
    'icon-text': FontAwesomeLayersText
  },
  props: {
    transform: {
      type: [String, Object]
    },
    value: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    styles () {
      return {
        fontSize: this.color
      }
    }
  }
}
</script>
