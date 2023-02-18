<template>
  <div id="app">
    <Gant/>
  </div>
</template>

<script>
import KnowledgeBase from './components/KnowledgeBase'
import Gant from "./components/ui/Gant";

export default {
  name: 'App',
  components: {
    Gant,
    KnowledgeBase
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

