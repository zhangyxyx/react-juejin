import React from 'react'
import Topic from './components/Topic.js'
import {
    HomeCon,HomeLeft,HomeConBanner,HotTopic,
    HomeTopicList,HomeTopicListItem,HomeTopicListItemLeft,HomeTopicListItemLeftTitle,HomeTopicListItemLeftCon,
    HomeTopicListItemLeftSort,HomeTopicListItemLeftSortEvery,HomeTopicListItemRight,
    HotTopicList,HomeRight,HomeHot,
    HomeUser,HomeUserList,HomeUserListLeft,HomeUserListCon,HomeUserListConTop,HomeUserListConBottom,HomeUserListRight,
    HomeUserTitle,HomeUserTitleLeft,HomeUserTitleRight,HomeUserAll
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeCon>
                    <HomeLeft>
                        <HomeConBanner><img src='http://upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' style={{'width':'100%','height':"100%"}}/></HomeConBanner>
                        <HotTopic>
                            {this.props.topic.map((item)=>{
                                return <HotTopicList key={item.id}><img src={item.pic} style={{'float':'left','height':'100%'}}/><span style={{'margin':'0px 5px'}}>{item.val}</span></HotTopicList>
                            })}
                        </HotTopic>
                        <HomeTopicList>
                            {this.props.list.map((item)=>{
                                return (
                                    <HomeTopicListItem key={item.id}>
                                        <HomeTopicListItemLeft>
                                            <HomeTopicListItemLeftTitle>{item.title}</HomeTopicListItemLeftTitle>
                                            <HomeTopicListItemLeftCon>{item.con}</HomeTopicListItemLeftCon>
                                            <HomeTopicListItemLeftSort>
                                                <HomeTopicListItemLeftSortEvery>{item.user}</HomeTopicListItemLeftSortEvery>
                                                <HomeTopicListItemLeftSortEvery><i className="iconfont" style={{"width":"10px"}}>&#xe60e;</i>{item.common}</HomeTopicListItemLeftSortEvery>
                                                <HomeTopicListItemLeftSortEvery><i className="iconfont" style={{"width":"10px"}}>&#xe602;</i>{item.like}</HomeTopicListItemLeftSortEvery>
                                            </HomeTopicListItemLeftSort>
                                        </HomeTopicListItemLeft>
                                        <HomeTopicListItemRight><img src={item.pic} style={{'float':'right','height':'100%','width':'100%'}}/></HomeTopicListItemRight>
                                    </HomeTopicListItem>
                                )
                            })}
                        </HomeTopicList>
                    </HomeLeft>
                    <HomeRight>
                        <HomeHot className="seven"></HomeHot>
                        <HomeHot className="thirty"></HomeHot>
                        <HomeHot className="serial"></HomeHot>
                        <HomeHot className="copyright"></HomeHot>
                        <HomeHot className="school"></HomeHot>
                        <HomeUser>
                            <HomeUserTitle>
                                <HomeUserTitleLeft>关注作者</HomeUserTitleLeft>
                                <HomeUserTitleRight><i className="iconfont">&#xe603;</i>换一批</HomeUserTitleRight>
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
                                        <HomeUserListRight><i className="iconfont">&#xe608;</i>关注</HomeUserListRight>
                                        </HomeUserList>
                                    )
                                })
                            }
                            <HomeUserAll>查看全部<i className="iconfont">&#xe65c;</i></HomeUserAll>
                        </HomeUser>
                    </HomeRight>
                    
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
        topic:state.get('home').get('topic'),
        list:state.get('home').get('list'),
        user:state.get('home').get('user')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.showtopiclist())
            dispatch(actionCreators.showlist())
            dispatch(actionCreators.showuserlist())
        },
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
