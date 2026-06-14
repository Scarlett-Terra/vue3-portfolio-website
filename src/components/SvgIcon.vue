<template>
  <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" :d="path" />
  </svg>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.svg-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}
</style>
