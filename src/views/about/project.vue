<template>
  <div class="project">
    <h1>Projects</h1>
  </div>
</template>

<script>
export default {
  name: 'Project'
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
