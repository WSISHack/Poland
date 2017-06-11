import Vue from 'vue'

import VueRouter from 'vue-router'

import store from './store/store'

import Login from './components/login/Login'
import Home from './components/home/Home'
import SearchPage from './components/search/SearchPage'
import Product from './components/product/Product'
import Profile from './components/user/Profile'
import Suggested from './components/suggested/Suggested'
import MedInfo from './components/medinfo/MedInfo';
import City from './components/city/City';
import {calculatePatchSize} from 'quagga';

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
        path: '/scanner', 
        component: SearchPage, 
        meta: { requiresAuth: true },
        name: 'scanner'
    },
    { 
        path: '/product', 
        component: Product, 
        meta: { requiresAuth: true },
        name: 'product'
    },
    { 
        path: '/profile', 
        component: Profile, 
        meta: { requiresAuth: true },
        name: 'profile'
    },
    { 
        path: '/suggested', 
        component: Suggested, 
        meta: { requiresAuth: true },
        name: 'suggested'
    },
    {
        path: '/medinfo',
        component: MedInfo,
        meta: { requiresAuth: true },
        name: 'medinfo'
    },
    {
        path: '/city',
        component: City,
        meta: { requiresAuth: true },
        name: 'city'
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
