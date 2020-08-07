<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="home">Home</router-link>

      <div></div>

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
  border-bottom: 1px solid rgb(var(--b6a));
}

.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
}

.home {
  font-size: 1.8rem;
  font-weight: bold;
}
</style>
