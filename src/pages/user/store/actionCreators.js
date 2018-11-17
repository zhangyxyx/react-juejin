import * as constants from './constants'
import axios from 'axios'
//城市
export const showcity=(data)=>({
    type:constants.SHOW_CITY,
    data:data
}) 
export const getshowcity=()=>{
    return (dispatch) => { 
        axios.get('http://localhost:3000/api/activity/activity_city.json').then(function(response){
            var data=eval('(' + response.data + ')').d;
            console.log(data)
            dispatch(showcity(data))
        })   
    }
}
//列表
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:data
})
export const getshowlist=(id)=>{
    return (dispatch) => { //activity_list
        axios.get('http://localhost:3000/api/activity/activity_list.json').then(function(response){
            var data=eval('(' + response.data + ')').d;
            dispatch(showlist(data))
        })   
    }
}

export const headerActive=(data)=>({
    type:constants.CLICK_HEADER_ACTIVE,
    data:data
})

