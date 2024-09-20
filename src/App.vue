<template>
  <Navbar />
  <div class="container px-2">
    <RouterView />
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";
</style>

<script setup>
import Navbar from "./components/Layout/Navbar.vue";
</script>
