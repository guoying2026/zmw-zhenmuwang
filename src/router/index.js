import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
        },
        {
          path: '/',
          name: 'home',
          component: '../views/HomeView.vue',
          meta: {
            title:"木材商信用-真木网",
            description: "真木网是一家木材行业的电商平台，其包含木材竞拍、木材团购、木材质押、求购木材、真木金融。帮你搜索全国低价原木板材买卖资源，发布原木求购资源，打破木材传统线下交易模式，实现木材线上交易新生态圈，致力于打造成木材行业一站式服务电商平台。",
            keywords: "真木网,原木,板材,木材网,木材交易,求购木材,发布木材信息,佣金奖励,木材商家,木材知识,木材买卖网,木材批发网",
          }
        },
        {
          path: '/about',
          name: 'about',
          component: '../views/AboutView.vue',
          meta: {
            title:"木材商信用-真木网",
            description: "真木网是一家木材行业的电商平台，其包含木材竞拍、木材团购、木材质押、求购木材、真木金融。帮你搜索全国低价原木板材买卖资源，发布原木求购资源，打破木材传统线下交易模式，实现木材线上交易新生态圈，致力于打造成木材行业一站式服务电商平台。",
            keywords: "真木网,原木,板材,木材网,木材交易,求购木材,发布木材信息,佣金奖励,木材商家,木材知识,木材买卖网,木材批发网",
          }
        },
    ]
})

export default router
