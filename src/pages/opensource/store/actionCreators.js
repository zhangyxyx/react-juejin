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
        {id:'1',val:'推荐开源库',},
        {id:'2',val:'定制推荐',},

    ]
}) 
 
export const showtopiclist=(data)=>({
    type:constants.SHOW_TOPIC_LIST,
    data:[
        {id:'1',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
        {id:'2',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
        {id:'3',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
        {id:'4',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
        {id:'5',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
        {id:'6',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
    ]
})
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:data
})
export const getshowlist=(id)=>{
    return (dispatch) => {
        var result=[
            {id:'1',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
            {id:'2',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
            {id:'3',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
            {id:'4',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
            {id:'5',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
            {id:'6',val:'skidding',sort:'javascript',like:234,share:20,con:'Searchable library of React testing examples'},
        ]
        dispatch(showlist(result))
        // axios.get('/juejin/question').then((res)=>{
        //     console.log(res)
        //     console.log(res.data)

        //     var str=eval('('+ res.data +')')
        //     const result=str.data;
        //     console.log(result)
        //     var 
            
        // })
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
