import * as constants from './constants'
import axios from 'axios'
export const homeheader=(data)=>({
    type:constants.HOME_HEADER,
    data:[
        {id:'1',val:'全部',},
        {id:'2',val:'前端',},
        {id:'3',val:'后端',},
        {id:'4',val:'移动开发',},
        {id:'5',val:'区块链',},
        {id:'6',val:'通用',},
    ]
}) 
export const sortleft=(data)=>({
    type:constants.SORT_LEFT,
    data:[
        {id:'1',val:'热门',},
        {id:'2',val:'最新',},
        {id:'3',val:'评论',},
        {id:'4',val:'本周最热',},
        {id:'5',val:'本月最热',},
        {id:'6',val:'历史最热',},
    ]
}) 
 
export const showtopiclist=(data)=>({
    type:constants.SHOW_TOPIC_LIST,
    data:[
        {id:'1',val:'简书电影',pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'2',val:'故事',pic:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'3',val:'读书',pic:'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'4',val:'手绘',pic:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'5',val:'旅行●在路上',pic:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'6',val:'@IT●互联网',pic:'//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'7',val:'摄影',pic:'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
    ]
})
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:data
})
export const getshowlist=(id)=>{
    return (dispatch) => {
        var result=[
            {id:'1',val:'前端性能优化原理与实践',con:'毫秒必争！深入理解前端性能原理，将晦涩的知识转化为可爱的生产力，建立你自己的优化技能索引目录'},
            {id:'2',val:'Swift 数字详解',con:'从理论到应用，全面介绍 Swift 4 中面向协议的数字系统'},
            {id:'3',val:'Netty 入门与实战：仿写微信 IM 即时通讯系统',con:'基于 Netty 框架实现 IM 核心系统，带你深入学习 Netty 网络编程核心知识'},
            {id:'4',val:'微信小游戏开发入门：从 0 到 1 实现井字棋游戏',con:'构建自己的第一个微信小游戏，让你的社交和游戏创意变为现实'},
            {id:'5',val:'基于 hapi 的 Node.js 小程序后端开发实践指南',con:'从基础到实战，从开发环境搭建到开发、调试、上线，打通小程序开发全流程'},
            {id:'6',val:'Redis 深度历险：核心原理与应用实践',con:'基于 React 的企业管理系统开发经验，带你学习如何抽象复杂业务逻辑，帮助团队实现效能提升'},
            {id:'7',val:'基于 Go 语言构建企业级的 RESTful API 服务',con:'Go 服务器开发大型实战，带你一步步构建 API 开发中的各个功能点，最终完成一个企业级的 API 服务器'},
            {id:'8',val:'深入理解 RPC : 基于 Python 自建分布式高并发 RPC 服务',con:'通过「造轮子」自建 Python RPC 服务，深入理解分布式高并发原理与实践'},
        ]
        dispatch(showlist(result))

    }
}
export const showuserlist=(data)=>({
    type:constants.SHOW_USER_LIST,
    data:[
        {id:'1',val:'Javascript',pic:'//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'2',val:'css',pic:'//upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'3',val:'Vue',pic:'//upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'4',val:'Ahgular',pic:'//upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'5',val:'React',pic:'//upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
    ]
})
