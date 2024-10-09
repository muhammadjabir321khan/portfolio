import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("@/views/layout/Layout.vue"),
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
      ],
    },
  ],
});

// Error handler for dynamic import failures
router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    // Check if the route exists, if not refresh the page
    if (to?.fullPath) {
      // Hard reload the page on module load failure
      window.location.reload();
    }
  }
});

export default router;
