import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const a = 8 + 3;
console.log(a)
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/demo",
    name: "Demo",
    component: (...args) => {
      console.log("enter", ...args, this);
      return import(/* webpackChunkName: "Demo" */ "../views/Demo.vue");
    }
  },
  // {
  //   path: "/components",
  //   name: "components",
  //   component: () => import(/* webpackChunkName: "Components" */ `../components/${}.vue`),

  // }
  {
    path: "/slot",
    name: "Slot",
    component: (...args) => {
      console.log("enter", ...args, this);
      return import(/* webpackChunkName: "Demo" */ "../views/Slot.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

router.addRoutes([])

export default router;
