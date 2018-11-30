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
export const getshowlist=()=>{
    return (dispatch) => {
        //
        //url+'/api/home/home_list.json'
        axios.get('http://192.168.6.128:8080/report-service/service.jsp?pageModule=Topo_CN2').then(function(response){
            var data=response.data.result.nodeindex.default
            //var data=eval('(' + response.data + ')').entrylist;
            dispatch(showlist(data))
        })   
    }
}
export const showuser=(data)=>({
    type:constants.SHOW_USER_LIST,
    data:data
})
export const showuserlist=()=>{
    return (dispatch) => {

        axios.get(url+'/api/home/home_person.json').then((response)=>{
            var data=eval('(' + response.data + ')').d[0].users
            dispatch(showuser(data))
        })
    }
}
export const showbook=(data)=>({
    type:constants.SHOW_BOOK,
    data:data
})
export const showbooklist=()=>{
    return (dispatch)=>{
        //'http://192.168.6.128:8080/report-service/service.jsp?pageModule=Topo_CN2'
        //url+'/api/home/home_xiaoce.json'
        axios.get('http://192.168.6.128:8080/report-service/service.jsp?pageModule=Topo_CN2').then((response)=>{
            //var data=eval('(' + response.data + ')').d.data
            var data=response.data.result.nodeindex.default
            dispatch(showbook(data))
        })
    }
}



export const headerActive=(data)=>({
    type:constants.CLICK_HEADER_ACTIVE,
    data:data
})

