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
      title: 'One To One Meeting Request'
    }
  },
  methods: {
    trackEvent () {
      window.analytics.track('SendOneToOneRequest', 
        {
        from: 
          {name: 'Omer Faruk Davarci', email: 'omer.davarci@sabancidx.com'}, 
        to:
          {name:'Ahmet Ozgur Ciragiloglu', email:'ozgur.ciragiloglu@sabancidx.com'}})
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
