import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    focused:false,
    message:false,
    messagetwolist:[],
    clickHeader:'1',
    userShow:1,
});
export default (state=defaultState,action)=>{
    if(action.type===constants.SEARCH_FOCUS){
        return state.set('focused',true)
    }
    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false)
    }
    if(action.type===constants.SHOW_MESSAGE){
        return state.set('message',true)
    }
    if(action.type===constants.HIDE_MESSAGE){
        return state.set('message',false)
    }
    if(action.type===constants.SHOW_MESSAGE_LIST){
        return state.set('messagetwolist',action.data)
    }
    if(action.type===constants.CLICK_HEADER_ACTIVE){
        return state.set('clickHeader',action.data)
    }
    if(action.type===constants.CLICK_USER_MARK){
        console.log(action.data)
        return state.set('userShow',action.data)
    }
    return state
}