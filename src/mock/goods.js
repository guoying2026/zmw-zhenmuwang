import Mock from 'mockjs'
import { regUrl } from '../utils/httpReplace.js'

Mock.mock(regUrl("https://api.zhenmuwang.com/Pc/Goods/goodsList"),'get',function(option){
    return Mock.mock({
        'data|5-10':[{
            id: '@increment(1)',
            goods_price: '@natural(100,300)',
            goods_title: '@cname(5)',
            area: '@cname(20)',
            mainurl:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        }]
    })
})
