import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    list:[],
    city:[],
    clickHeader:'1'
});
export default (state=defaultState,action)=>{
    if(action.type===constants.SHOW_CITY){
        return state.set('city',action.data) 
    }
    if(action.type===constants.SHOW_LIST){
        return state.set('list',action.data)
    }

    if(action.type===constants.CLICK_HEADER_ACTIVE){
        return state.set('clickHeader',action.data)
    }
    return state
}