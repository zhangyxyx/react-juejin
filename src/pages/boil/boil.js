import React from 'react'
import Header from '@/common/header/header.js'
import {
    BoilCon,
    BoilLeft,
    BoilText,BoilTextArea,BoilTextBottom,BoilTextBottomItem,BoilTextBottomBtn,
    BoilHeader,BoilHeaderItem,
    BoilList,BoilConItem,BoilConLeft,BoilConRight,BoilConRightEvery,BoilConBottom,BoilConBottomItem,BoilConItemCon,
    BoilRight,BoilRightTop1,BoilRightTop2,BoilRightTop2Every,BoilRightTopic,BoilRightTopicTitle,BoilRightTopicTitleEvery,BoilRightTopicCon,BoilRightTopicConItem,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Boil extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header parentProp={this.props} key="1"/>
            <div style={{"backgroundColor":"#efefef"}}>
                <BoilCon>
                    <BoilLeft>
                        <BoilText>
                            <BoilTextArea></BoilTextArea>
                            <BoilTextBottom>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe633;</i>表情</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe66e;</i>图片</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe600;</i>链接</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe678;</i>话题</BoilTextBottomItem>
                                <BoilTextBottomBtn>发布</BoilTextBottomBtn>
                            </BoilTextBottom>
                            
                        </BoilText>
                        <BoilHeader>
                            <BoilHeaderItem>推荐</BoilHeaderItem>
                            <BoilHeaderItem>动态</BoilHeaderItem>
                        </BoilHeader>
                        
                        <BoilList>
                            {this.props.list.map((item)=>{
                                return (
                                    <BoilConItem key={item.id}>
                                        <BoilConItemCon>
                                            <BoilConLeft><img src={item.node.actors[0].avatarLarge} style={{'height':'100%','width':'100%'}}/></BoilConLeft>
                                            <BoilConRight>
                                                <BoilConRightEvery>{item.node.actors[0].username}</BoilConRightEvery>
                                                <BoilConRightEvery>{item.node.actors[0].company}|{item.node.actors.jobTitle}</BoilConRightEvery>
                                                <BoilConRightEvery>{item.node.targets[0].title}</BoilConRightEvery>
                                            </BoilConRight>
                                        </BoilConItemCon>
                                        <BoilConBottom>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe627;</i>{item.node.targets[0].likeCount}</BoilConBottomItem>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe609;</i>{item.node.targets[0].commentsCount}</BoilConBottomItem>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe645;</i>分享</BoilConBottomItem>
                                        </BoilConBottom>
                                    </BoilConItem>
                                )
                            })}
                        </BoilList>
                    </BoilLeft>
                    <BoilRight>
                        <BoilRightTop1>
                            <img src='https://avatars.githubusercontent.com/u/17818212?v=3' style={{"width":"40px","width":"40px","margin":"20px"}}/>
                            <BoilRightTop2Every>zhangyx</BoilRightTop2Every>
                        </BoilRightTop1>
                        <BoilRightTop2>
                            <BoilRightTop2Every>沸点</BoilRightTop2Every>
                            <BoilRightTop2Every>关注</BoilRightTop2Every>    
                            <BoilRightTop2Every>关注者</BoilRightTop2Every>
                        </BoilRightTop2>
                        <BoilRightTopic>
                            <BoilRightTopicTitle>
                                <BoilRightTopicTitleEvery>关注的话题</BoilRightTopicTitleEvery>
                            </BoilRightTopicTitle>
                            <img style={{"float":"left","width":"40px","margin":"5px 10px 0px 5px"}} src="https://user-gold-cdn.xitu.io/2018/3/28/1626c1bc2798945c?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1"/>
                            <BoilRightTopicConItem>每天一道算法题</BoilRightTopicConItem>
                        </BoilRightTopic>
                        <BoilRightTopic>
                            <BoilRightTopicTitle>
                                <BoilRightTopicTitleEvery>更多话题</BoilRightTopicTitleEvery>
                            </BoilRightTopicTitle>
                            {
                                this.props.topic.map((item)=>{
                                    return (
                                        <BoilRightTopicCon>
                                            <img style={{"float":"left","width":"40px","margin":"5px 10px 0px 5px"}} src={item.icon}/>
                                            <BoilRightTopicConItem>{item.title}</BoilRightTopicConItem>
                                        </BoilRightTopicCon>
                                    )
                                })
                            }
                            
                        </BoilRightTopic>
                    </BoilRight>
                </BoilCon>
                
            </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        this.props.showTopicList();
    }
}
const mapStateToProps=(state)=>{
    console.log(state.get('home').get('list'))
    return{
        homeheader:state.get('home').get('homeheader'),
        sortleft:state.get('home').get('sortleft'),
        sortright:state.get('home').get('sortright'),
        

        list:state.get('home').get('list'),
        user:state.get('home').get('user'),
        topic:state.get('home').get('topic')
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
export default connect(mapStateToProps,mapDispatchToProps)(Boil)
