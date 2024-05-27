<script setup>
import { ref } from "vue";
import { navsData } from '@/data/data';
const navs = ref(navsData);

const handleNavActive = (id) => {
    navs.value.map((nav) => {
        nav.active = false;
        if (id === nav.id) nav.active = true;

        return nav;
    });
};
</script>


<template>
    <ul class="nav">
        <li v-for="(nav) in navs" :key="nav.id">
            <RouterLink to="/" v-if="nav.name === 'Home'" :class="{ active: nav.active }"
                @click="handleNavActive(nav.id)">
                <i class="bi bi-house-door-fill"></i>
            </RouterLink>
            <RouterLink v-else to="/" :class="{ active: nav.active }" @click="handleNavActive(nav.id)">
                {{ nav.name }}
            </RouterLink>
        </li>
    </ul>
</template>



<style scoped>
.nav {
    display: flex;
}

.nav li {
    list-style: none;
    margin: 0 10px;
}

.nav li a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    transition: .3s;
}

.nav li:hover a,
.nav li a.active {
    color: var(--primary);
}

@media (max-width: 768px) {
    .nav {
        display: none;
    }
}
</style>