<template>
  <div id="app">
    <div id="nav">
      <IconHome /><router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/texts">Texts</router-link> |
      <router-link to="/icons">Icons</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
import IconHome from './icons/home.svg'

export default {
  name: 'App',
  components: { IconHome }
}
</script>

<style scoped></style>
