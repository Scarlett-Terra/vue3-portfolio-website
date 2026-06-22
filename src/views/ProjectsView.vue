<template>
    <div class="projects-page page-shell">
        <header class="projects-header">
            <p class="eyebrow">Selected Work</p>
            <h1 class="page-title">我的作品</h1>
            <p class="page-intro">從前端互動到視覺設計，記錄每一次將想法轉化為實際作品的過程。</p>
        </header>

        <div class="filter-bar">
            <div class="search-box">
                <input v-model="searchKeyword" type="search" placeholder="搜尋作品名稱、描述或技術（如：Vue, App）..."
                    class="filter-input" aria-label="搜尋作品" />
                <button v-if="searchKeyword" type="button" @click="searchKeyword = ''" class="clear-input-btn">清除</button>
            </div>

            <div class="select-wrapper">
                <select v-model="selectedCategory" class="filter-select" aria-label="篩選作品類型">
                    <option disabled value="">選擇作品類型</option>
                    <option value="all">全部類型</option>
                    <option value="web">網站類</option>
                    <option value="app">App 應用類</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Vue.js">Vue.js</option>
                    <option value="Git">Git</option>
                    <option value="Photoshop">Photoshop</option>
                    <option value="Illustrator">Illustrator</option>
                    <option value="Figma">Figma</option>
                    <option value="UI/UX">UI/UX</option>
                </select>
            </div>
        </div>

        <div v-if="$route.query.tech" class="filter-breadcrumb">
            <span class="breadcrumb-tag">正在篩選技術：{{ $route.query.tech }}</span>
            <button type="button" @click="clearTechQuery" class="clear-query-btn">顯示全部</button>
        </div>

        <div class="projects-list" v-if="filteredProjects.length > 0">
            <ProjectCard v-for="project in filteredProjects" :key="project.id" :project-data="project"
                @view-detail="goToDetail" />
        </div>

        <div v-else class="no-results">
            <p>🔍 找不到符合條件的作品，嘗試換個關鍵字吧！</p>
            <img src="https://i.pinimg.com/originals/a7/ca/b0/a7cab004d7d541de785b31dbdf45631e.png" alt="No results" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()

// 雙向綁定的篩選狀態
const searchKeyword = ref('')    // input 輸入的關鍵字
const selectedCategory = ref('all') // 下拉選單選擇的分類

// 🌟 核心：三合一殿堂級複合過濾邏輯（同時過濾 路由參數 + 下拉選單 + 輸入框）
const filteredProjects = computed(() => {
    return projects.filter(project => {

        // 【條件一：檢查首頁技能卡的網址參數 (?tech=xxxx)】
        const currentTechQuery = route.query.tech
        const matchesTechQuery = currentTechQuery === 'Git'
            ? Boolean(project.github || project.technologies.includes('Git'))
            : project.technologies.includes(currentTechQuery)

        if (currentTechQuery && !matchesTechQuery) {
            return false // 如果網址有指定技術，且該作品不包含，直接淘汰
        }

        // 【條件二：檢查下拉式選單 (selectedCategory)】
        if (selectedCategory.value !== 'all') {
            const cate = selectedCategory.value.toLowerCase()
            if (cate === 'web') {
                // 下拉選「網站類」：標題或描述必須包含「網站」
                if (!project.title.includes('網站') && !project.description.includes('網站')) return false
            } else if (cate === 'app') {
                // 下拉選「App類」：標題或描述必須包含「App」或「卡」
                if (!project.title.toLowerCase().includes('app') && !project.title.includes('卡')) return false
            } else {
                // 下拉選特定技術（例如：Vue.js）：作品技術陣列必須包含它
                if (!project.technologies.includes(selectedCategory.value)) return false
            }
        }

        // 【條件三：關鍵字輸入框模糊搜尋 (searchKeyword)】
        if (searchKeyword.value.trim() !== '') {
            const k = searchKeyword.value.toLowerCase().trim()

            // 檢查是否包含在 標題、描述、或是技術陣列 中（用 includes 做到模糊搜尋！）
            const matchTitle = project.title.toLowerCase().includes(k)
            const matchDesc = project.description.toLowerCase().includes(k)
            const matchTech = project.technologies.some(t => t.toLowerCase().includes(k))

            if (!matchTitle && !matchDesc && !matchTech) {
                return false // 三個地方都完全沒撈到關鍵字，淘汰
            }
        }

        return true // 通過重重考驗的作品，留下來！
    })
})

// 當使用者點擊「顯示全部」麵包屑時，清空網址 query 參數
const clearTechQuery = () => {
    router.push('/projects')
}

// 頁面跳轉至詳細頁（原路帶回邏輯不變）
const goToDetail = (id) => {
    router.push({
        path: `/projects/${id}`,
        query: { fromTech: route.query.tech }
    })
}

// 💡 體驗感加分優化：如果使用者手動去選下拉選單或打字，我們就貼心地把網址的技能卡 query 清掉
watch([searchKeyword, selectedCategory], () => {
    if (route.query.tech && (searchKeyword.value || selectedCategory.value !== 'all')) {
        router.push('/projects') // 讓使用者操作輸入框時，體驗是直覺的重新搜尋全部
    }
})
</script>

<style scoped>
.projects-header {
    position: relative;
    isolation: isolate;
    margin-bottom: clamp(2rem, 4vw, 3rem);
    padding-block: 1rem;
    text-align: center;
}

.projects-header::before,
.projects-header::after {
    position: absolute;
    z-index: -1;
    top: 48%;
    right: 50%;
    width: clamp(390px, 15vw, 390px);
    aspect-ratio: 1.8 / 1;
    border: 9px solid rgb(99 102 241 / 14%);
    border-radius: 50%;
    opacity: 0;
    content: '';
    pointer-events: none;
    transform: translate(50%, -50%) scale(.25);
    animation: projects-ripple 8s ease-out infinite;
}

.projects-header::after {
    border-color: rgb(249 115 22 / 14%);
    animation-delay: 4s;
}

@keyframes projects-ripple {
    0% {
        opacity: 0;
        transform: translate(50%, -50%) scale(.25) rotate(0deg);
    }

    20% {
        opacity: .7;
    }

    100% {
        opacity: 0;
        transform: translate(50%, -50%) scale(1.35) rotate(360deg);
    }
}

.projects-header .page-title {
    margin-bottom: 0.75rem;
}

.eyebrow {
    margin: 0 0 0.5rem;
    color: #c2410c;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.page-intro {
    max-width: 42rem;
    margin: 0 auto;
    color: #64748b;
    font-size: 1rem;
    line-height: 1.7;
}

.filter-bar {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    flex-wrap: wrap;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 8px 24px rgb(15 23 42 / 4%);
}

.search-box {
    flex: 1;
    min-width: 280px;
    position: relative;
}

.filter-input {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 9px;
    font-size: 1rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.no-results p {
    font-size: 1.2rem;
    color: #475569;
    background-color: #fce587;
    padding: 20px;
}


.filter-input:focus {
    border-color: #f59e0b;
    outline: none;
    box-shadow: 0 0 0 3px rgb(245 158 11 / 15%);
}

.clear-input-btn {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: rgb(6, 26, 248);
    border: none;
    color: #f5f2f3;
    cursor: pointer;
    padding: 0.35rem 0.6rem;
    font-size: 0.85rem;
    border-radius: 6px;
}

.clear-input-btn:hover {
    background: rgb(248, 165, 81);
    color: #0a0a0a;
    box-shadow: 0 4px 12px rgba(248, 165, 81, 0.3);
}

.select-wrapper {
    position: relative;
    min-width: 180px;
}

.select-wrapper::after {
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 2px solid #64748b;
    border-bottom: 2px solid #64748b;
    content: '';
    pointer-events: none;
    transform: translateY(-70%) rotate(45deg);
    transition: border-color 0.2s ease, transform 0.2s ease;
}

.select-wrapper:hover::after,
.select-wrapper:focus-within::after {
    border-color: #c2410c;
    transform: translateY(-55%) rotate(45deg);
}

.filter-select {
    width: 100%;
    padding: 0.75rem 3rem 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 9px;
    appearance: none;
    color: #1e293b;
    font-size: 1rem;
    background-color: white;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.filter-select:focus {
    border-color: #f59e0b;
    outline: none;
    box-shadow: 0 0 0 3px rgb(245 158 11 / 15%);
}

/* 麵包屑提示 */
.filter-breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.breadcrumb-tag {
    background: #fff5ef;
    color: #1d4ed8;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
}

.clear-query-btn {
    background: #f1f5f9;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    color: #475569;
}

.clear-query-btn:hover {
    background: #e2e8f0;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: #64748b;
    font-size: 1.1rem;
}

.no-results img {
    width: min(100%, 600px);
    height: auto;
}

@media (max-width: 768px) {
    .projects-header::before,
    .projects-header::after {
        top: 25%;
        right: 2%;
        width: 110px;
        border-width: 6px;
    }

    .search-box {
        min-width: 100%;
    }

    .select-wrapper {
        width: 100%;
    }
}

@media (prefers-reduced-motion: reduce) {
    .projects-header::before,
    .projects-header::after {
        animation: none;
    }
}
</style>
