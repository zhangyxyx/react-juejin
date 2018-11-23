import * as constants from './constants'
import axios from 'axios'
var url=window.sessionStorage.getItem('key');
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
//banner
export const showtopic=(data)=>({
    type:constants.SHOW_TOPIC_LIST,
    data:data
})
export const getshowtopic=()=>{
    return (dispatch) => {
        axios.get(url+'/api/opensource/opensource_banner.json').then(function(response){

            var data=eval('(' + response.data + ')').d.entrylist;
            dispatch(showtopic(data))
        }) 
    }
}
//列表数据
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:data
})
export const getshowlist=(id)=>{
    return (dispatch) => {
        axios.get(url+'/api/opensource/opensource_list.json').then(function(response){
            var data=eval('(' + response.data + ')').d.repoList;
            dispatch(showlist(data))
        }) 
    }
}
export const showuserlist=(data)=>({
    type:constants.SHOW_USER_LIST,
    data:[
        {id:'1',val:'前端',
            sort:[
                {id:'1_1',con:'Javascript'},
                {id:'1_2',con:'Css'},
                {id:'1_3',con:'Vue'},
                {id:'1_4',con:'React'},
                {id:'1_5',con:'Angular'}]},
        {id:'2',val:'Android',
            sort:[
                {id:'2_1',con:'菜单'},
                {id:'2_2',con:'ListView'},
                {id:'2_3',con:'手势交互'},
                {id:'2_4',con:'导航'},
                {id:'2_5',con:'Ar&Vr'}]},
        {id:'3',val:'iOS',
            sort:[
                {id:'3_1',con:'菜单'},
                {id:'3_2',con:'ListView'},
                {id:'3_3',con:'手势交互'},
                {id:'3_4',con:'导航'},
                {id:'3_5',con:'Ar&Vr'}]},
        {id:'4',val:'Python',
            sort:[
                {id:'4_1',con:'菜单'},
                {id:'4_2',con:'ListView'},
                {id:'4_3',con:'手势交互'},
                {id:'4_4',con:'导航'},
                {id:'4_5',con:'Ar&Vr'}]},

    ]
})
