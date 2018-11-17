import * as constants from './constants'

export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
})

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})

export const messageShow=()=>({
    type:constants.SHOW_MESSAGE,
})
export const messageHide=()=>({
    type:constants.HIDE_MESSAGE,
})
export const showmessagelist=(data)=>({
    type:constants.SHOW_MESSAGE_LIST,
    data:data
})
export const getmessagelist=()=>{   
    return (dispatch) => {
        var list=[
            {id:'1',val:'评论',imgsrc:'\ue60e'},
            {id:'2',val:'简信',imgsrc:'\ue630'},
            {id:'3',val:'投稿请求',imgsrc:'\ue60d'},
            {id:'4',val:'喜欢和赞',imgsrc:'\ue602'},
            {id:'5',val:'关注',imgsrc:'\ue638'},
            {id:'6',val:'赞赏和付费',imgsrc:'\ue7eb'},
            {id:'7',val:'其他消息',imgsrc:'\ue605'},
        ]
        dispatch(showmessagelist(list))
    }
}
export const headerActive=(data)=>({
    type:constants.CLICK_HEADER_ACTIVE,
    data:data
})
export const UserMark=(data)=>({
    type:constants.CLICK_USER_MARK,
    data:data
})
export const clickUserMark=(mark)=>{
    return (dispatch)=>{
        console.log(mark)
        if(mark===1){
            dispatch(UserMark(0))
        }else{
            dispatch(UserMark(1))
        }
    }   
}
