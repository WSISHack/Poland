import Vue from 'vue'

import VueRouter from 'vue-router'

import store from './store/store'

import Login from './components/login/Login'
import Home from './components/home/Home'
import OpenFoodApi from './components/OpenFoodApi/OpenFoodApi'

Vue.use(VueRouter)

const routes = [
    { 
        path: '', 
        redirect: '/home'
    },
    { 
        path: '/login', 
        component: Login,
        meta: { fullscreen: true },
        name: 'login_page'
    },
    { 
        path: '/home', 
        component: Home, 
        meta: { requiresAuth: true },
        name: 'home'
    },
    { 
        path: '/openfood', 
        component: OpenFoodApi,
        name: 'openfood'
    },
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
