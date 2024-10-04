import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';  // 引入 Login 組件
import Main from './views/Main.vue';      // 引入 Main 組件

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
];

const router = new Router({
  mode: 'history', // 使用 HTML5 的歷史模式
  routes
});

export default router;
