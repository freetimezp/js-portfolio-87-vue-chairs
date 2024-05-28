<script setup>
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';


</script>

<template>
  <SideBar />
  <Header />

  <main id="main">
    <RouterView />
  </main>
</template>

<style scoped></style>
