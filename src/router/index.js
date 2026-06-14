import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
// 🌟 修正 2：統一修正引入名稱，去掉 View 前面的 s，跟實體檔案（ProjectDetailView.vue）100% 同步
import ProjectDetailView from '../views/ProjectDetailView.vue'
import SkillsView from '../views/SkillsView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetailView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    }
  ],
})

export default router
