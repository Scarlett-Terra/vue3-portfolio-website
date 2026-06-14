<template>
  <div class="resume-page page-shell">
    <header class="resume-header">
      <div>
        <p class="resume-eyebrow">Resume</p>
        <p class="resume-page-title">個人履歷</p>
        <p class="resume-intro">這裡將呈現我的經歷、技能與前端實作成果。</p>
      </div>

      <a class="download-button" :href="resumePdfUrl" download="徐詩妤-前端工程師履歷.pdf" aria-label="下載徐詩妤的 PDF 履歷">
        <span aria-hidden="true">↓</span>
        下載 PDF 履歷
      </a>
    </header>

    <section class="resume-content" aria-label="履歷內容">
        <main class="resume">
          <header class="hero">
            <div class="portrait" :style="{ backgroundImage: `url(${profilePhotoUrl})` }" role="img"
              aria-label="徐詩妤個人照片"></div>
            <div class="hero-content">
              <h1>徐詩妤</h1>
              <p class="job-title">Vue Frontend Developer</p>
              <p class="intro">累積 14 年跨領域職場經驗，<br>現專注於 Vue 3 開發與使用者介面實作。</p>
            </div>
          </header>

          <div class="resume-grid">
            <aside class="sidebar">
              <section class="card about">
                <h2>關於我</h2>
                <span class="title-mark" aria-hidden="true"></span>
                <p>經營管理系畢業，擁有14年跨領域工作經驗，曾擔任客服專員、社群營運人員及室內設計助理。</p>
                <p>過往工作累積了需求溝通、流程規劃與問題追蹤的能力，培養出從使用者角度思考產品與優化體驗的習慣。</p>
                <p>2026年3月投入前端開發領域，完成前端工程師培訓課程，持續透過作品實踐技術能力，期待在實務中不斷成長。</p>
              </section>

              <section class="card contact">
                <h2>聯絡資訊</h2>
                <ul class="contact-list">
                  <li>
                    <span aria-hidden="true">☎</span>
                    <a class="contact-link" href="tel:+886981041343" aria-label="撥打電話 0981-041-343">0981-041-343</a>
                  </li>
                  <li><span aria-hidden="true">✉</span><a
                      href="mailto:asdqwe1456321@gmail.com">asdqwe1456321@gmail.com</a></li>
                  <li>
                    <svg class="github-icon" viewBox="0 0 24 24" role="img" aria-label="GitHub">
                      <path
                        d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.35-1.29-1.7-1.29-1.7-1.05-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.8 2.72 1.28 3.38.98.1-.76.41-1.28.74-1.58-2.57-.3-5.28-1.3-5.28-5.75 0-1.27.45-2.31 1.19-3.13-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.17 1.2a10.9 10.9 0 0 1 5.77 0c2.2-1.51 3.17-1.2 3.17-1.2.63 1.6.23 2.78.11 3.08.74.82 1.19 1.86 1.19 3.13 0 4.47-2.72 5.45-5.3 5.74.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                    </svg>
                    <a href="https://github.com/Scarlett-Terra" target="_blank" rel="noopener noreferrer"
                      aria-label="開啟 Scarlett-Terra 的 GitHub">github.com/Scarlett-Terra</a>
                  </li>
                  <li>
                    <svg class="contact-icon location-icon" viewBox="0 0 24 24" role="img" aria-label="居住地點">
                      <path
                        d="m15.5 4-7-2L2 4.5v17L8.5 19l7 2 6.5-2.5v-17L15.5 4Zm-1 14.7-5-1.43V4.3l5 1.43V18.7Zm-10.5.07V5.87l3.5-1.35v12.94L4 18.77Zm16-1.64-3.5 1.35V5.54L20 4.19v12.94Z" />
                    </svg>
                    <span class="contact-text">居住：台中市</span>
                  </li>
                </ul>
              </section>

              <section class="card skills">
                <h2>技術能力</h2>
                <ul class="skill-list">
                  <li><strong>前端開發</strong><span>Vue 3、JavaScript、Vite、Pinia</span></li>
                  <li><strong>介面實作</strong><span>HTML、CSS / SCSS、RWD 響應式設計</span></li>
                  <li><strong>資料串接</strong><span>Axios、REST API 基礎應用</span></li>
                  <li><strong>開發協作</strong><span>Git、GitHub、Figma</span></li>
                  <li><strong>AI 輔助</strong><span>需求整理、提示設計、程式除錯與迭代</span></li>
                </ul>
              </section>
            </aside>

            <div class="main-content">
              <section class="card experience">
                <h2 class="line-title"><span>職涯經歷</span></h2>
                <article>
                  <h3>客服專員</h3>
                  <p>提供客戶諮詢服務，處理問題與需求，培養同理心與解決問題的能力。
                  </p>
                </article>
                <article>
                  <h3>社群營運人員</h3>
                  <p>負責社群經營、內容企劃與會員互動，提升品牌曝光與用戶參與度。</p>
                </article>
                <article>
                  <h3>室內設計助理</h3>
                  <p>協助設計與專案執行，培養對視覺細節、空間比例與使用者體驗的敏銳度。</p>
                </article>
              </section>

              <section class="card strengths">
                <h2 class="line-title"><span>職場優勢</span></h2>
                <div class="strength-grid">
                  <article class="strength purple">
                    <div>
                      <h3>使用者思維</h3>
                      <p>善於理解需求與操作流程，習慣從使用者角度思考介面體驗。</p>
                    </div>
                  </article>
                  <article class="strength peach">
                    <div>
                      <h3>問題分析</h3>
                      <p>遇到問題時會主動查找資料，拆解原因並持續追蹤改善。</p>
                    </div>
                  </article>
                  <article class="strength blue">
                    <div>
                      <h3>團隊協作</h3>
                      <p>具客服與跨職能工作經驗，能快速理解需求並有效溝通。</p>
                    </div>
                  </article>
                  <article class="strength green">
                    <div>
                      <h3>AI 協作開發</h3>
                      <p>運用 AI 輔助需求整理、企劃與痛點分析，逐步形成設計稿與 Vue 3 網站架構，並練習驗證、除錯及調整產出。</p>
                    </div>
                  </article>
                </div>
              </section>

              <section class="card education">
                <h2>學歷</h2>
                <div class="education-grid">
                  <article>
                    <h3>明志科技大學</h3>
                    <p>經營管理系 四技畢業</p>
                    <time datetime="2014-06">2014 / 06</time>
                  </article>
                  <article>
                    <h3>前端網頁工程師養成班</h3>
                    <p>（職訓班結業）</p>
                    <time datetime="2026-06-30">2026 / 06 / 30</time>
                  </article>
                </div>
              </section>
            </div>
          </div>

          <footer class="footer-card">
            <p>持續學習，持續實作，<br>期待用更好的使用者體驗創造價值。</p>
            <div class="qr-group">
              <div class="qr-item"><span>作品集 Portfolio</span>
                <div class="qr-placeholder">QR</div>
              </div>
              <div class="qr-item"><span>程式碼 GitHub</span>
                <div class="qr-placeholder">QR</div>
              </div>
            </div>
          </footer>
        </main>
    </section>
  </div>
</template>

<script setup>
const resumePdfUrl = `${import.meta.env.BASE_URL}resume.pdf`
const profilePhotoUrl = `${import.meta.env.BASE_URL}images/profile/resume-photo.jpg`
</script>

<style scoped>
.resume-page {
  --ink: #282631;
  --purple: #342c78;
  --purple-soft: #7767ae;
  --page: #faf8f5;
  --lavender-card: rgba(242, 239, 249, 0.92);
  --cream-card: rgba(250, 244, 237, 0.94);
  --border: rgba(72, 61, 112, 0.2);
  color: var(--ink);
  padding-bottom: clamp(4rem, 8vw, 7rem);
  font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
}

.resume-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  background: linear-gradient(120deg, #fff7ed, #ffffff 58%, #eff6ff);
  box-shadow: 0 12px 32px rgb(15 23 42 / 6%);
}

.resume-eyebrow {
  margin: 0 0 0.5rem;
  color: #c2410c;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.resume-page-title {
  margin: 0;
  color: #10183b;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
}

.resume-intro {
  margin: 0.8rem 0 0;
  color: #64748b;
  line-height: 1.7;
}

.download-button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 48px;
  padding: 0.8rem 1.15rem;
  border-radius: 9px;
  background: #1e1b4b;
  color: #ffffff;
  font-weight: 750;
  text-decoration: none;
  box-shadow: 0 10px 22px rgb(30 27 75 / 16%);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.download-button:hover {
  background: #c2410c;
  transform: translateY(-2px);
}

.resume-content {
  overflow: hidden;
  border-radius: 24px;
  background:
    radial-gradient(circle at 12% 10%, rgba(236, 229, 246, 0.75), transparent 24rem),
    radial-gradient(circle at 88% 45%, rgba(250, 233, 214, 0.6), transparent 30rem),
    var(--page);
  box-shadow: 0 16px 42px rgb(15 23 42 / 7%);
}

@media (max-width: 700px) {
  .resume-header {
    align-items: stretch;
    flex-direction: column;
  }

  .download-button {
    width: 100%;
  }
}


/* 以下為個人履歷內容樣式 */
.resume,
.resume * {
  box-sizing: border-box;
}

.resume a {
  color: inherit;
  text-decoration: none;
}

.resume a:hover {
  color: var(--purple-soft);
}

.resume {
  width: min(1120px, calc(100% - 36px));
  margin: 0 auto;
  padding: 24px 0;
}

.hero {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 20px;
}

.portrait {
  min-height: 330px;
  border-radius: 28px;
  background-repeat: no-repeat;
  background-position: 46% 35%;
  background-size: cover;
  box-shadow: 0 15px 34px rgba(35, 26, 53, 0.12);
}

.hero h1 {
  margin: 0;
  color: #24212d;
  font-size: clamp(3.5rem, 6vw, 4.9rem);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: 0.04em;
}

.job-title {
  margin: 8px 0 22px;
  color: var(--purple);
  font-size: clamp(1.55rem, 3vw, 2.15rem);
  font-weight: 750;
  line-height: 1.25;
  letter-spacing: 0.01em;
}

.intro {
  margin: 0;
  padding: 3px 0 3px 20px;
  border-left: 5px solid var(--purple-soft);
  color: #3c3945;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 0.015em;
}

.resume-grid {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 28px;
}

.sidebar,
.main-content {
  display: grid;
  align-content: start;
  gap: 18px;
}

.sidebar {
  grid-template-rows: auto auto 1fr;
}

.card,
.footer-card {
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 20px;
  box-shadow: 0 8px 26px rgba(49, 39, 83, 0.035);
}

.card {
  padding: 25px 28px;
}

.sidebar .card,
.strengths,
.education {
  background: var(--lavender-card);
}

.experience {
  background: var(--cream-card);
}

h2,
h3,
p {
  margin-top: 0;
}

h2 {
  margin-bottom: 16px;
  color: var(--purple);
  font-size: 1.78rem;
  font-weight: 750;
  line-height: 1.25;
  letter-spacing: 0.045em;
}

h3 {
  margin-bottom: 8px;
  font-size: 1.55rem;
  letter-spacing: 0.035em;
}

.title-mark {
  display: block;
  width: 58px;
  height: 6px;
  margin: 4px 0 18px;
  border-radius: 10px;
  background: #8f83bd;
}

.about p {
  margin-bottom: 26px;
  color: #383640;
  font-size: 1rem;
  line-height: 1.85;
  font-weight: bold;
}

.about p:last-child {
  margin-bottom: 0;
}

.contact-list,
.skills ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-list li {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 8px 0;
  color: #34313b;
  font-size: 0.97rem;
  font-weight: bold;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.contact-list li>span[aria-hidden="true"] {
  flex: 0 0 20px;
  color: var(--purple);
  font-weight: 800;
  text-align: center;
}

.contact-link {
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgba(52, 44, 120, 0.35);
  text-underline-offset: 3px;
}

.github-icon,
.contact-icon {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
}

.github-icon {
  fill: #171515;
}

.location-icon {
  fill: var(--purple);
}

.contact-text {
  flex: 1;
}

.skills {
  overflow: hidden;
}

.skill-list {
  position: relative;
  display: grid;
  gap: 0;
}

.skill-list::before {
  content: none;
}

.skill-list li {
  position: relative;
  display: grid;
  gap: 2px;
  min-height: 66px;
  padding: 5px 0 15px;
  font-size: 1.2rem;
  line-height: 1.48;
}

.skill-list li::before {
  content: none;
}

.skill-list li:last-child {
  min-height: 62px;
  padding-bottom: 0;
  border-bottom: 0;
}

.skill-list strong {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--purple);
  letter-spacing: 0.03em;
}

.skill-list strong::after {
  flex: 1;
  height: 1px;

  content: "";
}

.skill-list span {
  color: #45424c;
  font-size: 0.96rem;
  line-height: 1.2;
  font-weight: bold;
}

.line-title {
  display: flex;
  align-items: center;
  gap: 16px;
}

.line-title::after {
  flex: 1;
  height: 1px;
  background: var(--purple-soft);
  content: "";
}

.experience article {
  padding: 13px 0 18px;
  border-bottom: 1px dashed #c9b8a6;
}

.experience article:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.experience p,
.strength p {
  margin-bottom: 0;
}

.experience p {
  color: #3d3941;
  font-size: 1.2rem;
  line-height: 1.8;
}

.strength-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 34px;
  row-gap: 0;
}

.strength {
  position: relative;
  min-height: 0;
  padding: 24px 8px 24px 22px;
  border-bottom: 1px solid rgba(91, 78, 135, 0.18);
  text-align: left;
}

.strength::before {
  position: absolute;
  top: 28px;
  bottom: 28px;
  left: 0;
  width: 5px;
  border-radius: 6px;
  background: var(--strength-color);
  opacity: 0.72;
  content: "";
}

.strength h3 {
  margin: 0 0 8px;
  padding: 0;
  border: 0;
  color: var(--strength-color);
  font-size: 1.6rem;
  line-height: 1.25;
}

.strength p {
  color: #403d48;
  font-size: 1.2rem;
  line-height: 1.75;
}

.strength:nth-child(n + 3) {
  border-bottom: 0;
}

.strength.purple {
  --strength-color: #51418a;
  --strength-accent: #ded6f1;
}

.strength.peach {
  --strength-color: #8a4d2b;
  --strength-accent: #f4dcc8;
}

.strength.blue {
  --strength-color: #315d85;
  --strength-accent: #d5e3f0;
}

.strength.green {
  --strength-color: #356b59;
  --strength-accent: #d3e7df;
}

.education {
  padding-top: 20px;
}

.education h2 {
  margin-bottom: 10px;
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
}

.education article {
  padding: 0 18px 0 0;
}

.education article+article {
  padding-left: 50px;
  border-left: 1px solid #8b8790;
}

.education h3,
.education p {
  margin-bottom: 2px;

}

.education p {
  color: #45414a;
  font-size: 1.2rem;
}

.education time {
  color: var(--purple-soft);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.footer-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  margin-top: 18px;
  padding: 14px 42px;
  background: rgba(231, 224, 244, 0.88);
}

.footer-card>p {
  margin: 0;
  color: var(--purple);
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-align: center;
}

.qr-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.qr-item {
  display: grid;
  justify-items: center;
  color: var(--purple);
  font-weight: 700;
}

.qr-item+.qr-item {
  border-left: 1px solid #8e86a8;
}

.qr-placeholder {
  display: grid;
  width: 76px;
  aspect-ratio: 1;
  margin-top: 7px;
  place-items: center;
  border: 2px dashed #b4abc8;
  border-radius: 8px;
  color: #aaa1bd;
  background: rgba(255, 255, 255, 0.82);
  font-size: 0.85rem;
}

@media (max-width: 860px) {

  .hero,
  .resume-grid {
    grid-template-columns: 280px 1fr;
    gap: 22px;
  }

  .portrait {
    min-height: 285px;
  }

  .hero h1 {
    font-size: 3.35rem;
  }

  .job-title {
    font-size: 1.65rem;
  }

  .intro {
    font-size: 1rem;
  }

  .card {
    padding: 22px;
  }

  .strength-grid {
    grid-template-columns: 1fr;
  }

  .strength {
    min-height: auto;
    border-bottom: 1px solid rgba(91, 78, 135, 0.18);
  }

  .strength:last-child {
    border-bottom: 0;
  }
}

@media (max-width: 680px) {
  .resume {
    width: min(100% - 24px, 520px);
    padding-top: 12px;
  }

  .hero,
  .resume-grid,
  .footer-card {
    grid-template-columns: 1fr;
  }

  .hero {
    gap: 18px;
  }

  .portrait {
    min-height: 0;
    aspect-ratio: 1.08 / 1;
    border-radius: 20px;
    background-position: 46% 32%;
  }

  .hero-content {
    padding: 0 10px 8px;
  }

  .hero h1 {
    font-size: clamp(2.9rem, 14vw, 3.8rem);
  }

  .sidebar {
    grid-template-rows: auto;
  }

  .intro br,
  .experience br {
    display: none;
  }

  .education-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .education article+article {
    padding: 18px 0 0;
    border-top: 1px solid #aaa5b0;
    border-left: 0;
  }

  .footer-card {
    gap: 20px;
    padding: 24px 18px;
  }
}

@media print {
  @page {
    size: A4 portrait;
    margin: 8mm;
  }

  :global(.site-header),
  .resume-header {
    display: none !important;
  }

  :global(.app-container),
  :global(.main-content),
  .resume-page,
  .resume-content {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    overflow: visible !important;
    background: #fff;
    box-shadow: none;
  }

  .resume {
    width: 161.3%;
    padding: 0;
    zoom: 0.62;
  }

  .hero {
    grid-template-columns: 340px 1fr;
    gap: 48px;
    margin-bottom: 20px;
  }

  .portrait {
    min-height: 330px;
  }

  .hero h1 {
    font-size: clamp(3.5rem, 6vw, 4.9rem);
  }

  .job-title {
    margin-bottom: 22px;
    font-size: clamp(1.55rem, 3vw, 2.15rem);
  }

  .intro {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .resume-grid {
    grid-template-columns: 340px 1fr;
    gap: 28px;
  }

  .strength-grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 34px;
  }

  .strength {
    min-height: 0;
    border-bottom: 1px solid rgba(91, 78, 135, 0.18);
  }

  .strength:nth-child(n + 3) {
    border-bottom: 0;
  }

  .education-grid {
    grid-template-columns: 1fr 1.25fr;
    gap: 0;
  }

  .education article+article {
    padding: 0 0 0 50px;
    border-top: 0;
    border-left: 1px solid #8b8790;
  }

  .footer-card {
    grid-template-columns: 1.2fr 1fr;
    gap: 0;
  }

  .sidebar,
  .main-content {
    gap: 18px;
  }

  .card {
    padding: 25px 28px;
  }

  .card h2 {
    margin-bottom: 16px;
    font-size: 1.78rem;
  }

  .card h3 {
    margin-bottom: 8px;
    font-size: 1.55rem;
  }

  .about p {
    margin-bottom: 26px;
    font-size: 1rem;
    line-height: 1.85;
  }

  .contact-list li {
    margin: 8px 0;
    font-size: 0.97rem;
  }

  .skill-list li {
    min-height: 66px;
    padding: 5px 0 15px;
    font-size: 1.2rem;
  }

  .skill-list span {
    font-size: 0.96rem;
  }

  .experience article {
    padding: 13px 0 18px;
  }

  .experience p,
  .strength p,
  .education p {
    font-size: 1.2rem;
    line-height: 1.75;
  }

  .strength {
    padding-block: 24px;
  }

  .strength h3 {
    font-size: 1.6rem;
  }

  .education {
    padding-top: 20px;
  }

  .footer-card {
    margin-top: 18px;
    padding: 14px 42px;
  }

  .footer-card>p {
    font-size: 1.6rem;
  }

  .qr-placeholder {
    width: 76px;
  }

  .card,
  .footer-card,
  .hero {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .card,
  .footer-card,
  .portrait {
    box-shadow: none;
  }
}
</style>
