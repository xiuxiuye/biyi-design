<template>
  <div class="by-select">
    <by-icon :class="iconClasses" :type="iconSolid ? 'caret-down' : 'down'" size="12" @click="handleClick"></by-icon>
    <div :class="classes" tabindex="0" @click="handleClick">
      <template v-if="valueSelected.length > 0">
        <span v-for="(item, index) in valueSelected" :key="`by-select-value-${index}`">{{item}}</span>
      </template>
      <span v-else class="placehold">{{placehold}}</span>
    </div>
    <transition name="by-dropdown-animation">
      <div class="by-dropdown-wrap" v-if="isOptionsOpened">
        <ul class="by-dropdown-list">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
const prefix = 'by-select'
export default {
  name: prefix,
  data () {
    return {
      isOptionsOpened: true,
      valueSelected: []
    }
  },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    iconSolid: {
      type: Boolean,
      default: false
    },
    placehold: {
      type: String,
      default: '请选择'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefix}-value`,
        {
          [`${prefix}-size-${this.size}`]: !!this.size
        }
      ]
    },
    iconClasses () {
      return {
        [`${prefix}-icon-rotated`]: this.isOptionsOpened
      }
    }
  },
  watch: {
    value () {
      this.setValueSelected()
    }
  },
  methods: {
    handleClick () {
      this.isOptionsOpened = !this.isOptionsOpened
    },
    handleChange (newValue) {
      const isArray = this.value instanceof Array
      // if (isArray) {
      //   if (!this.value.includes(newValue)) {
      //     const temp_value = this.value.reduce((pre, next) => {
      //       pre.push(next)
      //       return pre
      //     }, [])
      //     temp_value.push(newValue)
      //     this.$emit('input', temp_value )
      //   }
      // } else if (this.value !== newValue) {
      //   this.$emit('input', newValue)
      // }
    },
    setValueSelected () {
      // const children = this.$children
      // const temp_selected = []
      // const isArray = this.value instanceof Array
      // for (let i = 1; i < children.length; i++) {
      //   if (isArray) {
      //     for (let j = 1; j < this.value.length; j++) {
      //       if (this.value[i] === children[i].value) {
      //         temp_selected.push(children[i].label ? children[i].label : children[i].$el.innerText)
      //         break
      //       }
      //     }
      //   } else {
      //     if (this.value === children[i].value) {
      //       temp_selected.push(children[i].label ? children[i].label : children[i].$el.innerText)
      //       break
      //     }
      //   }
      // }
      // console.log(temp_selected)
      // this.valueSelected = temp_selected
    }
  },
  mounted() {
    this.setValueSelected()
  }
}
</script>
