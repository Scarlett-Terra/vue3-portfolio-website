<template>
    <div class="skills-page page-shell">
        <header class="skills-heading">
            <h1 class="page-title">我的核心技能</h1>
        </header>

        <div class="skills-grid">
            <SkillCard v-for="skill in mySkills" :key="skill.id" :skill-name="skill.name" :skill-icon="skill.icon"
                :stars="skill.stars" :filter-tech="skill.filterTech || skill.name" />
        </div>

        <section class="workflow-section">
            <header class="workflow-heading">
                <p>How I Work</p>
                <h2>我的開發流程</h2>
                <span>從理解需求到測試改善，每一步都讓介面更清楚、更穩定，也更容易維護。</span>
            </header>

            <ol class="workflow-list">
                <li v-for="(step, index) in workflow" :key="step.title">
                    <span class="step-number">0{{ index + 1 }}</span>
                    <div class="step-icon">{{ step.icon }}</div>
                    <div class="step-content">
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.text }}</p>
                    </div>
                </li>
            </ol>
        </section>
    </div>
</template>

<script setup>
import SkillCard from '../components/SkillCard.vue'

const mySkills = [
    { id: 1, name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', stars: 5 },
    { id: 2, name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', stars: 4 },
    { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', stars: 3 },
    { id: 4, name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', stars: 3 },
    { id: 5, name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', stars: 4 },
    { id: 6, name: 'PS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', stars: 4, filterTech: 'Photoshop' },
    { id: 7, name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', stars: 4 },
    { id: 8, name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', stars: 3 },
    { id: 9, name: 'RWD', icon: 'https://api.iconify.design/lucide:monitor-smartphone.svg?color=%234338ca', stars: 4, filterTech: 'RWD' }

]

const workflow = [
    { icon: '◎', title: '需求理解', text: '先確認使用情境、目標使用者，以及真正需要解決的問題。' },
    { icon: '▧', title: '介面規劃', text: '整理資訊層級、操作流程與版面結構，降低使用者理解成本。' },
    { icon: '</>', title: 'Vue 實作', text: '拆分元件、整理資料流，建立清楚且容易維護的程式結構。' },
    { icon: '▣', title: 'RWD 測試', text: '檢查桌機、平板與手機的閱讀體驗、操作範圍與內容排列。' },
    { icon: '↻', title: '迭代改善', text: '根據測試結果與使用回饋持續修正，讓細節逐步變得更完整。' },
]

</script>

<style scoped>
.skills-heading .page-title {
    margin-bottom: clamp(2rem, 4vw, 3rem);
    color: #10183b;
    font-size: clamp(2rem, 4.5vw, 2.3rem);
    line-height: 1.2;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    margin-bottom: clamp(3.5rem, 7vw, 6rem);
}


.workflow-heading {
    max-width: 720px;
    margin: 0 auto 1.5rem;
    text-align: center;
}

.workflow-heading>p {
    margin: 0 0 0.75rem;
    color: #c2410c;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.workflow-heading h2 {
    margin: 0;
    color: #10183b;
    font-size: clamp(1.65rem, 3.5vw, 2rem);
    line-height: 1.3;
}

.workflow-heading span {
    display: block;
    margin-top: 1rem;
    color: #64748b;
    font-size: clamp(1rem, 1.8vw, 1.15rem);
    line-height: 1.8;
}

.workflow-list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
}

.workflow-list::before {
    position: absolute;
    top: 58px;
    right: 9%;
    left: 9%;
    border-top: 2px dotted #fdba74;
    content: '';
}

.workflow-list li {
    position: relative;
    z-index: 1;
    padding: 0 1rem;
    text-align: center;
}

.step-number {
    color: #c2410c;
    font-size: 0.9rem;
    font-weight: 800;
}

.step-icon {
    display: grid;
    width: 56px;
    height: 56px;
    margin: 0.8rem auto 1rem;
    place-items: center;
    border: 5px solid #f8fafc;
    border-radius: 50%;
    background: #fff7ed;
    color: #c2410c;
    box-shadow: 0 0 0 1px #fed7aa;
    font-size: 0.95rem;
    font-weight: 800;
}

.step-content h3 {
    margin: 0 0 0.65rem;
    color: #10183b;
    font-size: 1.2rem;
}

.step-content p {
    margin: 0;
    color: #64748b;
    font-size: 1rem;
    line-height: 1.75;
}
.workflow-section {
    position: relative;
    isolation: isolate;
    margin-bottom: 0;
    padding: clamp(2rem, 4vw, 3rem);
    border: 4px solid transparent;
    border-radius: 28px;
    background:
        linear-gradient(#ffffff, #ffffff) padding-box,
        repeating-linear-gradient(
            -50deg,
            #f97316 0%,
            #fbbf24 8%,
            #f1d2ab 14%,
            #fb923c 20%,
            #ea9466 28%,
            #f97316 36%
        ) border-box;
    background-size: 100% 100%, 300% 300%;
    box-shadow: 0 16px 38px rgb(15 23 42 / 7%);
    animation: electric-border-flow 14s linear infinite;
}

@keyframes electric-border-flow {
    from {
        background-position: 0% 50%, -100% 200%;
    }

    to {
        background-position: 0% 50%, 200% -100%;
    }
}

@media (max-width: 900px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .workflow-list {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .workflow-list::before {
        display: none;
    }

    .workflow-list li {
        display: grid;
        grid-template-columns: 70px 1fr;
        grid-template-rows: auto auto;
        column-gap: 1.25rem;
        row-gap: 0.8rem;
        align-items: start;
        padding: 1.25rem;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        background: #ffffff;
        text-align: left;
    }

    .step-number {
        grid-column: 1;
        grid-row: 1;
        justify-self: center;
        align-self: start;
        line-height: 1.2;
        padding-top: 0.15rem;
    }

    .step-icon {
        grid-column: 1;
        grid-row: 2;
        justify-self: center;
        margin: 0;
    }

    .step-content {
        grid-column: 2;
        grid-row: 1 / 3;
        align-self: start;
    }
}

@media (max-width: 576px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }

    .workflow-section {
        padding: 1.5rem;
        border-width: 3px;
        border-radius: 20px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .workflow-section {
        animation: none;
    }
}
</style>
