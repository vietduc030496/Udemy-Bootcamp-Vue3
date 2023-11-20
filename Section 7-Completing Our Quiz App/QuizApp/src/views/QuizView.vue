<script setup>
    import { useRoute } from 'vue-router';
    import { defineProps } from 'vue';
    import Question from '../components/Question.vue';
    import QuestionHeader from '../components/QuizHeader.vue';
    import quizes from '../data/quizes.json';
    import { ref, watch, computed } from 'vue';
    import Result from '../components/Result.vue';

    const route = useRoute();
    const quizId = route.params.id;

    console.log(quizId)

    const currentQuestionIndex = ref(0);
    const numberOfCorrectAnswer = ref(0);
    const showResult = ref(false);
    const quiz = quizes.find(q => q.id == quizId);

    // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

    // watch(() => currentQuestionIndex.value, () => {
    //     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
    // })

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`);

    const onOptionSelected = (isCorrect) => {
        console.log("test emit", isCorrect);;
        if (isCorrect) {
            ++numberOfCorrectAnswer.value;  
        } 
        if (quiz.questions.length - 1 === currentQuestionIndex.value) {
            showResult.value = true;
        }
        ++currentQuestionIndex.value;
    }

</script>

<template>
    <div>
        <QuestionHeader :questionStatus="questionStatus" :barPercentage="barPercentage"></QuestionHeader>
        <div>
            <Question v-if="!showResult" :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"></Question>
            <Result v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswer="numberOfCorrectAnswer"></Result>
        </div>
        <!-- {{ numberOfCorrectAnswer }}
        <button @click="--currentQuestionIndex">Previous question</button>
        <button @click="++currentQuestionIndex">Next question</button> -->
    </div>
</template>
