<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="home-container hero-layout">
        <div class="hero-copy">
          <p class="section-kicker">Frontend × Visual Design</p>
          <h1>將視覺設計，<br />轉化為真正好用的<br /><span>網頁體驗。</span></h1>
          <p class="hero-description">
            專注於 Vue 3、響應式版面與互動細節，從需求拆解到介面實作，持續打造清楚、易用且具視覺層次的產品。
          </p>
          <div class="hero-actions">
            <RouterLink to="/projects" class="primary-button">查看精選作品 <span>→</span></RouterLink>
            <RouterLink to="/skills" class="secondary-button">了解我的能力</RouterLink>
          </div>
        </div>

        <div class="hero-visual" aria-label="個人作品響應式畫面輪播">
          <div class="browser-card">
            <div class="browser-bar"><i></i><i></i><i></i><span>{{ heroProject.id }}.vue</span></div>
            <div class="browser-image" :style="{ backgroundImage: `url(${heroProject.image})` }">
              <Transition name="hero-image-fade">
                <img :key="heroProject.id" :src="heroProject.image" :alt="`${heroProject.title}畫面示意`" />
              </Transition>
              <div class="browser-title">{{ heroProject.title }}</div>
            </div>
            <div class="browser-content">
              <span><b>景點探索</b><small>依主題快速瀏覽</small></span>
              <span><b>行程規劃</b><small>整理每日旅遊路線</small></span>
              <span><b>收藏清單</b><small>保存喜愛的目的地</small></span>
            </div>
          </div>
          <div class="mobile-card">
            <div class="mobile-speaker"></div>
            <div class="mobile-image-frame" :style="{ backgroundImage: `url(${heroProject.image})` }">
              <Transition name="hero-image-fade">
                <img :key="heroProject.id" :src="heroProject.image" :alt="`${heroProject.title}手機版示意`" />
              </Transition>
            </div>
            <strong>{{ heroProject.title }}</strong>
            <span>{{ heroProject.type }}</span>
            <span>{{ heroProject.year }}</span>
          </div>
          <div class="carousel-dots" aria-label="選擇首頁展示作品">
            <button v-for="(project, index) in heroProjects" :key="project.id" type="button"
              :class="{ active: index === heroProjectIndex }" :aria-label="`顯示作品：${project.title}`"
              :aria-current="index === heroProjectIndex ? 'true' : undefined" @click="showHeroProject(index)"></button>
          </div>
          <div class="visual-tags"><span>Vue 3</span><span>Component API</span><span>RWD</span><span>UI/UX</span></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="home-container contact-card">
        <div>
          <p class="section-kicker">Let’s Work Together</p>
          <h2>期待與優秀的團隊共同成長</h2>
          <p class="contact-description">如果你正在尋找願意持續學習、重視介面細節與使用者體驗的前端夥伴，歡迎與我聯繫。</p>
        </div>
        <div class="contact-links"><a href="mailto:asdqwe1456321@email.com">Email 聯絡</a><a href="https://github.com"
            target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
      </div>
    </section>

    <section class="problem-section">
      <div class="home-container problem-layout">
        <div class="problem-copy">
          <p class="section-kicker">Problem Solving</p>
          <h2>不只展示成果，也記錄思考過程</h2>
          <p class="problem-intro">遇到問題時，我會先理解原因、整理判斷，再確認改善是否真正有效。</p>
        </div>
        <div class="problem-grid">
          <article v-for="item in problemSolving" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'

const heroProjects = projects.filter(project => project.image && !project.isGallery).slice(0, 6)
const heroProjectIndex = ref(0)
const heroProject = computed(() => heroProjects[heroProjectIndex.value])
const HERO_CAROUSEL_INTERVAL = 4500
let heroCarouselTimer

const pauseHeroCarousel = () => {
  window.clearInterval(heroCarouselTimer)
  heroCarouselTimer = undefined
}

const startHeroCarousel = () => {
  pauseHeroCarousel()

  if (document.hidden || heroProjects.length < 2) return

  heroCarouselTimer = window.setInterval(() => {
    heroProjectIndex.value = (heroProjectIndex.value + 1) % heroProjects.length
  }, HERO_CAROUSEL_INTERVAL)
}

const showHeroProject = (index) => {
  heroProjectIndex.value = index
  startHeroCarousel()
}

const handleVisibilityChange = () => {
  if (document.hidden) pauseHeroCarousel()
  else startHeroCarousel()
}

onMounted(() => {
  heroProjects.forEach(project => {
    const image = new Image()
    image.src = project.image
  })
  document.addEventListener('visibilitychange', handleVisibilityChange)
  startHeroCarousel()
})

onBeforeUnmount(() => {
  pauseHeroCarousel()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})

const problemSolving = [
  { title: '遇到的問題', text: '先重現問題並縮小範圍，不急著直接改程式。' },
  { title: '我的判斷', text: '檢查資料流、元件責任與 CSS 規則的來源。' },
  { title: '改善結果', text: '修正後重新編譯、測試，並整理成可重用的做法。' },
]
</script>

<style scoped>
.home-page {
  color: #1e293b;
}

.home-container {
  width: min(calc(66.6667vw + 6rem), calc(100% - 2rem), 1360px);
  margin-inline: auto;
}

.hero-section {
  padding: clamp(4rem, 8vw, 7rem) 0 3rem;
  background: radial-gradient(circle at 78% 15%, rgb(99 102 241 / 8%), transparent 25rem), radial-gradient(circle at 12% 22%, rgb(251 146 60 / 8%), transparent 22rem);
}

.hero-layout {
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(500px, 1.1fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 7rem);
}

.hero-layout::before,
.hero-layout::after {
  position: absolute;
  z-index: -1;
  top: 24%;
  left: 12%;
  width: clamp(220px, 32vw, 520px);
  aspect-ratio: 1.8 / 1;
  border: 20px solid rgb(99 102 241 / 20%);
  border-radius: 50%;
  opacity: 0;
  content: '';
  pointer-events: none;
  transform: translate(-50%, -50%) scale(3);
  animation: water-ripple-spin 8s ease-out infinite;
}

.hero-layout::after {
  border-color: rgb(249 115 22 / 16%);
  animation: water-ripple-blink 8s ease-out 4s infinite;
}

@keyframes water-ripple-spin {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25) rotate(0deg);
    box-shadow: 0 0 0 0 rgb(99 102 241 / 10%);
  }

  18% {
    opacity: 0.65;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.35) rotate(360deg);
    box-shadow: 0 0 40px 12px rgb(99 102 241 / 0%);
  }
}

@keyframes water-ripple-blink {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25);
  }

  14% {
    opacity: 0.25;
  }

  24% {
    opacity: 0.6;
  }

  36% {
    opacity: 0.28;
  }

  48% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.35);
  }
}

.section-kicker {
  margin: 0 0 1rem;
  color: #c2410c;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0;
  color: #10183b;
  font-size: clamp(2.65rem, 4.8vw, 3rem);
  line-height: 1.12;
  letter-spacing: -.045em;
}

.hero-copy h1 span {
  color: #c2410c;
}

.hero-description {
  max-width: 38rem;
  margin: 1.75rem 0 0;
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  margin-top: 2rem;
}

.primary-button,
.secondary-button {
  padding: .85rem 1.25rem;
  border-radius: 9px;
  font-size: 1rem;
  font-weight: 750;
  text-decoration: none;
  transition: transform .2s ease;
}

.primary-button {
  background: #1e1b4b;
  color: #fff;
  box-shadow: 0 10px 22px rgb(30 27 75 / 16%);
}

.secondary-button {
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-2px);
}

.hero-visual {
  position: relative;
  min-height: 440px;
}

.browser-card,
.mobile-card {
  position: absolute;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #fff;
  box-shadow: 0 24px 55px rgb(15 23 42 / 14%);
}

.browser-card {
  top: 0;
  right: 0;
  width: 80%;
  border-radius: 14px;
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 32px;
  padding: 0 12px;
  background: #f8fafc;
  color: #94a3b8;
  font-size: .62rem;
}

.browser-bar i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #cbd5e1;
}

.browser-bar span {
  margin-left: auto;
}

.browser-image {
  position: relative;
  height: 210px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
}

.browser-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(.72);
}

.hero-image-fade-enter-active,
.hero-image-fade-leave-active {
  transition: opacity .45s ease, transform .45s ease;
}

.hero-image-fade-enter-from {
  opacity: 0;
  transform: scale(1.025);
}

.hero-image-fade-leave-to {
  opacity: 0;
  transform: scale(.985);
}

.browser-title {
  position: absolute;
  z-index: 1;
  left: 1.25rem;
  bottom: 1.2rem;
  color: #fff;
  font-size: 1.35rem;
  font-weight: 800;
}

.browser-content {
  display: flex;
  gap: 10px;
  padding: 18px;
  background: #fff;
}

.browser-content span {
  display: flex;
  flex: 1;
  min-width: 0;
  min-height: 58px;
  padding: 10px 11px;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  border-radius: 8px;
  color: #24304f;
  border: 1px solid #fed7aa;
  background: linear-gradient(145deg, #fff7ed, #ffedd5);
}

.browser-content span:nth-child(2) {
  border-color: #bfdbfe;
  background: linear-gradient(145deg, #eff6ff, #dbeafe);
}

.browser-content span:nth-child(3) {
  border-color: #bbf7d0;
  background: linear-gradient(145deg, #f0fdf4, #dcfce7);
}

.browser-content b {
  color: #17213f;
  font-size: .72rem;
  line-height: 1.3;
}

.browser-content small {
  overflow: hidden;
  color: #142870;
  font-size: .58rem;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mobile-card {
  bottom: 34px;
  left: -5%;
  z-index: 2;
  width: 165px;
  padding: 9px;
  border-radius: 25px;
  border-color: #cbd5e1;
}

.mobile-speaker {
  width: 36px;
  height: 4px;
  margin: 2px auto 8px;
  border-radius: 4px;
  background: #cbd5e1;
}

.mobile-image-frame {
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  background: #e2e8f0;
  background-position: center;
  background-size: cover;
}

.mobile-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-card strong {
  display: block;
  margin: 9px 6px 6px;
  color: #17213f;
  font-size: .8rem;
}

.mobile-card span {
  display: block;
  margin: 4px 6px;
  padding: 4px 6px;
  border-radius: 5px;
  color: #01044b;
  background: linear-gradient(90deg, #fff7ed, #f8fafc);
  font-size: .62rem;
  line-height: 1.35;
}

.visual-tags {
  position: absolute;
  right: 84px;
  bottom: 60px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: .45rem;
}

.carousel-dots {
  position: absolute;
  right: 84px;
  bottom: 29px;
  z-index: 3;
  display: flex;
  gap: 7px;
}

.carousel-dots button {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
  transition: width .25s ease, background-color .25s ease;
}

.carousel-dots button.active {
  width: 24px;
  background: #4f46e5;
}

.carousel-dots button:focus-visible {
  outline: 3px solid rgb(249 115 22 / 45%);
  outline-offset: 3px;
}

.visual-tags span {
  padding: .35rem .6rem;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  background: rgb(255 255 255 / 94%);
  color: #475569;
  font-size: .65rem;
  box-shadow: 0 8px 18px rgb(15 23 42 / 6%);
}

.metrics-section {
  padding: 2rem 0 5rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.metric-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.35rem;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 8px 24px rgb(15 23 42 / 5%);
}

.metric-icon {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 11px;
  background: #fff7ed;
  color: #c2410c;
  font-weight: 800;
}

.metric-card strong {
  font-size: 1.15rem;
}

.metric-card p {
  margin: .2rem 0 0;
  color: #64748b;
  font-size: .78rem;
}

.section-block {
  padding: clamp(4rem, 7vw, 6.5rem) 0;
}

.featured-section {
  border-block: 1px solid #edf0f5;
  background: rgb(255 255 255 / 58%);
}

.section-heading {
  max-width: 45rem;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.section-heading.compact {
  margin-bottom: 3rem;
}

.section-heading h2,
.problem-copy h2,
.contact-card h2 {
  margin: 0;
  color: #10183b;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  letter-spacing: -.025em;
}

.section-heading>p:last-child {
  color: #64748b;
  line-height: 1.7;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.featured-card {
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 17px;
  background: #fff;
  box-shadow: 0 14px 36px rgb(15 23 42 / 6%);
}

.featured-image {
  height: 280px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s;
}

.featured-card:hover img {
  transform: scale(1.025);
}

.featured-body {
  padding: 1.6rem;
}

.project-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.project-heading small {
  color: #c2410c;
  font-size: .68rem;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.project-heading h3 {
  margin: .4rem 0 0;
  font-size: 1.35rem;
}

.project-heading>span {
  padding: .3rem .55rem;
  border-radius: 6px;
  background: #fff7ed;
  color: #c2410c;
  font-size: .7rem;
}

.featured-body>p {
  color: #64748b;
  line-height: 1.7;
}

.case-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .65rem;
  margin: 1.25rem 0;
}

.case-summary div {
  padding: .8rem;
  border-radius: 9px;
  background: #f8fafc;
}

.case-summary dt {
  color: #94a3b8;
  font-size: .67rem;
}

.case-summary dd {
  margin: .3rem 0 0;
  color: #334155;
  font-size: .75rem;
  font-weight: 700;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
}

.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
}

.mini-tags span {
  padding: .25rem .45rem;
  border-radius: 5px;
  background: #f1f5f9;
  color: #64748b;
  font-size: .66rem;
}

.project-footer a {
  color: #1e1b4b;
  font-size: .78rem;
  font-weight: 800;
  text-decoration: none;
}

.capabilities-section {
  background: #f8fafc;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.capability-grid article {
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 8px 24px rgb(15 23 42 / 4%);
}

.capability-grid article::before {
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: var(--accent);
  content: '';
}

.capability-grid article>span {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 11px;
  background: color-mix(in srgb, var(--accent) 12%, white);
  color: var(--accent);
  font-size: .78rem;
  font-weight: 900;
}

.capability-grid h3 {
  margin: 1rem 0 .5rem;
}

.capability-grid p {
  margin: 0;
  color: #64748b;
  font-size: .83rem;
  line-height: 1.7;
}

.problem-section {
  padding: clamp(1.5rem, 5vw, 1.5rem) 0;
  background: #10183b;
  color: #ffffff;
}

.problem-layout {
  display: grid;
  grid-template-columns: minmax(280px, .8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: clamp(3rem, 7vw, 6rem);
}

.problem-copy h2 {
  max-width: 28rem;
  margin: 0;
  color: #ffffff;
  font-size: clamp(1.45rem, 2.3vw, 1rem);
  line-height: 1.35;
}

.problem-intro {
  max-width: 30rem;
  margin: 1.25rem 0 0;
  color: #aeb8d0;
  font-size: 1.1rem;
  line-height: 1.8;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  padding-top: 2.05rem;
}

.problem-grid article {
  min-height: 165px;
  padding: 0 1.4rem;
  border-left: 1px solid #374163;
}

.problem-grid h3 {
  margin: 0 0 0.75rem;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.35;
}

.problem-grid p {
  margin: 0;
  color: #aeb8d0;
  font-size: 1rem;
  line-height: 1.7;
}

.contact-section {
  padding: 4rem 0;
  background: #fff;
}

.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 2.5rem 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 17px;
  background: linear-gradient(110deg, #fffaf5, #fff 60%);
  box-shadow: 0 12px 32px rgb(15 23 42 / 5%);
}

.contact-card>div:first-child {
  max-width: 45rem;
}

.contact-card h2 {
  font-size: 1.7rem;
}

.contact-description {
  margin: 1rem 0 0;
  color: #64748b;
  font-size: 1rem;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.contact-links {
  display: flex;
  gap: .7rem;
  flex-shrink: 0;
}

.contact-links a {
  padding: .8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  background: #fff;
  color: #1e293b;
  font-size: 1rem;
  font-weight: 750;
  text-decoration: none;
}

.contact-links a:hover {
  color: #c2410c;
  border: 1px solid #c2410c;
}

.contact-links a:first-child {
  border-color: #1e1b4b;
  background: #1e1b4b;
  color: #fff;
}

.contact-links a:first-child:hover {
  color: #fff;
  background: #c2410c;
  border-color: #c2410c;
}

@media (max-width: 1000px) {
  .home-container {
    width: min(calc(100% - 2rem), 1100px);
  }

  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero-layout::before,
  .hero-layout::after {
    top: 70%;
    left: 50%;
  }

  .hero-copy {
    max-width: 45rem;
  }

  .hero-visual {
    width: min(100%, 650px);
    margin-inline: auto;
  }

  .metrics-grid,
  .capability-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .problem-layout {
    grid-template-columns: 1fr;
  }

  .problem-grid {
    padding-top: 0;
  }

  .contact-card {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 700px) {
  .hero-section {
    padding-top: 3rem;
  }

  .hero-copy h1 {
    font-size: clamp(2.35rem, 11vw, 3rem);
  }

  .hero-layout {
    gap: 2rem;
  }

  .hero-visual {
    min-height: 410px;
  }

  .browser-card {
    width: 88%;
  }

  .mobile-card {
    left: -2%;
    bottom: 55px;
    width: 150px;
  }

  .visual-tags {
    bottom: 6px;
    max-width: calc(100% - 140px);
  }

  .carousel-dots {
    right: 84px;
    bottom: 38px;
  }

  .metrics-grid,
  .capability-grid {
    grid-template-columns: 1fr;
  }

  .case-summary {
    grid-template-columns: 1fr;
  }

  .problem-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .problem-grid article {
    min-height: auto;
    padding: 1rem 0 1rem 1.25rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-description {
    font-size: .95rem;
    line-height: 1.9;
  }

  .contact-links {
    width: 100%;
    flex-direction: column;
  }

  .contact-links a {
    text-align: center;
  }

}

@media (max-width: 480px) {
  .home-container {
    width: calc(100% - 1.5rem);
  }

  .hero-visual {
    width: 100%;
    min-height: 390px;
    margin: 0;
    transform: none;
  }

  .browser-card {
    right: 0;
    width: 92%;
  }

  .browser-image {
    height: 175px;
  }

  .browser-title {
    left: 7.25rem;
    bottom: 1rem;
    font-size: 1.05rem;
    white-space: nowrap;
  }

  .browser-content {
    gap: 6px;
    padding: 10px;
  }

  .browser-content span {
    min-height: 62px;
    padding: 7px 6px;
  }

  .browser-content b {
    font-size: .62rem;
  }

  .browser-content small {
    font-size: .5rem;
  }

  .mobile-card {
    left: -1%;
    bottom: 47px;
    width: 122px;
    padding: 7px;
    border-radius: 20px;
  }

  .mobile-image-frame {
    height: 120px;
    border-radius: 12px;
  }

  .mobile-card strong {
    margin: 7px 5px 5px;
    font-size: .7rem;
  }

  .mobile-card span {
    margin: 3px 5px;
    padding: 3px 5px;
    font-size: .52rem;
  }

  .visual-tags {
    right: 0;
    bottom: 0;
    max-width: calc(100% - 128px);
    gap: .3rem;
  }

  .carousel-dots {
    right: 0;
    bottom: 38px;
  }

  .visual-tags span {
    padding: .3rem .48rem;
    font-size: .56rem;
  }

  .metrics-section {
    padding-top: 0;
  }

  .featured-image {
    height: 220px;
  }

  .project-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {

  .hero-layout::before,
  .hero-layout::after {
    animation: none;
  }

  .hero-image-fade-enter-active,
  .hero-image-fade-leave-active,
  .carousel-dots button {
    transition: none;
  }
}
</style>
