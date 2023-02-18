<template>
    <div class="col py-3 ">
    <h2 class="title">Каталог курсов</h2>

      <div class='container'>
         <CourseCard/>
      </div>

    </div>
</template>

<script>

import CourseCard from "./ui/CourseCard";
export default {
  name: "CourseBase",
  components: {CourseCard},
  data(){
    return{
      courses:[
        {
          title:"Инструктаж по технике безопасности",
          description:"Базовый курс по технике безопасности необходимый для каждого сотрудника. Прохождение курса считается успешным только при наборе 90%.\n",
          pic:"https://murnik.ru/wp-content/uploads/2022/12/1226.jpg"
        },
        {
          title:"Противопожарный инструктаж",
          description:" Доведение до работников организаций основных требований пожарной безопасности, изучение пожарной опасности технологических процессов производства, оборудования, средств противопожарной защиты и действий в случае возникновения пожара. Проводится со всеми работниками организаций по утвержденным программам и в порядке, определяемом руководителем.",
          pic:"https://u.9111s.ru/uploads/202110/30/a3d8f20d366b28dd1c0d53be201c7fff.jpg"
        }]
    }
  }
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
