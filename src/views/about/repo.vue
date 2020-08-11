<template>
  <div class="repo">
    <div v-if="this.show" class="repoCardView">
      <IconRepos />
      <h1>Repositories</h1>
      <span v-if="repos !== null" class="Counter">{{ repos.length }}</span>
    </div>

    <Container v-if="this.show" class="repoContainer">
      <v-card
        v-for="repo in repos"
        :key="repo.name"
        class="mx-auto repoCard"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              {{ repo.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ repo.description }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <IconCpp v-if="repo.language === 'C++'" class="languageIcon" />
            <IconPy
              v-else-if="repo.language === 'Python'"
              class="languageIcon"
            />
            <IconC v-else-if="repo.language === 'C'" class="languageIcon" />
            <IconVue v-else-if="repo.language === 'Vue'" class="languageIcon" />
            <IconHtml5
              v-else-if="repo.language === 'HTML'"
              class="languageIcon"
            />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text :href="repo.html_url">Open</v-btn>
        </v-card-actions>
      </v-card>
    </Container>
    <Container v- class="spinner">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </Container>
  </div>
</template>

<script>
import axios from 'axios'
import Container from '@/components/Container'
import IconCpp from '@/icons/cplusplus.svg'
import IconPy from '@/icons/python.svg'
import IconC from '@/icons/c.svg'
import IconVue from '@/icons/vue.svg'
import IconHtml5 from '@/icons/html5.svg'
import IconRepos from '@/icons/repos.svg'

export default {
  name: 'repo',
  components: {
    Container,
    IconCpp,
    IconPy,
    IconC,
    IconVue,
    IconHtml5,
    IconRepos
  },
  data() {
    return {
      repos: null,
      show: false
    }
  },
  created() {
    axios
      .get('https://api.github.com/users/xephtar/repos')
      .then(response => (this.repos = response.data))
      .then(() => setTimeout(() => (this.show = true), 500))
  }
}
</script>

<style scoped>
.repoCardView {
  font-weight: 600;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 30px;
  max-width: 20%;
  white-space: nowrap;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 2px solid #f9826c;
  align-items: center;
  justify-content: center;
}

.repoContainer {
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media (--t) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.repoCard {
  margin: 10px;
}

.languageIcon {
  border-radius: 0;
  height: 60px;
  width: 60px;
}

.Counter {
  margin-left: 4px;
  display: inline-block;
  min-width: 20px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #24292e;
  text-align: center;
  background-color: rgba(209, 213, 218, 0.5);
  border: 1px solid transparent;
  border-radius: 2em;
}

.v-progress-circular {
  margin: 1rem;
}

.spinner {
  max-width: 0;
  align-items: center;
}
</style>
