<template>
  <div class="wrapper">
    <Header msg="Medievalix" />
    <EventSection />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import EventSection from './components/EventSection.vue'

export default {

  name: 'App',
  components: {
    Header,
    EventSection
  }

}
</script>

<style lang="scss">

  .wrapper {
  font-family: Sigmar One, Merriweather, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;
}

</style>
