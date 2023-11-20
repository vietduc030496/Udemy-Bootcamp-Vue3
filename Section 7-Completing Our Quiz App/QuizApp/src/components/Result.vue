<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const {quizQuestionLength, numberOfCorrectAnswer} = defineProps(['quizQuestionLength', 'numberOfCorrectAnswer'])
</script>

<template>
    <div class="results">
        <p>Your result...</p>
        <h1>
            {{ numberOfCorrectAnswer }}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 25px;

    }

    h1 {
        font-size: 80px;
    }
</style>