//问答mock开始
import Mock from "mockjs";
import {regUrl} from "../utils/httpReplace.js";

const questionAnswerPairs = [
    {question: "你们的木制线条是用什么树木制作的?", answer: "我们的木制线条主要使用松树和橡树制作。"},
    {question: "我可以定制木方的大小吗?", answer: "当然，我们接受定制订单，可以根据您的需求制作不同大小的木方。"},
    {question: "你们的木制品都经过防腐处理了吗?", answer: "是的，所有的木制品在出厂前都经过了严格的防腐处理。"},
    {question: "你们提供哪些种类的刨花木墩？", answer: "我们提供各种材质和尺寸的刨花木墩，包括松木、硬木等。"},
    {question: "你们的单板材质是什么？", answer: "我们的单板主要采用松木和柚木，质地均匀，耐用性强。"},
    {question: "你们的木皮主要是什么树种制作的？", answer: "我们的木皮主要以桦木、橡木和胡桃木为主，质地均匀，色泽自然。"},
    {question: "胶合板的厚度可以选择吗？", answer: "可以的，我们提供多种厚度的胶合板供您选择。"},
    {question: "多层板是由几层木板制成的？", answer: "多层板的层数不固定，常见的有3层、5层、7层等，根据您的需要我们可以提供不同层数的多层板。"},
    {question: "你们的建筑模版是否经过防水处理？", answer: "是的，我们的建筑模版在制作过程中都会做防水处理，以确保在使用过程中不会出现问题。"},
    {question: "你们的装饰板有哪些种类？", answer: "我们提供各种颜色、纹理和材质的装饰板，包括实木装饰板、石塑装饰板等。"},
    {question: "你们的木制线条有何优势？", answer: "我们的木制线条采用高品质木材，经过精密加工，表面光滑，耐用性强。"},
    {question: "木方的长度可以定制吗？", answer: "当然，我们可以根据您的需要定制不同长度的木方。"}
];

const data = questionAnswerPairs.map((pair, index) => {
    return {
        id: Mock.Random.integer(1, 1000),//问题主键
        user_id: Mock.Random.integer(1, 1000),//本人问题id
        name: "guoguo",//本人昵称
        question: pair.question,
        created_time: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),//问题生成时间
        answer_count: Mock.Random.integer(100, 300),//回答数量
        'image':[],
        answer_list: [
            {
                id: Mock.Random.integer(1, 1000),//回答id
                user_id: Mock.Random.integer(1, 1000),//回答人的id
                name: "guoguo",//回答人昵称
                created_time: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),//回答时间
                answer: pair.answer,
                useful_count: Mock.Random.integer(1, 1000),//有用数量
                useless_count: Mock.Random.integer(1, 1000),//没用数量
                'is_useful': 2,//登录人觉得有用，0是默认没做选择，1是有用，2是没用
                'useful_id': Mock.Random.integer(1, 1000),//登录人觉得有用id
                'image':[]
            }
        ]
    };
});

Mock.mock(regUrl("https://api.zhenmuwang.com/Pc/CompanyComment/questionList"),'get',{
    data,
    status: 200,
    message: 'success'
})
// Mock.mock("https://api.zhenmuwang.com/Pc/CompanyComment/publishQuestion","post",function(option){
//     return Mock.mock({
//         id: '@natural(1,300)',
//         status: '@boolean()',
//         created_time: '@datetime()'
//     })
// })
//问答mock结束
