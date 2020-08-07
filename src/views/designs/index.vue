<template>
  <div class="v1">
    <h1>Version 1 Elements</h1>
    <div id="nav">
      <router-link to="/v1/icons">Icons</router-link> |
      <router-link to="/v1/texts">Texts</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'v1'
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
