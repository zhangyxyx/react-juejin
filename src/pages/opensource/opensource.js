import React from 'react'
import Header from '@/common/header/header.js'
import {
    HomeCon,HomeLeft,
    HomeRight,
    HomeUserList,HomeUserListCon,HomeUserListConTop,
    HomeHeader,HomeLeftSortItem,
    OpenSourceBanner,
    OpenSourceTitle,OpenSourceList,OpenSourceListItem,OpenSourceListItemLeft,OpenSourceListItemRight,OpenSourceListItemRightP,OpenSourceListItemRightPSpan,
    HomeUserListConTopSpan,OpenSourceBannerItem,OpenSourceBannerItemTitle
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Header parentProp={this.props} key="1"/>
            <div style={{"backgroundColor":"#efefef"}}>
                <HomeCon>
                    <HomeHeader className='homeCon'>
                    <HomeLeft>
                        <OpenSourceBanner>
                            {
                                this.props.topic.map((item,index)=>{
                                    if(index!=0){
                                        return;
                                    }
                                    return(
                                        <OpenSourceBannerItem key={item.objectId}>
                                            <OpenSourceBannerItemTitle>
                                                {item.title}
                                            </OpenSourceBannerItemTitle>
                                        </OpenSourceBannerItem>
                                    ) 
                                    
                                })
                            }
                        </OpenSourceBanner>
                        <OpenSourceTitle>
                            {
                                this.props.sortleft.map((item,index)=>{
                                    if(index<=2){
                                        return <HomeLeftSortItem key={item.id}>{item.val}</HomeLeftSortItem>
                                    }else {
                                        return <HomeLeftSortItem key={item.id} style={{"float":"right"}}>{item.val}</HomeLeftSortItem>
                                    }
                                    
                                })
                            }
                        </OpenSourceTitle>
                        <OpenSourceList>
                            {this.props.list.map((item)=>{
                                return (
                                   <OpenSourceListItem key={item.id}>
                                       <OpenSourceListItemLeft><img src={item.userAvatarUrl} style={{"width":"100%"}}/></OpenSourceListItemLeft>
                                       <OpenSourceListItemRight>
                                            <OpenSourceListItemRightP style={{"height":"35px","fontSize":"20px","fontWeight":"500","color":"#007fff"}}>{item.repoName}</OpenSourceListItemRightP>
                                            <OpenSourceListItemRightP style={{"margin":"10px 0px"}}>{item.description}</OpenSourceListItemRightP>
                                           <OpenSourceListItemRightP>
                                               <OpenSourceListItemRightPSpan>{item.language}</OpenSourceListItemRightPSpan>
                                               <OpenSourceListItemRightPSpan><i className="iconfont" style={{"width":"10px","color":"#b3b0b0"}}>&#xe66a;</i>{item.stars}</OpenSourceListItemRightPSpan>
                                               <OpenSourceListItemRightPSpan><i className="iconfont" style={{"width":"10px","color":"#b3b0b0"}}>&#xe67f;</i>{item.fork}</OpenSourceListItemRightPSpan>
                                           </OpenSourceListItemRightP>
                                       </OpenSourceListItemRight>
                                   </OpenSourceListItem>
                                )
                            })}
                        </OpenSourceList>
                    </HomeLeft>
                    <HomeRight>
                        {      
                            this.props.user.map((item,index)=>{
                                return (
                                    <HomeUserList key={item.id}>
                                    <HomeUserListCon>
                                        <HomeUserListConTop>{item.val}</HomeUserListConTop>
                                        {
                                            this.props.user[index].sort.map((sortItem)=>{
                                                return <HomeUserListConTopSpan key={sortItem.id}>{sortItem.con}</HomeUserListConTopSpan>
                                            })
                                        }
                                        
                                    </HomeUserListCon>
                                    </HomeUserList>
                                )
                            })
                        }
                    </HomeRight>
                    </HomeHeader>
                </HomeCon>
                
            </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        this.props.showTopicList();
    }
}
const mapStateToProps=(state)=>{
    return{
        homeheader:state.get('opensource').get('homeheader'),
        sortleft:state.get('opensource').get('sortleft'),
        sortright:state.get('opensource').get('sortright'),
        
        topic:state.get('opensource').get('topic'),
        list:state.get('opensource').get('list'),
        user:state.get('opensource').get('user'),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.showuserlist())
            dispatch(actionCreators.homeheader())
            dispatch(actionCreators.sortleft())
            
            dispatch(actionCreators.getshowtopic())//banner
            dispatch(actionCreators.getshowlist('1'))//列表
            dispatch(actionCreators.showuserlist())//右边分类
            
        },
        clickChangeList(id){
            console.log(1)
            dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
