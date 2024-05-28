<script setup>
import { onMounted, ref } from 'vue';

import ItemCard from '@/components/ItemCard.vue';

const items = ref([]);

onMounted(() => {
    fetch(`http://localhost:4000/items`)
        .then(res => res.json())
        .then(data => items.value = data)
        .catch(err => console.log(err.message));
});
</script>

<template>
    <section id="products" class="products">
        <div class="container">
            <div class="row">
                <h4 class="section-title">Products</h4>
            </div>
            <div class="row mt-4">
                <div v-for="item in items" :key="item.id" class="col-xl-3 col-lg-4 col-md-6 mt-4">
                    <ItemCard :item="item" />
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.products {
    background: #1e1e1e !important;
}
</style>