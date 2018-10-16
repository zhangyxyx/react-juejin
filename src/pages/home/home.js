import React from 'react'
import Topic from './components/Topic.js'
import {
    HomeCon,HomeLeft,HomeConBanner,HotTopic,
    HomeTopicList,HomeTopicListItem,HomeTopicListItemLeft,HomeTopicListItemLeftTitle,HomeTopicListItemLeftCon,
    HomeTopicListItemLeftSort,HomeTopicListItemLeftSortEvery,HomeTopicListItemRight,
    HotTopicList,HomeRight} from './style.js'
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
                                        <HomeTopicListItemRight><img src={item.pic} style={{'float':'right','height':'100%'}}/></HomeTopicListItemRight>
                                    </HomeTopicListItem>
                                )
                            })}
                        </HomeTopicList>
                    </HomeLeft>
                    <HomeRight></HomeRight>
                    
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
        list:state.get('home').get('list')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.showtopiclist())
            dispatch(actionCreators.showlist())
        },
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
