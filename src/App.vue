<template>
  <div class="row flex-nowrap"  id="app">
    <Menu/>
    <CourseBase/>
  </div>
</template>

<script>

import KnowledgeBase from './components/KnowledgeBase'
import Gant from "./components/ui/Gant";
import CourseBase from './components/CourseBase'
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    Gant,
    KnowledgeBase,
    CourseBase,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>

