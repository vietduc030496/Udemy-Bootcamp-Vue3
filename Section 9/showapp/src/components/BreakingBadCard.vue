<script setup>
import axios from "axios";
import { ref, watch } from "vue";

const quote = ref(null);
const page = ref(0);

const response = await axios.get("https://type.fit/api/quotes");
quote.value = response.data;

watch(page, async () => {
    const res = await axios.get(`https://type.fit/api/quotes?offset=${page.value}`);
    quote.value = res.data;
    console.log(res);
})
</script>

<template>
    <div>
        <h1>Breaking bad cards</h1>
        {{ quote }}
        <div>
            <button @click="page = ++page">Next</button>
            <button @click="page = --page">Back</button>
        </div>
    </div>
</template>