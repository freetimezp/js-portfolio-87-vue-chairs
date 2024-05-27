<script setup>

</script>


<template>
    <div class="cart-btn">
        <RouterLink to="/cart" class="cart">
            <i class="bi bi-cart2"></i>
        </RouterLink>
        <RouterLink>
            <span class="count">3</span>
        </RouterLink>
    </div>
</template>



<style scoped>
.cart-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .5s;
}

.cart {
    font-size: 30px;
    color: #fff;
}

.count {
    font-size: 1.2rem;
    color: #fff;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    background: #00a950;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>