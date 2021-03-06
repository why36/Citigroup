import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component:() => import('../views/Login')
    },
    {
        path: '/homepage',
        name: 'HomePage',
        component: () => import('../views/HomePage')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/advanced',
        name:'Advanced',
        component: ()=>import('../views/Advanced')
    },
    {
        path: '/normal',
        name:'Normal',
        component: ()=>import('../views/Normal')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
