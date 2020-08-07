<template>
  <div class="about">
    <h1>About</h1>
    <div id="nav">
      <router-link to="/about/projects">Projects</router-link> |
      <router-link to="/about/education">Education</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'About'
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
