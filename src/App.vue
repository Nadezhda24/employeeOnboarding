<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import KnowledgeBase from './components/KnowledgeBase'
import Gant from "./components/ui/Gant";
import Profile from "./components/Profile";

export default {
  name: 'App',
  components: {
    Gant,
    KnowledgeBase,
    Profile
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

