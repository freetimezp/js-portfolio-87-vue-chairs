import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import CartView from '../views/CartView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/products/:id',
            name: 'product',
            component: ProductDetailsView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        },
    ]
});

export default router;
