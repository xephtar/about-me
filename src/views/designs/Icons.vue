<template>
  <div class="icons">
    <h1>Icons</h1>
    <IconHome />
    <IconSettings />
  </div>
</template>

<script>
import IconHome from '../../icons/home.svg'
import IconSettings from '../../icons/settings.svg'

export default {
  name: 'Icons',
  components: { IconHome, IconSettings }
}
</script>

<style scoped>
h1 {
  color: red;

  @media (--t) {
    color: blue;
  }
}
</style>
