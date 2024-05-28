<script setup>
import { onMounted, ref } from 'vue';

import BannerSlide from '@/components/BannerSlide.vue';
import BannerSwiper from '@/components/BannerSwiper.vue';

const items = ref([]);

onMounted(() => {
    fetch("http://localhost:4000/items")
        .then(res => res.json())
        .then(data => items.value = data)
        .catch(err => console.log(err.message));
});

const handleBannerChange = (id) => {
    items.value.map((item) => {
        item.active = false;
        if (item.id === id) item.active = true;

        return item;
    })
};

</script>


<template>
    <div class="banner">
        <BannerSlide v-for="(item) in items" :key="item.id" :item="item" />
        <BannerSwiper :items="items" :bannerChange="handleBannerChange" />
    </div>
</template>


<style scoped>
.banner {
    position: relative;
    width: 100%;
    min-height: 90vh;
    background: var(--bgColor);
    transition: 1s;
}

@media (max-width: 768px) {
    .banner {
        min-height: 100vh;
    }
}
</style>