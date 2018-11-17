import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    homeheader:[],
    sortleft:[],
    topic:[],
    boli_list:[],
    user:[]
});
export default (state=defaultState,action)=>{
    if(action.type===constants.HOME_HEADER){
        return state.set('homeheader',action.data) 
    }
    if(action.type===constants.SHOW_TOPIC_LIST){
        return state.set('topic',action.data)
    }
    if(action.type===constants.SHOW_LIST){
        // return state.merge({
        //     boli_list:action.data
        // })
        return state.set('boli_list',action.data.slice())
    }
    if(action.type===constants.SHOW_USER_LIST){
        return state.set('user',action.data)
    }
    return state
}