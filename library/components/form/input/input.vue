<template>
  <div>
    <template v-if="type !== 'textarea'">
      <div :class="classes" @mouseenter="showClearBtn" @mouseleave="hideClearBtn">
        <span :class="prependClasses" v-if="isPrepend">
          <slot name="prepend"></slot>
        </span>
        <span class="by-input-prefix-icon" v-if="isPrefix" @click="clickIcon">
          <by-icon v-if="!!prefixIcon" :type="prefixIcon"></by-icon>
          <slot name="prefix"></slot>
        </span>
        <input
          ref="input"
          :type="inputType"
          :value="value"
          :maxlength="maxlength"
          :disabled="disabled"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :form="form"
          @input="handleInput"
          @keyup.enter="handleEnter"
          @change="handleChange"
          @focus="handleFoucus"
          @blur="handleBlur"
          @keyup="handleKeyup"
          @keydown="handleKeydown"
          @keypress="handleKeypress">
        <span :class="wordLimitClasses" v-if="showWordLimit">{{value.length}}/{{maxlength}}</span>
        <span class="by-input-suffix-icon" v-if="isSuffix" @click="clickIcon('suffix')">
          <by-icon v-if="isClearable" type="close-circle-fill" @click="handleClear"></by-icon>
          <by-icon v-if="type === 'password' && password && !isClearable" :type="passwordIcon" @click="togglePasswordIcon"></by-icon>
          <by-icon v-if="search && !isClearable && !enterButton" type="search"></by-icon>
          <by-icon v-if="!!suffixIcon && !isClearable && !search" :type="suffixIcon"></by-icon>
          <slot name="suffix"></slot>
        </span>
        <span :class="appendClasses" v-if="isAppend" @click="clickSearch">
          <template v-if="$slots.append">
            <slot name="append"></slot>
          </template>
          <template v-else-if="search">
            <span class="search-enter-btn-text" v-if="typeof enterButton === 'string'">{{enterButton}}</span>
            <by-icon v-else type="search"></by-icon>
          </template>
        </span>
      </div>
    </template>
    <template v-else>
      <div :class="textareaClasses">
        <textarea
          ref="textarea"
          :style="textareaStyles"
          :value="value"
          :rows="rows"
          :disabled="disabled"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :readonly="readonly"
          :maxlength="maxlength"
          :form="form"
          @input="handleInput"
          @keyup.enter="handleEnter"
          @change="handleChange"
          @focus="handleFoucus"
          @blur="handleBlur"
          @keyup="handleKeyup"
          @keydown="handleKeydown"
          @keypress="handleKeypress"></textarea>
        <span :class="wordLimitClasses" v-if="showWordLimit">{{value.length}}/{{maxlength}}</span>
      </div>
    </template>
  </div>
</template>

<script>
const prefix = 'by-input'
const prefix_ = 'by-textarea'
export default {
  name: prefix,
  data () {
    return {
      isClearable: false,
      passwordIcon: 'eye-close',
      inputType: null,
      prevTextareaScrollHeight: null,
      initialTextareaHeight: null,
      textareaMinHeight: null,
      textareaMaxHeight: null,
      textareaHeight: null,
      textareaStyles: {}
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'default'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: String
    },
    prefixIcon: {
      type: String
    },
    search: {
      type: Boolean,
      default: false
    },
    enterButton: {
      type: [Boolean, String],
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 1
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Enter something...'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    form: {
      type: String
    },
    password: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {
          [`${prefix}-size-${this.size}`]: !!this.size,
          [`${prefix}-suffix`]: !!this.suffixIcon || this.$slots.suffix || this.clearable,
          [`${prefix}-prefix`]: !!this.prefixIcon || this.$slots.prefix,
          [`${prefix}-prepend`]: this.$slots.prepend,
          [`${prefix}-append`]: !!this.enterButton || this.$slots.append,
          [`${prefix}-disabled`]: this.disabled
        }
      ]
    },
    textareaClasses () {
      return [
        prefix_,
        {
          [`${prefix_}-disabled`]: this.disabled,
          [`${prefix_}-autosize`]: !!this.autosize
        }
      ]
    },
    prependClasses () {
      return [
        `${prefix}-prepend-wrap`
      ]
    },
    appendClasses () {
      return [
        `${prefix}-append-wrap`,
        {
          [`${prefix}-append-enter-button-wrap`]: !this.$slots.append && this.search && !!this.enterButton
        }
      ]
    },
    wordLimitClasses () {
      return [
        'word-limit',
        {
          ['word-limit-width-suffix']: !!this.suffixIcon || this.$slots.suffix || this.clearable
        }
      ]
    },
    isPrefix () {
      return this.$slots.prefix || !!this.prefixIcon
    },
    isSuffix () {
      return !!this.suffixIcon || this.$slots.suffix || this.isClearable || (this.search && !this.enterButton) || (this.type === 'password' && this.password)
    },
    isPrepend () {
      return this.$slots.prepend
    },
    isAppend () {
      return (this.search && !!this.enterButton) || this.$slots.append
    }
  },
  watch: {
    type () {
      this.inputType = this.type
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
      this.showClearBtn()
      if (this.type === 'textarea' && !!this.autosize) {
        this.$nextTick(() => {
          this.resizeTextarea()
        })
      }
    },
    handleChange () {
      this.$emit('change', this.number ? Number(event.target.value) : event.target.value)
    },
    handleFoucus () {
      this.$emit('focus') 
    },
    handleBlur () {
      this.$emit('blur')
    },
    handleKeyup () {
      this.$emit('keyup')
    },
    handleKeydown () {
      this.$emit('keydown')
    },
    handleKeypress () {
      this.$emit('keypress')
    },
    showClearBtn () {
      this.isClearable = this.clearable && !!this.value
    },
    hideClearBtn () {
      this.isClearable = false
    },
    handleClear () {
      this.$emit('input', '')
      this.$emit('clear')
    },
    clickIcon (tag) {
      if (tag === 'suffix' && this.isClearable) return
      this.$emit('click')
      this.clickSearch()
    },
    clickSearch () {
      if (this.search && !this.$slots.append) {
        this.$emit('search') 
      }
    },
    handleEnter () {
      this.$emit('enter')
      this.clickSearch()
    },
    resizeTextarea () {
      this.textareaStyles = {
        height: `${this.initialTextareaHeight / 16}rem`
      }
      this.$nextTick(() => {
        const scrollHeight = this.$refs.textarea.scrollHeight
        if (scrollHeight !== this.prevTextareaScrollHeight) {
          this.textareaHeight += scrollHeight - this.prevTextareaScrollHeight
          this.prevTextareaScrollHeight = scrollHeight
        }
        const temp_obj = {
          height: `${this.textareaHeight / 16}rem`
        }
        if (this.textareaMinHeight) {
          temp_obj.minHeight = `${this.textareaMinHeight / 16}rem`
        }
        if (this.textareaMaxHeight) {
          temp_obj.maxHeight = `${this.textareaMaxHeight / 16}rem`
        }
        this.textareaStyles = temp_obj
      })
    },
    calcSingleLineHeight () {
      const node = this.$refs.textarea
      const style = window.getComputedStyle(node)
      const padding = parseFloat(style.getPropertyValue('padding-top')) +
        parseFloat(style.getPropertyValue('padding-bottom'))
      const border = parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width'))
      const height = node.offsetHeight
      const singleLineHeight = (height - padding - border) / this.rows

      this.initialTextareaHeight = height
      this.textareaHeight = height
      if (typeof this.autosize === 'object') {
        let temp_min = null
        let temp_max = null
        if (this.autosize.min) {
          temp_min = Math.max(parseInt(parseFloat(this.autosize.min)), 1)
        }
        if (this.autosize.max) {
          temp_max = Math.max(parseInt(parseFloat(this.autosize.max)), 1)
        }
        this.textareaMinHeight = Math.min(temp_min, temp_max) * singleLineHeight + padding + border
        this.textareaMaxHeight = Math.max(temp_min, temp_max) * singleLineHeight + padding + border
      }
    },
    togglePasswordIcon () {
      if (this.passwordIcon === 'eye') {
        this.passwordIcon = 'eye-close'
        this.inputType = 'password'
      } else {
        this.passwordIcon = 'eye'
        this.inputType = 'text'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.type === 'textarea' && !!this.autosize) {
        this.calcSingleLineHeight()
        this.prevTextareaScrollHeight = this.$refs.textarea.scrollHeight
        this.resizeTextarea()
      }
    })
  },
  created () {
    this.inputType = this.type
  }
}
</script>
