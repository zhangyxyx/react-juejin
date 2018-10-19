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
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeCon>
                    <HomeHeader>
                        <HomeHeader className="homeHeader">
                        {
                            this.props.homeheader.map((item)=>{
                                var id=item.id;
                                return <HomeHeaderItem onClick={()=>this.props.clickChangeList(id)} key={item.id}><Link to={{pathname:'/home/'+id}}>{item.val}</Link></HomeHeaderItem>
                            })
                        }
                        <HomeHeaderItem>标签管理</HomeHeaderItem>
                        </HomeHeader>
                    </HomeHeader>
                    <HomeHeader className='homeCon'>
                    <HomeLeft>
                        <HomeLeftHeader>
                            <img src="https://avatars.githubusercontent.com/u/17818212?v=3" style={{'height':"100%","float":"left"}}/>
                            <HomeLeftHeaderItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe605;</i>发沸点</HomeLeftHeaderItem>
                            <HomeLeftHeaderItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe697;</i>写文章</HomeLeftHeaderItem>
                            <HomeLeftHeaderItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe60b;</i>分享链接</HomeLeftHeaderItem>
                            <HomeHeaderItem>草稿</HomeHeaderItem>
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
                        <HomeTopicList>
                            {this.props.list.map((item)=>{
                                return (
                                    <HomeTopicListItem key={item.id}>
                                        <HomeTopicListItemLeft>
                                            <HomeTopicListItemLeftTitle>
                                                <HomeTopicListItemLeftTitleEvery>专栏</HomeTopicListItemLeftTitleEvery>
                                                <HomeTopicListItemLeftTitleEvery>{item.user}</HomeTopicListItemLeftTitleEvery>
                                                <HomeTopicListItemLeftTitleEvery>4分钟前</HomeTopicListItemLeftTitleEvery>
                                                <HomeTopicListItemLeftTitleEvery>html/前端</HomeTopicListItemLeftTitleEvery>
                                            </HomeTopicListItemLeftTitle>
                                            <HomeTopicListItemLeftCon>{item.title}</HomeTopicListItemLeftCon>
                                            <HomeTopicListItemLeftSort>
                                                <HomeTopicListItemLeftSortEvery><i className="iconfont" style={{"width":"10px"}}>&#xe601;</i>{item.common}</HomeTopicListItemLeftSortEvery>
                                                <HomeTopicListItemLeftSortEvery><i className="iconfont" style={{"width":"10px"}}>&#xe623;</i>{item.like}</HomeTopicListItemLeftSortEvery>
                                            </HomeTopicListItemLeftSort>
                                        </HomeTopicListItemLeft>
                                        <HomeTopicListItemRight><img src={item.pic} style={{'float':'right','height':'100%','width':'100%'}}/></HomeTopicListItemRight>
                                    </HomeTopicListItem>
                                )
                            })}
                        </HomeTopicList>
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
