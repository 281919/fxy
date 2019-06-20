<template>
  <div id="app">
    
    
    <fxy-head></fxy-head>
    <fxy-content></fxy-content>
    <fxy-footer></fxy-footer>

  </div>
</template>

<script>

import fxyHead from './components/fxy-head.vue'
import fxyContent from './components/fxy-content.vue'
import fxyFooter from './components/fxy-footer.vue'


export default {
  name: 'app',
  components: {
    'fxyHead':fxyHead,
    'fxyContent':fxyContent,
    'fxyFooter':fxyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
