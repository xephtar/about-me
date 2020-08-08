<template>
  <div class="project">
    <h1>Repos</h1>
    <Container class="repos">
      <div v-for="repo in repos" :key="repo.name" class="repoCard">
        <a :href="repo.html_url"> {{ repo.name }} </a>
      </div>
    </Container>
  </div>
</template>

<script>
import axios from 'axios'
import Container from '@/components/Container'

export default {
  name: 'repo',
  components: { Container },
  data() {
    return {
      repos: null
    }
  },
  created() {
    // Simple GET request using axios
    axios
      .get('https://api.github.com/users/xephtar/repos')
      .then(response => (this.repos = response.data))
  }
}
</script>

<style scoped>
.repos {
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.repoCard {
  padding: 10px;
}
</style>
