<template>
  <Transition name="go-top-fade">
    <button
      v-show="isVisible"
      type="button"
      class="go-top"
      aria-label="回到頁面頂部"
      title="回到頂部"
      @click="scrollToTop"
    >
      <span aria-hidden="true">↑</span>
    </button>
  </Transition>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isVisible = ref(false)
const SHOW_OFFSET = 320

const updateVisibility = () => {
  isVisible.value = window.scrollY > SHOW_OFFSET
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
})

watch(
  () => route.fullPath,
  () => {
    requestAnimationFrame(updateVisibility)
  }
)
</script>

<style scoped>
.go-top {
  position: fixed;
  right: clamp(1rem, 3vw, 2rem);
  bottom: clamp(1rem, 4vw, 2rem);
  z-index: 120;
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border: 1px solid rgb(253 186 116 / 72%);
  border-radius: 50%;
  background:
    linear-gradient(135deg, rgb(255 247 237 / 96%), rgb(255 255 255 / 94%));
  box-shadow: 0 14px 34px rgb(15 23 42 / 16%);
  color: #c2410c;
  cursor: pointer;
  font-size: 1.45rem;
  font-weight: 900;
  line-height: 1;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.go-top:hover {
  border-color: #f59e0b;
  background: #fff7ed;
  box-shadow: 0 18px 40px rgb(194 65 12 / 18%);
  transform: translateY(-3px);
}

.go-top:active {
  transform: translateY(-1px);
}

.go-top:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 4px;
}

.go-top-fade-enter-active,
.go-top-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.go-top-fade-enter-from,
.go-top-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.94);
}

@media (max-width: 576px) {
  .go-top {
    right: 1rem;
    bottom: 1rem;
    width: 46px;
    height: 46px;
    font-size: 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .go-top,
  .go-top-fade-enter-active,
  .go-top-fade-leave-active {
    transition: none;
  }
}
</style>
