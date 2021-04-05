<template>
  <div class="app">
    <MasterHeader />

    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<script>
import MasterHeader from '@/components/Header'
import Container from '@/components/Container'
export default {
  name: 'App',
  components: {
    Container,
    MasterHeader
  },
  mounted() {
    window.analytics.identify('123456', {
      name: 'Omer Faruk Davarci',
      email: 'omer.davarci@sabancidx.com'
    });
  }
}
</script>

<style scoped>
.main {
  padding-top: 40px;
}
</style>
