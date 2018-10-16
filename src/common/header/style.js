import styled from 'styled-components'
export const HeaderWrapper=styled.div`
    width:100%;
    height:56px;
    border-bottom:1px solid #efefef
`
export const HeaderLeft=styled.div`
    width:10%;
    height:56px;
    line-height:30px;
    float:left;

`
export const HeaderCon=styled.div`
    width:80%;
    height:56px;
    line-height:30px;
    float:left;

`
export const HeaderMsg=styled.div`
    width:100px;
    height:210px;
    border:1px solid #ccc;
    background:#fff;
    position:absolute;
    top:50px;
    left:180px;
`
export const HeaderMsgList=styled.div`
    width:100px;
    height:30px;
    line-height:30px;
    font-size:14px;
    position:relative;
    
`

export const HeaderConLeft=styled.div`
    width:10%;
    height:56px;
    cursor:pointer;
    line-height:56px;
    float:left;
    text-align:center;

`
export const HeaderRight=styled.div`
    width:80px;
    height:40px;
    text-align:center;
    line-height:40px;
    float:right;
    background:#ea6f5a;
    color:#fff;
    font-size:15px;
    margin-top:10px;
    border-radius:20px;
`
export const HeaderRightUser=styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    float:right;
    margin:10px 10px;
    border:1px solid #333;
`

export const HeaderInput=styled.input.attrs({"placeholder":"搜索"})`
    width:100px;
    height:30px;
    margin-top:15px;
    border:1px solid #efefef;
    background:#efefef;
    float:left;
    border-radius:10px;
    padding:0px 10px;
`
export const HeaderSearch=styled.div`
    width:20px;
    height:25px;
    margin-top:15px;
    background:red;
    float:left;
    &.focused{
        width:20px;
        background:green;
    }
`