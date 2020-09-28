import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true,
  },
  {
    path: '/home',
    name: 'home',
    hidden: true,
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页', id: 'home', lightColor: '#bfa', darkColor: '#bbb', icon: '',
    },
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/articles/index'),
    meta: {
      title: '博客', id: 'articles', lightColor: '#c734ff', darkColor: '#bbb', icon: 'pen-nib',
    },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message/index'),
    meta: {
      title: '留言', id: 'message', lightColor: '#ffeb4b', darkColor: '#bbb', icon: 'comment-dots',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index'),
    meta: {
      title: '关于', id: 'about', lightColor: '#37dcff', darkColor: '#bbb', icon: 'user',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
