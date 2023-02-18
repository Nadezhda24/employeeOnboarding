<template>
  <div style="width: 50%">
    <b-card title="Режим работы в связи с празднованием Дня Защитника Отечества и Международного женского дня" class="card-title card-block">
    <div class="row">
      <div class="col card-type" style="background: #BEE02A" >
       Информация
      </div>
      <div class="col card-type" style="background: #D9D9D9" >
        Общее
      </div>
    </div>

      <b-card-text class="card-text">
        Уважаемые коллеги , просим  вас ознакомиться с режимом работы, установленынем в связи с празднованием...</b-card-text >
      <b-card-text class="card-text">
        18.02.2023 11:23
      </b-card-text>
<!--      <a href="#" class="card-link">Ссылка карточки</a>
      <b-link href="#" class="card-link">Другая ссылка</b-link>-->
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
}
</script>

<style scoped>
.card-type{
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  //background: #BEE02A;
  color: #FFF;
  margin: 5px;
}

.card-block{
  border-color: #6953AF;
}

.card-title{
  color: #010101
}
.card-text{
  color: #B5B1B1;
}
</style>
