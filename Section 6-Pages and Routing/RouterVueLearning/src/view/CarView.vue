<script setup>
    import { useRoute, RouterView, useRouter } from 'vue-router';
    import cars from '../data/cars.json';
    
    const route = useRoute();
    const carId = parseInt(route.params.id);
    
    const router = useRouter();
    const car = cars.find(c => c.id == carId);

    function showContact() {
        return router.push({name: 'car-contact', params: {id: carId}});
    }
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.price }}</p>
        <p>{{ car.year }}</p>
        <button @click="showContact()">Click for contact</button>
        <RouterView></RouterView>
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>