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
    },
    multipleLimit: {
      type: Number,
      default: 0
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
      this.setOptionCurrentSelected(newValue)
      const isArray = this.value instanceof Array
      if (isArray) {
        if (!this.value.includes(newValue)) {
          const tempSelected = this.value.reduce((pre, next) => {
            pre.push(next)
            return pre
          }, [])
          if (this.multipleLimit > 0 && tempSelected.length >= this.multipleLimit) {
            return
          }
          this.setOptionCurrentSelected()
          tempSelected.push(newValue)
          this.$emit('input', tempSelected)
        }
      } else if (this.value !== newValue) {
        this.$emit('input', newValue)
      }
    },
    setOptionCurrentSelected (newValue) {
      const children = this.$children
      for (let i = 1; i < children.length; i++) {
        if (newValue !== children[i].value) {
          children[i].currentSelected = false
        }
      }
    },
    setValueSelected () {
      const isArray = this.value instanceof Array
      if (this.multiple && !isArray) {
        console.error(`Biyi-design: the type of ${'\'value\''} prop can only be array in multi selection mode!`)
        return 
      }
      if (!this.multiple && isArray) {
        console.error(`Biyi-design: the type of ${'\'value\''} prop can only be number or string in single selection mode!`)
        return
      }
      const children = this.$children
      const tempSelected = []
      const childrenMap = new Map()
      for (let i = 1; i < children.length; i++) {
        childrenMap.set(children[i].value, children[i])
      }
      if (isArray) {
        for (let j = 0; j < this.value.length; j++) {
          const child = childrenMap.get(this.value[j])
          if (child !== undefined) {
            child.selected = true
            tempSelected.push(child.label ? child.label : child.$el.innerText)
          }
        }
      } else {
        const child = childrenMap.get(this.value)
        if (child !== undefined) {
          child.selected = true
          tempSelected.push(child.label ? child.label : child.$el.innerText)
        }
      }
      this.valueSelected = tempSelected
      console.log(this.valueSelected)
    }
  },
  mounted () {
    this.setValueSelected()
  }
}
</script>
