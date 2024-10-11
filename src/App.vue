<template>
  <Navbar />
  <div class="container px-2">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "./components/Layout/Navbar.vue";
import { useNotesStore } from "./stores/NotesStore";

const noteStore = useNotesStore();

onMounted(() => {
  noteStore.getNotes();
});
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
