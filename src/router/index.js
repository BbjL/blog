import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/blog',
    hidden: true,
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/layout/index'),
    redirect: '/blog/articles/all',
    meta: {
      title: '博客',
      id: 'articles',
      icon: 'icon-pen',
    },
    children: [
      {
        path: 'articles/:category',
        name: 'articles',
        component: () => import('@/views/articles/index'),
      },
    ],
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/layout/index'),
    hidden: true,
    redirect: '/detail/all',
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/detail/detail'),
      },
    ],
  },
  {
    path: '/guestbook',
    name: 'guestbook',
    component: () => import('@/layout/index'),
    redirect: '/guestbook/all',
    meta: {
      title: '留言',
      id: 'message',
      icon: 'icon-message_1',
    },
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/guestbook/index'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layout/index'),
    redirect: '/about/profile',
    meta: {
      title: '关于',
      id: 'about',
      icon: 'icon-user-copy',
    },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/about/index'),
      },
    ],
  },
  {
    // 会匹配所有路径
    path: '*',
    name: '404',
    hidden: true,
    redirect: './404/all',
    component: () => import('@/layout/index'),
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/404/404'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  next();
});

export default router;
