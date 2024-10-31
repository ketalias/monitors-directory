import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AddView.vue";
import FilterView from "../views/FilterView.vue"; // Імпортуємо FilterView

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/students",
    name: "students",
    component: FilterView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
