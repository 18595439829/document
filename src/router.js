import Vue from 'vue';
import Router from 'vue-router';
import helloWorld from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: helloWorld,
    },
  ],
});
