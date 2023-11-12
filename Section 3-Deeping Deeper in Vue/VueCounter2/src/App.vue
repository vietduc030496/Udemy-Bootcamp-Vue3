<!-- Composition API (new and prefer) -->
<script setup>
  import { ref } from 'vue'

  const count = ref(0)
  console.log(count)

  const addToCount = () => {
    count.value = count.value + 1
    console.log(count)
  }

  const substractToCount = () => {
    count.value = count.value - 1
    console.log(count)
  }
</script>

<!-- ---------------------------------------- -->

 <!-- Option API -->
<!-- <script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      substractToCount() {
        console.log("substract to count")
        this.count = this.count - 1
      },
      addToCount() {
        console.log("add to count")
        this.count = this.count + 1
      }
    }
  }
</script> -->

<template>
  <main>
    <div>
      <h1>The counter app</h1>
      <h1>{{ count }}</h1>
      <button @click="substractToCount()">-</button>
      <button v-on:click="addToCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
}
</style>