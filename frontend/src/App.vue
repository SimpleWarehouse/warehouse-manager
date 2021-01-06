<template>
  <div id="app">
    <Produse/>
  </div>
</template>

<script>
import Produse from './components/Produse.vue'

export default {
  name: 'App',
  components: {
    Produse
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
