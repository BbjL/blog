import NProgress from 'nprogress';
import router from '../router';
import 'nprogress/nprogress.css';

NProgress.configure({
  easing: 'ease',
  speed: 500,
  width: 50,
  showSpinner: false,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
