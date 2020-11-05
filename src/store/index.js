import Vue from 'vue';
import Vuex from 'vuex';

// import api from '@/api';

const modulesFile = require.context('./modules', false, /\.js$/);
const files = {};

modulesFile.keys()
  .forEach((key) => {
    const fileName = key.replace(/(\.js|\.\/)/g, '');
    files[fileName] = modulesFile(key).default;
  });

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...files,
  },
});
