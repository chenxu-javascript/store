import HomePage from './pages/home.vue';
import NotFoundPage from './pages/not-found.vue';

import MyCenter from './pages/mycenter.vue';
import Storage from './pages/storage.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/mycenter/',
    component: MyCenter
  },
  {
    path: '/storage/',
    component: Storage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  }
];
