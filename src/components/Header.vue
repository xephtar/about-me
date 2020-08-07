<template>
  <header>
    <IconHome /><router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </header>
</template>

<script>
import IconHome from '@/icons/home.svg'
export default {
  name: 'MainHeader',
  components: { IconHome }
}
</script>

<style scoped></style>
