import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MainAbout from "../components/MainAbout.vue";
import MainContact from "../components/MainContact.vue";
import ProjectPresentation from "../components/ProjectPresentation.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/about",
    name: "MainAbout",
    component: MainAbout,
  },
  {
    path: "/contact",
    name: "MainContact",
    component: MainContact,
  },
  {
    path: "/project",
    name: "ProjectPresentation",
    component: ProjectPresentation,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
