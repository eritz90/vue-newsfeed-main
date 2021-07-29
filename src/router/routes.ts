import { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/enums/route-names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },

  {
    path: '/home',
    name: RouteName.Home,
    component: () => import('../views/home.vue'),
  },
  {
    path: '/post/:id/edit',
    name: RouteName.EditPost,
    component: () => import('../views/edit-post.vue'),
    props: true,
  },
  {
    path: '/post/:id',
    name: RouteName.ViewPost,
    component: () => import('../views/view-post.vue'),
    props: true,
  },
  {
    path: '/feed',
    name: RouteName.Feedpage,
    component: () => import('../views/feedpage.vue'),
    props: true,
  },
];

export default routes;
