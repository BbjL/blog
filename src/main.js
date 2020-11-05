import Fragment from 'vue-fragment';
import './registerServiceWorker';
import 'normalize.css';
import './assets/icon/icon';
import './plugins/antDesign'; // ant design 组件引入
import './plugins/toastEditor';
import './plugins/nprogress'; // 进度条

import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

if (process.env.VUE_APP_MOCK === 'true' && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('../mock/index');
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
