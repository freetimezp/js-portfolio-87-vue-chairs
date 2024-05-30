<script setup>
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
import CartBtnLoader from './components/CartBtnLoader.vue';

</script>

<template>
  <SideBar />
  <Header />

  <main id="main">
    <RouterView />
  </main>

  <CartBtnLoader />
</template>

<style scoped></style>
