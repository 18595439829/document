import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Test from '@/docs/test.md';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: () => import('@/docs/markdown.md'),
    },
    {
      path: '/nginx',
      name: 'nginx',
      component: () => import('@/docs/nginx.md'),
    },
    {
      path: '/fileDownload',
      name: 'fileDownload',
      component: () => import('@/docs/vue/file.md'),
    },
    {
      path: '/live2d',
      name: 'live2d',
      component: () => import('@/docs/vue/live2d.md'),
    },
  ],
});
