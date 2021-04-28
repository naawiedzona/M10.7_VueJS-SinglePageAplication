import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Food from "../components/Food";
import Drinks from "../components/Drinks";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // CLIENTS
  {
    path: "/clients/:id",
    name: "Clients",
    component: () => import("../views/Clients.vue"),
  },
  {
    path: "/providers",
    name: "Providers",
    component: () => import("../views/Providers.vue"),
  },
  {
    path: "/magazine",
    name: "Magazine",
    component: () => import("../views/Magazine.vue"),
  },
  // SHOP + SUBMENU FOOD DRINKS
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
    children: [
      { path: "/shop/food", component: Food },
      { path: "/shop/drinks", component: Drinks },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
