# Scarlett Yu | Vue 3 Frontend Portfolio

以 Vue 3 建置的個人履歷與前端作品集網站，集中展示 Vue、JavaScript、響應式切版及視覺設計作品。專案著重於清楚的資訊架構、可維護的資料管理方式，以及桌機與行動裝置皆易於瀏覽的使用體驗。

## Live Demo

- [作品集首頁](https://scarlett-terra.github.io/vue3-portfolio-website/)
- [作品列表](https://scarlett-terra.github.io/vue3-portfolio-website/#/projects)
- [線上履歷](https://scarlett-terra.github.io/vue3-portfolio-website/#/resume)
- [GitHub Repository](https://github.com/Scarlett-Terra/vue3-portfolio-website)

## Project Overview

這個專案不只是作品連結集合，也是一個可持續擴充的作品展示平台。作品內容集中定義於資料模組，列表卡片、詳細頁與篩選結果由同一份資料產生，新增作品時不需要重複修改多個頁面。

### Core Features

- 作品列表、關鍵字搜尋與技術分類篩選
- 依作品 ID 產生獨立詳細頁面
- 支援單一作品的多組 Demo 連結
- Photoshop 與 Illustrator 圖片藝廊及燈箱預覽
- 技能頁面可連動至對應技術的作品篩選結果
- 履歷頁面、PDF 下載與作品集／GitHub QR Code
- RWD 響應式版面，支援桌機、平板與手機瀏覽
- GitHub Pages 靜態部署與 SPA fallback 設定

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Vue 3, Composition API, Single-File Components |
| Routing | Vue Router, Hash History |
| Build Tool | Vite |
| Styling | CSS, Scoped CSS, Responsive Web Design |
| Deployment | GitHub Pages |
| Version Control | Git, GitHub |

## Engineering Decisions

### Data-driven project management

作品名稱、說明、技術標籤、GitHub、Demo 與圖片資料統一放在 `src/data/projects.js`，由元件依資料動態渲染。這樣能降低重複內容，也讓後續新增或修改作品更容易維護。

### Reusable components

將導覽列、作品卡片、技能卡片與 SVG 圖示拆分為獨立元件，讓頁面專注於資料組合與版面結構，並維持一致的互動和視覺樣式。

### GitHub Pages compatibility

正式環境使用 Vite `base` 設定處理子路徑資源，並採用 Hash Router，避免重新整理作品詳細頁時發生 404。建置完成後同步產生 `docs/404.html`，提高 GitHub Pages 上的路由可靠度。

## Project Structure

```text
src/
|-- assets/        # Global styles
|-- components/    # Reusable UI components
|-- data/          # Project and icon data
|-- router/        # Route configuration
|-- views/         # Home, projects, skills and resume pages
|-- App.vue
`-- main.js

public/
|-- images/        # Portfolio and profile images
|-- qr/            # Portfolio and GitHub QR codes
`-- resume.pdf
```

## Getting Started

### Requirements

- Node.js `20.19+` or `22.12+`
- npm

### Installation

```bash
git clone https://github.com/Scarlett-Terra/vue3-portfolio-website.git
cd vue3-portfolio-website
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

正式建置輸出至 `docs/`，GitHub Pages 由 `main` 分支的 `/docs` 目錄部署。

## Future Improvements

- 補充作品實作過程、問題分析與改善紀錄
- 加入元件與主要使用流程測試
- 持續改善無障礙操作與 Lighthouse 指標
- 將作品縮圖逐步替換為實際專案畫面

## Contact

- GitHub: [Scarlett-Terra](https://github.com/Scarlett-Terra)
- Portfolio: [Scarlett Yu Frontend Portfolio](https://scarlett-terra.github.io/vue3-portfolio-website/)

---

This portfolio is continuously updated as I learn, build and refine my frontend development skills.
