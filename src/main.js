import Vue from 'vue';

import mavonEditor from 'mavon-editor';
import App from '@/App.vue';
import router from '@/router.js';
import 'mavon-editor/dist/css/index.css';


Vue.use(mavonEditor);


// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
