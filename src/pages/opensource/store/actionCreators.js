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
        {id:'1',val:'前端',sort:[{id:'1',con:'Javascript'},{id:'2',con:'Css'},{id:'3',con:'Vue'},{id:'4',con:'React'},{id:'5',con:'Angular'}]},
        {id:'2',val:'Android',sort:[{id:'1',con:'菜单'},{id:'1',con:'ListView'},{id:'1',con:'手势交互'},{id:'1',con:'导航'},{id:'1',con:'Ar&Vr'}]},
        {id:'3',val:'iOS',sort:[{id:'1',con:'菜单'},{id:'1',con:'ListView'},{id:'1',con:'手势交互'},{id:'1',con:'导航'},{id:'1',con:'Ar&Vr'}]},
        {id:'4',val:'Python',sort:[{id:'1',con:'菜单'},{id:'1',con:'ListView'},{id:'1',con:'手势交互'},{id:'1',con:'导航'},{id:'1',con:'Ar&Vr'}]},

    ]
})
