import styled from 'styled-components'

export const HomeCon=styled.div`
   
`
export const User=styled.div`
    width:980px;
    margin:0px auto;
    overflow:hidden;
    padding-top:20px;
`
//left
export const UserLeft=styled.div`
    width:80%
    float:left;
` 
export const UserLeftHeader=styled.div`
    width:100%;
    height:152px;
    border:1px solid #ccc;
    margin-bottom:20px;
    background:#fff;
    img{
        margin:20px;
        float:left;
    }
`
export const UserLeftHeaderTitle=styled.h3`
    float:left;
    height:20px;
    
`
export const UserLeftContent=styled.div`
    width:100%;
    border:1px solid #ccc;
    background:#fff;
`
export const UserLeftContentTab=styled.div`
    width:100%;
    height:50px;
    line-height:50px;
    border-bottom:1px solid #efefef
`
export const UserLeftContentTabItem=styled.div`
    width:90px;
    text-align:center;
    float:left;
    cursor:pointer;
    &:hover{
        color:#007fff
    }
`
export const UserLeftContentCon=styled.div`
    width:100%;
    height:200px;
`
//right
export const UserRight=styled.div`
    width:15%;
    margin-left:5%;
    float:left;
` 
export const UserRightHeader=styled.div`
    width:100%;
    height:75px;
    line-height:75px;
    background:#fff;
    
    margin-bottom:10px;
    &.right{
        padding:0px 0px 0px 10px
    }
`
export const UserRightHeaderItem=styled.div`
    width:50%;
    float:left
    text-align:center;
`
