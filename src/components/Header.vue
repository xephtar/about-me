<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="home">App</router-link>

      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/about">
          <IconAboutFill v-if="$route.name === 'About'" />
          <IconAbout v-else />
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from '@/icons/home.svg'
import IconHomeFill from '@/icons/home-fill.svg'
import Container from '@/components/Container'
import IconAbout from '@/icons/about.svg'
import IconAboutFill from '@/icons/about-fill.svg'

export default {
  name: 'MainHeader',
  components: { Container, IconHome, IconHomeFill, IconAbout, IconAboutFill }
}
</script>

<style scoped>
.header {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
}

.header-inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.home {
  font-size: 1.8rem;
  font-weight: bold;
}

.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-top: 1px solid rgb(var(--b6a));
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (--t) {
    border: 0;
    height: auto;
    position: static;
    justify-content: flex-end;

    a {
      margin-left: 20px;
    }
  }
}
</style>
