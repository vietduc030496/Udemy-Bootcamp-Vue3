<script setup>
import BreakingBadCard from './components/BreakingBadCard.vue';
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <BreakingBadCard></BreakingBadCard>
      </template>
      <template #fallback>
        <div>
          <p>Loading.....</p>
        </div>
      </template>
    </Suspense>

  </main>
</template>

<style scoped></style>
