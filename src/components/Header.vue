<script setup>

import CartBtn from "./CartBtn.vue";
import Nav from "./Nav.vue";

</script>


<template>
    <header id="home">
        <RouterLink to="/" class="logo">iChairs</RouterLink>

        <Nav />

        <div class="features">
            <CartBtn />
        </div>
    </header>
</template>


<style scoped>
header {
    position: relative;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px 30px 200px;
    z-index: 1100;
}

.logo {
    font-size: 35px;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 600;
}

.features {
    display: flex;
    align-items: center;
    gap: 10px;
}

@media (max-width: 768px) {
    header {
        padding: 10px 50px;
    }
}
</style>
