import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router.js';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});