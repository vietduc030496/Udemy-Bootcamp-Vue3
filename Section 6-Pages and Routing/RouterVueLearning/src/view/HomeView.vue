<script setup>
    import cars from '../data/cars.json';
    import { RouterLink } from 'vue-router';


</script>

<template>
    <div>
        <h1>Home view</h1>
        <div class="car">
            <!-- <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href=""> -->
            <RouterLink :to="{ name: 'car', params: { id: car.id }}" v-for="car in cars" :key="car.id" href="">
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .car {
        display: flex;
    }

    .car a {
        text-decoration: none;
        color: black;
        width: 100px;
        box-shadow: 1px 1px 1px black;
        margin: 10px;
    }
</style>