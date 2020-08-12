<template>
  <div class="about">
    <h1>About</h1>
    <Container>
      <div class="subHeader">
        <router-link to="/about/projects">Projects</router-link>
        <router-link to="/about/education">Education</router-link>
      </div>
    </Container>
    <router-view />
  </div>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'About',
  components: { Container }
}
</script>

<style scoped>
h1 {
  color: red;

  @media (--t) {
    color: blue;
  }
}

a:hover,
a.router-link-active,
a.router-link-exact-active {
  border-bottom: 2px solid #f9826c;
  cursor: pointer;
}

.subHeader {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-content: center;
  text-align: center;
}
</style>
