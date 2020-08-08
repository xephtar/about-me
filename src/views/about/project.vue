<template>
  <div class="project">
    <h1>Projects</h1>
    <Repo />
  </div>
</template>

<script>
import Repo from '@/views/about/repo'
export default {
  name: 'Project',
  components: { Repo }
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
