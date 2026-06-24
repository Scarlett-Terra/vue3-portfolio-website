const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const projects = [
  {
    id: 'qingshui-military-village',
    order: 1, // 挪到第一個作品
    title: '清水眷村文化園區 官方導覽網站',
    type: 'Vue 3 Web Application (5人團隊合作)',
    year: '2026-June',
    description: '基於 Vue 3 開發的文化園區數位導覽系統，整合文史典藏即時搜尋、互動式交通指南與清晰的常見問題集。',

    // 外層卡片展示：只放你真正做完的三大強項
    features: ['關鍵字搜尋引擎', '交通分流指南', 'FAQ下拉折疊面板'],

    // 內層詳細頁展示：對應你做的三個區塊詳細技術描述
    detailedFeatures: [
      {
        title: '關鍵字與標籤搜尋引擎',
        desc: '規劃園區歷史文物與照片的資料庫結構，實作複合式條件即時過濾。使用者輸入關鍵字或點選分類時，網頁不需重新整理即可在一秒內動態渲染正確的搜尋結果。'
      },
      {
        title: '多方向互動交通指南',
        desc: '針對開車、大眾運輸等不同出遊族群設計按鈕精準分流。實作點擊按鈕自動平滑滾動定位至對應路途關鍵字的功能，優化網頁長文字的閱讀體驗。'
      },
      {
        title: 'FAQ 常見問題折疊面板',
        desc: '獨立開發下拉式折疊面板組件，初始狀態隱藏繁雜內文，點擊題目後答案才流暢向下滑動展開，打造清爽明瞭的閱讀介面。'
      }
    ],

    // 你的個人開發亮點
    highlights: [
      {
        title: '獨立通用組件開發（Independent Components）',
        desc: '將交通指南與 FAQ 的展開機制獨立封裝為功能模組，降低元件間的耦合度，提升程式碼的複用性與未來的維護彈性。'
      },
      {
        title: '跨領域專案企劃與落實',
        desc: '專案前期深度參與團隊的內容架構梳理，負責將抽象的企劃思維與斷點規劃，完美轉譯為前端 RWD 響應式網頁程式碼。'
      }
    ],

    detailDescription: '在此 5 人團隊專案中，兼任前端開發與企劃。前期跨足網頁架構與內容梳理，中後期獨立負責「關鍵字搜尋引擎、交通分流指南、FAQ折疊面板」三大核心功能模組之開發。運用 Vue 3 Composition API 管理資料狀態，將獨立功能封裝為複用性組件，並全面落實跨裝置 RWD 彈性佈局。',
    image: publicAsset('images/projects/qs-culture.jpg'), // 💡 老師備註：有眷村新圖再換掉
    technologies: ['Vue.js', 'Vue Router', 'JavaScript', 'CSS', 'HTML', 'RWD'],
    github: 'https://github.com/Digi-Pack/NCHU-11503-QingshuiArtvillage/tree/feat/visitor-map',
    demo: 'https://nchu-11503-qingshui-artvillage.dev-hub.io/?a=1',
    hasDetailPage: true,
    demoLinks: [
      { label: '開啟清水眷村', url: 'https://nchu-11503-qingshui-artvillage.dev-hub.io/?a=1' }
    ],
  }
  ,
  {
    id: 'city-tour-guide',
    order: 2,
    title: 'Vue 3 城市深度旅遊導覽',
    type: 'Vue 3 Application',
    year: '2026-June',
    description: '依照旅遊區域與城市瀏覽景點、美食及圖像內容的 Vue 3 多頁導覽網站。',
    features: ['城市分類導覽', '景點與美食篩選', '景點詳細頁'],
    detailedFeatures: [
      {
        title: '城市與區域分類',
        desc: '依照不同城市與旅遊區域整理景點內容，讓使用者能快速切換目的地並瀏覽對應資訊。'
      },
      {
        title: '景點與美食導覽',
        desc: '將景點、美食與圖像內容整合在同一個導覽流程，降低使用者查找旅遊資訊的切換成本。'
      },
      {
        title: '多頁路由瀏覽',
        desc: '使用 Vue Router 建立列表與詳細頁，讓作品具備清楚的頁面層級與可分享的瀏覽路徑。'
      },
      {
        title: '響應式版面',
        desc: '依照桌機與手機瀏覽情境調整卡片、圖片與文字排列，維持旅遊資訊的閱讀舒適度。'
      }
    ],
    highlights: [
      {
        title: '資料結構整理',
        desc: '把城市、景點與美食資料拆成可維護的內容結構，讓畫面渲染與後續擴充更直覺。'
      },
      {
        title: '導覽體驗設計',
        desc: '以旅遊使用者的瀏覽順序規劃頁面，讓使用者能從城市總覽一路進入景點細節。'
      },
      {
        title: 'Vue 路由整合',
        desc: '練習將 Vue 3 元件與 Router 結合，完成較接近正式網站的多頁應用流程。'
      }
    ],
    detailDescription: '依照旅遊區域與城市瀏覽景點、美食及圖像內容的 Vue 3 多頁導覽網站。',
    image: publicAsset('images/projects/city-tour.jpg'),
    technologies: ['Vue.js', 'Vue Router', 'JavaScript', 'HTML', 'CSS', 'RWD'],
    github: 'https://github.com/Scarlett-Terra/city-tour-guide',
    demo: 'https://scarlett-terra.github.io/city-tour-guide/',
    hasDetailPage: true,
    demoLinks: [
      { label: '開啟城市旅遊導覽', url: 'https://scarlett-terra.github.io/city-tour-guide/' },
    ],
  },
  {
    id: 'cart-app',
    order: 3,
    title: '床墊傢俱購物車',
    type: 'Frontend Practice',
    year: '2025-Sep',
    description: '包含前台商品瀏覽、購物車互動與後台訂單管理的 JavaScript 專案。',
    features: ['前台購物車', '訂單管理', '前後台介面'],
    detailedFeatures: [
      {
        title: '商品列表',
        desc: '顯示商品資訊與分類內容，讓使用者能快速瀏覽床墊與家具商品並進行選購。'
      },
      {
        title: '加入購物車',
        desc: '支援商品加入購物車、數量調整與價格即時計算，建立完整的前台購物互動。'
      },
      {
        title: 'API 串接',
        desc: '透過 Axios 串接商品與訂單資料，練習前端與遠端資料之間的讀取、更新與狀態同步。'
      },
      {
        title: '訂單管理',
        desc: '建立後台訂單列表與管理流程，讓管理者能查看訂單資料並維護處理狀態。'
      }
    ],
    highlights: [
      {
        title: '購物車狀態同步',
        desc: '數量變動時即時計算小計與總金額，讓畫面和購物車資料保持一致。'
      },
      {
        title: 'API 串接優化',
        desc: '整理 Axios 請求流程，將商品、購物車與訂單資料的操作拆成清楚步驟。'
      },
      {
        title: 'LocalStorage 儲存',
        desc: '保留購物車狀態，降低重新整理或切換頁面時資料遺失的風險。'
      }
    ],
    detailDescription:
      '床墊傢俱購物車專案包含前台商品列表、加入購物車、數量與價格計算，以及後台訂單資料管理，練習使用 JavaScript 整理互動流程與資料狀態。',
    image: publicAsset('images/projects/Furniture-Shopping-Cart.jpg'),
    technologies: ['JavaScript', 'CSS', 'HTML', 'Axios', '串接 API'],
    github: 'https://github.com/Scarlett-Terra/JS_Project_20251122',
    demo: 'https://scarlett-terra.github.io/JS_Project_20251122/apiEight.html',
    hasDetailPage: true,
    demoLinks: [
      { label: '前台購物車', url: 'https://scarlett-terra.github.io/JS_Project_20251122/apiEight.html' },
      { label: '後台管理', url: 'https://scarlett-terra.github.io/JS_Project_20251122/admin.html' },
      { label: 'TodoList', url: 'https://scarlett-terra.github.io/JS_Project_20251122/toDoList.html' },
    ],
  },
  {
    id: 'vue-favorites-tracker',
    order: 4,
    title: 'Vue 3 我的收藏祕密花園',
    type: 'Vue 3 Practice',
    year: '2026-June',
    description: '以 Vue 3 CDN 製作收藏紀錄工具，整合新增、分類、統計與列表管理功能。',
    features: ['收藏紀錄', '分類統計', '列表管理'],
    detailedFeatures: [
      {
        title: '收藏資料新增',
        desc: '透過表單新增收藏項目，練習使用 Vue 3 狀態管理將輸入內容即時寫入列表。'
      },
      {
        title: '分類統計',
        desc: '依照收藏類型計算資料數量，讓使用者能快速理解目前收藏內容的分布。'
      },
      {
        title: '列表管理',
        desc: '將收藏項目整理成清楚的列表，支援瀏覽、檢視與後續擴充管理操作。'
      },
      {
        title: '即時畫面更新',
        desc: '使用 ref、computed 與 watch 讓輸入、統計與列表畫面保持同步更新。'
      }
    ],
    highlights: [
      {
        title: 'Vue 3 狀態練習',
        desc: '以 Composition API 管理收藏資料，熟悉資料變動後畫面自動更新的流程。'
      },
      {
        title: 'Computed 統計邏輯',
        desc: '將分類統計抽成 computed 計算，讓畫面能依資料內容即時反映結果。'
      },
      {
        title: '小型工具完整流程',
        desc: '從輸入、儲存、分類到列表呈現，完成一個具備實際使用情境的小工具。'
      }
    ],
    detailDescription: '使用 Vue 3 的 ref、computed 與 watch 管理收藏資料，並即時呈現分類統計與列表內容。',
    image: publicAsset('images/projects/secret-garden.jpg'),
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/16_Vue3-CDN-expense-tracker-memoirs',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/16_Vue3-CDN-expense-tracker-memoirs/',
    hasDetailPage: true,
  },
  {
    id: 'course-shopping-cart',
    order: 5,
    title: '墨香書咖啡網站',
    type: 'JavaScript Practice',
    year: '2026-May',
    description: '包含會員介面、商品操作、數量調整與結帳流程練習。',
    features: ['會員介面', '購物車操作', '結帳流程'],
    detailDescription: '整合會員登入與註冊、商品加入購物車、數量調整、地址修改及結帳等互動流程。',
    image: publicAsset('images/projects/coffee-web.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/14_JS-shoppingCart',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/14_JS-shoppingCart/shoppingCart.html',
    hasDetailPage: true,
  },
  {
    id: 'taiwan-weather-checker',
    order: 6,
    title: '台灣縣市氣象查詢站',
    type: 'JavaScript Practice',
    year: '2026-May',
    description: '建立台灣縣市條件查詢介面並呈現氣象資料。',
    features: ['縣市查詢', '資料呈現', '條件篩選'],
    detailDescription: '透過台灣縣市選擇介面練習資料查找、條件篩選與氣象結果的動態呈現。',
    image: publicAsset('images/projects/taiwan-city.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS', '串接 API'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/13_JS-taiwan-weather-checker',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/13_JS-taiwan-weather-checker/weater-check.html',
    hasDetailPage: true,
  },
  {
    id: 'dormitory-system',
    order: 7,
    title: '宿舍管理系統',
    type: 'JavaScript Practice',
    year: '2026-May',
    description: '以 JavaScript 處理宿舍名單資料與管理操作。',
    features: ['名單管理', '資料處理', '互動介面'],
    detailDescription: '透過宿舍名單情境練習陣列資料整理、使用者操作與畫面內容同步更新。',
    image: publicAsset('images/projects/dormitory-system.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/12_JS-Dormitory-system',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/12_JS-Dormitory-system/Dormitory-List-System.html',
    hasDetailPage: true,
  },
  {
    id: 'travel-ticket-manager',
    order: 8,
    title: '旅遊套票篩選與管理練習',
    type: 'JavaScript Practice',
    year: '2025-Sep',
    description: '使用 JavaScript 實作旅遊套票新增、地區篩選、資料統計與卡片動態渲染。',
    features: ['地區篩選', '套票新增', '資料動態渲染'],
    detailDescription:
      '旅遊套票篩選與管理練習包含套票資料新增、地區條件篩選、搜尋筆數統計與卡片動態呈現，藉此熟悉陣列資料處理、DOM 操作與表單互動。',
    image: publicAsset('images/projects/tourist-Selection.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS', 'Axios'],
    github: 'https://github.com/Scarlett-Terra/JS_Project_20251122',
    demo: 'https://scarlett-terra.github.io/JS_Project_20251122/',
    hasDetailPage: true,
    demoLinks: [
      { label: '旅遊套票 Demo', url: 'https://scarlett-terra.github.io/JS_Project_20251122/' },
    ],
  },
  {
    id: 'blog-card',
    order: 9,
    title: 'Blog部落格卡片',
    type: 'Frontend Practice',
    year: '2025-July',
    description: '以 HTML 與 CSS 練習資訊卡片的排版、視覺層級與響應式呈現。',
    features: ['卡片排版', '視覺層級', 'RWD 響應式設計'],
    detailDescription:
      '部落格卡片專案著重於文章縮圖、分類、標題與作者資訊的視覺層級，並練習在不同螢幕尺寸下維持清楚且一致的閱讀體驗。',
    image: publicAsset('images/projects/BlogCart.jpg'),
    technologies: ['HTML', 'CSS', 'RWD'],
    github: 'https://github.com/Scarlett-Terra/Blog-Card',
    demo: 'https://scarlett-terra.github.io/Blog-Card/',
    hasDetailPage: true,
  },
  {
    id: 'microsoft-web',
    order: 10,
    title: 'Microsoft 切版網頁',
    type: 'Web Layout Practice',
    year: '2026-April',
    description: '練習 Microsoft 官方網站版面結構、響應式配置與導覽介面切版。',
    features: ['版面切版', '導覽設計', 'RWD 響應式設計'],
    detailDescription:
      '以 HTML、CSS 與 JavaScript 重現 Microsoft 網站的資訊層級、卡片排列與多裝置版面。',
    image: publicAsset('images/projects/Ms-Flex.png'),
    technologies: ['HTML', 'CSS', 'JavaScript', 'RWD'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/01_microsoft-rwd-showcase',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/01_microsoft-rwd-showcase/microsoft-2-RWD.html',
    hasDetailPage: true,
  },
  {
    id: 'course-flex-calc-layout',
    order: 10.1,
    title: 'Flex 排版練習',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '使用 Flexbox 與按鍵配置完成計算機介面排版。',
    features: ['Flexbox 排版', '計算機介面', 'CSS 切版'],
    detailDescription: '透過計算機按鍵與容器排列練習 Flexbox 主軸、交錯軸、間距與對齊方式，建立規則清楚的基礎切版能力。',
    image: publicAsset('images/projects/Flex-2.jpg'),
    technologies: ['HTML', 'CSS', 'Flex'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/02_layout-practice-calc',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/02_layout-practice-calc/final-calc.html',
    hasDetailPage: true,
  },
  {
    id: 'course-position-layout',
    order: 10.2,
    title: 'Position 定位練習',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '熟悉 absolute、relative 與版面元素定位關係。',
    features: ['Position 定位', '版面配置', 'CSS 基礎'],
    detailDescription: '透過定位練習理解 relative 與 absolute 的參照關係，掌握元素疊放、位置控制與區塊安排方式。',
    image: publicAsset('images/projects/position.jpg'),
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/03_layout-practice-position',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/03_layout-practice-position/position01.html',
    hasDetailPage: true,
  },
  {
    id: 'uiux-design-wireframes',
    order: 10.3,
    title: 'UI/UX 設計圖稿展示',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '整理美感分析、海報構圖、視覺稿、Flex 版面與 SCSS Loading 練習。',
    features: ['UI/UX 分析', '海報構圖', 'Flex 展示'],
    detailDescription: '此作品整理 UI/UX 設計線稿、美感分析、海報概念與 Flex 版面展示，讓設計思考與前端切版練習能集中呈現。',
    image: publicAsset('images/projects/UI-UX.jpg'),
    technologies: ['HTML', 'CSS', 'UI/UX', 'Flex'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/uiux-design-wireframes',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/uiux-design-wireframes/index.html',
    demoLabel: '開啟完整 Demo 頁面',
    hasDetailPage: true,
  },
  {
    id: 'facebook-layout',
    order: 11,
    title: 'Facebook 基礎仿切',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '練習社群網站常見欄位、內容區塊與基礎排版。',
    features: ['社群介面', '欄位配置', '切版練習'],
    detailDescription: '參考 Facebook 常見介面結構，練習導覽、內容欄位與資訊區塊的 HTML、CSS 排版。',
    image: publicAsset('images/projects/FB-Flex.jpg'),
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/04_fb-basic-practice',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/04_fb-basic-practice/fb-basic-all.html',
    hasDetailPage: true,
  },
  {
    id: 'vh-hero-page',
    order: 12,
    title: 'VH 視覺首頁',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '運用視窗高度單位製作滿版 Hero 與首頁構圖。',
    features: ['滿版視覺', 'VH 單位', '首頁構圖'],
    detailDescription: '使用 vh 與響應式尺寸建立滿版首頁視覺，練習主標題、背景與內容在不同畫面中的比例。',
    image: publicAsset('images/projects/VH-Parallax-Scrolling.jpg'),
    technologies: ['HTML', 'CSS', 'RWD', 'Parallax'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/05_vh-hero-section',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/05_vh-hero-section/visual-homepage.html',
    hasDetailPage: true,
  },
  {
    id: 'parallax-text-shadow',
    order: 13,
    title: '視差與文字陰影',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '實作視差捲動、背景層次與文字陰影效果。',
    features: ['視差捲動', '文字陰影', '背景層次'],
    detailDescription: '透過背景固定、捲動視差與 text-shadow，練習增加網頁景深與文字辨識度的視覺效果。',
    image: publicAsset('images/projects/Parallax-and-text-shadow.jpg'),
    technologies: ['HTML', 'CSS', 'Animation', 'Parallax'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/06_vh-parallax-text-shadow',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/06_vh-parallax-text-shadow/parallax%2Blink.html',
    hasDetailPage: true,
  },
  {
    id: 'flex-layout-practice',
    order: 14,
    title: 'Flex 響應式排版練習',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '使用 Flexbox 完成導覽列、圖片區塊與響應式版面配置。',
    features: ['Flexbox 排版', '導覽列配置', '響應式設計'],
    detailDescription: '以 Flexbox 組合導覽列、選單與內容圖片區塊，練習桌面及不同畫面寬度下的版面配置。',
    image: publicAsset('images/projects/Flex-RWD.jpg'),
    technologies: ['HTML', 'CSS', 'Flex', 'RWD'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/blob/main/07_hamburger-label-menu/flex-practice.html',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/07_hamburger-label-menu/flex-practice.html',
    hasDetailPage: true,
  },
  {
    id: 'hamburger-menu',
    order: 15,
    title: '漢堡選單互動',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '使用 label、checkbox 與 Flex 製作可展開的導覽選單。',
    features: ['漢堡選單', 'Flex 排版', 'CSS 互動'],
    detailDescription: '不依賴 JavaScript，使用 checkbox 與 label 建立漢堡選單，並以 Flexbox 完成導覽排列。',
    image: publicAsset('images/projects/Hamburger-menu.png'),
    technologies: ['HTML', 'CSS', 'Flex'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/blob/main/07_hamburger-label-menu/hamburger-label%2Bmenu.html',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/07_hamburger-label-menu/hamburger-label%2Bmenu.html',
    hasDetailPage: true,
    demoLinks: [
      { label: '漢堡選單互動', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/07_hamburger-label-menu/hamburger-label%2Bmenu.html' },
      { label: 'Flex 響應式排版練習', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/07_hamburger-label-menu/flex-practice.html' },
    ],
  },
  {
    id: 'css-animation-effects',
    order: 16,
    title: 'CSS動畫小作業集',
    type: 'UI / CSS Practice',
    year: '2026-April',
    description: '整理 keyframes、hover、路徑動畫與 SCSS Loading 等 8 個動畫小練習。',
    features: ['Keyframes', '路徑動畫', 'SCSS Loading'],
    detailDescription: '此作品集收錄第 08 題 CSS 動畫練習，包含顏色變化球、小精靈追球跑、旋轉動畫、繞方形路徑、地球跑步 GIF、月亮繞地球、Box Shadow 與 SCSS Loading。透過多個小題目練習動畫時間軸、位移、旋轉、陰影與互動效果。',
    image: publicAsset('images/projects/css-change-color.jpg'),
    technologies: ['HTML', 'CSS', 'Animation'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/08_css-animation-effects',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/index.html',
    hasDetailPage: true,
    demoLinks: [
      { label: '作品集入口', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/index.html' },
      { label: '顏色變化球', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/Color-changing-ball.html' },
      { label: '小精靈追球跑', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/Poke-Ball.html' },
      { label: '旋轉動畫練習', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/cat-spinning.html' },
      { label: '繞方形路徑動畫', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/cat-around-the-square.html' },
      { label: '地球跑步 GIF 動畫', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/gif-people-running-on-Earth.html' },
      { label: '月亮繞地球動畫', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/moon-revolves-around-the-earth.html' },
      { label: 'Box Shadow 練習', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/box-shadow.html' },
      { label: 'SCSS Loading 動畫', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/08_css-animation-effects/scss-loading-%E5%B0%88%E6%A1%88/loading-1.html' },
    ],
  },
  {
    id: 'javascript-homework',
    order: 17,
    title: 'JS前端實戰作業練習',
    type: 'JavaScript Practice',
    year: '2026-May',
    description: '整合計算機、色彩遊戲、成績判斷、BMI 與猜拳練習。',
    features: ['條件判斷', '事件互動', '基礎運算'],
    detailDescription: '收錄第一階段 JavaScript 練習，涵蓋輸入處理、條件判斷、數值運算與 DOM 事件互動。',
    image: publicAsset('images/projects/js-practice.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/09_JS-FirstDay-Homework',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/09_JS-FirstDay-Homework/',
    hasDetailPage: true,
  },
  {
    id: 'military-check-system',
    order: 18,
    title: '軍事役別判斷系統',
    type: 'JavaScript Practice',
    year: '2026-May',
    description: '依照輸入條件執行判斷並呈現對應結果。',
    features: ['流程控制', '表單輸入', '結果呈現'],
    detailDescription: '運用條件判斷與表單資料，根據使用者輸入計算並顯示相對應的役別結果。',
    image: publicAsset('images/projects/military-system.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/10_JS-military-check-system',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/10_JS-military-check-system/military.html',
    hasDetailPage: true,
  },
  {
    id: 'memorandum-app',
    order: 19,
    title: 'Memo小型筆記備忘錄',
    type: 'JavaScript Practice',
    year: '2026-May',
    description: '練習表單輸入、資料新增與畫面內容更新。',
    features: ['資料新增', 'DOM 更新', '表單操作'],
    detailDescription: '建立簡易備忘錄，將表單內容轉換為畫面資料，練習事件監聽與 DOM 動態更新。',
    image: publicAsset('images/projects/memo.jpg'),
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/11_JS-memorandum',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/11_JS-memorandum/memo.html',
    hasDetailPage: true,
  },

  {
    id: 'vue-member-card',
    order: 20,
    title: 'Vue 3 會員資料小卡產生器',
    type: 'Vue 3 Practice',
    year: '2026-June',
    description: '使用 Vue 3 CDN 建立會員資料表單，並即時產生對應的會員級別小卡。',
    features: ['會員資料輸入', '即時畫面更新', '會員級別呈現'],
    detailDescription: '透過 Vue 3 Composition API 管理會員姓名與級別資料，將表單輸入即時同步到會員資料卡。',
    image: publicAsset('images/projects/memberCard.jpg'),
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/15_Vue3-CDN-memberCard',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/15_Vue3-CDN-memberCard/',
    hasDetailPage: true,
  },
  {
    id: 'vue-calculator-series',
    order: 21,
    title: 'Vue 3 計算機系列',
    type: 'Vue 3 Practice',
    year: '2026-June',
    description: '收錄簡易計算機與鍵盤操作計算機，練習 Vue 3 狀態管理及事件互動。',
    features: ['基礎四則運算', '鍵盤操作', '即時結果顯示'],
    detailDescription: '透過兩種計算機介面練習 Vue 3 CDN、ref 狀態管理、按鈕事件與鍵盤輸入流程。',
    image: publicAsset('images/projects/calculator.jpg'),
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Scarlett-Terra/Chung-Hsing-University-Front-end-Technology-Course/tree/main/17_Vue3-CDN-Calculator-Series-Pack',
    demo: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/17_Vue3-CDN-Calculator-Series-Pack/simple-calc.html',
    hasDetailPage: true,
    demoLinks: [
      { label: '簡易計算機', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/17_Vue3-CDN-Calculator-Series-Pack/simple-calc.html' },
      { label: '鍵盤計算機', url: 'https://scarlett-terra.github.io/Chung-Hsing-University-Front-end-Technology-Course/17_Vue3-CDN-Calculator-Series-Pack/keyboard-calc.html' },
    ],
  },
  {
    id: 'figma-prototype-assignment',
    order: 22,
    title: 'Figma 互動原型設計結合 Prototype',
    type: 'UI/UX Prototype',
    year: '2026-June',
    description: '以 Figma 製作介面流程與互動展示，透過 Prototype 分享連結呈現可點擊的 Demo 成品。',
    features: ['互動原型', '介面流程', 'Demo展示'],
    detailedFeatures: [
      {
        title: 'Figma 原型展示',
        desc: '使用 Figma Prototype 建立可點擊的頁面流程，讓觀看者能直接體驗介面切換與操作動線。'
      },
      {
        title: 'UI 版面規劃',
        desc: '整理畫面資訊層級、區塊排列與視覺節奏，讓作品能清楚呈現設計思考與使用流程。'
      },
      {
        title: '分享連結 Demo',
        desc: '透過 Figma 分享網址展示最終成果，方便從作品集快速開啟並檢視互動成品。'
      }
    ],
    highlights: [
      {
        title: 'Prototype 流程串接',
        desc: '將不同畫面透過互動節點串起來，呈現接近實際產品操作的瀏覽體驗。'
      },
      {
        title: '設計稿作品集整合',
        desc: '把 Figma 作業整理成作品卡與詳細頁，讓設計能力能和前端作品一起被看見。'
      }
    ],
    detailDescription:
      '此作品為 Figma 互動原型設計作業，重點放在 UI 畫面整理、使用流程規劃與 Prototype 點擊展示。作品集內可直接開啟 Figma Demo，檢視完整互動成品。',
    image: publicAsset('images/projects/figma-prototype.svg'),
    technologies: ['Figma', 'UI/UX', 'Prototype', 'Wireframe'],
    demo: 'https://www.figma.com/proto/qobHZUGGf6czJSyrB000Gv/Untitled?node-id=230-3453&t=bpeJpnzCjXc4bsGK-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=230%3A2459&show-proto-sidebar=1',
    hasDetailPage: true,
    demoLinks: [
      {
        label: '開啟 Figma Demo',
        url: 'https://www.figma.com/proto/qobHZUGGf6czJSyrB000Gv/Untitled?node-id=230-3453&t=bpeJpnzCjXc4bsGK-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=230%3A2459&show-proto-sidebar=1'
      },
    ],
  },
  {
    id: 'ps-gallery',
    order: 23,
    title: 'Photoshop 視覺設計合集',
    type: 'Visual Design',
    year: '2026-May',
    description: '平面設計與影像合成作品，包含產品設計、人像修圖與視覺排版。',
    features: ['影像合成', '色彩調整', '視覺排版'],
    detailDescription:
      '此合集收錄平面設計與影像合成作品，透過實際演練掌握遮色片、圖層混合模式及色調調整等核心技術。',
    image: publicAsset('images/projects/photoshop-design.jpg'),
    technologies: ['Photoshop', 'UI/UX', '視覺設計'],
    isGallery: true,
    images: [
      { id: 'ps-09', thumbnail: publicAsset('images/photoshop/ps-09-purple-blue-seascape-simulation.png'), full: publicAsset('images/photoshop/ps-09-purple-blue-seascape-simulation.png'), alt: '紫藍色海景調色模擬' },
      { id: 'ps-08', thumbnail: publicAsset('images/photoshop/ps-08-newlywed-outdoor-photoshoot-color-grading.jpg'), full: publicAsset('images/photoshop/ps-08-newlywed-outdoor-photoshoot-color-grading.jpg'), alt: '新人戶外寫真調色' },
      { id: 'ps-07', thumbnail: publicAsset('images/photoshop/ps-07-bag-synthesis.png'), full: publicAsset('images/photoshop/ps-07-bag-synthesis.png'), alt: '包包產品影像合成' },
      { id: 'ps-06', thumbnail: publicAsset('images/photoshop/ps-06-creative-design-of-car-background.jpg'), full: publicAsset('images/photoshop/ps-06-creative-design-of-car-background.jpg'), alt: '汽車背景創意合成' },
      { id: 'ps-05', thumbnail: publicAsset('images/photoshop/ps-05-portrait-blemish-removal+makeup.jpg'), full: publicAsset('images/photoshop/ps-05-portrait-blemish-removal+makeup.jpg'), alt: '人像修瑕與妝容調整' },
      { id: 'ps-04', thumbnail: publicAsset('images/photoshop/ps-04-soccer-Ball.jpg'), full: publicAsset('images/photoshop/ps-04-soccer-Ball.jpg'), alt: '足球主題影像設計' },
      { id: 'ps-03', thumbnail: publicAsset('images/photoshop/ps-03-red-apple-turns-green.jpg'), full: publicAsset('images/photoshop/ps-03-red-apple-turns-green.jpg'), alt: '紅蘋果轉綠色練習' },
      { id: 'ps-02', thumbnail: publicAsset('images/photoshop/ps-02-slimming-face-skin-tone-correction.jpg'), full: publicAsset('images/photoshop/ps-02-slimming-face-skin-tone-correction.jpg'), alt: '瘦臉與膚色校正' },
      { id: 'ps-01', thumbnail: publicAsset('images/photoshop/ps-01-christmas-ball-coloring.jpg'), full: publicAsset('images/photoshop/ps-01-christmas-ball-coloring.jpg'), alt: '聖誕球上色練習' },
    ],
  },
  {
    id: 'ai-gallery',
    order: 24,
    title: 'Illustrator 向量圖、AI 生成圖合集',
    type: 'Illustration',
    year: '2026-May',
    description: '向量線條、圖示繪製與 AI 生成圖練習。',
    features: ['向量繪圖', '角色設計', 'AI 圖像編輯'],
    detailDescription: '本相簿專注於向量線條、圖示繪製、AI 線上製圖與圖像編輯訓練。',
    image: publicAsset('images/projects/illustrator-album.jpg'),
    technologies: ['Illustrator', '向量插畫', 'AI生成圖'],
    isGallery: true,
    images: [
      { id: 'ai-18', thumbnail: publicAsset('images/illustrator/ai-18-bleed-cut-mark.jpg'), full: publicAsset('images/illustrator/ai-18-bleed-cut-mark.jpg'), alt: '出血線與裁切標記海報練習' },
      { id: 'ai-17', thumbnail: publicAsset('images/illustrator/ai-17-concept-and-atmosphere-matching.jpg'), full: publicAsset('images/illustrator/ai-17-concept-and-atmosphere-matching.jpg'), alt: '概念與氛圍搭配海報練習' },
      { id: 'ai-16', thumbnail: publicAsset('images/illustrator/ai-16-joyful-and-warm-poster.jpg'), full: publicAsset('images/illustrator/ai-16-joyful-and-warm-poster.jpg'), alt: '歡樂溫暖風格海報設計' },
      { id: 'ai-15', thumbnail: publicAsset('images/illustrator/ai-15-mysterious-technology-poster.jpg'), full: publicAsset('images/illustrator/ai-15-mysterious-technology-poster.jpg'), alt: '神秘科技感海報設計' },
      { id: 'ai-14', thumbnail: publicAsset('images/illustrator/ai-14-illusion-poster-colors-and-atmosphere.jpg'), full: publicAsset('images/illustrator/ai-14-illusion-poster-colors-and-atmosphere.jpg'), alt: 'Illusion 海報色彩與氛圍練習' },
      { id: 'ai-13', thumbnail: publicAsset('images/illustrator/ai-13-comfyui-prettyGirl.png'), full: publicAsset('images/illustrator/ai-13-comfyui-prettyGirl.png'), alt: 'ComfyUI AI 女孩生成圖' },
      { id: 'ai-12', thumbnail: publicAsset('images/illustrator/ai-12-chatgpt-man.png'), full: publicAsset('images/illustrator/ai-12-chatgpt-man.png'), alt: 'ChatGPT AI 男孩生成圖' },
      { id: 'ai-11', thumbnail: publicAsset('images/illustrator/ai-11-gemini-man.png'), full: publicAsset('images/illustrator/ai-11-gemini-man.png'), alt: 'Gemini AI 男孩生成圖' },
      { id: 'ai-10', thumbnail: publicAsset('images/illustrator/ai-10-chatgpt-girl.png'), full: publicAsset('images/illustrator/ai-10-chatgpt-girl.png'), alt: 'ChatGPT AI 女孩生成圖' },
      { id: 'ai-09', thumbnail: publicAsset('images/illustrator/ai-09-gemini-AI-Q-girl.png'), full: publicAsset('images/illustrator/ai-09-gemini-AI-Q-girl.png'), alt: 'Gemini AI Q 版女孩生成圖' },
      { id: 'ai-08', thumbnail: publicAsset('images/illustrator/ai-08-pen-drawing.jpg'), full: publicAsset('images/illustrator/ai-08-pen-drawing.jpg'), alt: '鋼筆工具向量繪圖' },
      { id: 'ai-07', thumbnail: publicAsset('images/illustrator/ai-07-creative-design-of-high-rise-buildings.jpg'), full: publicAsset('images/illustrator/ai-07-creative-design-of-high-rise-buildings.jpg'), alt: '高樓建築創意設計' },
      { id: 'ai-03', thumbnail: publicAsset('images/illustrator/ai-03-moon-and-starry-sky.jpg'), full: publicAsset('images/illustrator/ai-03-moon-and-starry-sky.jpg'), alt: '月亮與星空插畫' },
    ],
  },
]
