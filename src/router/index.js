import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/",
      redirect: "/home",
      component: () => import("../views/layout/Layout.vue"),
      children: [
        {
          path: "/about",
          name: "home.about",
          component: () => import("@/views/About.vue"),
        },
        {
          path: "/home",
          name: "home.home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "home.about",
          component: () => import("@/views/About.vue"),
        },
        {
          path: "/education",
          name: "home.education",
          component: () => import("@/views/Education.vue"),
        },

        {
          path: "/skills",
          name: "home.skills",
          component: () => import("@/views/Skills.vue"),
        },
        {
          path: "/projects",
          name: "home.projects",
          component: () => import("@/views/Projects.vue"),
        },
        {
          path: "/contact",
          name: "home.contact",
          component: () => import("@/views/Contact.vue"),
        },


      ]
    },
  ]
})

export default router
