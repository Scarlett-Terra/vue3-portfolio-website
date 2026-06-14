import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// 🌟 修正：改成從本地的 node_modules 引入套件與樣式，不再走 CDN 網址
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
