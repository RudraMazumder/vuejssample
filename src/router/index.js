import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Add from "../views/Add.vue";
import Update from "../views/Update.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component: Home
  },
  {
    path:"/about/:city",
    component: About
  },
  {
    path:"/about",
    component: About
  },
  {
    path:"/contact",
    component: Contact
  },
  {
    path:"/",
    component: Home,
  },
  {
    path:"/add",
    component: Add,
  },
  {
    name: "up",
    path:"/update",
    component: Update,
  },
  {
    path:"*",
    component: PageNotFound,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
