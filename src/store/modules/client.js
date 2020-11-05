import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    blogsList: [], // 博客列表
    searchAlert: false, //  是否显示搜索结果提示
    listLoading: false, // 博客列表加载中
  },
  mutations: {
    // 更新博客列表
    GET_BLOGSLIST(state, blogsList) {
      state.blogsList = blogsList;
    },
    // 搜索结果显示alert
    SHOW_ALERT(state, flag) {
      state.searchAlert = flag;
    },
    // 加载更多
    ADD_BLOGSLIST(state, added) {
      state.blogsList.push(...added);
    },
    // 按日期排序
    RESORT_BYDATE(state) {
      state.blogsList.sort((firstEl, secondEl) => {
        const firstSize = firstEl.date.split('/');
        const secondSize = secondEl.date.split('/');
        let index = 0;

        let compare = (a, b) => {
          // 递归比较日期大小
          const $a = a * 1;
          const $b = b * 1;

          if ($a > $b) {
            return -1;
          }
          if ($a < $b) {
            return 1;
          }

          if (index === 2) {
            // 到达数组最大索引
            return 0;
          }

          index += 1;
          return compare(firstSize[index], secondSize[index]);
        };

        const returnValue = compare(firstSize[0], secondSize[0]);
        compare = null; // 释放闭包内存

        return returnValue;
      });
    },
    // 按阅读量排序
    RESORT_VIEW(state) {
      state.blogsList.sort((firstEl, secondEl) => {
        const $firstPView = firstEl.pViewCount * 1;
        const $secondPView = secondEl.pViewCount * 1;
        return $secondPView - $firstPView;
      });
    },
  },
  actions: {
    // 异步请求博客列表
    getBlogsList({ commit, state }, {
      pageNum, pageSize, category, type = 'init',
    }) {
      state.searchAlert = false;
      state.listLoading = true;

      return new Promise((resolve) => {
        api.category.getBlogsInfo(pageNum, pageSize, category)
          .then((res) => {
            state.listLoading = false;

            if (type === 'init') {
              commit('GET_BLOGSLIST', res.data.blogsList);
            } else {
              commit('ADD_BLOGSLIST', res.data.blogsList);
            }
            resolve(res);
          });
      });
    },
    // resort
    resortBlogsList({ commit }, { type = 'date' }) {
      if (type === 'date') {
        commit('RESORT_BYDATE');
      } else {
        commit('RESORT_VIEW');
      }
    },
    // 查找博客
    findBlog({ commit, state }, { title, date, tags }) {
      state.listLoading = true;
      return new Promise((resolve) => {
        api.blogsList.findBlogs({
          title,
          date,
          tags,
        })
          .then((res) => {
            state.searchAlert = true;
            state.listLoading = false;
            commit('GET_BLOGSLIST', res.data.blogsList);
            resolve(res);
          });
      });
    },
  },
};
