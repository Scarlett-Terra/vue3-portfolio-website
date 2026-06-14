<template>
    <RouterLink :to="{ path: '/projects', query: { tech: skillName } }" class="skill-card-link">
        <div class="skill-card">
            <div class="icon-wrapper">
                <img :src="skillIcon" :alt="`${skillName} 圖示`" class="skill-img" loading="lazy" />
            </div>
            <h3 class="skill-title">{{ skillName }}</h3>
        </div>
        <div class="stars" :aria-label="`${skillName} 熟練度 ${stars} 顆星`">
            <span v-for="n in 5" :key="n" class="star" aria-hidden="true">{{ n <= stars ? '★' : '☆' }}</span>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    skillName: {
        type: String,
        required: true,
    },
    skillIcon: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
})
</script>

<style scoped>
.icon-wrapper {
    width: 48px;
    height: 48px;
    margin: 0 auto 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skill-title {
    text-align: center;
    margin: 0;
    width: 100%;
    color: #1e293b;
    font-size: 1.1rem;
}

.skill-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.skill-card-link {
    display: flex;
    min-height: 160px;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    background: #ffffff;
    color: inherit;
    text-decoration: none;
    box-shadow: 0 8px 24px rgb(15 23 42 / 5%);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.skill-card-link:hover {
    transform: translateY(-4px);
    border-color: #fda35a;
    box-shadow: 0 12px 28px rgb(15 23 42 / 10%);
}

.skill-card-link:focus-visible {
    outline: 3px solid rgb(79 70 229 / 30%);
    outline-offset: 3px;
}

.stars {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;
}

.star {
    font-size: 1.05rem;
    color: #f59e0b;
    margin: 0 1px;
}
</style>
