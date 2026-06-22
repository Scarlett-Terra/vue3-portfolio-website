import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/vue3-portfolio-website/',
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'github-pages-spa-fallback',
      closeBundle() {
        // 💡 確保打包完後，會自動在 docs 資料夾裡複製一份 404.html，防止重整時空白
        try {
          copyFileSync(resolve('docs/index.html'), resolve('docs/404.html'))
        } catch (e) {
          console.log('404 複製暫時跳過')
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs', // 👈 沒錯，聽你原本 AI 的，保持 docs 不動！
  },
}))
