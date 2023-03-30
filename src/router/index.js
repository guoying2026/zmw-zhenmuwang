import { createRouter, createWebHistory } from 'vue-router'

//createRouter是用来新建路由实例
const router = createRouter({
    //使用路由模式
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            name: 'list',
            alias: '/list',
            //以.vue作为后缀的文件，是vue单文件组件的写法
            //关于路由优化
            //参考这个链接https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97
            ///* webpackChunkName: "List" */这种特殊注释语法是webpack工具打包用到的，
            // 但我们的项目是用vite构建的，所以之后会在vite.config.js按照上面那个链接进行配置
            component: () => import(/* webpackChunkName: "List" */ '../views/List.vue'),
            meta: {
                title:"木材商信用-真木网",
                description: "真木网是一家木材行业的电商平台，其包含木材竞拍、木材团购、木材质押、求购木材、真木金融。帮你搜索全国低价原木板材买卖资源，发布原木求购资源，打破木材传统线下交易模式，实现木材线上交易新生态圈，致力于打造成木材行业一站式服务电商平台。",
                keywords: "真木网,原木,板材,木材网,木材交易,求购木材,发布木材信息,佣金奖励,木材商家,木材知识,木材买卖网,木材批发网",
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue'),
        },
        {
            path: '/blackDetail',
            name: 'blackDetail',
            component: () => import(/* webpackChunkName: "BlackDetail" */ '../views/BlackDetail.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
        },
        {
            path: '/goodsDetail',
            name: 'goods_detail',
            component: () => import(/* webpackChunkName: "GoodsDetail" */ '../views/GoodsDetail.vue')
        },
        {
            path: '/forum',
            name: 'forum',
            component: () => import(/* webpackChunkName: "Forum" */ '../views/Forum.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "SearchResult" */ '../views/SearchResult.vue')
        },
    ]
})

export default router
