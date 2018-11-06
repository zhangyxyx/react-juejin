import styled from 'styled-components'

export const HomeCon=styled.div`
   
` 
//header
export const HomeHeader=styled.div`
    width:100%;
    
    border-bottom:1px solid #efefef;
    background-color:#fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    &.homeHeader{
        max-width:960px;
        min-width:870px;
        width:80%;
        margin:0 auto;
        height:45px;
        line-height:45px;
        border-bottom:none;
        
    }
    &.homeCon{
        width:80%;
        margin:0 auto;
        max-width:960px;
        min-width:870px;
        height:100%;
        overflow:hidden;
        border-bottom:none;
        background-color:#efefef;
    }
` 
export const HomeHeaderItem=styled.div`
    float:left;
    padding:0px 10px;
    color:#71777c;
    font-size:13px;
    cursor:pointer;
    &.headerActive{
        a{
            color:#007fff
        }

    }
` 
//activity
export const ActivityCon=styled.div`
    width:100%;
    max-width:960px;
    margin:10px auto;
    overflow:hidden;
    background:#fff;
` 
export const ActivityConTitle=styled.div`
    width:100%;
    float:left;
    height:280px;
` 
export const ActivityConTitleLeft=styled.div`
    width:50%;
    float:left;
` 
export const ActivityConTitleRight=styled.div`
    width:50%;
    float:left;
` 
export const ActivityConList=styled.div`
    width:100%;
    float:left;
    margin:10px 0px 0px 0px;

` 
export const ActivityConListItem=styled.div`
    width:20%;
    float:left;
    height:265px;
    padding:0px 10px;
    box-sizing:border-box
` 

export const ActivityConListItemTitle=styled.div`
    width:100%;
    height:30px;
    line-height:30px;
` 
export const ActivityConListItemP=styled.div`
    height:30px;
    line-height:30px;
` 

