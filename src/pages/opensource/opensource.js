import React from 'react'
import Topic from './components/Topic.js'
import {Link} from 'react-router-dom'
import {
    HomeCon,HomeLeft,
    HomeTopicList,HomeTopicListItem,HomeTopicListItemLeft,HomeTopicListItemLeftTitle,HomeTopicListItemLeftCon,
    HomeTopicListItemLeftSort,HomeTopicListItemLeftSortEvery,HomeTopicListItemRight,
    HomeRight,HomeHot,
    HomeUser,HomeUserList,HomeUserListLeft,HomeUserListCon,HomeUserListConTop,HomeUserListConBottom,HomeUserListRight,
    HomeUserTitle,
    HomeHeader,HomeHeaderItem,HomeLeftHeader,HomeLeftHeaderItem,HomeLeftSort,HomeLeftSortItem,HomeTopicListItemLeftTitleEvery,
    OpenSourceList,OpenSourceListItem,OpenSourceListItemLeft,OpenSourceListItemRight,OpenSourceListItemRightP,OpenSourceListItemRightPSpan,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends React.Component{
    render(){
        return(
            <div style={{"backgroundColor":"#efefef"}}>
                <HomeCon>
                    <HomeHeader>
                        
                    </HomeHeader>
                    <HomeHeader className='homeCon'>
                    <HomeLeft>
                        <HomeLeftHeader>
                           
                        </HomeLeftHeader>
                        <HomeLeftSort>
                            {
                                this.props.sortleft.map((item,index)=>{
                                    if(index<=2){
                                        return <HomeLeftSortItem key={item.id}>{item.val}</HomeLeftSortItem>
                                    }else {
                                        return <HomeLeftSortItem key={item.id} style={{"float":"right"}}>{item.val}</HomeLeftSortItem>
                                    }
                                    
                                })
                            }
                        </HomeLeftSort>
                        <OpenSourceList>
                            {this.props.list.map((item)=>{
                                return (
                                   <OpenSourceListItem key={item.id}>
                                       <OpenSourceListItemLeft><img src="./././static/image/opensource/1.png"/></OpenSourceListItemLeft>
                                       <OpenSourceListItemRight>
                                            <OpenSourceListItemRightP>{item.val}</OpenSourceListItemRightP>
                                            <OpenSourceListItemRightP>{item.con}</OpenSourceListItemRightP>
                                           <OpenSourceListItemRightP>
                                               <OpenSourceListItemRightPSpan>{item.sort}</OpenSourceListItemRightPSpan>
                                               <OpenSourceListItemRightPSpan><i className="iconfont" style={{"width":"10px"}}>&#xe66a;</i>{item.like}</OpenSourceListItemRightPSpan>
                                               <OpenSourceListItemRightPSpan><i className="iconfont" style={{"width":"10px"}}>&#xe67f;</i>{item.share}</OpenSourceListItemRightPSpan>
                                           </OpenSourceListItemRightP>
                                       </OpenSourceListItemRight>
                                   </OpenSourceListItem>
                                )
                            })}
                        </OpenSourceList>
                    </HomeLeft>
                    <HomeRight>
                        <HomeHot></HomeHot>
                        <HomeHot></HomeHot>
                        <HomeUser>
                            <HomeUserTitle>
                                你可能感兴趣的人
                            </HomeUserTitle>
                            {
                                this.props.user.map((item)=>{
                                    return (
                                        <HomeUserList key={item.id}>
                                        <HomeUserListLeft><img src={item.ipc}/></HomeUserListLeft>
                                        <HomeUserListCon>
                                            <HomeUserListConTop>{item.val}</HomeUserListConTop>
                                            <HomeUserListConBottom>写了{}字 · 8.7k喜欢</HomeUserListConBottom>
                                        </HomeUserListCon>
                                        </HomeUserList>
                                    )
                                })
                            }
                        </HomeUser>
                    </HomeRight>
                    </HomeHeader>
                </HomeCon>
                
            </div>
        )
    }
    componentDidMount(){
        this.props.showTopicList();
    }
}
const mapStateToProps=(state)=>{
    return{
        homeheader:state.get('home').get('homeheader'),
        sortleft:state.get('home').get('sortleft'),
        sortright:state.get('home').get('sortright'),
        
        topic:state.get('home').get('topic'),
        list:state.get('home').get('list'),
        user:state.get('home').get('user')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.homeheader())
            dispatch(actionCreators.sortleft())
            
            dispatch(actionCreators.showtopiclist())
            //dispatch(actionCreators.showlist())
            dispatch(actionCreators.getshowlist('1'))
            dispatch(actionCreators.showuserlist())
        },
        clickChangeList(id){
            console.log(1)
            dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
