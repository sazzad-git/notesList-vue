import EditNotesView from "@/Views/EditNotesView.vue";
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
    path: "/edit-note/:id",
    component: EditNotesView,
    name: "editNote",
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
