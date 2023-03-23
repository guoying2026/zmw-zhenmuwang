import Mock from 'mockjs'
import { regUrl } from '../utils/httpReplace.js'

Mock.mock(regUrl("https://api.zhenmuwang.com/Pc/Goods/goodsList"),'get',function(option){
    return Mock.mock({
        'data|5-10':[{
            id: '@increment(1)',
            price: '@natural(100,300)',
            name: '@cname(5)',
            area: '@cname(20)',
        }]
    })
})
