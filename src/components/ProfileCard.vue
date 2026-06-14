<template>
    <div class="profile-card">
        <div class="profile-main">
            <div class="profile-text">
                <h1 class="profile-name">小Yu</h1>
                <p class="profile-title">前端工程師 / 學習者</p>

                <p class="profile-motto">
                    真正學會程式不是記住語法，而是面對未知問題時，能夠有系統地拆解、思考、並找到解法。
                </p>

                <div class="profile-actions">
                    <button type="button" @click="showMoreInfo" class="btn-more">點我了解更多</button>

                    <div class="social-links">
                        <button type="button" @click="showContactMenu" class="social-icon btn-contact-trigger">聯絡我</button>
                    </div>
                </div>
            </div>

            <div class="profile-avatar-wrapper">
                <img src="https://file.aiquickdraw.com/tool-page/example-images/175041197892706lhauag.webp?imageMogr2/thumbnail/x600/format/webp"
                    alt="大頭照" class="profile-avatar" />
            </div>
        </div>

        <div class="profile-highlights">
            <div class="highlight-item">
                <div class="highlight-icon">📈</div>
                <h3>學習成長</h3>
                <p>致力於每日實作與技術轉職計畫。</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">❤️</div>
                <h3>選擇程式</h3>
                <p>將邏輯轉化為精緻 UI/UX 讓使用者有良好的體驗。</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">🚀</div>
                <h3>持續進步</h3>
                <p>保持好奇心，不斷精進前端新技術。</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">⚒️</div>
                <h3>關於除錯</h3>
                <p>只要方向對了，每一次的修復，都是自我升級，也是完善系統的墊腳石。</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">🏆</div>
                <h3>轉職與挑戰</h3>
                <p>跳脫舊架構，重構新人生，未來的自己才會跑得更順暢</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">🎢</div>
                <h3>關於成長</h3>
                <p>最好的系統需要不斷迭代，最好的自己需要持續精進</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()

const showMoreInfo = () => {
    Swal.fire({
        title: '👋 嗨 ~ 妳好！我是小Yu',
        icon: '',
        html: `
            <div class="swal-custom-body">
                <div class="swal-section-title title-journey">🚀 關於我的轉職驚奇之旅</div>
                <p class="swal-section-p">
                    原本從事於有關商業領域，但為了讓自己也提升與網頁相關發展，讓網頁平台能「真正動起來」，所以我決定投入前端工程師的密集訓練營。
                    目前已累積數百小時的程式練習，持續學習 <b>HTML、CSS、JavaScript、Vue 3</b> 等前端核心技術，也讓我對程式設計有更深的體會。
                </p>
                
                <div class="swal-section-title title-advantage">🎨 設計 × 前端的雙棲優勢</div>
                <p class="swal-section-p">
                    我擁有 <b>Photoshop</b> 與 <b>Illustrator</b> 實作經驗。
                    這讓我具備特有的視覺敏銳度，在開發網頁時，也透過 RWD 斷點細節來提升 UI/UX 視覺呈現 ，強調使用者體驗的介面設計理念。
                </p>

                <div class="swal-egg-card">
                    💡 <b>彩蛋：</b> 點擊下方的作品列表，可以看到我轉職期間所累積的綜合作品喔！
                </div>
            </div>
        `,
        confirmButtonText: '出發看作品！',
        buttonsStyling: false, // 🌟 關閉原廠按鈕預設樣式，避免樣式衝突
        customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title',
            confirmButton: 'swal-custom-confirm-btn'
        }
    }).then((result) => {
        // 🌟 3. 當使用者點擊「出發看作品！」確認按鈕後，觸發帶有 query 的跳轉
        if (result.isConfirmed) {
            router.push('/projects')
        }
    })
}

const showContactMenu = () => {
    Swal.fire({
        title: '📬 期待與您聯繫',
        text: '歡迎透過以下管道與我交流，我會在 24 小時內回覆您！',
        html: `
            <div class="swal-contact-container">
                <a href="mailto:your@email.com" class="contact-link-btn mail-btn">
                    <span>📧 發送 Email 郵件 (your@email.com)</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact-link-btn github-btn">
                    <span>🐱 前往我的 GitHub 原始碼專頁</span>
                </a>
                <a href="https://www.cakeresume.com" target="_blank" rel="noopener noreferrer" class="contact-link-btn resume-btn">
                    <span>📄 線上瀏覽我的完整履歷</span>
                </a>
            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            popup: 'swal-custom-popup swal-contact-popup',
            title: 'swal-custom-title'
        }
    })
}
</script>

<style scoped>
.profile-card {
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
}

@media (max-width: 576px) {
    .profile-card {
        padding: 1.5rem;
    }
}

/* --- Main Section Styling --- */
.profile-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    margin-bottom: 3rem;
}

@media (max-width: 768px) {
    .profile-main {
        flex-direction: column-reverse;
        text-align: center;
    }
}

.profile-text {
    flex: 1;
}

.profile-name {
    font-size: 2.8rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
}

.profile-title {
    font-size: 1.2rem;
    color: #64748b;
    margin: 0 0 1rem 0;
}

.profile-motto {
    font-size: 1rem;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 1.5rem;
}

.profile-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

@media (max-width: 768px) {
    .profile-actions {
        flex-direction: column;
        gap: 1rem;
    }
}

.btn-more {
    background-color: #1e1b4b;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.btn-more:hover {
    background-color: #312e81;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-icon {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: #4338ca;
    background-color: #e0e7ff;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.2s ease;
}

.social-icon:hover {
    background-color: #c7d2fe;
}

.btn-contact-trigger {
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.profile-avatar-wrapper {
    flex-shrink: 0;
}

.profile-avatar {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #7d7f7f;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* --- Highlights Section Styling --- */
.profile-highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    border-top: 1px solid #e2e8f0;
    padding-top: 3rem;
}

@media (max-width: 768px) {
    .profile-highlights {
        grid-template-columns: 1fr;
    }
}

.highlight-item {
    background-color: #f8fafc;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: left;
    transition: transform 0.2s ease;
}

@media (max-width: 768px) {
    .highlight-item {
        text-align: center;
    }
}

.highlight-item:hover {
    transform: translateY(-5px);
}

.highlight-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.highlight-item h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
}

.highlight-item p {
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0;
}
</style>
