import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    topic:[],
    list:[]
});
export default (state=defaultState,action)=>{
    if(action.type===constants.SHOW_TOPIC_LIST){
        return state.set('topic',action.data)
    }
    if(action.type===constants.SHOW_LIST){
        return state.set('list',action.data)
    }
    return state
}