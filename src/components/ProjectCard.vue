<template>
    <div class="project-card">
        <div class="project-img-wrapper">
            <img :src="projectData.image" :alt="projectData.title" class="project-img" loading="lazy"
                decoding="async" />
        </div>

        <div class="project-content">
            <p class="project-meta">
                {{ projectData.type }} <span aria-hidden="true">·</span> {{ projectData.year }}
            </p>
            <h3 class="project-title">{{ projectData.title }}</h3>
            <p class="project-desc">{{ projectData.description }}</p>

            <ul class="feature-list" aria-label="作品核心功能">
                <li v-for="feature in projectData.features" :key="feature">{{ feature }}</li>
            </ul>

            <div class="tech-tags">
                <span v-for="tech in projectData.technologies" :key="tech" class="tag">{{ tech }}</span>
            </div>

            <button v-if="projectData.isGallery || projectData.hasDetailPage" type="button" class="view-btn"
                @click="handleViewDetail">
                查看作品 <span aria-hidden="true">→</span>
            </button>
            <a v-else :href="projectData.demo" class="view-btn" target="_blank" rel="noopener noreferrer">
                開啟作品 <span aria-hidden="true">↗</span>
            </a>
        </div>
    </div>
</template>

<script setup>
// 接收父組件發過來的單筆作品資料
const props = defineProps({
    projectData: {
        type: Object,
        required: true,
    },
})

// 🌟 嚴格遵守規格書：宣告 emits
const emit = defineEmits(['view-detail'])

const handleViewDetail = () => {
    // 把我這張卡片的 id（例如: weather-app）發給上層
    emit('view-detail', props.projectData.id)
}
</script>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 18px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgb(15 23 42 / 5%);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

@media (min-width: 768px) {
    .project-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 42px rgb(15 23 42 / 10%);
        border-color: #fda35a;
    }
}

.project-img-wrapper {
    width: 100%;
    height: 240px;
    overflow: hidden;
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .project-img {
    transform: scale(1.025);
}

.project-content {
    padding: clamp(1.5rem, 3vw, 2.5rem);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.project-meta {
    margin: 0 0 0.75rem;
    color: #c2410c;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.project-meta span {
    margin-inline: 0.25rem;
    color: #f59e0b;
}

.project-title {
    margin: 0 0 0.75rem;
    font-size: clamp(1.5rem, 2.3vw, 1.85rem);
    line-height: 1.25;
    color: #1e293b;
}

.project-desc {
    max-width: 42rem;
    margin: 0;
    color: #64748b;
    font-size: 1rem;
    line-height: 1.75;
}

.feature-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
    margin: 1.25rem 0;
    padding: 0;
    color: #334155;
    font-size: 0.9rem;
    font-weight: 600;
    list-style: none;
}

.feature-list li::before {
    content: '✓';
    margin-right: 0.4rem;
    color: #f59e0b;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.3rem 0;
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
    margin-inline: 0.65rem;
    color: #f59e0b;
    font-weight: 500;
}

.view-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #1e1b4b;
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 9px;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.view-btn:hover {
    background: #c2410c;
    color: #fff;
    box-shadow: 0 4px 12px rgba(248, 165, 81, 0.3);
    transform: translateY(-2px);
}

@media (min-width: 768px) {
    .project-card {
        flex-direction: row;
        min-height: 350px;
    }

    .project-img-wrapper {
        width: 42%;
        height: auto;
        min-height: 350px;
    }

    .project-content {
        justify-content: center;
    }
}
</style>
