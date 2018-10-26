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
            <div style={{"backgroundColor":"#efefef"}}>
                <HomeCon>
                    <HomeHeader>
                        <HomeHeader className="homeHeader">
                        {
                            this.props.homeheader.map((item)=>{
                                var id=item.id;
                                return <HomeHeaderItem className={this.props.clickHeader===item.id?'headerActive':''} 
                                    onClick={()=>this.props.clickChangeList(id)} key={item.id}>
                                <Link to={{pathname:'/juejin/home/'+id}}>{item.val}</Link>
                                </HomeHeaderItem>
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
                            <HomeHeaderItem style={{"float":"right"}}>草稿</HomeHeaderItem>
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
                                    <Link to="/juejin/detail">
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
                                    </Link>
                                )
                            })}
                        </HomeTopicList>
                    </HomeLeft>
                    <HomeRight>
                        <HomeHot style={{"height":"200px"}}><img style={{"width":"100%"}} src='https://user-gold-cdn.xitu.io/154046766020771b068f26a5ef57e82103b769ad96998.jpg?imageView2/1/q/85/format/webp/interlace/1'/></HomeHot>
                        <HomeHot style={{"height":"200px"}}><img style={{"width":"100%"}} src='https://user-gold-cdn.xitu.io/15404521482021190ffa3c696d33bdecd7da2437d5c13.jpg?imageView2/1/q/85/format/webp/interlace/1'/></HomeHot>

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
        user:state.get('home').get('user'),
        clickHeader:state.get('home').get('clickHeader'),
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
            console.log(id)
            dispatch(actionCreators.headerActive(id))
            //dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
