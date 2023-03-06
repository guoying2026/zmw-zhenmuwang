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
                created_time: "@datetime()",
                is_show: 1,
                like_count: "@natural(100,300)",
                reply_count: "@natural(100,300)",
                name: "@cname(5)",//评论昵称
                //Random.image('125x125', '#00405d', '#FFF', 'Mock.js')
                'image|0-5': [
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
                ],
                'comment_reply|0-20':[
                    {
                        reply_id: '@increment(1)',
                        user_id: '@natural(20000,30000)',
                        comment: '@cword(10,130)',
                        created_time: "@datetime()",
                        is_show: 1,
                        like_count: '@natural(100,300)',
                        name: "@cname(5)",//评论昵称
                        reply_to_name: "@cname(5)",//回复给谁的昵称
                        'image|0-5':[
                            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
                        ]
                    }
                ]
            }
        ]
    })
})
