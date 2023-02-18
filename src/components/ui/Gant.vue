<template>
  <div class="chart-wrapper" style="background: #6953AF45;">
    <ul class="chart-values">
      <li v-for="item in title">{{ item }}</li>
    </ul>
    <ul class="chart-bars">
      <div v-for="item in data">
        <li :data-duration="item.duration" data-color="#BEE02A" style="color: #FFFFFF">{{item.name}}</li>
      </div>

    </ul>
  </div>
</template>

<script>
function createChart(e) {
  const days = document.querySelectorAll(".chart-values li");
  const tasks = document.querySelectorAll(".chart-bars li");
  const daysArray = [...days];

  tasks.forEach(el => {
    const duration = el.dataset.duration.split("-");
    const startDay = duration[0];
    const endDay = duration[1];
    let left = 0,
      width = 0;

    if (startDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == startDay);
      left = filteredArray[0].offsetLeft;
    }

    if (endDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }

    // apply css
    el.style.left = `${left}px`;
    el.style.width = `${width}px`;
    if (e.type == "load") {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
  });
}

window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);

export default {
  name: "Gant",
  data () {
    return {
      title: [
        "12.02.2023",
        "13.02.2023",
        "14.02.2023",
        "15.02.2023",
        "16.02.2023",
        "17.02.2023",
        "18.02.2023",
        "19.02.2023",
        "20.02.2023",
        "21.02.2023",
        "22.02.2023",
        "23.02.2023",
        "24.02.2023",
        "25.02.2023",
        "26.02.2023",
        "27.02.2023",
        "28.02.2023",
        "01.03.2023",
        "02.03.2023",
      ],
      data: [
        {duration: "12.02.2023-15.02.2023" , name: "Инструктаж по охране труда"},
        {duration: "13.02.2023-16.02.2023" , name: "Вводная встреча с ментором"},
        {duration: "17.02.2023-19.02.2023" , name: "Курс по основам корпаративной культуры"},
        {duration: "15.02.2023-22.02.2023" , name: "Курс про цели и задачи компании"},
        {duration: "27.02.2023-02.03.2023" , name: "Встреча с командой подразделения"},

      ]
    }
  }
}
</script>

<style scoped>
/* RESET RULES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
:root {
  --white: #fff;
  --divider: lightgrey;
  --body: #f5f7f8;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  background: var(--body);
  font-size: 16px;
  font-family: sans-serif;
  padding-top: 40px;
}

.chart-wrapper {
  padding: 0 5px;
  margin: 5px ;
  height: 400px;
}


/* CHART-VALUES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.chart-wrapper .chart-values {
  position: relative;
  display: flex;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 0.6rem;
}

.chart-wrapper .chart-values li {
  flex: 1;
  text-align: center;
}

.chart-wrapper .chart-values li:not(:last-child) {
  position: relative;
}

.chart-wrapper .chart-values li:not(:last-child)::before {
  content: '';
  position: absolute;
  right: 0;
  height: 400px;
  border-right: 1px dashed #6953AF;
}


/* CHART-BARS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.chart-wrapper .chart-bars li {
  position: relative;
  color: var(--white);
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px 20px;
  width: 0;
  opacity: 0;
  transition: all 0.65s linear 0.2s;
}

@media screen and (max-width: 600px) {
  .chart-wrapper .chart-bars li {
    padding: 10px;
  }
}



</style>
