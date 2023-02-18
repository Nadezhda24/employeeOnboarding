// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueRouter from "vue-router";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Gant from "./components/ui/Gant";
import CourseBase from "./components/CourseBase";
import News from "./components/News";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const routes = [
  {
    path: "",
    component: Profile,
  },
  {
    path: "/gant",
    name: "gant",
    component: Gant
  },
  {
    path: "/courseBase",
    name: "courseBase",
    component: CourseBase
  },
  {
    path: "/news",
    name: "news",
    component: News
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
