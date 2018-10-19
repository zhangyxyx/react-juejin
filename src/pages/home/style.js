import styled from 'styled-components'

export const HomeCon=styled.div`
   

` 
//header
export const HomeHeader=styled.div`
    width:100%;
    border-bottom:1px solid #ccc;
    &.homeHeader{
        width:80%;
        margin:0 auto;
        height:45px;
        line-height:45px;
    }
    &.homeCon{
        width:80%;
        margin:0 auto;
        height:100%;
        overflow:auto;
    }
` 
export const HomeHeaderItem=styled.div`
    float:left;
    padding:0px 10px;
    color:#71777c;
    font-size:13px;
    cursor:pointer;
` 
//左边
export const HomeLeftHeader=styled.div`
    width:100%;
    height:50px;
    line-height:50px;
    border:1px solid #efefef;
    color:#007fff;
    margin-bottom:10px;
` 
export const HomeLeftHeaderItem=styled.div`
    float:left;
    padding:0px 10px;
    color:#71777c;
    font-size:13px;
    color:#007fff;
    margin:0px 10px;
`

export const HomeLeft=styled.div`
    margin-top:10px;
    width:70%;
    float:left;
`   
export const HomeLeftSort=styled.div`
    width:100%;
    height:46px;
    line-height:46px;
    border-bottom:1px solid #efefef;

`  
export const HomeLeftSortItem=styled.div`
    float:left;
    padding:0px 10px;
    color:#71777c;
    font-size:13px;
    color:#909090;
    margin:0px 10px;
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
    height:116px;
    padding:10px 0px;
    border-bottom:1px solid #f0f0f0;
    min-height:80px;
`
export const HomeTopicListItemLeft=styled.div`
    width:80%;
    height:100%;
    float:left;
`
export const HomeTopicListItemLeftTitle=styled.div`
    width:100%;
    height:16px;
    margin:0px 0px 5px 0px;
`
export const HomeTopicListItemLeftTitleEvery=styled.div`
    font-size:13px;
    color:#ccc;
    margin:0px 5px;
    float:left;
`
export const HomeTopicListItemLeftCon=styled.h4`
    width:100%;
    height:22px;
    overflow:hidden;
    word-break:break-all; 
`
export const HomeTopicListItemLeftSort=styled.div`
    width:100%;
    height:24px;
    color:#ccc;
    padding:5px 0px;
`
export const HomeTopicListItemLeftSortEvery=styled.div`
    float:left;
    border:1px solid #ccc;
    padding:1px 10px;
    font-size:13px;
`
export const HomeTopicListItemRight=styled.div`
    width:80px;
    height:80px;
    float:right;
`
//====结束
export const HomeRight=styled.div`
    width:28%;
    margin-left:2%;
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
//用户列表
export const HomeUserTitle=styled.div`
    margin-top:20px;
    width:100%;
    height:20px;
    font-size:14px;
    color:#969696;
    border:1px solid #efefef
`
export const HomeUserTitleLeft=styled.div`
    height:20px;
    float:left;
`
export const HomeUserTitleRight=styled.div`
    height:20px;
    float:right
`

export const HomeUser=styled.div`
    width:100%
`
export const HomeUserList=styled.div`
    width:100%;
    height:47px;
    margin-top:15px;
`
export const HomeUserListLeft=styled.div`
    width:47px;
    height:47px;
    border-radius:50%;
    float:left;
    background:url('//upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp')
`
export const HomeUserListCon=styled.div`
    margin-left:10px;
    height:47px;
    float:left;
`
export const HomeUserListConTop=styled.div`
    height:30px;
    font-size:14px;
`
export const HomeUserListConBottom=styled.div`
    width:100%;
    height:25px;
    font-size:13px;
`
export const HomeUserListRight=styled.div`
    height:25px;
    font-size:13px;
    float:right;
    color:#42c02e
`
export const HomeUserAll=styled.div`
    margin-top:20px;
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align:center;
`

//结束
//小册
export const HomeBookletItem=styled.div`
    width:100%;
    height:102px;
    padding:10px;
`
export const HomeBookletItemLeft=styled.div`
    width:52px;
    height:72px;
    float:left;
`
export const HomeBookletItemRight=styled.div`
    width:148px;
    height:72px;
    float:left;
`





export const TopicStyle=styled.div`
    width:20px;
    height:40px;
    background:green
`