<template>
  <div class="app-container">
    <NavBar :nav-links="menuItems" />

    <main class="main-content">
      
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'


const menuItems = [
  { name: '首頁展示', path: '/' },
  { name: '核心技能', path: '/skills' },
  { name: '個人作品', path: '/projects' },
  { name: '履歷', path: '/resume' },
]
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  overflow: clip;
  background:
    radial-gradient(circle at 8% 18%, rgb(251 146 60 / 9%), transparent 24rem),
    radial-gradient(circle at 92% 32%, rgb(79 70 229 / 7%), transparent 28rem),
    #f8fafc;
}

.main-content {
  position: relative;
  z-index: 1;
}
</style>
