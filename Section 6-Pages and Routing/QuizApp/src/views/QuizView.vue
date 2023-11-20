<script setup>
    import { useRoute } from 'vue-router';
    import { defineProps } from 'vue';

    const route = useRoute();

    console.log(route.params.id)
</script>

<template>
    <div>
        <header>
            <h4>Question 1/3</h4>
            <div class="bar">
                <div class="completion"></div>
            </div>
        </header>
    </div>
</template>

<style scoped>
    header {
        margin-top: 20px;
        
    }

    header h4 {
        font-size: 30px;
    }

    .bar {
        widows: 300px;
        height: 50px;
    }
</style>