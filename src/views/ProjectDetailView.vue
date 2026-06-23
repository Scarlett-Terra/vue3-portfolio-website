<template>
    <div class="project-detail-page page-shell">

        <div class="detail-container" v-if="currentProject">

            <div class="banner-wrapper" v-if="!currentProject.isGallery"
                :style="{ '--banner-image': `url(${currentProject.image})` }">
                <img :src="currentProject.image" class="detail-banner" :alt="currentProject.title"
                    decoding="async" />
            </div>

            <div class="design-gallery" v-else>
                <button v-for="(img, index) in currentProject.images" :key="img.id" type="button" class="gallery-item"
                    :aria-label="`放大查看：${img.alt}`" @click="openLightbox(index)">
                    <img :src="img.thumbnail" :alt="img.alt" loading="lazy" decoding="async" />
                    <div class="gallery-overlay">
                        <span>點擊放大</span>
                    </div>
                </button>
            </div>
            <button type="button" class="back-btn" @click="goBack">← 回到作品列表</button>
            <h2 ref="detailTitleRef" class="detail-title" tabindex="-1">{{ currentProject.title }}</h2>

            <div class="tech-tags">
                <span v-for="tech in currentProject.technologies" :key="tech" class="tag">
                    {{ tech }}
                </span>
            </div>

            <p class="detail-desc">{{ currentProject.detailDescription }}</p>

            <div class="action-links"
                v-if="!currentProject.isGallery && (currentProject.github || projectDemoLinks.length)">
                <a v-if="currentProject.github" :href="currentProject.github" target="_blank" rel="noopener noreferrer"
                    class="link-btn github-btn">
                    <SvgIcon :path="iconPaths.github" />
                    GitHub 連結
                </a>
                <a v-for="link in projectDemoLinks" :key="link.url" :href="link.url" target="_blank"
                    rel="noopener noreferrer" class="link-btn demo-btn" @click="handleDemoClick($event, link.url)">
                    <SvgIcon :path="iconPaths.externalLink" />
                    {{ link.label }}
                </a>
            </div>

            <div class="custom-detail-content" v-if="hasStructuredDetails">
                <hr class="section-divider" />

                <div class="detail-section" v-if="currentProject.detailedFeatures?.length">
                    <h3 class="section-subtitle">核心功能</h3>
                    <div class="features-grid">
                        <div v-for="(item, index) in currentProject.detailedFeatures" :key="item.title"
                            class="feature-card">
                            <span class="feature-icon" aria-hidden="true">
                                <SvgIcon :path="getFeatureIconPath(item.title)" />
                            </span>
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                </div>

                <div class="detail-section" v-if="currentProject.highlights?.length">
                    <h3 class="section-subtitle">開發亮點</h3>
                    <div class="highlights-list">
                        <div v-for="item in currentProject.highlights" :key="item.title" class="highlight-item">
                            <span class="highlight-icon" aria-hidden="true">
                                <SvgIcon :path="getHighlightIconPath(item.title)" />
                            </span>
                            <div>
                                <strong>{{ item.title }}</strong>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-else class="not-found">
            <p>😢 找不到該作品的詳細資料</p>
        </div>

        <div v-if="activeImageIndex !== null" class="lightbox-backdrop" role="dialog" aria-modal="true"
            aria-label="作品圖片預覽" @click="closeLightbox">
            <button type="button" class="close-lightbox-btn" aria-label="關閉圖片預覽" @click.stop="closeLightbox">×</button>
            <div class="lightbox-content" @click.stop>
                <img :src="currentProject.images[activeImageIndex].full"
                    :alt="currentProject.images[activeImageIndex].alt" decoding="async" />
                <p class="lightbox-caption">{{ currentProject.images[activeImageIndex].alt }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { computed, ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SvgIcon from '../components/SvgIcon.vue'
import { iconPaths } from '../data/icons'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()
const detailTitleRef = ref(null)

// 根據路徑參數 params.id 抓取對應作品
// 根據路徑參數 params.id 抓取對應作品
const currentProject = computed(() => {
    return projects.find(project => project.id === route.params.id)
})

const projectDemoLinks = computed(() => {
    if (!currentProject.value) return []

    if (currentProject.value.demoLinks) return currentProject.value.demoLinks
    if (!currentProject.value.demo) return []

    return [{ label: 'Demo 連結', url: currentProject.value.demo }]
})

const hasStructuredDetails = computed(() => {
    if (!currentProject.value || currentProject.value.isGallery) return false

    return Boolean(
        currentProject.value.detailedFeatures?.length ||
        currentProject.value.highlights?.length
    )
})

const focusDetailTitle = async () => {
    if (!currentProject.value) return

    await nextTick()
    requestAnimationFrame(() => {
        detailTitleRef.value?.scrollIntoView({ block: 'start', behavior: 'smooth' })
        detailTitleRef.value?.focus({ preventScroll: true })
    })
}

const featureIconRules = [
    { keywords: ['商品列表', '商品', '產品'], icon: 'shoppingBag' },
    { keywords: ['加入購物車', '購物車', '結帳'], icon: 'shoppingCart' },
    { keywords: ['API', '串接', '資料讀取'], icon: 'cloudData' },
    { keywords: ['訂單', '管理', '列表'], icon: 'clipboardList' },
    { keywords: ['搜尋', '篩選', '查詢'], icon: 'search' },
    { keywords: ['交通', '路途', '導覽'], icon: 'route' },
    { keywords: ['FAQ', '問題', '折疊'], icon: 'helpCircle' },
    { keywords: ['城市', '區域', '景點', '旅遊'], icon: 'map' },
    { keywords: ['路由', '多頁', '頁面'], icon: 'pages' },
    { keywords: ['響應式', 'RWD', '版面'], icon: 'responsive' },
    { keywords: ['新增', '輸入', '表單'], icon: 'plusSquare' },
    { keywords: ['統計', '計算'], icon: 'barChart' },
    { keywords: ['即時', '同步', '更新'], icon: 'refresh' },
]

const getFeatureIconPath = (title) => {
    const match = featureIconRules.find(rule =>
        rule.keywords.some(keyword => title.includes(keyword))
    )

    return iconPaths[match?.icon] || iconPaths.sparkles
}

const highlightIconRules = [
    { keywords: ['LocalStorage', '儲存', '保留'], icon: 'save' },
    { keywords: ['API', 'Axios', '串接', '請求'], icon: 'cloudData' },
    { keywords: ['同步', '狀態', '即時', '更新'], icon: 'refresh' },
    { keywords: ['組件', '元件', 'Components', '封裝'], icon: 'components' },
    { keywords: ['企劃', '架構', '資料結構', '整理'], icon: 'database' },
    { keywords: ['導覽', '體驗', '流程'], icon: 'route' },
    { keywords: ['路由', 'Router'], icon: 'pages' },
    { keywords: ['統計', 'Computed', '計算'], icon: 'barChart' },
]

const getHighlightIconPath = (title) => {
    const match = highlightIconRules.find(rule =>
        rule.keywords.some(keyword => title.includes(keyword))
    )

    return iconPaths[match?.icon] || iconPaths.sparkles
}

// 🌟 新增：控制燈箱目前點開哪一張圖的變數
const activeImageIndex = ref(null)

// 🌟 新增：開啟燈箱，並用 query 追蹤圖片
const openLightbox = (index) => {
    activeImageIndex.value = index
    const imgId = currentProject.value.images[index].id
    router.push({ query: { ...route.query, img: imgId } })
}

// 🌟 新增：關閉燈箱，把網址上的 img 參數拿掉
const closeLightbox = () => {
    activeImageIndex.value = null
    const { img, ...cleanQuery } = route.query
    router.push({ query: cleanQuery })
}

const handleKeydown = (event) => {
    if (event.key === 'Escape' && activeImageIndex.value !== null) {
        closeLightbox()
    }
}

watch(activeImageIndex, (index) => {
    document.body.style.overflow = index === null ? '' : 'hidden'
})

// 🌟 新增：初次進入網頁時，檢查網址有沒有 ?img= 參數，有的話直接幫他點開燈箱！
onMounted(() => {
    window.addEventListener('keydown', handleKeydown)

    if (currentProject.value && currentProject.value.isGallery && route.query.img) {
        const index = currentProject.value.images.findIndex(img => img.id === route.query.img)
        if (index !== -1) {
            activeImageIndex.value = index
        }
    }

    focusDetailTitle()
})

watch(() => route.params.id, () => {
    focusDetailTitle()
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
})

// 原路退回機制
const goBack = () => {
    const previousTech = route.query.fromTech
    if (previousTech) {
        router.push({ path: '/projects', query: { tech: previousTech } })
    } else {
        router.push('/projects')
    }
}

const handleDemoClick = (event, url) => {
    // 如果網址是 # 號，就攔截它，不讓它亂跳頁
    if (url === '#') {
        event.preventDefault(); // 阻止預設跳頁行為
        alert('💡 本系統目前於本地端穩定運行中。\n此線上展示版因配合測試部署，近期即將正式上線，敬請期待！');
    }
};
</script>

<style scoped>
/* 回到作品列表按鈕 */
.back-btn {
    background: #031682;
    color: #f5f2f6;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;

    /* 讓小圖示與文字對齊 */
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.back-btn:hover {
    background: #8c18b2;
    color: #f5f2f6;
    transform: translateY(-2px);
}

/* 詳細內容外殼卡片 */
.detail-container {
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(30, 27, 75, 0.03);
}

.banner-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 2rem;
    background: #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.banner-wrapper::before {
    position: absolute;
    inset: -24px;
    background: var(--banner-image) center / cover no-repeat;
    content: "";
    filter: blur(18px) saturate(0.85);
    opacity: 0.38;
    transform: scale(1.06);
}

.banner-wrapper::after {
    position: absolute;
    inset: 0;
    background: rgba(248, 250, 252, 0.22);
    content: "";
}

.detail-banner {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

.detail-title {
    font-size: 2.2rem;
    color: #1e1b4b;
    /* 搭配名片深藍色 */
    margin-top: 0;
    margin-bottom: 1rem;
    scroll-margin-top: 6.5rem;
}

.detail-title:focus {
    outline: none;
}

.detail-title:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 0.35rem;
}

/* 🌟 技術標籤設計（與列表頁面呼應，以分隔符號收斂視覺節奏） */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0;
    margin-bottom: 1.5rem;
    color: #f59e0b;
}

.tag {
    display: inline-flex;
    align-items: center;
    color: #9a3412;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.8;
}

.tag + .tag::before {
    content: "|";
    margin-inline: 0.7rem;
    color: #f59e0b;
    font-weight: 500;
}

.detail-desc {
    font-size: 1.1rem;
    color: #334155;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    white-space: pre-line;
    /* 支援說明的換行符號 */
}

/* 🌟 外部連結按鈕排版 */
.action-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    border-top: 1px solid #f1f5f9;
    padding-top: 1rem;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
}

/* GitHub 按鈕：外框藍黑色調 */
.github-btn {
    background: #1e293b;
    color: #ffffff;
}

.github-btn:hover {
    background: #6f0c8d;
    transform: translateY(-2px);
}

/* Demo 按鈕：跟名片主按鈕呼應的深靛藍 */
.demo-btn {
    background: #031682;
    color: #ffffff;
}

.demo-btn:hover {
    background: #0f02bf;
    transform: translateY(-2px);
}

.not-found {
    text-align: center;
    padding: 3rem;
    color: #94a3b8;
}

.custom-detail-content {
    margin-top: 2rem;
}

.section-divider {
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 0 0 2rem;
}

.detail-section {
    margin-top: 2rem;
}

.section-subtitle {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0 0 1rem;
    color: #a32903da;
    font-size: 1.5rem;
    font-weight: 800;
}

.section-subtitle::before {
    width: 4px;
    height: 1.15em;
    border-radius: 999px;
    background: #075eea;
    content: "";
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
}

.feature-card {
    min-height: 230px;
    padding: 1.35rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #ffffff;
    text-align: center;
    box-shadow: 0 8px 22px rgb(15 23 42 / 4%);
}

.feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.25rem;
    height: 3.25rem;
    margin-bottom: 1rem;
    border-radius: 999px;
    background: #eef5ff;
    color: #075eea;
    font-size: 1.35rem;
    font-weight: 900;
}

.feature-icon :deep(.svg-icon) {
    width: 2rem;
    height: 2rem;
}

.features-grid h4 {
    margin: 0;
    color: #0f172a;
    font-size: 1.4rem;
    line-height: 1.35;
}

.features-grid p {
    margin: 0.65rem 0 0;
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.7;
}

.highlights-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;
}

.highlight-item {
    display: flex;
    gap: 0.9rem;
    min-height: 142px;
    padding: 1.15rem;
    border-radius: 8px;
    background: #f4f7ff;
}

.highlight-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 999px;
    background:
    linear-gradient(135deg, #dbeafe, #eff6ff);
    border: 1px solid #bfdbfe;
    color: #075eea;
}

.highlight-icon :deep(.svg-icon) {
    width: 1.65rem;
    height: 1.65rem;
}

.highlight-item strong {
    display: block;
    color: #102a63;
    font-size: 1.4rem;
    line-height: 1.4;
}

.highlight-item p {
    margin: 0.35rem 0 0;
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.65;
}

/* 🌟 僅新增：設計相簿專屬 CSS，與妳原有的排版完全相容 🌟 */
.design-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    cursor: pointer;
    border: 1px solid #e2e8f0;
    padding: 0;
    background: #ffffff;
    font: inherit;
    transition: transform 0.2s ease;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.gallery-item:hover {
    transform: translateY(-4px);
}

.gallery-item:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(3, 22, 130, 0.8);
    /* 使用妳的 back-btn 藍色調 */
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
    font-size: 0.9rem;
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

/* 🌟 全螢幕燈箱樣式 */
.lightbox-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.lightbox-content {
    max-width: 90%;
    max-height: 80%;
    text-align: center;
}

.lightbox-content img {
    max-width: 100%;
    max-height: 75vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.lightbox-caption {
    color: #cbd5e1;
    margin-top: 1rem;
    font-size: 1rem;
}

.close-lightbox-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    color: white;
    border: none;
    font-size: 2rem;
    cursor: pointer;
}

.close-lightbox-btn:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 4px;
}

/* 簡單的行動版 RWD 調整 */
@media (max-width: 576px) {
    .detail-container {
        padding: 1rem;
    }

    .banner-wrapper {
        margin-bottom: 1.5rem;
        border-radius: 9px;
    }

    .action-links {
        flex-direction: column;
    }

    .link-btn {
        justify-content: center;
    }

    .detail-title {
        font-size: 1.75rem;
    }

    .features-grid,
    .highlights-list {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 577px) and (max-width: 960px) {

    .features-grid,
    .highlights-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
