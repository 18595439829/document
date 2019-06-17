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
  ],
});
