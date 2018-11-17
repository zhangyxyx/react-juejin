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
//更多话题
export const showtopic=(data)=>({
    type:constants.SHOW_TOPIC_LIST,
    data:data
})
export const showtopiclist=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3000/api/boil/boil_topic.json').then((response)=>{
            var data=eval('(' + response.data + ')').d.list
            dispatch(showtopic(data))
        })
    }
}
//显示列表
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:data
})
export const getshowlist=()=>{
    return (dispatch) => {
        axios.get('http://localhost:3000/api/boil/boil_list.json').then((response)=>{
           
            var data=eval('(' + response.data + ')').data.followingActivityFeed.items.edges
            dispatch(showlist(data))
        })
    }
}
//更多感兴趣的人
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
