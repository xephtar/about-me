<template>
  <div class="education">
    <h1>Education</h1>
    <button v-on:click="trackEvent">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      title: 'Track Button!'
    }
  },
  methods: {
    trackEvent () {
      window.analytics.track('User Signup')
    }
  }
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
