import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
        },
    ]
})

export default router
