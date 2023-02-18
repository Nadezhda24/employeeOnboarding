<template>
  <div class="row">
    <div class="col-2">
      <b-nav vertical class="w-25">
        <b-nav-item to="/some/route/" active>Новости</b-nav-item>
        <b-nav-item to="/some/route/">События</b-nav-item>
        <b-nav-item to="/some/route/">База знаний</b-nav-item>
      </b-nav>
    </div>
    <div class="col-8">
      <div>Новости</div>
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from "./ui/Card";
export default {
  name: "KnowledgeBase",
  components: {Card}
}
</script>

<style scoped>

</style>
