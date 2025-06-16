import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import AddVampiro from '../views/AddVampiro.vue';
import EditVampiro from '../views/EditVampiro.vue';
import { auth } from '../firebase';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/add-vampiro',
    component: AddVampiro,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-vampiro/:id',
    component: EditVampiro,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = auth.currentUser;
  if (requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
