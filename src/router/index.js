import NotesView from "@/Views/NotesView.vue";
import StatsView from "@/Views/StatsView.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: NotesView,
    name: "notes",
  },
  {
    path: "/stats",
    component: StatsView,
    name: "stats",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
