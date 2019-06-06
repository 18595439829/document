import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router.js';
import iView from 'iview';
// import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});