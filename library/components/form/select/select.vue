<template>
  <div class="by-select">
    <by-icon :class="iconClasses" :type="iconSolid ? 'caret-down' : 'down'" size="12" @click="handleClick"></by-icon>
    <div :class="classes" tabindex="0" @click.stop="handleClick" @blur="handleBlur">
      <template v-if="valueSelected.length > 0">
        <span :class="tagClasses" v-for="(item, index) in valueSelected" :key="`by-select-value-${index}`">
          <span class="by-select-tag-lable">{{item}}</span>
          <by-icon class="by-select-tag-close" type="close" size="12"></by-icon>
        </span>
      </template>
      <span v-else class="placehold">{{placehold}}</span>
      <transition name="by-dropdown-animation">
        <div class="by-dropdown-wrap" v-show="isOptionsOpened">
          <ul class="by-dropdown-list">
            <slot></slot>
          </ul>
        </div>
      </transition>
    </div>
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
      return [
        `${prefix}-icon`,
        {
          [`${prefix}-icon-rotated`]: this.isOptionsOpened
        }
      ]
    },
    tagClasses () {
      return {

        // 多选时设置标签显示
        // 'by-select-tag'
        // [`${prefix}-value-tag-selected`]: this.multiple
      }
    }
  },
  watch: {
    value () {
      this.setValueSelected()
    }
  },
  methods: {
    handleClick (tag) {
      if (tag === 'option' && this.multiple) {
        return
      }
      this.isOptionsOpened = !this.isOptionsOpened
    },
    handleBlur () {
      this.isOptionsOpened = false
    },
    handleChange (newValue) {
      const isArray = this.value instanceof Array
      if (isArray) {
        const tempSelected = this.value.reduce((pre, next) => {
          pre.push(next)
          return pre
        }, [])
        if (tempSelected.includes(newValue)) {
          const index = tempSelected.findIndex(value => {
            return value === newValue
          })
          tempSelected.splice(index, 1)
        } else {
          if (this.multipleLimit > 0 && tempSelected.length >= this.multipleLimit) {
            return
          }
          tempSelected.push(newValue)
        }
        this.$emit('input', tempSelected)
      } else if (this.value !== newValue) {
        this.$emit('input', newValue)
      }
    },
    setOptionCurrentSelected (currentValue) {
      const children = this.$children
      for (let i = 1; i < children.length; i++) {
        if (currentValue !== children[i].value) {
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
        children[i].selected = false
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
      console.log('====================')
      console.log(this.valueSelected)
    }
  },
  mounted () {
    this.setValueSelected()
  }
}
</script>
