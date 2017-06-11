import Vue from 'vue'

import VueRouter from 'vue-router'

import store from './store/store'

import Login from './components/login/Login'

Vue.use(VueRouter)

const routes = [
    { 
        path: '', 
        redirect: '/login'
    },
    { 
        path: '/login', 
        component: Login,
        meta: { fullscreen: true },
        name: 'login_page'
    }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.fullscreen)) {
        store.commit('setAllBarsVisible', false);
    }
    else {
        store.commit('setAllBarsVisible', true);
    }

    store.dispatch('user/isLoggedIn').then(result => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!result) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    });
})

export default router;
