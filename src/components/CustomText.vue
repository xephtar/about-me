<template>
  <component :is="tag" :class="size">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'medium', // xlarge:18px, large:16px, medium:14px, small:12px, xsmall:11px, xxsmall:10px
      validator: function(value) {
        return (
          ['xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'].indexOf(
            value
          ) !== -1
        )
      }
    }
  }
}
</script>

<style scoped>
.xlarge {
  font-size: 18px;
}

.large {
  font-size: 16px;
}

.medium {
}

.small {
  font-size: 12px;
}

.xsmall {
  font-size: 11px;
}

.xxsmall {
  font-size: 10px;
}
</style>
