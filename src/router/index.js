import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '@/views/WelcomeView.vue';
import ContactView from '@/views/ContactView.vue';
import ProjectView from '@/views/ProjectView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import CheckMessage from '@/views/CheckMessage.vue';
import ErrorMessage from '@/views/ErrorMessage.vue';
import PDFViewer from '@/views/PDFViewer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: "/project/:title/",
      name: "project",
      component: ProjectView,
      props: true 
    },
    {
      path: "/contact/confirmation",
      name: "confirmation",
      component: CheckMessage,
    },
    {
      path: "/contact/error",
      name: "error",
      component: ErrorMessage,
    },
    {
      path: "/:catchAll(.*)",
      redirect: { name: 'welcome' }
    }
  ]
});


export default router;
