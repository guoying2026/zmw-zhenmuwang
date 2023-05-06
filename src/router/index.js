import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'

//createRouter是用来新建路由实例
const router = createRouter({
    //使用路由模式
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                left: 0,
                top: 0,
            }
        }
    },
    routes: [
        {
            path: '/',
            name: 'list',
            alias: '/list',
            component: List,
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('../views/Detail.vue'),
        },
        {
            path: '/blackDetail',
            name: 'blackDetail',
            component: () => import('../views/BlackDetail.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue'),
        },
        {
            path: '/goodsDetail',
            name: 'goods_detail',
            component: () => import('../views/GoodsDetail.vue')
        },
        {
            path: '/forum',
            name: 'forum',
            component: () => import('../views/Forum.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../views/SearchResult.vue')
        },
        {
            path: '/personalCenter',
            name: 'personalCenter',
            component: () => import('../views/personalCenter.vue')
        },
        {
            path: '/example',
            name: 'example',
            component: () => import('../views/Example.vue')
        },
    ]
})

export default router
