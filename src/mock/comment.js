import Mock from 'mockjs'
import { regUrl } from '../utils/httpReplace.js'

// 1. 准备一个包含 20 个元素的数组
const myArray = [
    "我买了一批橡木的木方，用于制作一些家具，但发现有些木方的纹理不太一致，甚至有些角度有裂痕。真的很失望，这让我对这家商家的质量产生了怀疑。",
    "最近购买了一些刨花木墩，用于厨房里的柜子。我注意到有几个刨花木墩边缘破碎，完全无法使用。这让我觉得商家质量控制不严格。",
    "购买了一批单板，用于装饰墙面，但是发现有些单板颜色不均匀，严重影响了装饰效果。我对这家商家的产品真的很失望。",
    "买了一些胶合板用于搭建家具，但发现胶合板的表面有划痕，让整个家具看起来旧旧的。这让我觉得非常不值得。",
    "我订购了一些多层板用于室内装修，但是在安装过程中发现有些多层板的角落有掉漆的现象，这让我质疑这家商家的产品质量。",
    "购买了一些建筑模板用于工地，但是发现模板有些弯曲变形，影响了施工效果。我对这家商家的产品真的很失望。",
    "我最近买了一批木制线条，用于装修新房。然而，线条的表面不光滑，有很多凹凸不平的地方，这让我感到很失望。",
    "我从这家商家购买了一些紫檀木方，但发现有些木方的颜色不均匀，甚至有些部分有裂痕。这让我感到很气愤，觉得这家商家的质量控制有问题。",
    "我买了一些黑胡桃木胶合板，用于制作桌子。然而，胶合板的质量实在令人失望，表面有划痕，边缘有磨损。这让我感到非常沮丧。",
    "我购买了一批柚木木皮，用于贴在家具上。然而，我发现有几张木皮的颜色和纹理与其他的完全不同，这让我觉得这家商家的产品质量实在是太糟糕了。",
    "我购买了一批杉木木制线条，用于装修新房。线条表面光滑，没有凹凸不平的地方，真的很满意。",
    "从这家商家购买了一些柚木木方，木方颜色均匀，纹理清晰，为我们的家具增添了高贵的气质。",
    "我买了一些枫木胶合板，用于制作桌子。胶合板质量优秀，表面无划痕，边缘完美无瑕。我非常满意这次购买。",
    "我购买了一批紫檀木皮，用于贴在家具上。木皮颜色和纹理都与其他产品相符，这让我觉得这家商家的产品质量非常好。",
    "购买了一些橡木刨花木墩，用于厨房里的柜子。刨花木墩非常坚固，边缘平整，让我的厨房柜子更美观实用。",
    "我订购了一些多层板用于室内装修，多层板角落都很完美，没有掉漆现象，这让我非常满意这家商家的产品质量。",
    "我从这家商家购买了一些黑胡桃木方，木方的颜色均匀，纹理清晰，让我对这家商家的质量产生了信心。",
    "购买了一批单板，用于装饰墙面，单板颜色均匀，质感非常好，为我的墙面增添了一份高雅的氛围。",
    "我购买了一些建筑模板用于工地，模板非常平整，没有弯曲变形，给我们的施工带来了很大的便利。",
    "我最近买了一批木制装饰板，用于家里的装修。这些装饰板非常有特色，设计独特，让我的家更具个性和品味。"
];


// 2. 创建一个用于存放已使用元素索引的数组
const usedIndices = [];

// 3. 编写一个生成不重复索引的函数
function getUniqueIndex() {
    let index = Math.floor(Math.random() * 20);
    while (usedIndices.includes(index)) {
        index = Math.floor(Math.random() * 20);
    }
    usedIndices.push(index);
    return index;
}

//评论mock开始
Mock.mock(regUrl("https://api.zhenmuwang.com/Pc/CompanyComment/companyComment"),'get',function(option){
    console.log('执行到我了');
    //@表示占位符， z占位符引用的是Mock.Random中的方法
    return Mock.mock({
        'total_count': 20,
        'company_comment_count': 20,
        'company_comment_reply_count': 0,
        'all_like_count': 0,
        'data|20': [
            {
                id: '@increment(1)',      // 评论id
                // 'id|+1': 0,            // 这也是在模拟一个自增长的 Id 值
                user_id: '@natural(20000, 30000)',//本人评论usr_id
                name: "@cname(5)",//本人评论昵称
                comment: () => myArray[getUniqueIndex()],     // 本人评论内容
                created_time: "@datetime()", //评论生成时间
                is_show: 1,
                like_count: "@natural(1,10)", //总点赞条数
                reply_count: 0, //总回复条数
                liked_id: '@natural(1,30000)',//登录人点赞id
                is_liked: '@boolean()',//登录人是否点赞
                //评论图片
                'image': [
                    // "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    // 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    // 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    // 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    // 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    // 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    // 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    // 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
                ],
                //评论下的回复内容
                'comment_reply|0-20':[
                    // {
                    //     id: '@increment(1)',//回复id
                    //     user_id: '@natural(20000,30000)',//回复者本人id
                    //     name: "@cname(5)",//回复者昵称
                    //     comment: '@cword(10,130)',//回复者评论内容
                    //     created_time: "@datetime()",//回复时间
                    //     is_show: 1,
                    //     like_count: '@natural(100,300)',//回复总点赞次数
                    //     reply_to_user_id: '@natural(20000,30000)',//a回复b，b的user_id
                    //     reply_to_name: "@cname(5)",//a回复b，b的用户昵称
                    //     liked_id: '@natural(1,30000)',//登录人点赞id
                    //     is_liked: '@boolean()',//登录人是否点赞
                    //     'image':[
                    //         "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    //         'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    //         'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    //         'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    //         'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    //         'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    //         'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    //         'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
                    //     ]
                    // }
                ]
            }
        ]
    })
})

Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/likedComment","post",function(option){
    return Mock.mock({
        liked_id: '@natural(1,300)',
        is_liked: '@boolean()',
    });
})
// Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/dislikedComment","post",function(option){
//     return Mock.mock({
//         liked_id: '@natural(1,300)',
//         is_liked: '@boolean()',
//     });
// })
// Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/likedCommentReply","post",function(option){
//     return Mock.mock({
//         liked_id: '@natural(1,300)',
//         is_liked: '@boolean()',
//     });
// })
// Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/dislikedCommentReply","post",function(option){
//     return Mock.mock({
//         liked_id: '@natural(1,300)',
//         is_liked: '@boolean()',
//     });
// })
// Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/publishComment","post",function(option){
//     return Mock.mock({
//         id: '@natural(1,300)',
//         status: '@boolean()',
//         created_time: '@datetime()'
//     })
// })
//评论mock结束


