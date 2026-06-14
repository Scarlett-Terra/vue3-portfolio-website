<template>
  <header class="site-header">
    <nav class="navbar" aria-label="主要導覽">
      <RouterLink to="/" class="brand" aria-label="回到首頁">
        <span class="brand-copy">
          <strong>徐詩妤</strong>
          <small>Frontend Developer × UI Designer</small>
        </span>
      </RouterLink>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        aria-label="開啟或關閉導覽選單"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="primary-navigation" class="nav-panel" :class="{ 'is-open': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.path">
            <RouterLink :to="link.path" class="nav-item" @click="closeMenu">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
})

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgb(226 232 240 / 85%);
  background: rgb(255 255 255 / 88%);
  box-shadow: 0 4px 18px rgb(15 23 42 / 5%);
  backdrop-filter: blur(16px);
}

.navbar {
  display: flex;
  width: min(calc(66.6667vw + 6rem), calc(100% - 2rem), 1360px);
  min-height: 80px;
  margin-inline: auto;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand {
  display: inline-block;
  color: #1e293b;
  text-decoration: none;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-copy strong {
  color: #10183b;
  font-size: 1.65rem;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.brand-copy small {
  margin-top: 0.3rem;
  color: #64748b;
  font-size: 0.75rem;
  letter-spacing: 0.01em;
}

.nav-panel,
.nav-list {
  display: flex;
  align-items: center;
}

.nav-panel {
  gap: 0;
}

.nav-list {
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-item {
  position: relative;
  display: block;
  padding: 0.8rem 1.15rem;
  border-radius: 8px;
  color: #475569;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-item:hover {
  background: #fffaf5;
  color: #c2410c;
}

.nav-item.router-link-exact-active {
  background: #fff7ed;
  color: #c2410c;
}

.nav-item.router-link-exact-active::after {
  position: absolute;
  right: 1.15rem;
  bottom: 0.28rem;
  left: 1.15rem;
  height: 3px;
  border-radius: 999px;
  background: #f59e0b;
  content: '';
}

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 2px;
  margin: 4px 0;
  border-radius: 999px;
  background: #1e293b;
}

@media (max-width: 900px) {
  .navbar {
    width: min(calc(100% - 2rem), 1100px);
  }
}

@media (max-width: 760px) {
  .navbar {
    position: relative;
    min-height: 68px;
  }

  .menu-toggle {
    display: block;
  }

  .nav-panel {
    position: absolute;
    top: calc(100% + 0.65rem);
    right: 0;
    left: 0;
    display: none;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 18px 40px rgb(15 23 42 / 14%);
  }

  .nav-panel.is-open,
  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .nav-list {
    gap: 0.25rem;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item {
    padding: 0.85rem 1rem;
  }

}

@media (max-width: 420px) {
  .brand-copy small {
    display: none;
  }
}
</style>
