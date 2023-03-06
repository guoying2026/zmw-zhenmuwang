import Mock from 'mockjs'

Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/companyComment",'get',function(option){
    console.log('执行到我了');
    //@表示占位符， z占位符引用的是Mock.Random中的方法
    return Mock.mock({
        'total_count': '@natural(10,200)',
        'data|5-10': [
            {
                id: '@increment(1)',      // 自增的Id值
                // 'id|+1': 0,            // 这也是在模拟一个自增长的 Id 值
                user_id: '@natural(20000, 30000)',//随机生成usr_id
                comment: '@cword(10, 150)',     // 随机生成中文字符串
                created_time: "datetime()",
                is_show: 1,
                like_count: '@natural(100,300)',
                reply_count: '@natural(100,300)',
                name: '@chineseName()',//评论昵称
                //Random.image('125x125', '#00405d', '#FFF', 'Mock.js')
                'image｜0-5': [{
                    company_comment_id: '@id',
                    image: "@image('125x125', '#00405d', '#FFF', 'Mock.js')"
                }],
                'comment_reply|0-20':[
                    {
                        reply_id: '@increment(1)',
                        user_id: '@natural(20000,30000)',
                        comment: '@cword(10,130)',
                        created_time: "datetime()",
                        is_show: 1,
                        like_count: '@natural(100,300)',
                        name: '@chineseName()',//评论昵称
                        'image|0-5':[{
                            company_comment_id: '@id',
                            company_comment_reply_id: '@reply_id',
                            image: "@image('125x125', '#00405d', '#FFF', 'Mock.js')"
                        }]
                    }
                ]
            }
        ]
    })
})
