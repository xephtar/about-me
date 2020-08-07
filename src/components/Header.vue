<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/">Home</router-link>
      <form>
        <input type="text" placeholder="Search" />
      </form>

      <nav>
        <router-link to="/">
          <IconHome />
          <IconHomeFill />
        </router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from '@/icons/home.svg'
import IconHomeFill from '@/icons/home-fill.svg'
import Container from '@/components/Container'

export default {
  name: 'MainHeader',
  components: { Container, IconHome, IconHomeFill }
}
</script>

<style scoped>
.header {
  background-color: yellow;
}

.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
}
</style>
