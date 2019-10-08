import Vue from 'vue';

import mavonEditor from 'mavon-editor';
import App from '@/App.vue';
import router from '@/router.js';
import 'mavon-editor/dist/css/index.css';
import progress from '@/components/progress/Progress.vue';
import Upload from '@/components/upload/index.js';
import msgBox from '@/components/msgbox/index.js';
import '@/plugins/toast/toast.css';
import Toast from '@/plugins/toast/toast.js';
import 'es6';

Vue.use(progress);
Vue.use(Upload);
Vue.use(msgBox);
Vue.use(Toast);

Vue.use(mavonEditor);

Vue.prototype.$Progress = progress;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
