import * as constants from './constants'
import axios from 'axios'
export const homeheader=(data)=>({
    type:constants.HOME_HEADER,
    data:[
        {id:'1',val:'我的关注',},
        {id:'2',val:'Android',},
        {id:'3',val:'前端',},
        {id:'4',val:'iOS',},
        {id:'5',val:'后端',},
        {id:'6',val:'设计',},
        {id:'7',val:'产品',},
        {id:'8',val:'工具资源',},
        {id:'9',val:'阅读',},
        {id:'10',val:'人工智能',},
        {id:'11',val:'运维',},
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
        axios.get('/juejin/question').then((res)=>{
            console.log(res)
            console.log(res.data)

            var str=eval('('+ res.data +')')
            const result=str.data;
            console.log(result)
            dispatch(showlist(result))
        })
    }
}
export const showuserlist=(data)=>({
    type:constants.SHOW_USER_LIST,
    data:[
        {id:'1',val:'胡七筒',pic:'//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'2',val:'冰千里',pic:'//upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'3',val:'简书版权',pic:'//upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'4',val:'只有一半影子的人',pic:'//upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'5',val:'吴晓布',pic:'//upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
    ]
})
export const headerActive=(data)=>({
    type:constants.CLICK_HEADER_ACTIVE,
    data:data
})

