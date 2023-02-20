import { defineStore } from 'pinia'

//第一个参数是这个store唯一id,使用它来将store连接到devtools
//只有在setup中调用useUserStore时才会创建
export const useUserStore = defineStore('userStore', {
    //state被定义为返回初始状态的函数
    state: () => {
        return {
            token: '',
            userInfo: null,
        }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })

    //计算
    getters: {},

    //方法
    actions: {
        //这里放登录的异步请求逻辑
    },

})
