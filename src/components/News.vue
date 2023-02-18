<template>
  <div class="col py-3 ">
    <h2 class="title">Новости</h2>

    <div class='container'>
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
.title{
  text-align: center;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
