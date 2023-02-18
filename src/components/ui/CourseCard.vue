<template>
<div class="container flex-container">
    <div v-for="course in courses" >
      <b-card
        :title="course.title"
        :img-src="course.pic"
        img-alt="Изображение"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{course.description}}
        </b-card-text>
        <b-button href="#" class="nice-green-btn" >Подробнее</b-button>

      </b-card>
    </div>
</div>
</template>

<script>
export default {
  name: "CourseCard",
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
        },
        {
          title:"Инструктаж по электробезопасности",
          description:"В каждой компании есть сотрудники, которые в процессе работы могут быть поражены электрическим током. Даже работа в офисе связана с электрооборудованием — компьютерами и другой офисной техникой.",
          pic:"https://spburannoe.ru/novosti/pravila-elektrobezopasnosti/@@download/image/1.jpg"
        },
        {
          title:"Корпоративная культура",
          description:"Нормы и образцы поведения, которые определяют деятельность всех сотрудников в компании и отношения между ними. Более кратко этот свод негласных правил можно описать фразой: «У нас так принято».",
          pic:"https://hr-portal.ru/files/mini/o_korporativnoy_kulture_0.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>

.nice-green-btn{
  width: 100%;

  background-color: #BEE02A;
  border: none;

  font-weight: bold;
}

.flex-container{
  width: 100%;
  padding-left: 0rem;
  padding-right: 0rem;
  display: -webkit-inline-flex;
  display: inline-flex;
  flex-flow: row wrap;

  justify-content: space-between;
  align-items: stretch;
  align-self: center;
  align-content: center;
}
</style>
