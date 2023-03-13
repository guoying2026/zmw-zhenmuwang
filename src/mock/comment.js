import Mock from 'mockjs'
import { regUrl } from '../utils/httpReplace.js'
//评论mock开始
Mock.mock(regUrl("https://api.zhenmuwang.com/Pc/CompanyComment/companyComment"),'get',function(option){
    console.log('执行到我了');
    //@表示占位符， z占位符引用的是Mock.Random中的方法
    return Mock.mock({
        'total_count': '@natural(10,200)',
        'data|5-10': [
            {
                id: '@increment(1)',      // 评论id
                // 'id|+1': 0,            // 这也是在模拟一个自增长的 Id 值
                user_id: '@natural(20000, 30000)',//本人评论usr_id
                name: "@cname(5)",//本人评论昵称
                comment: '@cword(10, 150)',     // 本人评论内容
                created_time: "@datetime()", //评论生成时间
                is_show: 1,
                like_count: "@natural(100,300)", //总点赞条数
                reply_count: "@natural(100,300)", //总回复条数
                liked_id: '@natural(1,30000)',//登录人点赞id
                is_liked: '@boolean()',//登录人是否点赞
                //评论图片
                'image': [
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
                ],
                //评论下的回复内容
                'comment_reply|0-20':[
                    {
                        id: '@increment(1)',//回复id
                        user_id: '@natural(20000,30000)',//回复者本人id
                        name: "@cname(5)",//回复者昵称
                        comment: '@cword(10,130)',//回复者评论内容
                        created_time: "@datetime()",//回复时间
                        is_show: 1,
                        like_count: '@natural(100,300)',//回复总点赞次数
                        reply_to_user_id: '@natural(20000,30000)',//a回复b，b的user_id
                        reply_to_name: "@cname(5)",//a回复b，b的用户昵称
                        liked_id: '@natural(1,30000)',//登录人点赞id
                        is_liked: '@boolean()',//登录人是否点赞
                        'image':[
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

Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/likedComment","get",function(option){
    return Mock.mock({
        liked_id: '@natural(1,300)',
        is_liked: '@boolean()',
    });
})
Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/dislikedComment","post",function(option){
    return Mock.mock({
        liked_id: '@natural(1,300)',
        is_liked: '@boolean()',
    });
})
Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/likedCommentReply","post",function(option){
    return Mock.mock({
        liked_id: '@natural(1,300)',
        is_liked: '@boolean()',
    });
})
Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/dislikedCommentReply","post",function(option){
    return Mock.mock({
        liked_id: '@natural(1,300)',
        is_liked: '@boolean()',
    });
})
Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/publishComment","post",function(option){
    return Mock.mock({
        id: '@natural(1,300)',
        status: '@boolean()',
        created_time: '@datetime()'
    })
})
//评论mock结束

