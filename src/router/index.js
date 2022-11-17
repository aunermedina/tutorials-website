import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/boards/Home.vue";
import Login from "@/components/authentication/Login.vue";
import Register from "@/components/authentication/Register.vue";
// lazy-loaded
const Profile = () => import("@/components/authentication/Profile.vue")
const BoardAdmin = () => import("@/components/boards/BoardAdmin.vue")
const BoardModerator = () => import("@/components/boards/BoardModerator.vue")
const BoardUser = () => import("@/components/boards/BoardUser.vue")
const TutorialsList = () => import("@/components/tutorials/TutorialsList.vue")
const AddTutorial = () => import("@/components/tutorials/AddTutorial.vue")
const Tutorial = () => import("@/components/tutorials/Tutorial.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: Profile,
    },
    {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: BoardAdmin,
    },
    {
      path: "/mod",
      name: "moderator",
      // lazy-loaded
      component: BoardModerator,
    },
    {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: BoardUser,
    },
    {
      path: "/tutorials",
      name: "tutorials",
      component: TutorialsList,
    },
    {
      path: "/tutorials/details/:id",
      name: "tutorial-details",
      component: Tutorial,
    },
    {
      path: "/tutorials/add",
      name: "add",
      component: AddTutorial,
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
