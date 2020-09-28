import Fragment from 'vue-fragment';
import './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faCommentDots, faUser, faPenNib, faSun, faMoon, faAlignJustify, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';

import 'normalize.css';

library.add(faUserSecret, faCommentDots, faUser, faPenNib, faSun, faMoon, faAlignJustify, faSearch);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
