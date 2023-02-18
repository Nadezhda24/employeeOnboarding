<template>
  <div style="display: flex" >
      <Menu/>
      <router-view />
  </div>
</template>

<script>

import Menu from "./components/ui/Menu";

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>

</style>

