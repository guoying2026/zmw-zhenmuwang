//问答mock开始
import Mock from "mockjs";
import {regUrl} from "../utils/httpReplace.js";

Mock.mock(regUrl("https://api.zhenmuwang.com/Pc/CompanyComment/questionList"),'get',function(option){
    return Mock.mock({
        'total_count': '@natural(10,200)',
        'data|5-10': [
            {
                id: '@increment(1)',//问题主键
                user_id: '@natural(20000,30000)',//本人问题id
                name: "@cname(5)",//本人昵称
                question: '@cword(10,150)',//问题
                created_time: '@datetime()',//问题生成时间
                ask_count: '@natural(100,300)',//回答数量
                'image':[
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
                ],
                //回答列表
                'ask_list|0-20':[
                    {
                        id: '@increment(1)',//回答id
                        user_id: '@natural(20000,30000)',//回答人的id
                        name: "@cname(5)",//回答人昵称
                        created_time: '@datetime()',//回答时间
                        ask: '@cword(10,130)',//回答内容
                        useful_count: '@natural(200,400)',//有用数量
                        useless_count: '@natural(200,400)',//没用数量
                        'is_useful|0-2': 2,//登录人觉得有用，0是默认没做选择，1是有用，2是没用
                        'useful_id': '@natural(1,30000)',//登录人觉得有用id
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
                ],
            }
        ]
    })
})
//问答mock结束
