import styled from 'styled-components'

export const HomeCon=styled.div`
    width:80%;
    margin:20px auto;
    border:1px solid #ccc;
`   
export const HomeLeft=styled.div`
    width:60%;
    float:left;

`   
export const HomeConBanner=styled.div`
    width:100%;
    height:270px;
`
export const HotTopic=styled.div`
    width:100%;
    height:104;
`   
export const HotTopicList=styled.div`
    height:34px;
    line-height:34px;
    float:left;
    text-align:center;
    font-size:15px;
    border:1px solid #dcdcdc;
    background:#ffff;
    margin:5px 10px 5px 0px
` 
//列表
export const HomeTopicList=styled.div`
    width:100%;
`
export const HomeTopicListItem=styled.div`
    width:100%;
    padding:10px 0px;
    border-bottom:1px solid #f0f0f0;
    overflow:auto;
    min-height:80px;
`
export const HomeTopicListItemLeft=styled.div`
    width:80%;
    height:100%;
    float:left;
`
export const HomeTopicListItemLeftTitle=styled.h3`
    width:100%;
    margin:0px 0px 5px 0px;
`
export const HomeTopicListItemLeftCon=styled.div`
    width:100%;
    color:#ccc;
    line-height:20px;
    word-break:break-all; 
`
export const HomeTopicListItemLeftSort=styled.div`
    width:100%;
    height:20px;
    color:#ccc;
    padding:5px 0px;
`
export const HomeTopicListItemLeftSortEvery=styled.div`
    margin:0px 10px;
    float:left;
`
export const HomeTopicListItemRight=styled.div`
    width:20%;
    height:100%;
    float:left;
`
//====结束
export const HomeRight=styled.div`
    width:35%;
    margin-left:5%;
    float:left;

`  
export const HomeHot=styled.div`
    width:100%;
    height:40px;
    &.seven{
        background:url('//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png');
        background-size:100% 100%;
    }
    &.thirty{
        background:url('//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png');
        background-size:100% 100%;
    }
    &.serial{
        background:url('//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png');
        background-size:100% 100%;
    }
    &.copyright{
        background:url('//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png');
        background-size:100% 100%;
    }
    &.school{
        background:url('//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png');
        background-size:100% 100%;
    }
`  
export const TopicStyle=styled.div`
    width:20px;
    height:40px;
    background:green
`